import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cta } from "@/components/site/Cta";
import { Faq } from "@/components/site/Faq";
import { serif } from "@/components/site/shared";

import hero from "@/assets/services-detail/hero.png.asset.json";
import img205 from "@/assets/services-detail/img-205.png.asset.json";
import img204 from "@/assets/services-detail/img-204.png.asset.json";
import img208 from "@/assets/services-detail/img-208.png.asset.json";
import img207 from "@/assets/services-detail/img-207.png.asset.json";
import img206 from "@/assets/services-detail/img-206.png.asset.json";

type Service = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  hero: string;
  pullQuote: string;
  galleryA: [string, string];
  galleryB: [string, string];
  sectionOne: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  sectionTwo: {
    heading: string;
    paragraphs: string[];
    review: {
      quote: string;
      name: string;
      role: string;
    };
    subHeading: string;
    bullets: string[];
    paragraphsAfter: string[];
  };
  closing: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
};

const BASE: Service = {
  slug: "branding-identity",
  title: "Branding & Identity",
  date: "March 2, 2026",
  readTime: "9 min read",
  hero: hero.url,
  pullQuote:
    "“Design is not just what it looks like and feels like. Design is how it works.”",
  galleryA: [img205.url, img204.url],
  galleryB: [img208.url, img207.url],
  sectionOne: {
    heading: "Branding",
    paragraphs: [
      "Visual storytelling taps into the brain’s natural preference for processing images over text. It creates an immersive experience where audiences not only see but feel your brand’s essence. By weaving stories through visuals, brands can convey complex ideas quickly and effectively, breaking down barriers of language or cultural differences. This method transforms passive viewers into engaged participants, encouraging deeper connections and lasting impressions.",
      "Crafting a powerful visual story requires more than just pretty pictures. It involves intentional choices about color palettes, typography, imagery style, and sequencing to create a cohesive narrative flow. Consistency across these elements strengthens brand recognition and reinforces the story’s core message. Authenticity is also crucial—audiences respond best when visuals reflect genuine values and real experiences rather than polished but impersonal marketing.",
    ],
    bullets: [
      "Use colors that evoke your brand’s personality and mood.",
      "Choose imagery that aligns with your audience’s aspirations and lifestyle.",
      "Maintain consistent style and tone to build trust and familiarity.",
    ],
  },
  sectionTwo: {
    heading: "Prototyping",
    paragraphs: [
      "Integrating visual storytelling into your brand strategy starts with understanding your audience’s desires, challenges, and dreams. From there, design content that speaks directly to their experience—whether through social media posts, videos, website graphics, or packaging. Experiment with formats like infographics, animations, or behind-the-scenes glimpses to keep stories fresh and engaging. Monitor feedback and adjust visuals based on what resonates most, creating a dynamic dialogue that evolves with.",
      "Emotions are the gateway to memory and decision-making. When your brand’s visual story evokes feelings—whether it’s joy, nostalgia, trust, or excitement—it becomes more than just an advertisement; it becomes an experience. Visual elements like facial expressions, color psychology, and dynamic movement can all trigger emotional responses that help your audience relate to your brand on a deeper level. This emotional connection not only influences purchase decisions but also turns customers into passionate advocates.",
      "To ensure your visual storytelling efforts are effective, it’s important to measure their impact through key performance indicators (KPIs). Engagement metrics such as likes, shares, comments, and time spent on content indicate how well your visuals resonate with your audience. Additionally, tracking conversion rates, brand recall, and customer feedback provides insight into how storytelling influences behavior and perception. Using these analytics, brands can continually optimize their visual narratives for greater influence and ROI.",
    ],
    review: {
      quote:
        "“The team delivered a clean and modern design that perfectly represents our brand. The entire process was smooth and professional.”",
      name: "Daniel Smith",
      role: "Co-Founder",
    },
    subHeading: "Creative Boundaries",
    bullets: [
      "Track social media engagement to gauge audience reaction and reach.",
      "Use A/B testing to compare different visual approaches and messaging.",
      "Collect qualitative feedback through surveys or focus groups for deeper insights.",
    ],
    paragraphsAfter: [
      "Creative boundaries are not limitations—they are frameworks that help ideas grow with more clarity and purpose. When designers set meaningful boundaries, it allows them to focus on what truly matters while avoiding unnecessary complexity. Constraints such as brand guidelines, design systems, time limits, or project goals can actually spark innovation rather than restrict it.",
      "Instead of viewing constraints as obstacles, treat them as guiding forces. They bring structure to the creative process and help transform abstract concepts into practical, impactful results. Creativity thrives when direction and freedom work together.",
    ],
  },
  closing: {
    heading: "Leveraging Technology for Enhanced Storytelling",
    paragraphs: [
      "Advancements in technology have opened new doors for brands to tell richer, more immersive stories. Tools like augmented reality (AR), virtual reality (VR), and interactive web design enable audiences to participate actively in brand narratives. These experiences create memorable moments that differentiate your brand in crowded markets. Incorporating these cutting-edge formats alongside traditional visuals ensures your storytelling stays fresh, innovative, and captivating.",
    ],
    bullets: [
      "Explore AR filters or VR experiences to create interactive brand moments.",
      "Use animation and motion graphics to add dynamism and capture attention.",
      "Implement responsive design for seamless storytelling across devices.",
    ],
  },
};

function stub(slug: string, title: string, heroUrl: string): Service {
  return { ...BASE, slug, title, hero: heroUrl };
}

const SERVICES: Record<string, Service> = {
  "brand-identity-design": stub("brand-identity-design", "Brand Identity Design", hero.url),
  "creative-consulting": stub("creative-consulting", "Creative Consulting", img205.url),
  "prototype-wireframing": stub("prototype-wireframing", "Prototype & Wireframing", img204.url),
  "e-commerce-design": stub("e-commerce-design", "E-commerce Design", img206.url),
  "dashboard-saas-design": stub("dashboard-saas-design", "Dashboard & SaaS Design", img207.url),
  "graphic-design": stub("graphic-design", "Graphic Design", img208.url),
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} — Airnova` : "Service — Airnova";
    const description = s?.sectionOne.paragraphs[0].slice(0, 155) ?? "Airnova service detail.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s ? [{ property: "og:image", content: s.hero }, { name: "twitter:image", content: s.hero }] : []),
      ],
    };
  },
  component: ServiceDetailsPage,
});

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col gap-4 text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161]">
      {items.map((b) => (
        <li key={b} className="ml-6 list-disc">
          {b}
        </li>
      ))}
    </ul>
  );
}

function ReviewCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="w-full rounded-[20px] bg-[#f5f5f5] p-6">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-6 fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
          ))}
        </div>
        <p className="text-[clamp(22px,2.2vw,28px)] font-semibold leading-[1.35] tracking-[-0.065em] text-[#070606]">
          {quote}
        </p>
        <div className="flex items-center gap-4 pt-2 text-[20px] font-medium leading-[1.5] tracking-[-0.075em]">
          <span className="text-[#070606]">{name}</span>
          <span className="text-[#c5c5c5]">×</span>
          <span className="text-[#616161] text-[16px]">{role}</span>
        </div>
      </div>
    </div>
  );
}

function ServiceDetailsPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-foreground antialiased">
      <Nav />
      <section className="bg-white py-16 lg:py-28">
        <div className="container-x flex flex-col items-center gap-16 lg:gap-20">
          {/* Header */}
          <div className="flex w-full flex-col gap-12">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex items-center gap-6 text-[18px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161] sm:text-[20px]">
                <span>{service.date}</span>
                <span className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-[#616161]" />
                  {service.readTime}
                </span>
              </div>
              <h1 className="text-[clamp(40px,7vw,80px)] font-semibold leading-[1.1] tracking-[-0.065em] text-black">
                {service.title}
              </h1>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#f5f5f5] lg:aspect-auto lg:h-[700px]">
              <img src={service.hero} alt={service.title} className="absolute inset-0 size-full object-cover" />
            </div>
          </div>

          {/* Pull quote */}
          <p className={`${serif} w-full text-[clamp(32px,4.5vw,56px)] font-medium italic leading-[1.15] tracking-[-0.04em] text-[#070606]`}>
            {service.pullQuote}
          </p>

          {/* Section One */}
          <div className="flex w-full max-w-[800px] flex-col gap-8 self-start">
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#111418]">
              {service.sectionOne.heading}
            </h2>
            {service.sectionOne.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161]">
                {p}
              </p>
            ))}
            <Bullets items={service.sectionOne.bullets} />
          </div>

          {/* Gallery A - asymmetric */}
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:aspect-auto sm:h-[700px] sm:flex-[859]">
              <img src={service.galleryA[0]} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="relative aspect-[8/5] w-full overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:aspect-auto sm:h-[700px] sm:flex-[412]">
              <img src={service.galleryA[1]} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
          </div>

          {/* Section Two */}
          <div className="flex w-full max-w-[800px] flex-col gap-8 self-start">
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#111418]">
              {service.sectionTwo.heading}
            </h2>
            {service.sectionTwo.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161]">
                {p}
              </p>
            ))}
            <ReviewCard {...service.sectionTwo.review} />
            <h3 className="mt-4 text-[clamp(28px,4.5vw,48px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#111418]">
              {service.sectionTwo.subHeading}
            </h3>
            <Bullets items={service.sectionTwo.bullets} />
            {service.sectionTwo.paragraphsAfter.map((p, i) => (
              <p key={i} className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161]">
                {p}
              </p>
            ))}
          </div>

          {/* Gallery B - equal split */}
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            {service.galleryB.map((src, i) => (
              <div key={i} className="relative aspect-[8/5] w-full overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:aspect-auto sm:h-[700px] sm:flex-1">
                <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="flex w-full max-w-[800px] flex-col gap-8 self-start">
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.2] tracking-[-0.065em] text-[#111418]">
              {service.closing.heading}
            </h2>
            {service.closing.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-[#616161]">
                {p}
              </p>
            ))}
            <Bullets items={service.closing.bullets} />
          </div>

          {/* Back button */}
          <Link
            to="/services"
            className="inline-flex h-12 items-center justify-center self-start rounded-full bg-[#070606] px-6 py-4 text-[16px] font-medium leading-[1.5] tracking-[-0.075em] text-white shadow-[0_4px_2px_rgba(0,0,0,0.16)] transition-transform hover:-translate-x-0.5"
          >
            Back to Services
          </Link>
        </div>
      </section>
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}