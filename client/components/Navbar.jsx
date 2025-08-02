"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true); // Always show at top
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[8%]
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${lastScrollY > 10 ? "bg-[var(--background)]/0 backdrop-blur-md shadow-lg" : "bg-[var(--background)] shadow"}
        py-4 flex items-center justify-between transition-all duration-500 text-[var(--foreground)]`}
      >
      <Link href="/" className="flex items-center">
        <Image
          src={assets.logo}
          className="w-28 cursor-pointer mr-4"
          alt="logo"
        />
      </Link>

      <ul className="hidden md:flex items-end gap-6 lg:gap-8">
        <li>
          <Link
            href="/blog"
            className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:opacity-90 transition"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded hover:opacity-90 transition"
          >
            Projects
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 px-6 py-2 border border-[var(--border)] rounded-full"
        >
          Contact
          <Image src={assets.profile_contact} alt="contact" className="w-4" />
        </Link>

        <button onClick={toggleMobileMenu} className="md:hidden">
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[var(--foreground)]" />
          ) : (
            <Menu className="w-6 h-6 text-[var(--foreground)]" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[var(--background)] text-[var(--foreground)] shadow-md md:hidden flex flex-col items-center gap-4 py-4 transition-all">
          <Link
            href="/blog"
            onClick={toggleMobileMenu}
            className="hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            onClick={toggleMobileMenu}
            className="hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="flex items-center gap-2 border border-[var(--border)] rounded-full px-5 py-2 text-sm"
          >
            Contact
            <Image src={assets.profile_contact} alt="contact" className="w-4" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
