import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  ChevronDown,
  Star,
  Play,
  Sparkles,
  Palette,
  Lightbulb,
  PenTool,
  Gift,
} from "lucide-react";
import { Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import brandLogo1 from "@/assets/brand-logo-1.png.asset.json";
import brandLogo2 from "@/assets/brand-logo-2.png.asset.json";
import brandLogo3 from "@/assets/brand-logo-3.png.asset.json";
import brandLogo4 from "@/assets/brand-logo-4.png.asset.json";
import brandLogo5 from "@/assets/brand-logo-5.png.asset.json";
import brandLogo6 from "@/assets/brand-logo-6.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Airnova — Creative designer & digital experience" },
      {
        name: "description",
        content:
          "Airnova is a creative design studio crafting modern, user-focused brand identities, websites and digital products that help businesses stand out.",
      },
      { property: "og:title", content: "Airnova — Creative designer & digital experience" },
      {
        property: "og:description",
        content:
          "Modern, user-focused brand identities, websites and digital products by Airnova.",
      },
    ],
  }),
  component: Index,
});

/* ---------- Shared bits ---------- */

const serif = "font-serif italic";

function BrandMark({ size = 38, dark = true }: { size?: number; dark?: boolean }) {
  return (
    <span
      className="inline-flex items-center justify-center shadow-sm"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.2,
        background: dark ? "var(--foreground)" : "var(--surface)",
      }}
    >
      <svg
        viewBox="0 0 13.44 13.4111"
        fill={dark ? "#ffffff" : "var(--foreground)"}
        style={{ width: size * 0.56, height: size * 0.56 }}
      >
        <path d="M13.1829 6.35083L11.2547 5.79982C10.3864 5.55501 9.59543 5.09147 8.95751 4.45355C8.31958 3.81562 7.85604 3.02466 7.61124 2.15634L7.06023 0.228154C7.03252 0.160693 6.98538 0.102993 6.9248 0.0623858C6.86421 0.0217787 6.79293 9.76562e-05 6.72 9.76562e-05C6.64707 9.76562e-05 6.57578 0.0217787 6.5152 0.0623858C6.45462 0.102993 6.40748 0.160693 6.37977 0.228154L5.82876 2.15634C5.58396 3.02466 5.12042 3.81562 4.48249 4.45355C3.84457 5.09147 3.0536 5.55501 2.18529 5.79982L0.257098 6.35083C0.183062 6.37184 0.117901 6.41643 0.0715024 6.47783C0.0251038 6.53924 0 6.6141 0 6.69106C0 6.76802 0.0251038 6.84288 0.0715024 6.90428C0.117901 6.96568 0.183062 7.01027 0.257098 7.03128L2.18529 7.5823C3.0536 7.8271 3.84457 8.29064 4.48249 8.92857C5.12042 9.56649 5.58396 10.3575 5.82876 11.2258L6.37977 13.154C6.40079 13.228 6.44538 13.2932 6.50678 13.3396C6.56818 13.386 6.64304 13.4111 6.72 13.4111C6.79696 13.4111 6.87182 13.386 6.93322 13.3396C6.99462 13.2932 7.03921 13.228 7.06023 13.154L7.61124 11.2258C7.85604 10.3575 8.31958 9.56649 8.95751 8.92857C9.59543 8.29064 10.3864 7.8271 11.2547 7.5823L13.1829 7.03128C13.2569 7.01027 13.3221 6.96568 13.3685 6.90428C13.4149 6.84288 13.44 6.76802 13.44 6.69106C13.44 6.6141 13.4149 6.53924 13.3685 6.47783C13.3221 6.41643 13.2569 6.37184 13.1829 6.35083Z" />
      </svg>
    </span>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <BrandMark dark={!light} />
      <span className={`${serif} font-bold text-[32px] leading-[1.1] tracking-[-0.075em] ${light ? "text-white" : "text-foreground"}`}>
        Airnova
      </span>
    </div>
  );
}

function Pill({
  children,
  variant = "grey",
}: {
  children: React.ReactNode;
  variant?: "grey" | "white";
}) {
  return (
    <div
      className={`inline-flex items-center gap-[10px] rounded-lg px-[14px] py-2 ${
        variant === "white" ? "bg-white" : "bg-[#f5f5f5]"
      }`}
    >
      <BrandMark size={24} />
      <span className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-black">
        {children}
      </span>
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Studio", href: "#studio" },
    { label: "Projects", href: "#projects", sup: "15" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="bg-surface">
      <div className="flex w-full items-center justify-center px-6 py-6 md:px-[93px]">
        <div className="flex w-full items-center justify-between gap-6 md:hidden">
          <Logo />
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-[10px] w-14 cursor-pointer flex-col justify-between"
          >
            <span className="block h-px w-full bg-foreground" />
            <span className="block h-px w-full bg-foreground" />
          </button>
        </div>
        <div className="hidden items-center gap-[167px] md:flex">
          <Logo />
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="inline-flex items-start text-base font-medium leading-[1.5] tracking-[-0.075em] text-foreground/70 transition-colors duration-300 ease-out hover:text-foreground"
            >
              <span>{l.label}</span>
              {l.sup && (
                <sup className="ml-px text-[10px] font-semibold leading-[0.9] tracking-[-0.075em] text-foreground/40">
                  {l.sup}
                </sup>
              )}
            </a>
          ))}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-[10px] w-14 cursor-pointer flex-col justify-between"
          >
            <span className="block h-px w-full bg-foreground" />
            <span className="block h-px w-full bg-foreground" />
          </button>
        </div>
      </div>
      <FullscreenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

function FullscreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const links = ["Home", "About Us", "Services", "Blog", "Contact"];
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      {/* Sliding black panel */}
      <div
        className={`absolute inset-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      <button
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute right-6 top-6 z-20 flex h-10 w-10 cursor-pointer items-center justify-center text-white transition-all duration-500 md:right-[93px] md:top-8 hover:rotate-90 ${
          open ? "opacity-100 delay-500" : "opacity-0"
        }`}
      >
        <span className="relative block h-6 w-6">
          <span className="pointer-events-none absolute left-0 top-1/2 block h-px w-full rotate-45 bg-white" />
          <span className="pointer-events-none absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-white" />
        </span>
      </button>
      <nav className="relative z-10 flex h-full w-full items-center justify-center p-8">
        <ul className="flex flex-col items-center gap-[22px] text-center">
          {links.map((label, i) => (
            <li
              key={label}
              className="py-1"
              style={{
                transform: open ? "translateY(0)" : "translateY(120%)",
                opacity: open ? 1 : 0,
                transition: `transform 700ms cubic-bezier(0.65,0,0.35,1) ${
                  open ? 300 + i * 80 : 0
                }ms, opacity 500ms ease ${open ? 300 + i * 80 : 0}ms`,
              }}
            >
              <a
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={onClose}
                className="inline-block px-2 py-2 text-[48px] font-semibold leading-[1.2] tracking-[-0.065em] text-white/70 transition-colors duration-300 ease-out hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const heroImages = [hero1.url, hero1.url, hero1.url];
const brandLogos = [brandLogo2, brandLogo3, brandLogo4, brandLogo1, brandLogo5, brandLogo6];

function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Half = width of one full set of logos (we render the set twice for seamless loop)
    halfRef.current = track.scrollWidth / 2;

    const SPEED = halfRef.current / 20; // px per second → ~20s per loop
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && !draggingRef.current) {
        offsetRef.current -= SPEED * dt;
      }
      // Normalize within [-half, 0] for seamless wrap in both directions
      const half = halfRef.current;
      if (half > 0) {
        while (offsetRef.current <= -half) offsetRef.current += half;
        while (offsetRef.current > 0) offsetRef.current -= half;
      }
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    offsetRef.current = dragStartOffsetRef.current + (e.clientX - dragStartXRef.current);
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      className="w-[671px] cursor-grab overflow-hidden rounded-[12.336px] active:cursor-grabbing"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        ref={trackRef}
        className="flex w-max items-start gap-[5px] will-change-transform select-none"
      >
        {[...brandLogos, ...brandLogos].map((logo, i) => (
          <div
            key={i}
            className="relative flex size-[164px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[12.336px] bg-surface"
          >
            <img
              src={logo.url}
              alt=""
              draggable={false}
              className="max-h-[50px] w-auto max-w-[100px] object-contain"
            />
            <span
              className="absolute font-semibold tracking-[-0.055em]"
              style={{
                color: "#282828",
                fontSize: "8px",
                lineHeight: 1.4,
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              /2027
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const DURATION = 5000;
    const SWITCH_AT = 0.8;
    let start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      setProgress(p);
      if (p >= SWITCH_AT) {
        setActive((i) => (i + 1) % heroImages.length);
        setProgress(0);
        start = performance.now();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cycleKey]);

  return (
    <section
      className="bg-surface"
      style={{ padding: "0 80px 80px" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-start gap-8">
        {/* Left card — 735 × 750 */}
        <div className="flex h-[750px] w-[735px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-[20px] bg-background p-8">
          {/* Text container — 671 × 457 */}
          <div className="flex h-[457px] w-[671px] flex-col justify-center gap-4">
            {/* Rating */}
            <div className="flex items-center gap-[17px]">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-[26px] fill-foreground text-foreground"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-[16px] font-medium leading-[1.5] tracking-[-0.0075em] text-foreground">
                Rated 4.9/5
              </span>
            </div>

            {/* Quote */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1
                  className="w-[660px] font-semibold tracking-[-0.065em] text-black"
                  style={{ fontSize: "80px", lineHeight: 1.2 }}
                >
                  Creative{" "}
                  <span className={`${serif} text-black/40`}>
                    designer &amp; digital
                  </span>{" "}
                  experience.
                </h1>
                <p
                  className="w-[535px] font-medium leading-[1.5] tracking-[-0.0075em]"
                  style={{ color: "#515151", fontSize: "16px" }}
                >
                  I create modern and visually compelling digital experiences that
                  help brands stand out. From user-focused UI/UX design to clean
                  and responsive web interfaces my goal is to transform.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full px-6 text-[16px] font-medium tracking-[-0.0075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
                  style={{ background: "#070606" }}
                >
                  Get in touch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-[16px] font-medium tracking-[-0.0075em] text-black underline decoration-from-font underline-offset-[3px]"
                >
                  What we do
                  <ArrowUpRight className="size-6" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          {/* Logo strip — Mercury marquee loop */}
          <LogoMarquee />
        </div>

        {/* Right image slider — flex-1, 750h */}
        <div className="relative h-[750px] min-w-0 flex-1 overflow-hidden rounded-[20px] bg-black/5">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Progress bar — 3 segments, 142 wide, ~30px from bottom */}
          <div className="absolute bottom-[30px] left-1/2 flex w-[142px] -translate-x-1/2 items-center gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setActive(i);
                  setProgress(0);
                  setCycleKey((k) => k + 1);
                }}
                className="relative h-[5.775px] cursor-pointer overflow-hidden rounded-full p-0 transition-all duration-500"
                style={{
                  flex: i === active ? "0 0 67.3px" : "1 1 0",
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: i === active ? "blur(16px)" : undefined,
                }}
              >
                {i === active && (
                  <span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${Math.min(progress / 0.8, 1) * 100}%`,
                      background: "rgba(255,255,255,0.95)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-white px-20 py-28">
      <div className="mx-auto flex max-w-[1280px] items-start gap-16">
        <div className="flex flex-1 flex-col gap-8 self-stretch">
          <div className="relative h-[399px] w-full overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
              alt="Working on design"
              className="absolute inset-0 size-full object-cover"
            />
            <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-[20px] bg-white px-4 py-2">
              <Gift size={16} strokeWidth={1.25} className="text-[#FF2626]" />
              <span className="text-[14px] font-medium leading-[1.5] tracking-[-0.075em] text-[#070606]">
                February Sale
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-[14px]">
                <BrandMark size={24} />
                <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-black">
                  <span className="text-[#FF2626]">ESR</span> - 2029
                </p>
              </div>
              <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                An engaging user experience ensures that visitors can interact with your website
                easily and enjoyably. With intuitive navigation
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="whitespace-nowrap text-[32px] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
                Engaging User Experience
              </h3>
              <a
                href="#contact"
                className="inline-flex h-12 w-[271px] items-center justify-center gap-[10px] rounded-[80px] bg-[#070606] px-6 py-4 text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
              >
                <span className="flex-1">Join Now!</span>
                <ArrowUpRight className="size-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-[649px] shrink-0 flex-col items-start justify-between self-stretch">
          <div className="flex w-full flex-col gap-12">
            <h2 className="w-[611px] text-[72px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
              Explore our{" "}
              <span className={`${serif} italic text-black/40`}>flexible of</span> activity.
            </h2>
            <div className="flex flex-wrap items-start gap-x-8 gap-y-3">
              {["High-quality visual elements", "Flexible Design System"].map((t) => (
                <span key={t} className="inline-flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-2xl border-[0.5px] border-black/10 bg-surface">
                    <Check className="size-[15px] text-[#070606]" />
                  </span>
                  <span className="whitespace-nowrap text-[18px] font-medium leading-[1.5] tracking-[-0.075em] text-[#070606]">
                    {t}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <BenefitsAccordion />
        </div>
      </div>
    </section>
  );
}

function BenefitsAccordion() {
  const accordionItems = [
    {
      title: "Responsive",
      accent: "for All Devices",
      desc: "Your website will look and perform perfectly on every device including desktops tablets and smartphones. The design adapts smoothly to different screen sizes",
    },
    { title: "Conversion-Focused", accent: "Design", desc: "Crafted with conversion in mind — every section, button, and flow is designed to turn visitors into customers." },
    { title: "Brand Identity", accent: "Design", desc: "A cohesive visual identity built from logos, color, and type that reflects your brand at every touchpoint." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-8">
      {accordionItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={`rounded-[20px] px-6 transition-[background-color,padding,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen
                ? "border border-transparent bg-surface pt-6 pb-6"
                : "border-b border-black/[0.28] pt-0 pb-6 rounded-none"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center gap-16 text-left"
            >
              <span className="flex-1 text-[28px] font-semibold leading-[1.5] tracking-[-0.075em] text-[#070606]">
                {item.title}{" "}
                <span className={`${serif} italic text-black/40`}>{item.accent}</span>
              </span>
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-2xl border border-black/10 transition-colors duration-300 ${
                  isOpen ? "bg-white" : "bg-surface"
                }`}
              >
                <ChevronDown
                  className={`size-4 text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Services() {
  const stroke = "#FF2626";
  const items = [
    {
      title: "Brand Identity Design",
      desc: "Designing logos color schemes and visuals that reflect your brand.",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="size-14">
          <path d="M23.3342 17.5001C23.3342 15.531 23.1395 13.2583 25.0842 12.1356C25.8962 11.6667 26.9865 11.6667 29.1675 11.6667H31.5008C33.6816 11.6667 34.7719 11.6667 35.5842 12.1356C37.5285 13.2583 37.3342 15.531 37.3342 17.5001C37.3342 19.4691 37.5285 21.7418 35.5842 22.8645C34.7719 23.3334 33.6816 23.3334 31.5008 23.3334H29.1675C26.9865 23.3334 25.8962 23.3334 25.0842 22.8645C23.1395 21.7418 23.3342 19.4691 23.3342 17.5001Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.33415 38.5001C9.33415 36.531 9.13963 34.2583 11.0842 33.1357C11.8963 32.6667 12.9867 32.6667 15.1675 32.6667H31.5009C33.6816 32.6667 34.772 32.6667 35.5842 33.1357C37.5286 34.2583 37.3342 36.531 37.3342 38.5001C37.3342 40.4692 37.5286 42.7418 35.5842 43.8644C34.772 44.3334 33.6816 44.3334 31.5009 44.3334H15.1675C12.9867 44.3334 11.8963 44.3334 11.0842 43.8644C9.13963 42.7418 9.33415 40.4692 9.33415 38.5001Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46.6666 4.66672V51.3334" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Creative Consulting",
      desc: "Providing guidance to improve design strategy and digital presence.",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="size-14">
          <path d="M11.6667 39.6667H4.66667M44.3333 39.6667H51.3333" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.6721 16.3333C18.6721 14.3643 18.4775 12.0916 20.4221 10.9689C21.2342 10.5 22.3246 10.5 24.5054 10.5H31.5054C33.6861 10.5 34.7765 10.5 35.5887 10.9689C37.5333 12.0916 37.3387 14.3643 37.3387 16.3333C37.3387 18.3024 37.5333 20.5751 35.5887 21.6978C34.7765 22.1667 33.6861 22.1667 31.5054 22.1667H24.5054C22.3246 22.1667 21.2342 22.1667 20.4221 21.6978C18.4775 20.5751 18.6721 18.3024 18.6721 16.3333Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.6721 39.6667C11.6721 37.6976 11.4775 35.4249 13.4221 34.3023C14.2342 33.8333 15.3246 33.8333 17.5054 33.8333H38.5054C40.6861 33.8333 41.7765 33.8333 42.5887 34.3023C44.5333 35.4249 44.3387 37.6976 44.3387 39.6667C44.3387 41.6358 44.5333 43.9084 42.5887 45.031C41.7765 45.5 40.6861 45.5 38.5054 45.5H17.5054C15.3246 45.5 14.2342 45.5 13.4221 45.031C11.4775 43.9084 11.6721 41.6358 11.6721 39.6667Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.6667 16.3333H4.66667M37.3333 16.3333H51.3333" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Prototype & Wireframing",
      desc: "Building interactive prototypes to visualize your digital products.",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="size-14">
          <path d="M16.3333 11.6667V4.66667M16.3333 44.3333V51.3333" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M39.6667 18.6721C41.6358 18.6721 43.9084 18.4775 45.031 20.4221C45.5 21.2342 45.5 22.3246 45.5 24.5054V31.5054C45.5 33.6861 45.5 34.7765 45.031 35.5887C43.9084 37.5333 41.6358 37.3387 39.6667 37.3387C37.6976 37.3387 35.4249 37.5333 34.3023 35.5887C33.8333 34.7765 33.8333 33.6861 33.8333 31.5054V24.5054C33.8333 22.3246 33.8333 21.2342 34.3023 20.4221C35.4249 18.4775 37.6976 18.6721 39.6667 18.6721Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.3333 11.6721C18.3024 11.6721 20.5751 11.4775 21.6978 13.4221C22.1667 14.2342 22.1667 15.3246 22.1667 17.5054V38.5054C22.1667 40.6861 22.1667 41.7765 21.6978 42.5887C20.5751 44.5333 18.3024 44.3387 16.3333 44.3387C14.3643 44.3387 12.0916 44.5333 10.9689 42.5887C10.5 41.7765 10.5 40.6861 10.5 38.5054V17.5054C10.5 15.3246 10.5 14.2342 10.9689 13.4221C12.0916 11.4775 14.3643 11.6721 16.3333 11.6721Z" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M39.6667 18.6667V4.66667M39.6667 37.3333V51.3333" stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];
  return (
    <section id="services" className="bg-surface px-20 py-28">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-2">
          <Pill variant="white">Our Services</Pill>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="w-[864px] max-w-full text-[72px] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
              Design solutions that make your{" "}
              <span className={`${serif} italic text-black/40`}>brand stand</span>
            </h2>
            <p className="w-[605px] max-w-full text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
              We create thoughtful and visually compelling design solutions that help your brand
              stand out in a competitive digital world. By combining creativity with strategy our
              designs
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
          {items.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-16 rounded-[20px] bg-white p-8"
            >
              {icon}
              <div className="flex w-full flex-col gap-2">
                <h3 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
                  {title}
                </h3>
                <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectImages = [
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
];

function Projects() {
  const items = [
    { title: "NeuraFlow AI Platform", tag: "Branding strategy" },
    { title: "Fluxa Studio Website", tag: "Ui/Ux Design" },
    { title: "Lumora Creative Agency", tag: "Web Development" },
    { title: "Aurex Digital Platform", tag: "Creative Design" },
  ];
  return (
    <section id="projects" className="bg-[#f5f5f5] p-[30px]">
      <div className="relative w-full rounded-[20px] bg-white px-20 py-28">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 text-center">
          <Pill>Our Project</Pill>
          <h2 className="text-[clamp(40px,5.5vw,72px)] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
            A <span className={`${serif} italic text-black/50`}>showcase</span> of my latest design
          </h2>
          <p className="max-w-[605px] text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
            Explore a selection of our creative projects that showcase our passion for design and
            innovation. Each project reflects our commitment to delivering .
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1320px] gap-2 md:grid-cols-2">
          {items.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-[20px] bg-black/5">
                <img
                  src={projectImages[i]}
                  alt={p.title}
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-16 rounded-[10px] bg-[#f5f5f5] px-6 py-2">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                    {p.title}
                  </h3>
                  <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                    2026 — 32
                  </p>
                </div>
                <span className="whitespace-nowrap text-[18px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {p.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "100+", l: "Creative professionals" },
    { v: "50k", l: "Projects Completed" },
    { v: "99%", l: "Client Satisfaction" },
    { v: "15+", l: "Design Experience" },
  ];
  const [videoStarted, setVideoStarted] = useState(false);
  const [thumbVisible, setThumbVisible] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [playSignal, setPlaySignal] = useState(0);
  const leaveTimer = useRef<number | null>(null);
  const handlePlayClick = () => {
    if (leaveTimer.current) {
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setVideoStarted(true);
    setThumbVisible(false);
    setPlaySignal((n) => n + 1);
  };
  return (
    <section id="studio" className="bg-[#f5f5f5] px-[30px] py-[112px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8">
        <div className="flex flex-col items-center gap-[10px]">
          <Pill variant="white">About us</Pill>
          <p className="max-w-[1075px] text-center text-[clamp(28px,3vw,40px)] font-semibold leading-[1.3] tracking-[-0.065em] text-black">
            We are a creative design team dedicated to crafting modern and meaningful digital experiences.{" "}
            <span className="text-black/50">
              Our focus is on combining creativity strategy and user-centered design to deliver visually
              compelling and highly functional solutions.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-1 flex-col gap-16 rounded-[20px] bg-white p-6">
              <div className="flex flex-col gap-8">
                <div className="text-[48px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                  {s.v}
                </div>
              <div className="w-full border-t border-dashed border-black/15" />
              </div>
              <div className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative aspect-[1280/700] w-full overflow-hidden rounded-[20px] bg-black"
          onMouseEnter={() => {
            if (leaveTimer.current) {
              window.clearTimeout(leaveTimer.current);
              leaveTimer.current = null;
            }
          }}
          onMouseLeave={() => {
            if (!videoStarted || videoPlaying) return;
            if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
            leaveTimer.current = window.setTimeout(() => {
              setThumbVisible(true);
            }, 200);
          }}
        >
          {/* Video layer (mounted after first play) */}
          {videoStarted && (
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                thumbVisible ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <CustomVideoPlayer
                youtubeId="9u1RLVS0ziU"
                fill
                onPlayingChange={setVideoPlaying}
                playSignal={playSignal}
              />
            </div>
          )}

          {/* Thumbnail layer */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              thumbVisible ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1600&q=80"
              alt="Showreel"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-transparent">
              <button
                onClick={handlePlayClick}
                aria-label="Play showreel"
                className="flex cursor-pointer items-center gap-6 transition-transform duration-300 ease-out hover:scale-[1.03]"
              >
                <span className="grid size-[140px] place-items-center rounded-full bg-white text-foreground shadow-2xl transition-transform duration-300 ease-out">
                  <Play className="size-10 fill-foreground" />
                </span>
                <span className="w-[180px] text-left text-[32px] font-bold leading-[1.4] tracking-[-0.065em] text-white">
                  Watch the Experience
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return <SolutionInner />;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYouTubeAPI(): Promise<any> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT && window.YT.Player) return resolve(window.YT);
    const existing = document.getElementById("youtube-iframe-api");
    if (!existing) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
  });
}

function CustomVideoPlayer({
  youtubeId,
  fill = false,
  onPlayingChange,
  playSignal,
}: {
  youtubeId: string;
  fill?: boolean;
  onPlayingChange?: (playing: boolean) => void;
  playSignal?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let tick: number | undefined;
    loadYouTubeAPI().then((YT) => {
      if (cancelled || !mountRef.current) return;
      playerRef.current = new YT.Player(mountRef.current, {
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            setDuration(e.target.getDuration());
            setVolume(e.target.getVolume() / 100);
            setMuted(e.target.isMuted());
          },
          onStateChange: (e: any) => {
            // 1 playing, 2 paused, 0 ended
            if (e.data === 1) {
              setPlaying(true);
              onPlayingChange?.(true);
            } else if (e.data === 2 || e.data === 0) {
              setPlaying(false);
              onPlayingChange?.(false);
            }
            if (!duration) setDuration(e.target.getDuration());
          },
        },
      });
    });
    tick = window.setInterval(() => {
      const p = playerRef.current;
      if (p && typeof p.getCurrentTime === "function") {
        setTime(p.getCurrentTime() || 0);
        const d = p.getDuration?.() || 0;
        if (d && d !== duration) setDuration(d);
      }
    }, 250);
    return () => {
      cancelled = true;
      if (tick) window.clearInterval(tick);
      try {
        playerRef.current?.destroy?.();
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtubeId]);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  useEffect(() => {
    if (playSignal === undefined) return;
    const p = playerRef.current;
    if (p && typeof p.playVideo === "function") p.playVideo();
  }, [playSignal]);

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (p.isMuted()) {
      p.unMute();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const onVolume = (val: number) => {
    const p = playerRef.current;
    if (!p) return;
    p.setVolume(Math.round(val * 100));
    setVolume(val);
    if (val === 0) {
      p.mute();
      setMuted(true);
    } else if (p.isMuted()) {
      p.unMute();
      setMuted(false);
    }
  };

  const onSeek = (val: number) => {
    const p = playerRef.current;
    if (!p || !duration) return;
    const t = (val / 100) * duration;
    p.seekTo(t, true);
    setTime(t);
  };

  const toggleFullscreen = () => {
    const w = wrapRef.current;
    if (!w) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else w.requestFullscreen?.();
  };

  const nudgeControls = () => {
    setShowControls(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2500);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <div
      ref={wrapRef}
      onMouseMove={nudgeControls}
      onMouseLeave={() => playing && setShowControls(false)}
      className={`group relative overflow-hidden bg-black ${fill ? "size-full" : "rounded-2xl shadow-2xl"}`}
      style={fill ? undefined : { aspectRatio: "16 / 9" }}
    >
      <div ref={mountRef} className="absolute inset-0 size-full" />
      {/* Click shield over iframe to capture play/pause taps */}
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={togglePlay}
        className="absolute inset-0 size-full cursor-pointer bg-transparent"
      />

      {/* Center play overlay when paused */}
      {ready && !playing && (
        <button
          type="button"
          aria-label="Play"
          onClick={togglePlay}
          className="absolute inset-0 grid place-items-center bg-black/30"
        >
          <span className="grid size-20 place-items-center rounded-full bg-white shadow-2xl">
            <Play className="size-7 fill-[#070606] text-[#070606]" />
          </span>
        </button>
      )}

      {/* Bottom control bar */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 transition-opacity duration-300 ${
          showControls || !playing ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Scrubber */}
        <div className="pointer-events-auto relative mb-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
          <div
            className="absolute inset-y-0 left-0 bg-white"
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={(e) => onSeek(parseFloat(e.target.value))}
            aria-label="Seek"
            className="absolute inset-0 size-full cursor-pointer appearance-none bg-transparent opacity-0"
          />
        </div>

        <div className="pointer-events-auto flex items-center gap-4 text-white">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="grid size-10 place-items-center rounded-full bg-white text-[#070606] transition hover:scale-105"
          >
            {playing ? (
              <Pause className="size-4 fill-[#070606]" />
            ) : (
              <Play className="size-4 fill-[#070606]" />
            )}
          </button>

          <span className="font-mono text-xs tabular-nums tracking-tight text-white/80">
            {fmt(time)} <span className="text-white/40">/ {fmt(duration)}</span>
          </span>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute" : "Mute"}
                className="grid size-9 place-items-center rounded-full text-white hover:bg-white/10"
              >
                {muted || volume === 0 ? (
                  <VolumeX className="size-4" />
                ) : (
                  <Volume2 className="size-4" />
                )}
              </button>
              <div className="relative h-1 w-20 overflow-hidden rounded-full bg-white/20">
                <div
                  className="absolute inset-y-0 left-0 bg-white"
                  style={{ width: `${(muted ? 0 : volume) * 100}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={(e) => onVolume(parseFloat(e.target.value))}
                  aria-label="Volume"
                  className="absolute inset-0 size-full cursor-pointer appearance-none bg-transparent opacity-0"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="grid size-9 place-items-center rounded-full text-white hover:bg-white/10"
            >
              <Maximize className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionInner() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-white px-6 py-28 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16">
        <h2 className="max-w-[873px] text-center text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
          Crafting unique strategies that turn visions into powerful results
        </h2>

        <div className="flex w-full flex-col gap-2 lg:flex-row lg:items-start">
          {/* Left card — dark */}
          <div className="flex h-[500px] flex-1 flex-col justify-between rounded-[20px] bg-[#070606] p-8">
            <div className="flex items-start justify-between">
              <div className="h-[100px] w-[150px] overflow-hidden rounded-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80"
                  alt="Market research"
                  className="size-full object-cover"
                />
              </div>
              <Plus className="size-6 text-white/70" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-semibold leading-[1.5] tracking-[-0.075em] text-white">
                Market research
              </h3>
              <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-white/[0.62]">
                We work closely to turn your goals into digital experiences that combine strategy
                design and technology.
              </p>
            </div>
          </div>

          {/* Center image with overlay */}
          <div className="relative flex h-[500px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-[20px] p-8 lg:w-[532px]">
            {videoOpen ? (
              <div className="absolute inset-0">
                <CustomVideoPlayer youtubeId="9u1RLVS0ziU" fill />
              </div>
            ) : (
              <>
                <img
                  src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
                  alt="Our strategy meets bold creativity"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative flex justify-end">
                  <Plus className="size-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="relative flex flex-col gap-6">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    aria-label="Play video"
                    className="grid size-14 place-items-center rounded-full bg-white shadow-lg transition hover:scale-105"
                  >
                    <Play className="size-4 fill-[#070606] text-[#070606]" />
                  </button>
                  <p className="max-w-[281px] text-[32px] font-semibold leading-[1.2] tracking-[-0.065em] text-white">
                    Our strategy meets bold creativity
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right card — light */}
          <div className="flex h-[500px] flex-1 flex-col justify-between rounded-[20px] bg-[#f5f5f5] p-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[56px] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
                  100%
                </p>
                <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-[#070606]">
                  Satisfied client
                </p>
                <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  A seamless process with a polished fast and easy-to-manage result
                </p>
              </div>
              <Plus className="size-6 shrink-0 text-[#070606]" strokeWidth={1.5} />
            </div>
            <div className="flex -space-x-5">
              {[
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=3&w=160&h=160&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=160&h=160&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=160&h=160&q=80",
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=3&w=160&h=160&q=80",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-14 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Michael Turner",
      role: "Product Manager",
      text: "Fast delivery, great communication, and outstanding design work !",
      avatar: "https://i.pravatar.cc/120?img=12",
      headerTop: true,
    },
    {
      name: "Sarah Johnson",
      role: "Founder",
      text: "Their creativity and professionalism truly stand out. Our website looks ",
      avatar: "https://i.pravatar.cc/120?img=32",
      headerTop: false,
    },
    {
      name: "David Lee",
      role: "Marketing Manager",
      text: "They understood our vision perfectly and delivered a design that elevated our brand identity.",
      avatar: "https://i.pravatar.cc/120?img=47",
      headerTop: true,
    },
  ];
  return (
    <section className="bg-surface px-6 py-28 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[150px]">
          <Pill>Testimonials</Pill>
          <h2 className="flex-1 text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.05em] text-black">
            Client Experiences That Highlight Our{" "}
            <span className={`${serif} text-black/50`}>commitment to quality</span> and Innovation
          </h2>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4 lg:h-[454px]">
          {/* Rating card */}
          <div className="flex flex-col justify-between rounded-lg bg-white p-4">
            <div className="flex items-center gap-3">
              <p className="whitespace-nowrap font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                <span className="text-[56px]">4.9 </span>
                <span className="text-[32px] text-black/50">/5</span>
              </p>
              <p className="flex-1 text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                We've delivered 56+ Project that help companies generate
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className={`${serif} text-[24px] font-bold leading-[1.1] tracking-[-0.075em] text-[#070606]`}>
                  Airnova
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-[10px]">
                    {[12, 32, 47, 58].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/80?img=${i}`}
                        alt=""
                        className="size-[27px] rounded-[5px] border border-white object-cover"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-[11px] fill-[#FF2626] text-[#FF2626]" />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold leading-[1.4] tracking-[-0.05em] text-black">
                      Trusted by <span className="text-black/40">clients worldwide</span>
                    </span>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex h-12 w-full items-center justify-between rounded-[80px] bg-[#070606] px-6 text-base font-medium tracking-[-0.075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
              >
                Leave a review <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>

          {reviews.map((r) => {
            const header = (
              <div className="flex items-center gap-2 rounded bg-white px-4 py-2">
                <img src={r.avatar} alt={r.name} className="h-[38px] w-[41px] rounded-[5px] border border-white object-cover" />
                <div className="flex flex-col">
                  <div className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-black">{r.name}</div>
                  <div className="text-[14px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">{r.role}</div>
                </div>
              </div>
            );
            const body = (
              <div className="flex flex-1 flex-col justify-between rounded-lg bg-white p-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-[#FF2626] text-[#FF2626]" />
                  ))}
                </div>
                <p className="text-[20px] font-semibold leading-[1.3] tracking-[-0.065em] text-black">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
            );
            return (
              <div key={r.name} className="flex flex-col gap-2">
                {r.headerTop ? header : body}
                {r.headerTop ? body : header}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials Slider (Aeline) ---------- */

const sliderTestimonials = [
  {
    quote:
      "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions.",
    name: "John Doe",
    company: "Tech Innovations",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "Their insight resolved difficult hurdles, opening new paths and creating highly effective strategies.",
    name: "Amelia Chen",
    company: "Northwind Labs",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "We found focus for tricky requirements, cutting through noise and providing truly advanced responses.",
    name: "Marcus Wright",
    company: "Helix Studio",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "They gave simple paths to hard puzzles, removing all delays while building fresh, brilliant projects.",
    name: "Priya Patel",
    company: "Lumen Co.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
  {
    quote:
      "Sharp thinking, fast turnarounds and a genuine sense of craft on every single deliverable.",
    name: "Diego Alvarez",
    company: "Atlas Group",
    image:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&w=900&q=80",
  },
];

function TriangleArrow({ direction, onClick, disabled }: { direction: "left" | "right"; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      onClick={onClick}
      disabled={disabled}
      className="group grid size-12 place-items-center rounded-full border border-black/15 bg-white text-[#070606] transition hover:bg-[#070606] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`size-4 ${direction === "left" ? "-rotate-90" : "rotate-90"}`}
      >
        <path d="M12 2L3 21h18L12 2z" />
      </svg>
    </button>
  );
}

function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, sliderTestimonials.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section
      className="bg-white px-6 py-28 lg:px-20"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Pill>Testimonials</Pill>
          <h2 className="text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.05em] text-[#070606]">
            What they <span className={`${serif} text-[#070606]/50`}>say about</span> us?
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
              Here&rsquo;s what they shared about their experience working with our team.
            </p>
            <div className="hidden gap-3 sm:flex" role="group" aria-label="Carousel navigation">
              <TriangleArrow direction="left" onClick={prev} disabled={safeIndex === 0} />
              <TriangleArrow direction="right" onClick={next} disabled={safeIndex >= maxIndex} />
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={(el) => {
            if (!el || visible) return;
            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((e) => {
                  if (e.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                  }
                });
              },
              { threshold: 0.15 },
            );
            io.observe(el);
          }}
        >
          <div
            className="flex transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${safeIndex * (100 / perView)}%)` }}
          >
            {sliderTestimonials.map((t, i) => (
              <div
                key={t.name + i}
                className="shrink-0 px-2"
                style={{ width: `${100 / perView}%` }}
              >
                <article
                  className="relative h-[460px] overflow-hidden rounded-2xl bg-[#0a0a0a] text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] transition-[opacity,transform] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.92)",
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <img
                    src={t.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                  <div className="relative flex h-full flex-col justify-end gap-6 p-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="size-8 text-white"
                      aria-hidden="true"
                    >
                      <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" />
                    </svg>
                    <p className="text-lg font-medium leading-[1.4] tracking-[-0.03em]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="text-right text-sm text-white/70">
                      — {t.name}, {t.company}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 sm:hidden" role="group" aria-label="Carousel navigation">
          <TriangleArrow direction="left" onClick={prev} disabled={safeIndex === 0} />
          <TriangleArrow direction="right" onClick={next} disabled={safeIndex >= maxIndex} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Fanned Testimonial Cards (Hirekit) ---------- */

const fannedItems = [
  {
    name: "Mark Tressler",
    role: "COO, FinTech Global",
    title: "A true partner in growth.",
    quote:
      "We launched our Mexico City operations in 30 days – no local entity needed. Their payroll and benefits infrastructure saved us $280K in setup costs, and their talent retention rate is 40% higher than industry average.",
    avatar: "https://i.pravatar.cc/160?img=14",
    rotation: -8,
    variant: "light" as const,
  },
  {
    name: "Jake Miller",
    role: "VP, NorthBridge",
    title: "They simplified everything.",
    quote:
      "In less than six weeks, they streamlined our entire onboarding workflow across three countries. We cut our administrative load by 55% and reduced compliance errors to virtually zero. The transparency and execution speed are unmatched.",
    avatar: "https://i.pravatar.cc/160?img=33",
    rotation: -3,
    variant: "dark" as const,
  },
  {
    name: "Chloe Adams",
    role: "CFO, Horizon Labs",
    title: "A team that delivers.",
    quote:
      "Their end-to-end HR and payroll support let us expand to Latin America without distraction. We saved $190K in annual overhead, and our hiring cycle went from 28 days to just 9. It's the kind of operational lift that changes your whole roadmap.",
    avatar: "https://i.pravatar.cc/160?img=45",
    rotation: 3,
    variant: "light" as const,
  },
  {
    name: "Ryan Parker",
    role: "CEO, FinTech Global",
    title: "Clear impact from day one.",
    quote:
      "Their ecosystem flagged inefficiencies in our multi-country payouts and fixed them in a week. That alone reduced our monthly burn by 12%. Add their reporting tools, and we now make decisions in hours, not weeks. Truly game-changing.",
    avatar: "https://i.pravatar.cc/160?img=68",
    rotation: 8,
    variant: "dark" as const,
  },
];

function FannedTestimonials() {
  const [visible, setVisible] = useState(false);
  return (
    <section
      className="overflow-hidden bg-[#070606] px-6 py-28 text-white lg:px-20"
      aria-label="Client testimonials"
    >
      <div
        ref={(el) => {
          if (!el || visible) return;
          const io = new IntersectionObserver(
            (entries) => {
              entries.forEach((e) => {
                if (e.isIntersecting) {
                  setVisible(true);
                  io.disconnect();
                }
              });
            },
            { threshold: 0.15 },
          );
          io.observe(el);
        }}
        className="mx-auto flex max-w-[1280px] flex-col items-center gap-16"
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-[10px] rounded-lg bg-white/[0.06] px-[14px] py-2">
            <BrandMark size={24} dark={false} />
            <span className="text-sm font-medium leading-[1.5] tracking-[-0.04em] text-white">
              Testimonials
            </span>
          </div>
          <h2 className={`max-w-[820px] text-[clamp(40px,5vw,72px)] font-normal leading-[1.05] tracking-[-0.03em] ${serif}`}>
            Industry-leading results with Airnova
          </h2>
          <p className="max-w-xl text-base text-white/60">
            The LatAm talent partner top performers choose
          </p>
        </div>

        <ul
          role="list"
          className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-[-40px]"
          style={{ perspective: "1200px" }}
        >
          {fannedItems.map((t, i) => (
            <li
              key={t.name}
              className="group relative w-full max-w-[340px] lg:max-w-none lg:w-[300px] lg:[&:not(:first-child)]:-ml-10"
              style={{ zIndex: i + 1 }}
            >
              <article
                className={`flex h-full flex-col gap-5 rounded-2xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-hover:!rotate-0 group-hover:!translate-y-[-12px] group-hover:z-50 ${
                  t.variant === "dark"
                    ? "bg-[#141414] text-white ring-1 ring-white/10"
                    : "bg-white text-[#070606]"
                }`}
                style={{
                  transform: visible
                    ? `rotate(${t.rotation}deg) translateY(0)`
                    : `rotate(${t.rotation}deg) translateY(327px)`,
                  opacity: visible ? 1 : 0,
                  transitionProperty: "transform, opacity, box-shadow",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <header className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-base font-semibold tracking-[-0.02em]">{t.name}</div>
                    <div className={`text-xs ${t.variant === "dark" ? "text-white/55" : "text-[#515151]"}`}>
                      {t.role}
                    </div>
                  </div>
                </header>
                <h3 className="text-xl font-semibold leading-[1.25] tracking-[-0.02em]">
                  {t.title}
                </h3>
                <p className={`text-sm leading-[1.55] ${t.variant === "dark" ? "text-white/65" : "text-[#515151]"}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a range of creative services including UI/UX design, web design, brand identity design, and digital product design to help businesses build a strong online presence.",
  },
  { q: "What tools do you use for design?", a: "Figma, Adobe Creative Suite, and Framer for prototyping." },
  { q: "How long does a design project usually take?", a: "Most projects take between 4–8 weeks depending on scope." },
  { q: "Do you provide responsive design?", a: "Yes, every design we ship is fully responsive across all devices." },
  { q: "Can I request revisions during the project?", a: "Absolutely — revisions are part of our collaborative process." },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="flex flex-col items-center gap-16 bg-white px-6 py-28 lg:px-20">
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex items-center justify-center gap-[10px] rounded-lg bg-[#f5f5f5] px-[14px] py-2">
          <BrandMark size={24} />
          <span className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-black">
            FAQ
          </span>
        </div>
        <h2 className="max-w-[650px] text-center text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
          Answers to{" "}
          <span className={`${serif} text-[#070606]/50`}>your most</span> common questions
        </h2>
        <p className="max-w-[617px] text-center text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
          Find answers to some of the most common questions about our design services process and
          collaboration. This section helps you quickly understand how we work.
        </p>
      </div>

      <div className="flex w-full max-w-[900px] flex-col gap-6 bg-[#f5f5f5] p-8">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="block w-full rounded-[10px] bg-white px-6 py-4 text-left transition"
            >
              <div className="flex items-center justify-between gap-16">
                <span className="text-[clamp(18px,1.8vw,26px)] font-medium leading-[1.5] tracking-[-0.075em] text-black">
                  {f.q}
                </span>
                <span className="grid size-[54px] shrink-0 place-items-center">
                  <span className="grid size-[38px] place-items-center rounded-full bg-[#070606] text-white">
                    {isOpen ? <Minus className="size-4" strokeWidth={2.5} /> : <Plus className="size-4" strokeWidth={2.5} />}
                  </span>
                </span>
              </div>
              <div
                className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {f.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-white p-[30px]">
      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-[20px] bg-[#070606] px-6 py-28 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center justify-center gap-[10px] rounded-lg bg-white/[0.04] px-[14px] py-2">
            <BrandMark size={24} dark={false} />
            <span className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-white">
              CTA
            </span>
          </div>
          <h2 className="max-w-[720px] text-[clamp(36px,5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-white">
            Create a <span className={`${serif} text-white/50 whitespace-nowrap`}>brand that stands</span>{" "}
            the test of time
          </h2>
          <p className="max-w-[665px] text-base font-medium leading-[1.5] tracking-[-0.075em] text-white">
            Ready to bring your ideas to life with creative and impactful design. Let's collaborate
            to create modern, user-focused digital experiences that help your brand stand out and
            connect.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-[80px] bg-white px-6 text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#070606] shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Pages", links: ["Home", "About Us", "Services", "Projects", "Blog"] },
    { title: "Pages", links: ["Blog Details", "Projects Details", "Services Details", "Pricing"] },
    { title: "Information", links: ["Book a call", "Instagram", "LinkedIn", "Twitter"] },
    { title: "Inner Pages", links: ["404", "Licenses", "Changelog", "Style Guide"] },
  ];
  return (
    <footer className="relative overflow-hidden bg-foreground px-6 pb-8 pt-28 text-background lg:px-20">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo light />
            <p className="max-w-sm text-[28px] font-semibold leading-[1.2] tracking-[-0.03em]">
              Social media that <span className={`${serif} text-background/50`}>drives<br />real</span> results
            </p>
            <p className="text-base text-background/80">Built for creators, businesses and brands.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {cols.map((c, i) => (
              <div key={i} className="flex flex-col gap-5">
                <h4 className="text-2xl font-semibold tracking-[-0.02em]">{c.title}</h4>
                <ul className="space-y-3 text-base text-background/85">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-background">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <div className="mt-6 rounded-lg bg-white/5 px-6 py-4 text-center text-base text-background/80">
          Design & Developed By Airnova — License | Powered By Airdute LLC
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        className={`${serif} pointer-events-none mt-12 select-none overflow-hidden text-center font-semibold leading-none tracking-[-0.075em] text-background`}
        style={{ fontSize: "clamp(120px, 28vw, 420px)" }}
      >
        Airnova
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <Hero />
      <Benefits />
      <Services />
      <Projects />
      <Stats />
      <Solution />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
