import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { toolIcons } from "@/data/toolIcons";
import Link from "next/link";

const ProjectCard = ({
  slug,
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
          <Link href={`/projects/${slug}`}>
            <h3 className="text-2xl font-semibold mb-2 hover:underline cursor-pointer">
              {title}
            </h3>
          </Link>
          <p className="text-sm opacity-80 mb-3">{description}</p>

          {/* Tools */}
          <div className="flex gap-2 text-[var(--muted-foreground)] dark:text-white">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                title={tool}
                className="tooltip"
                aria-label={tool}
              >
                {toolIcons[tool]}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
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
