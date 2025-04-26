"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define consistent text color classes for both mounted and unmounted states
  const navClasses = `w-full z-50 fixed top-0 px-6 py-4 transition-colors duration-200 ${
    theme === "dark" ? "bg-[#121212] text-white" : "bg-[#f9e2c5] text-black"
  }`;

  // Define link classes that will respond to theme
  const linkClasses =
    theme === "dark"
      ? "text-pink-300 hover:text-pink-400 transition-colors"
      : "text-[#49111C] hover:text-black transition-colors";

  // Prevent hydration mismatch by not rendering theme toggle until mounted
  if (!mounted) {
    return (
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-pink-700 text-3xl font-bold">DeepSoul</span>
          </Link>

          {/* Mobile menu button placeholder */}
          <div className="block lg:hidden">
            <div className="p-2 w-10 h-10"></div>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#" className={linkClasses}>
              Features
            </Link>
            <Link href="#" className={linkClasses}>
              Therapy
            </Link>
            <Link href="#" className={linkClasses}>
              Self Help
            </Link>
            <Link href="#" className={linkClasses}>
              Community
            </Link>
            <Link href="#" className={linkClasses}>
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
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-pink-700 text-3xl font-bold">DeepSoul</span>
        </Link>

        {/* Mobile menu button - Only visible on small screens */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className={theme === "dark" ? "text-white" : "text-black"}
            />
          ) : (
            <Menu
              size={24}
              className={theme === "dark" ? "text-white" : "text-black"}
            />
          )}
        </button>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="#" className={linkClasses}>
            Features
          </Link>
          <Link href="#" className={linkClasses}>
            Therapy
          </Link>
          <Link href="#" className={linkClasses}>
            Self Help
          </Link>
          <Link href="#" className={linkClasses}>
            Community
          </Link>
          <Link href="#" className={linkClasses}>
            Resources
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon
                size={20}
                // className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
              />
            ) : (
              <Sun
                size={20}
                className={
                  theme === "dark" ? "text-yellow-300" : "text-gray-700"
                }
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Shown only when menu is open */}
      {isMenuOpen && (
        <div
          className={`lg:hidden rounded-b-4xl mt-4 py-4 ${
            theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#f9e2c5]"
          } rounded-lg`}
        >
          <div className="flex flex-col  px-6">
            <Link
              href="#"
              className={`${linkClasses} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className={`${linkClasses} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Therapy
            </Link>
            <Link
              href="#"
              className={`${linkClasses} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Self Help
            </Link>
            <Link
              href="#"
              className={`${linkClasses} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="#"
              className={`${linkClasses} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>

            {/* Theme Toggle Button for mobile */}
            <div className="flex items-center py-2">
              <span
                className={theme === "dark" ? "text-pink-300" : "text-gray-700"}
              >
                Switch Theme
              </span>
              <button
                onClick={toggleTheme}
                className="ml-auto p-2 rounded-full  transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon
                    size={20}
                    // className={
                    //   theme === "dark" ? "text-gray-300" : "text-gray-700"
                    // }
                  />
                ) : (
                  <Sun
                    size={20}
                    className={
                      theme === "dark" ? "text-yellow-300" : "text-gray-700"
                    }
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
