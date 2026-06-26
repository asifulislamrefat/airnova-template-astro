import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Palette,
  Lightbulb,
  PenTool,
  ShoppingBag,
  LayoutDashboard,
  ImageIcon,
  ArrowUpRight,
  Star,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cta } from "@/components/site/Cta";
import { Faq } from "@/components/site/Faq";
import { BrandMark, Pill, serif } from "@/components/site/shared";

import avatar10 from "@/assets/avatar-10.png.asset.json";
import avatar11 from "@/assets/avatar-11.png.asset.json";
import avatar12 from "@/assets/avatar-12.png.asset.json";
import avatar13 from "@/assets/avatar-13.png.asset.json";
import team1 from "@/assets/team-1.png.asset.json";
import team2 from "@/assets/team-2.png.asset.json";
import team3 from "@/assets/team-3.png.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Airnova" },
      {
        name: "description",
        content:
          "Brand identity, web and product design services that help your brand stand out in a competitive digital world.",
      },
      { property: "og:title", content: "Services — Airnova" },
      {
        property: "og:description",
        content:
          "Design solutions that make your brand stand — identity, consulting, prototyping, e-commerce, dashboards and graphics.",
      },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const SERVICES: Service[] = [
  {
    title: "Brand Identity Design",
    description: "Designing logos, color schemes and visuals that reflect your brand.",
    Icon: Palette,
  },
  {
    title: "Creative Consulting",
    description: "Providing guidance to improve design strategy and digital presence.",
    Icon: Lightbulb,
  },
  {
    title: "Prototype & Wireframing",
    description: "Building interactive prototypes to visualize your digital products.",
    Icon: PenTool,
  },
  {
    title: "E-commerce Design",
    description: "Designing online stores with a focus on usability, branding and conversions.",
    Icon: ShoppingBag,
  },
  {
    title: "Dashboard & SaaS Design",
    description: "Building clean and efficient interfaces for dashboards and SaaS products.",
    Icon: LayoutDashboard,
  },
  {
    title: "Graphic Design",
    description: "Developing creative graphics, banners and promotional visuals.",
    Icon: ImageIcon,
  },
];

function ServicesHero() {
  return (
    <section className="bg-[#f5f5f5] px-[5%] py-16 lg:px-[80px] lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-2">
          <Pill variant="white">Our Services</Pill>
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="max-w-[864px] text-[clamp(40px,7vw,80px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
              Design solutions that make your{" "}
              <span className={`${serif} text-black/40`}>brand stand</span>
            </h1>
            <p className="max-w-[605px] text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
              We create thoughtful and visually compelling design solutions that help your brand
              stand out in a competitive digital world. By combining creativity with strategy our
              designs
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-12 rounded-[20px] bg-white p-8 lg:gap-16"
            >
              <span
                aria-hidden="true"
                className="grid size-14 place-items-center rounded-[14px] bg-[#070606] text-white"
              >
                <Icon className="size-7" strokeWidth={1.8} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[clamp(22px,2.2vw,28px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#070606]">
                  {title}
                </h3>
                <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarsRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
      ))}
    </div>
  );
}

type Review = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  layout: "name-top" | "name-bottom";
};

const REVIEWS: Review[] = [
  {
    name: "Michael Turner",
    role: "Product Manager",
    quote: "Fast delivery, great communication, and outstanding design work !",
    avatar: team1.url,
    layout: "name-top",
  },
  {
    name: "Sarah Johnson",
    role: "Founder",
    quote: "Their creativity and professionalism truly stand out. Our website looks",
    avatar: team2.url,
    layout: "name-bottom",
  },
  {
    name: "David Lee",
    role: "Marketing Manager",
    quote:
      "They understood our vision perfectly and delivered a design that elevated our brand identity.",
    avatar: team3.url,
    layout: "name-top",
  },
];

function ReviewerHeader({ avatar, name, role }: { avatar: string; name: string; role: string }) {
  return (
    <div className="flex w-full items-center gap-2 rounded bg-white px-4 py-2">
      <div className="h-[38px] w-[41px] overflow-hidden rounded-[5px]">
        <img src={avatar} alt={name} className="size-full object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.075em] text-black">{name}</p>
        <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
          {role}
        </p>
      </div>
    </div>
  );
}

function ReviewQuote({ quote }: { quote: string }) {
  return (
    <div className="flex flex-1 flex-col items-start justify-between gap-6 rounded-lg bg-white p-4">
      <StarsRow />
      <p className="text-[20px] font-semibold leading-[1.3] tracking-[-0.065em] text-black">
        “{quote}”
      </p>
    </div>
  );
}

function Testimonials() {
  const avatars = [avatar10.url, avatar11.url, avatar12.url, avatar13.url];
  return (
    <section className="bg-[#f5f5f5] px-[5%] py-16 lg:px-[80px] lg:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[150px]">
          <div className="shrink-0">
            <Pill variant="white">Testimonials</Pill>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
            Client Experiences That Highlight Our{" "}
            <span className={`${serif} text-black/50`}>commitment to quality</span> and Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {/* Brand / rating card */}
          <div className="flex flex-col justify-between gap-8 rounded-lg bg-white p-4 lg:min-h-[454px]">
            <div className="flex items-center gap-3">
              <p className="whitespace-nowrap text-[56px] font-semibold leading-[1.2] tracking-[-0.065em] text-black">
                4.9
                <span className="text-[32px] text-black/50">/5</span>
              </p>
              <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151]">
                We&rsquo;ve delivered 56+ Projects that help companies generate
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <p className={`${serif} text-[24.85px] font-bold leading-[1.1] tracking-[-0.075em] text-[#070606]`}>
                  Airnova
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center -space-x-[10px]">
                    {avatars.map((src, i) => (
                      <div
                        key={i}
                        className="size-[27px] overflow-hidden rounded-[5px] border-[0.5px] border-white ring-1 ring-white"
                      >
                        <img src={src} alt="" className="size-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1">
                    <StarsRow />
                    <p className="text-[12px] font-semibold leading-[1.4] tracking-[-0.04em] text-black">
                      Trusted by <span className="text-black/40">clients worldwide</span>
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                data-hover-lift
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[80px] bg-[#070606] px-6 text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)]"
              >
                <span className="flex-1 text-left">Leave a review</span>
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Three review cards */}
          {REVIEWS.map((r) => (
            <div key={r.name} className="flex flex-col gap-2 lg:min-h-[454px]">
              {r.layout === "name-top" ? (
                <>
                  <ReviewerHeader avatar={r.avatar} name={r.name} role={r.role} />
                  <ReviewQuote quote={r.quote} />
                </>
              ) : (
                <>
                  <ReviewQuote quote={r.quote} />
                  <ReviewerHeader avatar={r.avatar} name={r.name} role={r.role} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-foreground antialiased">
      <Nav />
      <ServicesHero />
      <Faq />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  );
}