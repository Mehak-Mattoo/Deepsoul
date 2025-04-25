"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // On mount, read local storage and set theme
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <nav className="w-full bg-white fixed text-black px-6 py-4 dark:bg-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-blue-400 text-3xl font-bold">DeepSoul</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/therapy" className="text-gray-300 hover:text-white">
            Therapy
          </Link>
          <Link href="/self-help" className="text-gray-300 hover:text-white">
            Self Help
          </Link>
          <Link href="/community" className="text-gray-300 hover:text-white">
            Community
          </Link>
          <Link href="/resources" className="text-gray-300 hover:text-white">
            Resources
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-1 rounded-full hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-300" />
            ) : (
              <Sun size={20} className="text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
