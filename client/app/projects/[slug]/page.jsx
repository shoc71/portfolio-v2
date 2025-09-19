// projects/[slug]/page.jsx
import { projects } from "@/data/projectPosts";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { toolIcons } from "@/data/toolIcons";

export default function ProjectPage({ params }) {
  const { slug } = params;
  console.log("Slug param:", slug);

  const project = projects.find((p) => {
    console.log("checking project:", p);
    console.log("project.slug:", p.slug, "vs slug param:", slug);
    return p.slug === slug;
  });

  if (!project) {
    return <p className="text-center mt-10">Project not found.</p>;
  }

  const { title, description, image, githubUrl, liveUrl, tools } = project;

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-4 text-start">{title}</h1>

      {/* Tools */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {tools?.map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1 rounded bg-[var(--muted)]"
          >
            <span className="text-2xl">{toolIcons[tool]}</span>
            <span className="text-sm font-medium">{tool}</span>
          </div>
        ))}
      </div>

      {/* Project Image
      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        {image?.src && (
          <Image
            src={image.src}
            alt={image.alt || title}
            width={800}
            height={400}
            className="w-full sm:w-[500px] md:w-[800px] h-auto mx-auto"
          />
        )}
      </div> */}

      {/* Description - supports array or string */}
      <div className="space-y-4 mb-6">
        {Array.isArray(description) ? (
          description.map((item, idx) =>
            typeof item === "string" ? (
              <p key={idx} className="text-lg opacity-80">
                {item}
              </p>
            ) : item?.type === "image" ? (
              <div key={idx} className="rounded-lg overflow-hidden shadow">
                <Image
                  src={item.src}
                  alt={item.alt || "Project image"}
                  width={1200}
                  height={600}
                  className={item.size || "w-full h-auto object-cover"}
                />
              </div>
            ) : null
          )
        ) : (
          <p className="text-lg opacity-80">{description}</p>
        )}
      </div>

      {/* Links */}
      <div className="flex justify-between items-center mt-10 mb-10">
        {/* Left side buttons */}
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:opacity-90 transition"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Right side button */}
        <Link
          href="/projects"
          className="px-4 py-2 rounded bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
