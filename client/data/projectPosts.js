import { assets } from "@/assets/assets";

export const projects = [
  {
    slug: "novel-seeker",
    title: "Novel Seeker",
    description: [
      "Novel Seeker - E-commerce bookstore MVP built for the client with admin privileges, tracking purchases, and managing products.",
      "This app helps readers discover new novels.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
      "You can search by genre, author, or popularity."
    ],
    image: assets.novel_seeker,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://novelseeker.com",
    tools: ["mongodb", "express", "react", "nodejs", "stripe",
            "redis", "cloudinary", "jwt", "bcrypt", "tailwind",
            "html5", "css3", "javascript", "json"],
  },
  {
    slug: "job-tracker-extension",
    title: "Job Tracker Extension",
    description: [
      "Know where you applied and log all the information in one spot",
      "This app helps readers discover new novels.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
      "You can search by genre, author, or popularity."
    ],
    image: assets.product_store,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://jobtracker.com",
    tools: ["html5", "css3", "javascript", "json", "nodejs", "bootstrap", "extension"],
  },
  {
    slug: "product-store",
    title: "Product Store",
    description: [
      "A Product Store where you can create a product and put it online for sale.",
      "This app helps readers discover new novels.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
      "You can search by genre, author, or popularity.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
    ],
    image: assets.product_store,
    githubUrl: "https://github.com/your/repo",
    liveUrl: "https://productstore.com",
    tools: ["mongodb", "express", "react", "nodejs", "chakraui",
            "html5", "css3", "javascript"],
  },
];
