import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  // Check system preference on mount
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <>
      <Component {...pageProps} />
      <Footer isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
