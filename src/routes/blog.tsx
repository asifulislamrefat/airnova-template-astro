import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cta } from "@/components/site/Cta";
import { Faq } from "@/components/site/Faq";
import { Pill, serif } from "@/components/site/shared";

import img1 from "@/assets/blog-1-robot-eyes.png.asset.json";
import img2 from "@/assets/blog-2-cpu.png.asset.json";
import img3 from "@/assets/blog-3-camera.png.asset.json";
import img4 from "@/assets/blog-4-airpods.png.asset.json";
import img5 from "@/assets/blog-5-off-button.png.asset.json";
import img6 from "@/assets/blog-6-pen-tool.png.asset.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Airnova" },
      {
        name: "description",
        content:
          "Insights, ideas, and creative inspiration on design, branding, and digital experiences from the Airnova team.",
      },
      { property: "og:title", content: "Blog — Airnova" },
      {
        property: "og:description",
        content:
          "Insights, ideas, and creative inspiration on design, branding, and digital experiences.",
      },
    ],
  }),
  component: BlogPage,
});

type Post = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const POSTS: Post[] = [
  {
    title: "How to create content that actually converts",
    excerpt:
      "Stop creating content that gets likes but doesn't drive sales — here's what actually works.",
    date: "Mar : 26",
    image: img1.url,
  },
  {
    title: "Where Creativity Meets Strategy",
    excerpt: "We design solutions that are both visually stunning and purpose-driven.",
    date: "Mar : 26",
    image: img2.url,
  },
  {
    title: "Explore the Future of Digital Design",
    excerpt:
      "Where creativity and technology come together to shape the experiences of tomorrow.",
    date: "Mar : 26",
    image: img3.url,
  },
  {
    title: "Innovative Thinking for Digital Success",
    excerpt:
      "We believe that innovative thinking drives digital success — by combining creativity and strategy.",
    date: "Mar : 26",
    image: img4.url,
  },
  {
    title: "Creative Tips for Modern Designers",
    excerpt:
      "From mastering UI/UX principles to exploring the latest design trends and tools, these insights help designers.",
    date: "Mar : 26",
    image: img5.url,
  },
  {
    title: "Your Source for Design Inspiration",
    excerpt:
      "Discover a curated collection of ideas, trends and insights to fuel your creativity. Whether you're a designer.",
    date: "Mar : 26",
    image: img6.url,
  },
];

function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col gap-6">
      <Link
        to="/blog"
        className="relative block aspect-[4/5] overflow-hidden rounded-[20px] bg-[#f5f5f5]"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex items-center gap-4 rounded-[10px] bg-[#f5f5f5] px-6 py-4">
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.065em] text-black sm:text-[24px]">
            {post.title}
          </h3>
          <p className="text-[15px] font-medium leading-[1.5] tracking-[-0.075em] text-[#515151] sm:text-base">
            {post.excerpt}
          </p>
        </div>
        <div className="flex h-full flex-col items-end justify-between gap-6 self-stretch">
          <p className="whitespace-nowrap text-sm font-medium leading-[1.5] tracking-[-0.04em] text-[#515151] sm:text-base">
            {post.date}
          </p>
          <ArrowUpRight
            className="size-5 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.6}
          />
        </div>
      </div>
    </article>
  );
}

function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-foreground antialiased">
      <Nav />
      <section className="bg-white py-16 lg:py-28">
        <div className="container-x flex flex-col items-center gap-12 sm:gap-16">
          <div className="flex flex-col items-center gap-4">
            <Pill>Blog</Pill>
            <h1 className="max-w-[700px] text-center text-[clamp(40px,7vw,80px)] font-semibold leading-[1.1] tracking-[-0.065em] text-black">
              Insights Ideas <span className={`${serif} text-black/50`}>and creative</span> Inspiration
            </h1>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2">
            {POSTS.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
