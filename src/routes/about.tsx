import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Minus, Plus, Search, Map, PenTool, Star } from "lucide-react";

import { BrandMark, Pill, serif } from "@/components/site/shared";
import { Nav } from "@/components/site/Nav";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

import avatar10 from "@/assets/avatar-10.png.asset.json";
import avatar11 from "@/assets/avatar-11.png.asset.json";
import avatar12 from "@/assets/avatar-12.png.asset.json";
import avatar13 from "@/assets/avatar-13.png.asset.json";
import aboutLogoCircle from "@/assets/about-logo-circle.svg.asset.json";
import aboutLogoLuyu from "@/assets/about-logo-luyu.svg.asset.json";
import aboutLogoLoqo from "@/assets/about-logo-loqo.svg.asset.json";
import aboutLogoInfinity from "@/assets/about-logo-infinity.svg.asset.json";
import aboutLogoIpsum from "@/assets/about-logo-ipsum.svg.asset.json";
import aboutLogoN7 from "@/assets/about-logo-n7.png.asset.json";
import heroPortrait from "@/assets/about-hero-portrait.png.asset.json";

const HERO_PORTRAIT = heroPortrait.url;
const RESULTS_IMG =
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80";
const CREATIVE_IMG =
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80";
const TEAM_1 =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80";
const TEAM_2 =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80";
const TEAM_3 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80";
const TEAM_4 =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Airnova" },
      {
        name: "description",
        content:
          "We're strategists, creators and growth experts who believe social media should drive real business results. Meet the team behind Airnova.",
      },
      { property: "og:title", content: "About — Airnova" },
      {
        property: "og:description",
        content:
          "Meet the strategists and creators behind Airnova — a studio designing brands that inspire and endure.",
      },
      { property: "og:image", content: HERO_PORTRAIT },
      { name: "twitter:image", content: HERO_PORTRAIT },
    ],
  }),
  component: AboutPage,
});

/* ---------- Hero ---------- */

function AboutHero() {
  const avatars = [avatar10.url, avatar11.url, avatar12.url, avatar13.url];
  return (
    <section className="overflow-clip bg-white px-[5%] py-14 lg:h-[900px] lg:px-0 lg:py-0">
      <div className="mx-auto w-full max-w-[1280px] lg:w-[calc(100%_-_160px)] lg:pt-14">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:justify-between lg:gap-0">
          <div className="flex flex-col gap-12 lg:w-[48%] lg:shrink-0 lg:pt-20 xl:w-[623px]">
            <div className="flex flex-col items-start gap-4">
              <Pill>About Us</Pill>
              <h1 className="text-[clamp(40px,8vw,80px)] font-semibold leading-[1.1] tracking-[-0.065em] text-black">
                Designing brands that{" "}
                <span className={`${serif} text-black/50`}>inspire and</span> endure
              </h1>
              <p className="max-w-[600px] text-base lg:text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                We're strategists, creators and growth experts who believe social media should drive
                real business results — not just look pretty. Every brand deserves a social
                presence that actually works.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className={`size-[57px] rounded-[10px] border border-white object-cover ${
                      i < avatars.length - 1 ? "-mr-5" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-[#FF2626] text-[#FF2626]" />
                  ))}
                </div>
                <p className="text-base font-semibold leading-[1.4] tracking-[-0.05em] text-black">
                  Trusted by <span className="text-black/40">clients worldwide</span>
                </p>
              </div>
            </div>
          </div>

          {/* Portrait + floating award pills */}
          <div className="relative w-full lg:h-[1049.563px] lg:w-[47%] lg:shrink-0 xl:w-[600px]">
            <div className="aspect-[600/700] w-full overflow-hidden rounded-[20px] lg:aspect-auto lg:h-full">
              <img
                src={HERO_PORTRAIT}
                alt="Airnova founder portrait"
                className="w-full object-contain object-[center_bottom]"
              />
            </div>
            <AwardPill className="left-4 top-[48%] w-[236px] lg:left-[56%] lg:top-[440px] xl:left-[336px]">
              Best Design Award 2026
            </AwardPill>
            <AwardPill className="right-4 top-[60%] w-[201px] lg:left-[9.333%] lg:right-auto lg:top-[563.409px] xl:left-[56px]">
              15+ Years in Design
            </AwardPill>
            <AwardPill className="left-4 bottom-8 w-[250px] lg:left-[53.667%] lg:top-[676px] lg:bottom-auto xl:left-[322px]">
              Global Startup Award 2027
            </AwardPill>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardPill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inline-flex h-11 items-center justify-center rounded-[80px] bg-white/10 px-6 py-2.5 backdrop-blur-[10.4px] ${className}`}
    >
      <ul className="list-disc whitespace-nowrap pl-6 text-sm font-medium leading-[1.5] tracking-[-0.075em] text-white lg:text-base">
        <li>{children}</li>
      </ul>
    </div>
  );
}

/* ---------- Logo grid ---------- */

type LogoItem = { src: string; w: number; h: number };

function LogoGrid() {
  const logos: LogoItem[] = [
    { src: aboutLogoCircle.url, w: 120, h: 120 },
    { src: aboutLogoLuyu.url, w: 180, h: 72 },
    { src: aboutLogoLoqo.url, w: 180, h: 40.909 },
    { src: aboutLogoInfinity.url, w: 140, h: 53.846 },
    { src: aboutLogoIpsum.url, w: 150, h: 35.503 },
    { src: aboutLogoN7.url, w: 120, h: 77.288 },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Total scroll length: one viewport of "settle" + one viewport per reveal.
  const scrollVh = logos.length * 100;
  return (
    <section
      ref={containerRef}
      className="relative bg-[#f5f5f5]"
      style={{ height: `${scrollVh}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center py-10 lg:py-16">
        <div className="mx-auto grid w-[calc(100%_-_32px)] max-w-[1280px] grid-cols-2 gap-2 md:grid-cols-3 lg:w-[calc(100%_-_160px)]">
          {logos.map((logo, i) => (
            <LogoTile
              key={i}
              logo={logo}
              index={i}
              total={logos.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoTile({
  logo,
  index,
  total,
  progress,
}: {
  logo: LogoItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Tile 0 is visible from the start. Tiles 1..N-1 reveal sequentially as the
  // user scrolls through the sticky section.
  const step = 1 / total;
  const start = index === 0 ? 0 : index * step - step * 0.5;
  const end = index === 0 ? 0.0001 : index * step + step * 0.2;
  const opacity = useTransform(
    progress,
    [Math.max(0, start), Math.min(1, end)],
    [index === 0 ? 1 : 0, 1],
  );
  const y = useTransform(
    progress,
    [Math.max(0, start), Math.min(1, end)],
    [index === 0 ? 0 : 40, 0],
  );
  const scale = useTransform(
    progress,
    [Math.max(0, start), Math.min(1, end)],
    [index === 0 ? 1 : 0.85, 1],
  );
  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-clip rounded-[30px] bg-white p-12 lg:h-[400px] lg:p-20">
      <motion.img
        src={logo.src}
        alt=""
        className="object-contain"
        style={{
          width: logo.w,
          height: logo.h,
          opacity,
          y,
          scale,
        }}
      />
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-base font-semibold leading-[1.4] tracking-[-0.055em] text-[#282828]">
        /2027
      </span>
    </div>
  );
}

/* ---------- Results sections ---------- */

function ResultsBlock({
  reverse = false,
  image,
  badge,
  heading,
  italic,
  trailing,
  description,
  stats,
}: {
  reverse?: boolean;
  image: string;
  badge: string;
  heading: string;
  italic: string;
  trailing?: string;
  description: string;
  stats: { value: string; title: string; sub: string }[];
}) {
  const textCol = (
    <div className="flex flex-col justify-between gap-16 lg:gap-[120px]">
      <div className="flex flex-col gap-8">
        <Pill variant="white">{badge}</Pill>
        <div className="flex flex-col gap-4">
          <h2 className="text-[clamp(36px,6vw,72px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
            {heading} <span className={`${serif} text-[#070606]/50`}>{italic}</span>
            {trailing ? ` ${trailing}` : ""}
          </h2>
          <p className="max-w-[600px] text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {stats.map((s) => (
          <div
            key={s.title}
            className="flex flex-col justify-between gap-8 rounded-[20px] bg-white p-6 lg:p-8"
          >
            <p className="text-[clamp(32px,5vw,48px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
              {s.value}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-[#070606]">
                {s.title}
              </p>
              <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                {s.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const imgCol = (
    <div className="overflow-hidden rounded-[20px] lg:h-[671px]">
      <img src={image} alt="" className="h-full min-h-[420px] w-full object-cover lg:min-h-[671px]" />
    </div>
  );

  return (
    <section className={`bg-[#f5f5f5] py-16 ${reverse ? "lg:pb-28 lg:pt-14" : "lg:py-28"}`}>
      <div
        className={`mx-auto grid w-[calc(100%_-_32px)] max-w-[1280px] items-stretch gap-10 lg:w-[calc(100%_-_160px)] lg:gap-16 ${
          reverse ? "lg:grid-cols-[598fr_618fr]" : "lg:grid-cols-[618fr_598fr]"
        }`}
      >
        {reverse ? (
          <>
            {textCol}
            {imgCol}
          </>
        ) : (
          <>
            {imgCol}
            {textCol}
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

const STEPS = [
  {
    n: "01",
    Icon: Search,
    title: "Research & Discovery",
    body: "We start by understanding your brand goals and target audience to ensure the design aligns perfectly.",
  },
  {
    n: "02",
    Icon: Map,
    title: "Strategy & Planning",
    body: "We create a clear roadmap and design strategy that defines the structure, flow and objectives of the project.",
  },
  {
    n: "03",
    Icon: PenTool,
    title: "Design & Prototyping",
    body: "Our team crafts visually appealing and user-friendly designs, building interactive prototypes.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white px-[10px] py-16 lg:px-[30px] lg:py-28">
      <div className="container-x-inset flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <Pill>How it works</Pill>
          <h2 className="max-w-[650px] text-center text-[clamp(32px,5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
            How We Turn Ideas Into{" "}
            <span className={`${serif} text-black/50`}>creative</span> Results
          </h2>
        </div>
        <div className="grid w-full gap-2 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-12 rounded-[20px] bg-[#f5f5f5] p-6"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-14 place-items-center rounded-[11px] bg-[#070606]">
                  <s.Icon className="size-6 text-white" strokeWidth={1.75} />
                </div>
                <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-black">
                  {s.n}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                  {s.title}
                </h3>
                <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */

const TEAM = [
  { name: "Sophia Bennett", role: "Product Designer", img: TEAM_1 },
  { name: "Liam Anderson", role: "Frontend Developer", img: TEAM_2 },
  { name: "Noah Mitchel", role: "Webflow Developer", img: TEAM_3 },
  { name: "Olivia Parker", role: "Creative Director", img: TEAM_4 },
];

function Team() {
  return (
    <section className="overflow-clip bg-[#f5f5f5] px-[10px] py-16 lg:px-[30px] lg:py-28">
      <div className="container-x-inset flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Pill variant="white">Our Team</Pill>
          <h2 className="max-w-[560px] text-[clamp(32px,5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
            Meet the <span className={`${serif} text-[#070606]/50`}>team behind</span> your success.
          </h2>
          <p className="max-w-[560px] text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
            Our team is made up of passionate designers and creative thinkers who are dedicated to
            delivering exceptional digital experiences.
          </p>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[20px] border-[5px] border-white">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-[400px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[24px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                  {m.name}
                </p>
                <p className="text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (matches Home) ---------- */

const FAQS = [
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
    <section className="bg-white py-16 lg:py-28">
      <div className="container-x flex flex-col items-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4">
          <Pill>FAQ</Pill>
          <h2 className="max-w-[650px] text-center text-[clamp(28px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
            Answers to <span className={`${serif} text-[#070606]/50`}>your most</span> common
            questions
          </h2>
          <p className="max-w-[617px] text-center text-base font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
            Find answers to some of the most common questions about our design services, process
            and collaboration. This section helps you quickly understand how we work.
          </p>
        </div>
        <div className="flex w-full max-w-[900px] flex-col gap-3 bg-[#f5f5f5] p-4 sm:gap-6 sm:p-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? -1 : i)}
                data-no-hover-fx
                className="block w-full cursor-pointer rounded-[10px] bg-white px-6 py-4 text-left transition"
              >
                <div className="flex items-center justify-between gap-8 sm:gap-16">
                  <span className="text-[clamp(16px,1.8vw,26px)] font-medium leading-[1.5] tracking-[-0.075em] text-black">
                    {f.q}
                  </span>
                  <span className="grid size-[38px] sm:size-[54px] shrink-0 place-items-center">
                    <span className="grid size-[28px] sm:size-[38px] place-items-center rounded-full bg-[#070606] text-white">
                      {isOpen ? (
                        <Minus className="size-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="size-4" strokeWidth={2.5} />
                      )}
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
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased">
      <Nav />
      <AboutHero />
      <LogoGrid />
      <ResultsBlock
        image={RESULTS_IMG}
        badge="Client results"
        heading="Delivering"
        italic="results"
        trailing="That Matter"
        description="We focus on creating design solutions that deliver meaningful and measurable results for our clients. By combining creativity with strategic thinking we help brands improve their digital presence and engage."
        stats={[
          { value: "400+", title: "Client Views", sub: "In the first 30 Day" },
          { value: "230%", title: "Engagement", sub: "Compared to Previous month" },
        ]}
      />
      <ResultsBlock
        reverse
        image={CREATIVE_IMG}
        badge="Client results"
        heading="Real Results from Our"
        italic="creative work"
        description="Our creative work is focused on delivering real value and measurable impact for our clients. Through thoughtful design, strategic thinking and attention to detail we help brands improve their digital presence."
        stats={[
          { value: "99%", title: "Client satisfaction", sub: "In the first 30 Day" },
          { value: "15+", title: "Experience", sub: "Years in Design" },
        ]}
      />
      <HowItWorks />
      <Team />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}