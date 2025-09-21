import {
    SiNextdotjs, SiHtml5, SiPrometheus, SiTailwindcss, SiNodedotjs,
    SiCss3,
    SiJavascript,
    SiGradle,
    SiPostgresql,
    SiTypescript,
    SiPython,
    SiC,
    SiRender,
    SiHeroku,
    SiMongodb,
    SiGraphql,
    SiReact,
    SiAppwrite,
    SiDotnet,
    SiGit,
    SiJunit5,
    SiBootstrap,
    SiDocker,
    SiJest,
    SiExpress,
    SiJsonwebtokens,
    SiGithub,
    SiKubernetes,
    SiPostman,
    SiJira,
    SiRedis,
    SiCloudinary,
    SiTerraform,
    SiStripe,
    SiSvelte,
    SiApachemaven,
    SiAxios,
    SiBabel,
    SiElixir,
    SiApachekafka,
    SiOracle,
    SiBitbucket,
    SiJenkins,
    SiDatabricks,
    SiRust,
    SiAmazondynamodb,
    SiPulumi,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase, FaCode, FaWindows, 
        FaCube, FaLock, FaAngular, FaPuzzlePiece, FaLinux } from "react-icons/fa";
import { DiMsqlServer, DiRuby, DiMysql } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { RiFirebaseFill, RiVercelFill } from "react-icons/ri";
import { BsCloud, BsFiletypeJs } from "react-icons/bs";
import { TbApi, TbInfinity, TbBrandGolang, TbBrandAzure } from "react-icons/tb";

export const techFilters = [
    
    // Start as the exception
    {
        id: "dotnet",
        name: ".NET",
        icon: <SiDotnet className="w-5 h-5 text-purple-800" />,
    },
    {
        id: "angular", 
        name: "Angular", 
        icon: <FaAngular className="w-5 h-5 text-red-500" />
    },
    {
        id: "maven",
        name: "Apache Maven",
        icon: <SiApachemaven className="w-5 h-5 text-orange-600" />
    },
    { 
        id: "api", 
        name: "API", 
        icon: <TbApi className="w-5 h-5 text-black dark:text-white" /> 
    },
    {
        id: "appwrite",
        name: "Appwrite",
        icon: <SiAppwrite className="w-5 h-5 text-pink-500" />,
    },
    { 
        id: "aws", 
        name: "AWS", 
        icon: <FaAws className="w-5 h-5 text-orange-400" /> 

    },
    { 
        id: "axios", 
        name: "Axios", 
        icon: <SiAxios className="w-5 h-5 text-cyan-600" /> 
    },
    {
        id: "azure",
        name: "Azure",
        icon: <TbBrandAzure className="w-5 h-5 text-blue-500" />,
    },
    { 
        id: "babel", 
        name: "Babel", 
        icon: <SiBabel className="w-5 h-5 text-red-600" /> 
    },
    // {
    //     id: "bcrypt",
    //     name: "bcrypt",
    //     icon: <FaLock className="text-gray-700 dark:text-white" />,
    // },
    {
        id: "bcryptjs",
        name: "bcryptjs",
        icon: <FaLock className="w-5 h-5 text-gray-700 dark:text-white" />,
    },
    {
        id: "bitbucket",
        name: "Bitbucket",
        icon: <SiBitbucket className="w-5 h-5 text-blue-500" />,
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        icon: <SiBootstrap className="w-5 h-5 text-purple-500" />,
    },
    {
        id: "C",
        name: "C",
        icon: <SiC className="w-5 h-5 text-blue-800" />,
    },
    {
        id: "csharp",
        name: "C#",
        icon: <SiC className="w-5 h-5 text-blue-800" />,
    },
    { 
        id: "cplusplus", 
        name: "C++", 
        icon: <SiC className="w-5 h-5 text-blue-800" /> 
    },
    {
        id: "cicd",
        name: "CI/CD",
        icon: <TbInfinity className="w-5 h-5 text-lime-500" />,
    },
    { 
        id: "chakraui", 
        name: "Chakra UI",
        icon: <FaCube className="w-5 h-5 text-teal-500" /> 
    },
    {
        id: "cloud",
        name: "Cloud",
        icon: <BsCloud className="w-5 h-5 text-blue-500" />,
    },
    {
        id: "cloudinary",
        name: "Cloudinary",
        icon: <SiCloudinary className="w-5 h-5 text-blue-400" />,
    },
    // {
    //     id: "code",
    //     name: "Code",
    //     icon: <FaCode className="w-5 h-5 text-gray-700 dark:text-white" />,
    // },
    { 
        id: "css3", 
        name: "CSS3", 
        icon: <SiCss3 className="w-5 h-5 text-blue-600" /> 
    },
    {
        id: "databricks",
        name: "Databricks",
        icon: <SiDatabricks className="w-5 h-5 text-red-500" />,
    },
    {
        id: "docker",
        name: "Docker",
        icon: <SiDocker className="w-5 h-5 text-blue-500" />,
    },
    {
        id: "dynamodb",
        name: "DynamoDB",
        icon: <SiAmazondynamodb className="w-5 h-5 text-blue-600" />,
    },
    {
        id: "elixir",
        name: "Elixir",
        icon: <SiElixir className="w-5 h-5 text-purple-500" />,
    },
    {
        id: "express",
        name: "Express",
        icon: <SiExpress className="w-5 h-5 text-gray-700 dark:text-white" />,
    },
    {
        id: "extension",
        name: "Extension",
        icon: <FaPuzzlePiece className="w-5 h-5 text-black dark:text-white" />,
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: <RiFirebaseFill className="w-5 h-5 text-amber-500" />,
    },
    { 
        id: "git", 
        name: "Git", 
        icon: <SiGit className="w-5 h-5 text-orange-500" /> 
    },
    { 
        id: "github", 
        name: "GitHub", 
        icon: <SiGithub className="w-5 h-5 text-black dark:text-white" /> 
    },   
    {
        id: "golang",
        name: "Golang",
        icon: <TbBrandGolang className="w-5 h-5 text-cyan-500" />,
    },
    {
        id: "gradle",
        name: "Gradle",
        icon: <SiGradle className="w-5 h-5 text-emerald-700" />,
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: <SiGraphql className="w-5 h-5 text-purple-500" />,
    },
    {
        id: "heroku",
        name: "Heroku",
        icon: <SiHeroku className="w-5 h-5 text-purple-500" />,
    },
    { 
        id: "html5", 
        name: "HTML5", 
        icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> 
    },
    {
        id: "java",
        name: "Java",
        icon: <FaJava className="w-5 h-5 text-red-700" />,
    },
    {
        id: "javascript",
        name: "JavaScript",
        icon: <SiJavascript className="w-5 h-5 text-yellow-400" />,
    },
    {
        id: "jenkins",
        name: "Jenkins",
        icon: <SiJenkins className="w-5 h-5 text-red-400" />,
    },
    {
        id: "jest",
        name: "Jest",
        icon: <SiJest className="w-5 h-5 text-orange-500" />,
    },
    { 
        id: "jira", 
        name: "JIRA", 
        icon: <SiJira className="w-5 h-5 text-blue-500" /> 
    },
    {
        id: "json", 
        name: "JSON", 
        icon: <SiNodedotjs className="w-5 h-5 text-green-500" />
    },
    {
        id: "junit",
        name: "JUnit",
        icon: <SiJunit5 className="w-5 h-5 text-blue-700" />,
    },
    {
        id: "jwt",
        name: "JWT",
        icon: <SiJsonwebtokens className="w-5 h-5 text-orange-500" />,
    },
    {
        id: "kafka",
        name: "Kafka",
        icon: <SiApachekafka className="w-5 h-5 text-black-500" />,
    },
    {
        id: "kubernetes",
        name: "Kubernetes",
        icon: <SiKubernetes className="w-5 h-5 text-blue-500" />
    },
    {
        id: "linux",
        name: "Linux",
        icon: <FaLinux className="w-5 h-5 text-black-500" />,
    },
    {
        id: "mongodb",
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5 text-green-600" />,
    },
    {
        id: "mssqlserver",
        name: "MS SQL Server",
        icon: <DiMsqlServer className="w-5 h-5 text-[#CC2927]" />,
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: <DiMysql className="w-5 h-5 text-blue-500" />,
    },
    { 
        id: "next", 
        name: "Next.js", 
        icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> 
    },
    {
        id: "node",
        name: "Node.js",
        icon: <BsFiletypeJs className="w-5 h-5 text-yellow-500" />,
    },
    {
        id: "oracle",
        name: "Oracle",
        icon: <SiOracle className="w-5 h-5 text-orange-500" />,
    },
    {
        id: "playwright",
        name: "Playwright",
        icon: <LiaTheaterMasksSolid className="w-5 h-5 text-green-500" />,
    }, 
    {
        id: "postgresql",
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-5 h-5 text-blue-700" />,
    },
    {
        id: "postman",
        name: "Postman",
        icon: <SiPostman className="w-5 h-5 text-orange-500" />,
    },
    {
        id: "prometheus",
        name: "Prometheus",
        icon: <SiPrometheus className="w-5 h-5 text-orange-600" />,
    },
    {
        id: "pulumi",
        name: "Pulumi",
        icon: <SiPulumi className="w-5 h-5 text-purple-500" />,
    },
    {
        id: "python",
        name: "Python",
        icon: <SiPython className="w-5 h-5 text-blue-500" />,
    },
    { 
        id: "react", 
        name: "React", 
        icon: <SiReact className="w-5 h-5 text-blue-500" /> 
    },
    { 
        id: "redis", 
        name: "Redis", 
        icon: <SiRedis className="w-5 h-5 text-red-600" /> 
    },
    {
        id: "render",
        name: "Render",
        icon: <SiRender className="w-5 h-5 text-black dark:text-white" />,
    },
    {
        id: "ruby",
        name: "Ruby on Rails",
        icon: <DiRuby className="w-5 h-5 text-red-500" />,
    },
    {
        id: "rust",
        name: "Rust",
        icon: <SiRust className="w-5 h-5 text-orange-500" />,
    },
    { 
        id: "shadcn", 
        name: "ShadCN UI", 
        icon: <FaCube className="w-5 h-5 text-purple-600" /> 
    },
    {
        id: "springboot",
        name: "Spring Boot",
        icon: <BiLogoSpringBoot className="w-5 h-5 text-green-500" />
    },
    {
        id: "sql",
        name: "SQL Database",
        icon: <FaDatabase className="w-5 h-5 text-red-600" />,
    },
    {
        id: "stripe",
        name: "Stripe",
        icon: <SiStripe className="w-5 h-5 text-purple-600" />,
    },
    {
        id: "svelte",
        name: "Svelte",
        icon: <SiSvelte className="w-5 h-5 text-orange-500" />,
    },
    {
        id: "tailwind",
        name: "Tailwind",
        icon: <SiTailwindcss className="w-5 h-5 text-sky-400" />,
    },
    {
        id: "terraform",
        name: "Terraform",
        icon: <SiTerraform className="w-5 h-5 text-indigo-700" />,
    },
    {
        id: "typescript",
        name: "TypScript",
        icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
    },
    {
        id: "vercel",
        name: "Vercel",
        icon: <RiVercelFill className="w-5 h-5 text-black dark:text-white"/>,
    },
    // {
    //     id: "windows",
    //     name: "Visual Studio",
    //     icon: <FaWindows className="w-5 h-5 text-indigo-600" />,
    // },
];