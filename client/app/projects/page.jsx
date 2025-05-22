"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { techFilters } from "@/data/techFilters";
import { projects } from "@/data/projects";
import FloatingSquaresBackground from "./FloatingSquaresBackground";

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

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTool = selectedTool
        ? project.tools.includes(selectedTool)
        : true;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((tool) =>
          tool.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTool && matchesSearch;
    });
  }, [selectedTool, searchQuery]);

  return (
    <section className="relative overflow-hidden min-h-screen py-20 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)]">
      <FloatingSquaresBackground />
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
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
