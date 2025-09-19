"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { techFilters } from "@/data/techFilters";
import { projects } from "@/data/projectPosts";
import ParticlesCustomBackground from "../backgrounds/ParticlesCustomBackground";

const getRandomFive = (list) => {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 7);
};

const ProjectsPage = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllFilters, setShowAllFilters] = useState(false);

  // Initialize with a stable slice (first 7) to avoid hydration mismatch
  const [randomTech, setRandomTech] = useState(techFilters.slice(0, 7));

  // After mount, update randomTech to random items client-side only
  useEffect(() => {
    setRandomTech(getRandomFive(techFilters));
  }, []);

  const visibleTechFilters = showAllFilters ? techFilters : randomTech;

  // add this helper above the useMemo
  const extractTextFromDescription = (description) => {
    if (!description) return [];

    // single string
    if (typeof description === "string") return [description];

    // array: pick only string-like pieces or text-like props from objects
    if (Array.isArray(description)) {
      return description.flatMap((item) => {
        if (typeof item === "string") return [item];
        if (item && typeof item === "object") {
          // prefer explicit text, then alt (for images), otherwise skip
          if (typeof item.text === "string") return [item.text];
          if (typeof item.alt === "string") return [item.alt];
        }
        return [];
      });
    }

    // object: try text or alt fields
    if (typeof description === "object") {
      if (typeof description.text === "string") return [description.text];
      if (typeof description.alt === "string") return [description.alt];
    }

    return [];
  };

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      // safe tools array
      const toolsArr = Array.isArray(project.tools) ? project.tools : [];

      // selected tool match (normalize to lowercase)
      const matchesTool = selectedTool
        ? toolsArr.map((t) => String(t).toLowerCase()).includes(String(selectedTool).toLowerCase())
        : true;

      // title match
      const titleMatch = project.title && String(project.title).toLowerCase().includes(q);

      // description match: extract text parts then search them
      const descStrings = extractTextFromDescription(project.description);
      const descMatch = descStrings.some((s) => String(s).toLowerCase().includes(q));

      // tools match (search query)
      const toolsMatch = toolsArr.some((tool) =>
        String(tool).toLowerCase().includes(q)
      );

      // if q is empty, treat as match (so filters only by selectedTool)
      const searchMatches = q ? (titleMatch || descMatch || toolsMatch) : true;

      return matchesTool && searchMatches;
    });
  }, [selectedTool, searchQuery]);

  return (
    <section className="relative overflow-hidden min-h-screen py-10 px-6 md:px-12 text-[var(--foreground)]">
      <ParticlesCustomBackground 
        color="4f46e5"
        shape="char"
        characters={["📋", "📈", "🗃️", "🫂"]}
      />
      <h2 className="text-4xl font-bold mb-8 text-center relative z-10">
        My Projects
      </h2>
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-6 relative z-10">
        <input
          type="text"
          placeholder="Search by title, description, technologies, or tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-[var(--input)] text-[var(--foreground)]"
        />
      </div>

      {/* Tool Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-4 relative z-10">
        {visibleTechFilters.map((tool) => (
          <button
            key={tool.id}
            onClick={() =>
              setSelectedTool((prev) => (prev === tool.id ? null : tool.id))
            }
            className={`flex items-center gap-2 px-3 py-2 rounded-md border transition text-sm font-medium
              ${
                selectedTool === tool.id
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-[var(--muted)] hover:bg-[var(--muted-hover)]"
              }`}
          >
            {tool.icon}
            {tool.name}
          </button>
        ))}
      </div>

      {/* Show All / Show Less */}
      <div className="text-center mb-12 relative z-10">
        <button
          onClick={() => {
            if (showAllFilters) {
              setRandomTech(getRandomFive(techFilters));
            }
            setShowAllFilters(!showAllFilters);
          }}
          className="text-sm text-[var(--primary)] underline"
        >
          {showAllFilters ? "Show Less" : "Show All"}
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 max-w-5xl mx-auto relative z-10">
        {filteredProjects.map((project, index) => {
          // normalize image
          let imageSrc = "";
          let imageAlt = project.title;

          if (typeof project.image === "string") {
            imageSrc = project.image;
          } else if (project.image && typeof project.image === "object") {
            imageSrc = project.image.src || "";
            imageAlt = project.image.alt || project.title;
          }

          return (
            <ProjectCard
              key={index}
              {...project}
              image={imageSrc}
              alt={imageAlt}
            />
          );
        })}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
