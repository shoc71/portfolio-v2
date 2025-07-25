import { assets } from "@/assets/assets";

export const projects = [
    {
        title: "Novel Seeker",
        description:
            "Novel Seeker - E-commerce bookstore MVP built for the client with admin privileges, tracking purchases, and managing products.",
        image: assets.novel_seeker,
        githubUrl: "https://github.com/shoc71/novel-seeker",
        liveUrl: "https://portfolio-v2-y4kx.onrender.com/projects",
        tools: ["mongodb", "express", "react", "nodejs", "stripe",
            "redis", "cloudinary", "jwt", "bcrypt", "tailwind",
            "html5", "css3", "javascript"],
    },
    {
        title: "Product Store",
        description: "A Product Store where you can create a product and put it online for sale.",
        image: assets.product_store,
        githubUrl: "https://github.com/shoc71/product-store",
        liveUrl: "https://node-api.vercel.app",
        tools: ["mongodb", "express", "react", "nodejs", "chakraui",
            "html5", "css3", "javascript"],
    },
    // Add more projects...
];