// projects/[slug]/page.jsx
import { projects } from "@/data/projectPosts";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { toolIcons } from "@/data/toolIcons";

export default function ProjectPage ({ params }) {

  const { slug } = params;
  console.log("Slug param:", slug);

  const project = projects.find((p) => {
    console.log("checking project:", p);
    console.log("project.slug:", p.slug, "vs slug param:", slug);
    return p.slug === slug;
  });

  console.log("All projects:", projects);
  console.log("Current Project:", projects[0].slug);
  console.log("Slug param:", slug);
  // console.log("Slug page param:", slug);

  if (!project) {
    return <p className="text-center mt-10">Project not found.</p>;
  }

  const { title, description, image, githubUrl, liveUrl, tools } = project;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Project Image */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-6">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Title + Description */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg opacity-80 mb-6">{description}</p>

      {/* Tools */}
      <div className="flex gap-3 mb-6">
        {tools?.map((tool, idx) => (
          <span key={idx} title={tool} className="text-2xl">
            {toolIcons[tool]}
          </span>
        ))}
      </div>

      {/* Links */}
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

      {/* Back link */}
      <div className="mt-10">
        <Link href="/projects" className="hover:underline text-[var(--primary)]">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

// export default ProjectPage;