import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";
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
} from "react-icons/si";
import { FaAws, FaDatabase, FaCode, FaWindows } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { BsCloud } from "react-icons/bs";

const toolIcons = {
  next: <SiNextdotjs className="w-5 h-5 text-black" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-sky-400" />,
  react: <SiReact className="w-5 h-5 text-blue-500" />,
  appwrite: <SiAppwrite className="w-5 h-5 text-pink-500" />,
  dotnet: <SiDotnet className="w-5 h-5 text-purple-800" />,
  html5: <SiHtml5 className="w-5 h-5 text-orange-500" />,
  css3: <SiCss3 className="w-5 h-5 text-blue-600" />,
  javascript: <SiJavascript className="w-5 h-5 text-yellow-400" />,
  sql: <FaDatabase className="w-5 h-5 text-[#CC2927]" />,
  python: <SiPython className="w-5 h-5 text-yellow-500" />,
  csharp: <FaCode className="w-5 h-5 text-purple-600" />,
  cplusplus: <SiC className="w-5 h-5 text-blue-800" />,
  mvc: <SiDotnet className="w-5 h-5 text-purple-800" />,
  nodejs: <SiNodedotjs className="w-5 h-5 text-green-500" />,
  postgresql: <SiPostgresql className="w-5 h-5 text-blue-700" />,
  sqlserver: <FaDatabase className="w-5 h-5 text-red-600" />,
  git: <SiGit className="w-5 h-5 text-orange-500" />,
  bootstrap: <SiBootstrap className="w-5 h-5 text-purple-500" />,
  docker: <SiDocker className="w-5 h-5 text-blue-500" />,
  express: <SiExpress className="w-5 h-5 text-gray-700" />,
  jwt: <SiJsonwebtokens className="w-5 h-5 text-orange-500" />,
  api: <FaCode className="w-5 h-5 text-blue-500" />,
  aws: <FaAws className="w-5 h-5 text-orange-400" />,
  ec2: <FaAws className="w-5 h-5 text-gray-700" />,
  lambda: <FaAws className="w-5 h-5 text-yellow-600" />,
  visualstudio: <FaWindows className="w-5 h-5 text-indigo-600" />,
  github: <SiGithub className="w-5 h-5 text-black" />,
  postman: <SiPostman className="w-5 h-5 text-orange-500" />,
  jira: <SiJira className="w-5 h-5 text-blue-500" />,
};

const ProjectCard = ({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  tools = [],
}) => {
  return (
    <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-xl shadow-lg p-5 flex flex-col md:flex-row gap-6 hover:shadow-xl transition">
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm opacity-80 mb-3">{description}</p>

          <div className="flex gap-2">
            {tools.map((tool, idx) => (
              <span key={idx} title={tool} className="tooltip">
                {toolIcons[tool]}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition"
          >
            <Github className="w-5 h-5" />
            Source Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:opacity-90 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
