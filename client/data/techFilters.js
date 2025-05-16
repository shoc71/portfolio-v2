import {
    SiNextdotjs,
    SiTailwindcss,
    SiReact,
    SiAppwrite,
    SiDotnet,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPostgresql,
    SiPython,
    SiC,
    SiMongodb,
    SiNodedotjs,
    SiGit,
    SiBootstrap,
    SiDocker,
    SiExpress,
    SiJsonwebtokens,
    SiGithub,
    SiPostman,
    SiJira,
    SiRedis,
    SiCloudinary,
    SiStripe,
    SiAxios,
    SiBabel,
} from "react-icons/si";
import { FaAws, FaDatabase, FaCode, FaWindows } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { BsCloud } from "react-icons/bs";

export const techFilters = [
    { id: "next", name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    {
        id: "tailwind",
        name: "Tailwind",
        icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
        id: "csharp",
        name: "C-Sharp",
        icon: <SiC className="text-blue-800" />,
    },
    {
        id: "C",
        name: "C",
        icon: <SiC className="text-blue-800" />,
    },
    { id: "react", name: "React", icon: <SiReact className="text-blue-500" /> },
    {
        id: "appwrite",
        name: "Appwrite",
        icon: <SiAppwrite className="text-pink-500" />,
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
    },
    {
        id: "dotnet",
        name: ".NET",
        icon: <SiDotnet className="text-purple-800" />,
    },
    { id: "html5", name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { id: "css3", name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
    {
        id: "javascript",
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-700" />,
    },
    {
        id: "python",
        name: "Python",
        icon: <SiPython className="text-yellow-500" />,
    },
    { id: "cplusplus", name: "C++", icon: <SiC className="text-blue-800" /> },
    {
        id: "nodejs",
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" />,
    },
    { id: "git", name: "Git", icon: <SiGit className="text-orange-500" /> },
    {
        id: "bootstrap",
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500" />,
    },
    {
        id: "docker",
        name: "Docker",
        icon: <SiDocker className="text-blue-500" />,
    },
    {
        id: "express",
        name: "Express.js",
        icon: <SiExpress className="text-gray-700" />,
    },
    {
        id: "jwt",
        name: "JWT",
        icon: <SiJsonwebtokens className="text-orange-500" />,
    },
    { id: "github", name: "GitHub", icon: <SiGithub className="text-black" /> },
    {
        id: "postman",
        name: "Postman",
        icon: <SiPostman className="text-orange-500" />,
    },
    { id: "jira", name: "JIRA", icon: <SiJira className="text-blue-500" /> },
    { id: "aws", name: "AWS", icon: <FaAws className="text-orange-400" /> },
    {
        id: "database",
        name: "SQL/Databases",
        icon: <FaDatabase className="text-red-600" />,
    },
    {
        id: "msqlserver",
        name: "MS SQL Server",
        icon: <DiMsqlServer className="text-[#CC2927]" />,
    },
    {
        id: "windows",
        name: "Visual Studio",
        icon: <FaWindows className="text-indigo-600" />,
    },
    {
        id: "cloud",
        name: "API Gateway",
        icon: <BsCloud className="text-blue-500" />,
    },
    {
        id: "code",
        name: "General Code",
        icon: <FaCode className="text-gray-700" />,
    },
    { id: "redis", name: "Redis", icon: <SiRedis className="text-red-600" /> },
    {
        id: "cloudinary",
        name: "Cloudinary",
        icon: <SiCloudinary className="text-blue-400" />,
    },
    {
        id: "stripe",
        name: "Stripe",
        icon: <SiStripe className="text-purple-600" />,
    },
    { id: "axios", name: "Axios", icon: <SiAxios className="text-cyan-600" /> },
    {
        id: "bcryptjs",
        name: "bcryptjs",
        icon: <FaCode className="text-gray-700" />,
    },
];