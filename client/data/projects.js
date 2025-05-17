import { assets } from "@/assets/assets";

export const projects = [
    {
        title: "Novel Seeker",
        description:
            "A personal website built with Next.js, Tailwind CSS, and Appwrite.",
        image: assets.novel_seeker,
        githubUrl: "https://github.com/yourname/awesome-portfolio",
        liveUrl: "https://awesome-portfolio.vercel.app",
        tools: ["mongodb", "express", "react", "nodejs", "stripe",
            "redis", "cloudinary", "jwt", "bcrypt", "tailwind",],
    },
    {
        title: "Product Store",
        description: "A API built using Express.js and MongoDB.",
        image: assets.product_store,
        githubUrl: "https://github.com/yourname/node-api",
        liveUrl: "https://node-api.vercel.app",
        tools: ["mongodb", "express", "react", "nodejs", "chakraui"],
    },
    // Add more projects...
];