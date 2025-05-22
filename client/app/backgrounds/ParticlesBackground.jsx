"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground({ shape = "circle" }) {
  const [isDark, setIsDark] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Shared options for circles and rectangles, just changing shape and colors
  const lightOptions = {
    background: { color: "#f0f0f0" },
    particles: {
      color: { value: "#222222" },
      links: { enable: true, color: "#222222", distance: 150 },
      move: { enable: true, speed: 1 },
      number: { value: 50 },
      opacity: { value: 0.5 },
      shape: { type: shape }, // dynamic shape
      size: { value: 3 },
    },
  };

  const darkOptions = {
    background: { color: "#121212" },
    particles: {
      color: { value: "#dddddd" },
      links: { enable: true, color: "#dddddd", distance: 150 },
      move: { enable: true, speed: 1 },
      number: { value: 50 },
      opacity: { value: 0.5 },
      shape: { type: shape }, // dynamic shape
      size: { value: 3 },
    },
  };

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }

    const onStorage = (e) => {
      if (e.key === "theme") {
        setIsDark(e.newValue === "dark");
      }
    };
    window.addEventListener("storage", onStorage);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("storage", onStorage);
      observer.disconnect();
    };
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
