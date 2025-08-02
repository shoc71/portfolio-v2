"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesColorBackground({ shape = "edge" }) {
  const [isDark, setIsDark] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const lightOptions = {
    background: { color: "#f0f0f0" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#880085" },
      links: { color: "#880085", distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: "bounce", speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: shape },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  const darkOptions = {
    background: { color: "#121212" },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: "#880085" },
      links: { color: "#880085", distance: 150, enable: true, opacity: 1.0, width: 1 },
      collisions: { enable: true },
      move: { direction: "none", enable: true, outModes: "bounce", speed: 1 },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: shape },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    const updateTheme = () => {
      const isDarkMode = root.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      key={`${shape}-${isDark ? "dark" : "light"}`}
      id="tsparticles"
      init={particlesInit}
      options={isDark ? darkOptions : lightOptions}
      className="absolute inset-0 -z-10"
    />
  );
}

// Supported shapes: "circle", "edge" (square), "triangle", "polygon", "star", "char" (text), "image"
// Example usage: <ParticlesBackground shape="star" />
