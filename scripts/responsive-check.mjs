#!/usr/bin/env node
/**
 * Automated responsive regression check.
 *
 * Loads each route at desktop/tablet/mobile viewports, screenshots it, and
 * fails when:
 *   - document.documentElement.scrollWidth exceeds the viewport width
 *     (horizontal overflow), or
 *   - any element renders wider than the viewport (off-screen content).
 *
 * Usage:
 *   node scripts/responsive-check.mjs              # against http://localhost:8080
 *   BASE_URL=https://my-site.lovable.app node scripts/responsive-check.mjs
 *   node scripts/responsive-check.mjs --update     # refresh baseline screenshots
 *
 * Screenshots are written to .responsive-snapshots/<device>/<route>.png.
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE_URL = process.env.BASE_URL || "http://localhost:8080";
const OUT_DIR = ".responsive-snapshots";
const OVERFLOW_TOLERANCE = 1; // px — rounding slack

/** Routes to check. Add new pages here as the app grows. */
const ROUTES = ["/"];

/** Viewports. Heights are generous so lazy content has room to render. */
const DEVICES = [
  { name: "mobile", width: 375, height: 1400 },
  { name: "tablet", width: 820, height: 1400 },
  { name: "desktop", width: 1440, height: 1400 },
];

const failures = [];

async function checkPage(browser, device, route) {
  const ctx = await browser.newContext({
    viewport: { width: device.width, height: device.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  const url = new URL(route, BASE_URL).toString();

  const consoleErrors = [];
  page.on("pageerror", (err) => consoleErrors.push(String(err)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  // Let animations / fonts settle.
  await page.waitForTimeout(600);

  const result = await page.evaluate((tolerance) => {
    const docW = document.documentElement.clientWidth;
    const scrollW = document.documentElement.scrollWidth;
    const offenders = [];
    if (scrollW > docW + tolerance) {
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        // skip elements inside an ancestor that clips overflow
        let p = el.parentElement,
          clipped = false;
        while (p) {
          const cs = getComputedStyle(p);
          if (cs.overflowX === "hidden" || cs.overflowX === "clip") {
            clipped = true;
            break;
          }
          p = p.parentElement;
        }
        if (clipped) return;
        if (r.right > docW + tolerance || r.width > docW + tolerance) {
          offenders.push({
            tag: el.tagName,
            cls: (el.getAttribute("class") || "").slice(0, 120),
            w: Math.round(r.width),
            right: Math.round(r.right),
          });
        }
      });
    }
    return { docW, scrollW, offenders: offenders.slice(0, 8) };
  }, OVERFLOW_TOLERANCE);

  const safeRoute = route === "/" ? "home" : route.replace(/[\/]/g, "_").replace(/^_/, "");
  const dir = path.join(OUT_DIR, device.name);
  await mkdir(dir, { recursive: true });
  const shotPath = path.join(dir, `${safeRoute}.png`);
  await page.screenshot({ path: shotPath, fullPage: false });

  const label = `[${device.name} ${device.width}px] ${route}`;
  const overflowed = result.scrollW > result.docW + OVERFLOW_TOLERANCE;
  if (overflowed || result.offenders.length > 0) {
    failures.push({ label, result, shotPath });
    console.log(
      `✗ ${label}  scrollWidth=${result.scrollW} > clientWidth=${result.docW}  (${result.offenders.length} offending nodes)`,
    );
    for (const o of result.offenders) {
      console.log(`    <${o.tag} class="${o.cls}"> w=${o.w} right=${o.right}`);
    }
  } else {
    console.log(`✓ ${label}  (scrollWidth=${result.scrollW})`);
  }

  if (consoleErrors.length) {
    console.log(`    console errors: ${consoleErrors.slice(0, 3).join(" | ")}`);
  }

  await ctx.close();
}

async function main() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  console.log(`Responsive check against ${BASE_URL}`);
  const browser = await chromium.launch({ headless: true });
  try {
    for (const device of DEVICES) {
      for (const route of ROUTES) {
        await checkPage(browser, device, route);
      }
    }
  } finally {
    await browser.close();
  }

  await writeFile(
    path.join(OUT_DIR, "report.json"),
    JSON.stringify({ baseUrl: BASE_URL, failures }, null, 2),
  );

  if (failures.length) {
    console.error(`\n${failures.length} responsive failure(s). See ${OUT_DIR}/`);
    process.exit(1);
  }
  console.log(`\nAll responsive checks passed. Screenshots in ${OUT_DIR}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});