// components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
 

  const mainContainer =
    theme === "dark"
      ? "bg-[#121212] text-gray-300 transition-colors"
      : "bg-[#8db38b] transition-colors";

const subtitle =
  theme === "dark"
    ? "text-pink-500 transition-colors"
    : "text-orange-900 transition-colors";

  const titles =
    theme === "dark"
      ? "text-pink-400 transition-colors"
      : "text-green-800 transition-colors";


  return (
    <footer className={`${mainContainer} `}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span
                style={{ fontFamily: "var(--font-pacifico)" }}
                className={`${subtitle} text-3xl font-bold`}
              >
                DeepSoul
              </span>
            </Link>

            <p>Your journey to inner peace and mental wellbeing starts here.</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook size={20} />
              </Link>
              <Link href="#">
                <Twitter size={20} />
              </Link>
              <Link href="#">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Features</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/therapy-booking"
                  // className="text-gray-400 hover:text-white"
                >
                  Therapy Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/self-help"
                  // className="text-gray-400 hover:text-white"
                >
                  Self-Help Exercises
                </Link>
              </li>
              <li>
                <Link
                  href="/therapist-buddy"
                  // className="text-gray-400 hover:text-white"
                >
                  Therapist Buddy
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  // className="text-gray-400 hover:text-white"
                >
                  Community Support
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness-resources"
                  // className="text-gray-400 hover:text-white"
                >
                  Wellness Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/articles"
                  // className="text-gray-400 hover:text-white"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link
                  href="/podcasts"
                  // className="text-gray-400 hover:text-white"
                >
                  Podcasts
                </Link>
              </li>
              <li>
                <Link
                  href="/audiobooks"
                  // className="text-gray-400 hover:text-white"
                >
                  Audiobooks
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  // className="text-gray-400 hover:text-white"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/team">Our Team</Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  // className="text-gray-400 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  // className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  // className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className={`${titles} font-bold text-sm mb-4 md:mb-0`}>
            © Made by Mehak Mattoo. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/terms"
              // className="text-gray-400 hover:text-white text-sm"
            >
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/privacy"
              // className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/cookies"
              // className="text-gray-400 hover:text-white text-sm"
            >
              Cookies
            </Link>

            {/* Back to top button */}
            <button
              className="ml-2 p-2 bg-green-700 rounded-full text-white hover:bg-green-800 transition duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
