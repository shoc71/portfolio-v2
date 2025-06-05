import { assets } from "@/assets/assets";

export const projects = [
    {
        title: "Novel Seeker",
        description:
            "An E-commerce bookstore built ground up with admin privledges that allows you legitimately purchase and ship books and recieve products.",
        image: assets.novel_seeker,
        githubUrl: "https://github.com/yourname/awesome-portfolio",
        liveUrl: "https://awesome-portfolio.vercel.app",
        tools: ["mongodb", "express", "react", "nodejs", "stripe",
            "redis", "cloudinary", "jwt", "bcrypt", "tailwind",
            "html5", "css3", "javascript"],
    },
    {
        title: "Product Store",
        description: "A Product Store where you can create a product and put it online for sale.",
        image: assets.product_store,
        githubUrl: "https://github.com/yourname/node-api",
        liveUrl: "https://node-api.vercel.app",
        tools: ["mongodb", "express", "react", "nodejs", "chakraui",
            "html5", "css3", "javascript"],
    },
    // Add more projects...
];