import { assets } from "@/assets/assets";

export const projects = [
  {
    slug: "novel-seeker",
    title: "Novel Seeker",
    description: "E-commerce bookstore MVP... hello",
    image: assets.novel_seeker,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://novelseeker.com",
    tools: ["react", "node", "postgresql"],
  },
  {
    slug: "job-tracker-extension",
    title: "Job Tracker Extension",
    description: "Know where you applied and log all the information in one spot.",
    image: assets.product_store,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://jobtracker.com",
    tools: ["javascript", "chrome-extension"],
  },
  {
    slug: "product-store",
    title: "Product Store",
    description: "A Product Store where you can create and sell products.",
    image: assets.product_store,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://productstore.com",
    tools: ["nextjs", "mongodb"],
  },
];
