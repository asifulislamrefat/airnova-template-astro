import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  Star,
  Play,
  Sparkles,
  Palette,
  Lightbulb,
  PenTool,
} from "lucide-react";
import hero1 from "@/assets/hero-1.png.asset.json";
import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import brandLogo1 from "@/assets/brand-logo-1.png.asset.json";
import brandLogo2 from "@/assets/brand-logo-2.png.asset.json";
import brandLogo3 from "@/assets/brand-logo-3.png.asset.json";
import brandLogo4 from "@/assets/brand-logo-4.png.asset.json";

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
      className="inline-flex items-center justify-center rounded-[7.6px] shadow-sm"
      style={{
        width: size,
        height: size,
        background: dark ? "var(--foreground)" : "var(--surface)",
      }}
    >
      <Sparkles className="size-[55%]" style={{ color: dark ? "var(--brand)" : "var(--foreground)" }} />
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 ring-1 ring-black/5">
      <BrandMark size={24} />
      <span className="text-sm font-medium text-foreground">{children}</span>
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="bg-surface">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 lg:px-20">
        <Logo />
        <nav className="hidden items-center gap-12 text-base font-medium text-foreground md:flex">
          <a href="#studio">Studio</a>
          <a href="#projects" className="inline-flex items-start gap-1">
            Projects <sup className="text-[10px] font-semibold text-foreground/50">15</sup>
          </a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <button aria-label="Menu" className="flex h-10 w-14 flex-col justify-between py-1.5">
          <span className="block h-px w-full bg-foreground" />
          <span className="block h-px w-full bg-foreground" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-surface px-6 pb-20 pt-8 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[735fr_513fr]">
        {/* Left card */}
        <div className="flex h-full flex-col justify-between rounded-[20px] bg-background p-8">
          <div className="flex flex-col gap-8 pt-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 fill-foreground text-foreground" />
                ))}
              </div>
              <span className="text-base font-medium">Rated 4.9/5</span>
            </div>
            <h1 className="text-[clamp(48px,7vw,80px)] font-semibold leading-[1.05] tracking-[-0.065em] text-foreground">
              Creative <span className={`${serif} text-foreground/40`}>designer &amp; digital</span> experience.
            </h1>
            <p className="max-w-[535px] text-base font-medium leading-[1.5] text-muted-foreground">
              I create modern and visually compelling digital experiences that help brands stand
              out. From user-focused UI/UX design to clean and responsive web interfaces my goal is
              to transform.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background shadow-[0_4px_2px_rgba(0,0,0,0.16)] transition hover:bg-foreground/90"
              >
                Get in touch
              </a>
              <a href="#services" className="inline-flex items-center gap-2 text-base font-medium">
                What we do <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>

          {/* Logo strip */}
          <div className="mt-12 grid grid-cols-4 gap-px overflow-hidden rounded-2xl bg-black/5">
            {["/2027", "/2027", "/2027", "/2027"].map((label, i) => (
              <div
                key={i}
                className="flex aspect-square flex-col items-center justify-center gap-2 bg-background"
              >
                <div className={`${serif} text-2xl font-semibold text-foreground/80`}>brand</div>
                <span className="text-[11px] tracking-wider text-foreground/60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right portrait */}
        <div
          className="min-h-[500px] overflow-hidden rounded-[20px] bg-cover bg-center lg:min-h-[750px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-background px-6 py-28 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[567fr_649fr]">
        <div className="flex flex-col gap-8">
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
              alt="Working on design"
              className="aspect-[567/399] w-full object-cover"
            />
            <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="size-4 text-[var(--brand)]" /> February Sale
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BrandMark size={24} />
              <span className="text-sm font-medium tracking-wide">ESR — 2029</span>
            </div>
            <p className="text-base text-muted-foreground">
              An engaging user experience ensures that visitors can interact with your website
              easily and enjoyably. With intuitive navigation
            </p>
            <h3 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.04em]">
              Engaging <span className={`${serif} text-foreground/40`}>User Experience</span>
            </h3>
            <a
              href="#contact"
              className="mt-2 inline-flex h-12 w-fit items-center gap-3 rounded-full bg-foreground px-6 text-base font-medium text-background"
            >
              Join Now! <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-[clamp(40px,5.5vw,64px)] font-semibold leading-[1.1] tracking-[-0.04em]">
              Explore our <span className={`${serif} text-foreground/40`}>flexible</span> of activity.
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {["High-quality visual elements", "Flexible Design System"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-base font-medium">
                  <span className="grid size-8 place-items-center rounded-full bg-foreground text-background">
                    <Check className="size-4" />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] bg-surface">
            <div className="border-b border-black/5 p-8">
              <div className="flex items-start justify-between gap-6">
                <h4 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em]">
                  Responsive <span className={`${serif} text-foreground/40`}>for All Devices</span>
                </h4>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="mt-4 text-base text-muted-foreground">
                Your website will look and perform perfectly on every device including desktops
                tablets and smartphones. The design adapts smoothly to different screen sizes
              </p>
            </div>
            {[
              "Conversion-Focused Design",
              "Brand Identity Design",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center justify-between gap-6 border-b border-black/5 px-8 py-6 last:border-b-0"
              >
                <h4 className="text-[28px] font-semibold tracking-[-0.03em]">
                  {t.split(" ")[0]}{" "}
                  <span className={`${serif} text-foreground/40`}>{t.split(" ").slice(1).join(" ")}</span>
                </h4>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: PenTool,
      title: "Brand Identity Design",
      desc: "Designing logos color schemes and visuals that reflect your brand.",
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      desc: "Providing guidance to improve design strategy and digital presence.",
    },
    {
      icon: Palette,
      title: "Prototype & Wireframing",
      desc: "Building interactive prototypes to visualize your digital products.",
    },
  ];
  return (
    <section id="services" className="bg-surface px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>Our Services</Pill>
          <h2 className="mt-4 text-[clamp(40px,5.5vw,64px)] font-semibold leading-[1.1] tracking-[-0.04em]">
            Design solutions that make your <span className={`${serif} text-foreground/40`}>brand stand</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            We create thoughtful and visually compelling design solutions that help your brand stand
            out in a competitive digital world. By combining creativity with strategy our designs
          </p>
        </div>

        <div className="mt-16 grid gap-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-12 rounded-[20px] bg-background p-8 transition hover:bg-foreground hover:text-background"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-surface text-foreground group-hover:bg-white/10 group-hover:text-background">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-base text-muted-foreground group-hover:text-background/70">
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
    <section id="projects" className="bg-background px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1320px] rounded-[24px] bg-surface px-6 py-20 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>Our Project</Pill>
          <h2 className="mt-4 text-[clamp(40px,5.5vw,64px)] font-semibold leading-[1.1] tracking-[-0.04em]">
            A showcase of my <span className={`${serif} text-foreground/40`}>latest design</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Explore a selection of our creative projects that showcase our passion for design and
            innovation. Each project reflects our commitment to delivering .
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {items.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[20px] bg-black/5">
                <img
                  src={projectImages[i]}
                  alt={p.title}
                  className="aspect-[636/500] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-2">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">2026 — 32</p>
                </div>
                <span className="text-base font-medium text-muted-foreground">{p.tag}</span>
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
  return (
    <section id="studio" className="bg-surface px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-4xl text-center">
          <Pill>About us</Pill>
          <p className="mt-6 text-[clamp(28px,3.5vw,44px)] font-semibold leading-[1.2] tracking-[-0.03em]">
            We are a creative design team dedicated to crafting modern and{" "}
            <span className={`${serif} text-foreground/40`}>meaningful digital experiences.</span> Our
            focus is on combining creativity strategy and user-centered design to deliver visually
            compelling and highly functional solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[20px] bg-black/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-col justify-between bg-surface p-6">
              <div>
                <div className="text-[56px] font-semibold leading-none tracking-[-0.04em]">{s.v}</div>
                <div className="mt-4 h-px w-full bg-black/10" />
              </div>
              <div className="mt-16 text-base text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[20px]">
          <img
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1600&q=80"
            alt="Showreel"
            className="aspect-[1280/700] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-6 bg-gradient-to-t from-black/40 to-transparent pb-20">
            <button
              aria-label="Play showreel"
              className="grid size-[140px] place-items-center rounded-full bg-white text-foreground shadow-2xl"
            >
              <Play className="size-10 fill-foreground" />
            </button>
            <span className="text-2xl font-semibold tracking-[-0.02em] text-white">
              Watch the Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-background px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-4xl text-center text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.15] tracking-[-0.035em]">
          Crafting unique strategies that turn{" "}
          <span className={`${serif} text-foreground/40`}>visions into powerful results</span>
        </h2>

        <div className="mt-16 grid gap-2 lg:grid-cols-[366fr_532fr_366fr]">
          {/* Left card */}
          <div className="flex flex-col justify-between rounded-[20px] bg-surface p-8 min-h-[500px]">
            <div className="flex items-start justify-between">
              <div className="h-24 w-36 overflow-hidden rounded-xl bg-black/10">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80"
                  alt="Market research"
                  className="size-full object-cover"
                />
              </div>
              <Plus className="size-6 text-foreground/60" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Market research</h3>
              <p className="mt-3 text-base text-muted-foreground">
                We work closely to turn your goals into digital experiences that combine strategy
                design and technology.
              </p>
            </div>
          </div>

          {/* Center image */}
          <div className="overflow-hidden rounded-[20px] bg-black/10 min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80"
              alt="Solution"
              className="size-full object-cover"
            />
          </div>

          {/* Right card */}
          <div className="flex flex-col justify-between rounded-[20px] bg-foreground p-8 text-background min-h-[500px]">
            <div>
              <div className="flex items-start justify-between">
                <div className="text-[56px] font-semibold leading-none tracking-[-0.04em]">100%</div>
                <Plus className="size-6 text-background/60" />
              </div>
              <div className="mt-4 text-2xl font-semibold">Satisfied client</div>
              <p className="mt-3 text-base text-background/70">
                A seamless process with a polished fast and easy-to-manage result
              </p>
            </div>
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/100?img=12",
                "https://i.pravatar.cc/100?img=32",
                "https://i.pravatar.cc/100?img=47",
                "https://i.pravatar.cc/100?img=58",
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-14 rounded-full ring-2 ring-foreground"
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
      top: true,
    },
    {
      name: "Sarah Johnson",
      role: "Founder",
      text: "Their creativity and professionalism truly stand out. Our website looks ",
      avatar: "https://i.pravatar.cc/120?img=32",
      top: false,
    },
    {
      name: "David Lee",
      role: "Marketing Manager",
      text: "They understood our vision perfectly and delivered a design that elevated our brand identity.",
      avatar: "https://i.pravatar.cc/120?img=47",
      top: true,
    },
  ];
  return (
    <section className="bg-surface px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <Pill>Testimonials</Pill>
          <h2 className="max-w-3xl text-[clamp(32px,4vw,48px)] font-semibold leading-[1.15] tracking-[-0.03em]">
            Client Experiences That Highlight Our{" "}
            <span className={`${serif} text-foreground/40`}>commitment to quality</span> and Innovation
          </h2>
        </div>

        <div className="mt-16 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Rating card */}
          <div className="flex flex-col justify-between rounded-[20px] bg-background p-6">
            <div className="flex items-start gap-4">
              <div className="text-[56px] font-semibold leading-none tracking-[-0.04em]">4.9<span className="text-foreground/40">/5</span></div>
              <p className="text-sm text-muted-foreground">
                We've delivered 56+ Projects that help companies generate
              </p>
            </div>
            <div className="space-y-3">
              <div className={`${serif} text-xl font-semibold`}>Airnova</div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[12, 32, 47, 58].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/80?img=${i}`}
                      alt=""
                      className="size-7 rounded-full ring-2 ring-background"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-foreground text-foreground" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Trusted by clients worldwide</span>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex h-12 w-full items-center justify-between rounded-full bg-foreground px-6 text-base font-medium text-background"
              >
                Leave a review <ArrowUpRight className="size-5" />
              </a>
            </div>
          </div>

          {reviews.map((r) => (
            <div
              key={r.name}
              className={`flex flex-col justify-between rounded-[20px] bg-background p-6 ${
                r.top ? "" : "lg:flex-col-reverse"
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="size-10 rounded-xl object-cover" />
                <div>
                  <div className="text-base font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className={`${serif} text-lg leading-[1.3] text-foreground/80`}>"{r.text}"</p>
              </div>
            </div>
          ))}
        </div>
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
    <section className="bg-background px-6 py-28 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>FAQ</Pill>
          <h2 className="mt-4 text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Answers to your most <span className={`${serif} text-foreground/40`}>common questions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Find answers to some of the most common questions about our design services process and
            collaboration. This section helps you quickly understand how we work.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3 rounded-[24px] bg-surface p-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="block w-full rounded-2xl bg-background px-6 py-5 text-left transition"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[clamp(18px,2vw,24px)] font-semibold tracking-[-0.02em]">
                    {f.q}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-foreground text-background">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </div>
                {isOpen && <p className="mt-4 max-w-2xl text-base text-muted-foreground">{f.a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-background px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-[1380px] flex-col items-center gap-8 rounded-[20px] bg-foreground px-6 py-28 text-center text-background">
        <Pill>CTA</Pill>
        <h2 className="max-w-3xl text-[clamp(36px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.035em]">
          Create a <span className={`${serif} text-background/50`}>brand that stands</span> the test of time
        </h2>
        <p className="max-w-2xl text-base text-background/70">
          Ready to bring your ideas to life with creative and impactful design. Let's collaborate to
          create modern, user-focused digital experiences that help your brand stand out and connect.
        </p>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-background px-6 text-base font-medium text-foreground"
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
              Social media that <span className={`${serif} text-background/50`}>drives real</span> results
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
          Design &amp; Developed By Airnova — License | Powered By Webflow
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
