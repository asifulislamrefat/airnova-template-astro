# Scripts

## `responsive-check.mjs`

Automated responsive regression check. Launches headless Chromium via
Playwright, loads every listed route at mobile / tablet / desktop viewports,
and fails if:

- the page produces horizontal scroll
  (`documentElement.scrollWidth > clientWidth`), or
- any visible element renders wider than the viewport and is not inside an
  `overflow-x: hidden | clip` ancestor.

Screenshots are saved to `.responsive-snapshots/<device>/<route>.png` and a
JSON report to `.responsive-snapshots/report.json`.

### Run

```bash
# 1. Make sure the dev server is up
bun run dev

# 2. In another shell, run the checks
bun run responsive-check
# or against the published site
BASE_URL=https://your-site.lovable.app bun run responsive-check
```

First-time setup needs a Chromium binary. Either:

- `bunx playwright install chromium` (downloads Playwright's bundled build), or
- point at an existing one: `CHROMIUM_PATH=/usr/bin/chromium bun run responsive-check`.

### Add a route

Edit the `ROUTES` array at the top of `responsive-check.mjs`. The viewports
(`mobile` 375px, `tablet` 820px, `desktop` 1440px) live in `DEVICES` next to
it — extend them if you support additional breakpoints.

### CI

Exit code is non-zero on any failure, so the script drops straight into a CI
step (GitHub Actions, etc.) after `bun install && bunx playwright install
chromium && bun run build && bun run preview &`.