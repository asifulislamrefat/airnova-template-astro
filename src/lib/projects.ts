import thumb1 from "@/assets/Rectangle_7.png.asset.json";
import thumb2 from "@/assets/Rectangle_6.png.asset.json";
import thumb3 from "@/assets/Rectangle_123.png.asset.json";
import thumb4 from "@/assets/Rectangle_8.png.asset.json";
import thumb5 from "@/assets/Rectangle_134.png.asset.json";
import thumb6 from "@/assets/Rectangle_13kmk.png.asset.json";
import thumb7 from "@/assets/Rectangle_9.png.asset.json";
import michael from "@/assets/michael.png.asset.json";

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  secondaryImage: string;
  tertiaryImage: string;
  quaternaryImage: string;
  intro: string;
  summary: string;
  challengeHeadline1: string;
  challengeHeadline2: string;
  challengeBody: string;
  uxHeadline1: string;
  uxHeadline2: string;
  uxBody1: string;
  uxBody2: string;
};

const PROJECT_IMAGES = [
  thumb1.url,
  thumb2.url,
  thumb3.url,
  thumb4.url,
  thumb5.url,
  thumb6.url,
  thumb7.url,
  thumb1.url,
];

export const AUTHOR = {
  name: "Jonson Milno",
  role: "Member of the Team",
  avatar: michael.url,
};

const TEMPLATE = {
  intro:
    "We aimed to bring the brand's vision of authentic interaction to life by focusing on seamless design and a privacy-first user experience.",
  summary:
    "This project reinforced the importance of building user-centered features that offer value beyond aesthetics — especially in social-first products. The launch exceeded initial user-growth targets and the client received positive feedback on the intuitive design and ad-free experience.",
  challengeHeadline1:
    "Designing an ad-free experience meant creating engaging content flows without traditional ads. We achieved this by focusing on rich, visual content and user-driven discovery options.",
  challengeHeadline2:
    "We approach every challenge with creativity and innovation, turning complex ideas into smart digital solutions that drive meaningful results.",
  challengeBody:
    "Every project comes with unique challenges that require creative thinking and innovative solutions. Our team focuses on understanding complex problems, exploring new ideas, and using advanced technology to overcome obstacles. By combining strategy, design, and AI-driven insights, we transform challenges into opportunities that lead to smarter, more effective digital experiences.",
  uxHeadline1:
    "Designing an ad-free experience meant creating engaging content flows without traditional ads. We achieved this by focusing on rich, visual content and user-driven discovery options.",
  uxHeadline2:
    "One challenge was ensuring privacy controls while maintaining an easy-to-use interface. Our team developed an accessible settings menu that lets users control visibility without overwhelming them.",
  uxBody1:
    "Designing an ad-free experience meant creating engaging content flows without traditional ads. We achieved this by focusing on rich, visual content and user-driven discovery options. One challenge was ensuring privacy controls while maintaining an easy-to-use interface.",
  uxBody2:
    "Our design process is centered around delivering exceptional user experiences that are intuitive, engaging, and accessible. We carefully study user behavior, needs, and interaction patterns to create interfaces that feel natural and easy to use. By combining thoughtful design, modern technology, and continuous testing, we ensure every product provides a smooth and meaningful experience that keeps users engaged and satisfied.",
};

type Seed = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  imageIndex: number;
};

const SEEDS: Seed[] = [
  { slug: "neuraflow-ai-platform", name: "NeuraFlow AI Platform", category: "Branding strategy", tags: ["Branding", "Web Design"], imageIndex: 0 },
  { slug: "fluxa-studio-website", name: "Fluxa Studio Website", category: "Ui/Ux Design", tags: ["Ui/Ux", "Web Design"], imageIndex: 1 },
  { slug: "lumora-creative-agency", name: "Lumora Creative Agency", category: "Web Development", tags: ["Web Development", "Branding"], imageIndex: 2 },
  { slug: "aurex-digital-platform", name: "Aurex Digital Platform", category: "Creative Design", tags: ["Creative", "Product"], imageIndex: 3 },
  { slug: "strivo-agency-website", name: "Strivo Agency Website", category: "Responsive Design", tags: ["Responsive", "Web Design"], imageIndex: 4 },
  { slug: "vireon-media-platform", name: "Vireon Media Platform", category: "Product Design", tags: ["Product", "Branding"], imageIndex: 5 },
  { slug: "axiora-web-experience", name: "Axiora Web Experience", category: "SaaS Platform", tags: ["SaaS", "Web Design"], imageIndex: 6 },
  { slug: "elvora-digital-product", name: "Elvora Digital Product", category: "Landing Page", tags: ["Landing", "Branding"], imageIndex: 7 },
];

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

export const PROJECTS: Project[] = SEEDS.map((s) => ({
  slug: s.slug,
  name: s.name,
  year: "2026 - 32",
  category: s.category,
  tags: s.tags,
  image: pick(PROJECT_IMAGES, s.imageIndex),
  secondaryImage: pick(PROJECT_IMAGES, s.imageIndex + 1),
  tertiaryImage: pick(PROJECT_IMAGES, s.imageIndex + 2),
  quaternaryImage: pick(PROJECT_IMAGES, s.imageIndex + 3),
  ...TEMPLATE,
}));

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}