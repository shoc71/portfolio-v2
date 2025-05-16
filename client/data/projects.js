import { assets } from "@/assets/assets";

export const projects = [
    {
        title: "Awesome Portfolio",
        description:
            "A personal website built with Next.js, Tailwind CSS, and Appwrite.",
        image: assets.novel_seeker,
        githubUrl: "https://github.com/yourname/awesome-portfolio",
        liveUrl: "https://awesome-portfolio.vercel.app",
        tools: ["next", "tailwind", "appwrite"],
    },
    {
        title: "Node.js API",
        description: "A API built using Express.js and MongoDB.",
        image: assets.novel_seeker,
        githubUrl: "https://github.com/yourname/node-api",
        liveUrl: "https://node-api.vercel.app",
        tools: ["nodejs", "express", "mongodb"],
    },
    // Add more projects...
];