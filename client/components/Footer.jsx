"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

import "@/styles/footer.css";
import { email, github, linkedin, name } from "@/app/home/ProfileSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // const lastUpdated = new Date(document.lastModified).toLocaleDateString();
  const lastUpdated = "16/September/2025";
  const linkClass =
    "flex items-center gap-2 px-4 py-2 rounded transition transform hover:shadow-lg hover:shadow-current";

  return (
    <footer className="flex flex-end justify-center md:justify-between items-center gap-4 p-4 border-t border-border text-sm bg-background text-foreground">
      <div className="flex flex-wrap gap-4 items-end justify-content">
        {/* place image logo here as well */}
        <div className="items-start md:flex flex-col text-xs opacity-70">
          <span>
            Made by <span className="block sm:inline">{name}</span>
          </span>
          {/* <span>{name}</span> */}
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} flex items-center gap-2 px-4 py-2 bg-black text-white rounded transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:float-tilt`}
        >
          <Github size={18} />
          Github
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:float-tilt`}
        >
          <Linkedin size={18} />
          LinkedIn
        </a>

        <a
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:float-tilt`}
        >
          <Mail size={18} />
          Email
        </a>
      </div>

      <div className="hidden md:flex flex-col items-end text-xs opacity-70">
        <span>&copy; {currentYear}. All Rights Reversed.</span>
        <span>Last updated: {lastUpdated}</span>
        <span>v.2.3.0</span>
      </div>
    </footer>
  );
}
