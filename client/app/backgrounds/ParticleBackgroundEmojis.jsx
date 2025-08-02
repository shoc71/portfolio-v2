"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesCharBackground({ characters = ["🌟", "✨", "⭐"] }) {
  const [isDark, setIsDark] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const baseOptions = {
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#4f46e5" },
      links: {
        color: "#4f46e5",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: "bounce", speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.8 },
      shape: {
        type: "char",
        character: {
          value: characters,
          font: "Verdana",
          style: "",
          weight: "400",
        },
      },
      size: { value: { min: 10, max: 16 } },
    },
    detectRetina: true,
  };

  const lightOptions = {
    ...baseOptions,
    background: { color: "#f0f0f0" },
  };

  const darkOptions = {
    ...baseOptions,
    background: { color: "#121212" },
    particles: {
      ...baseOptions.particles,
      color: { value: "#dddddd" },
      links: { ...baseOptions.particles.links, color: "#dddddd" },
    },
  };

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    const updateTheme = () => {
      const isDarkMode =
        storedTheme === "dark" ||
        (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDark(isDarkMode);
    };

    updateTheme();

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="charParticles"
      init={particlesInit}
      options={isDark ? darkOptions : lightOptions}
      className="absolute inset-0 -z-10"
    />
  );
}
