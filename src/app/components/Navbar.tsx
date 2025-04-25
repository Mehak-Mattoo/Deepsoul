"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme toggle until mounted
  if (!mounted) {
    return (
      <nav
        className={`w-full z-50 fixed top-0 px-6 py-4 transition-colors duration-200 ${
          theme === "dark"
            ? "bg-slate-900 text-yellow-300"
            : "bg-[#f9e2c5] text-pink-400"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-blue-400 text-3xl font-bold">DeepSoul</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 dark:text-gray-300">
              Features
            </Link>
            <Link href="/therapy" className="text-gray-700 dark:text-gray-300">
              Therapy
            </Link>
            <Link
              href="/self-help"
              className="text-gray-700 dark:text-gray-300"
            >
              Self Help
            </Link>
            <Link
              href="/community"
              className="text-gray-700 dark:text-gray-300"
            >
              Community
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 dark:text-gray-300"
            >
              Resources
            </Link>

            {/* Placeholder for theme toggle */}
            <div className="ml-2 p-2 w-5 h-5"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`w-full z-50 fixed top-0 px-6 py-4 transition-colors duration-200 ${
        theme === "dark" ? "bg-slate-900 text-white" : "bg-[#f9e2c5] text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-blue-400 text-3xl font-bold">DeepSoul</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/features"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/therapy"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Therapy
          </Link>
          <Link
            href="/self-help"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Self Help
          </Link>
          <Link
            href="/community"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Community
          </Link>
          <Link
            href="/resources"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Resources
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full  dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={20} className="text-gray-700" />
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
