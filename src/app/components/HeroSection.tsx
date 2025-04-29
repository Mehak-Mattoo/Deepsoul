// components/HeroSection.tsx
"use client";
import React from "react";
import homeImg from "../../../public/home.png";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";


const HeroSection: React.FC = () => {
  const { theme }: { theme: "light" | "dark"; toggleTheme: () => void } =
    useTheme();

  const mainContainer =
    theme === "dark"
      ? "bg-[#121212] transition-colors"
      : "bg-[#f9e2c5] transition-colors";

  const subtitle =
    theme === "dark"
      ? "text-gray-400 transition-colors"
      : "text-[#49111C]/70 transition-colors";

  const title =
    theme === "dark"
      ? "text-[#f9e2c5] transition-colors"
      : "text-[#49111C] transition-colors";

  // Framer Motion variants for floating animations
  const floatVariants = {
    float1: {
      y: [0, -6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float2: {
      y: [0, 10, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float3: {
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className={`${mainContainer} flex flex-col md:flex-row items-center justify-center mt-10 w-full min-h-screen p-6 md:p-10`}
    >
      {/* Left Column - Hero Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6">
        <h1
          className={`${title}  text-5xl md:text-6xl lg:text-7xl font-semibold mb-6`}
        >
          Your journey to{" "}
          <span  className=" font-bold text-[#F40076]">inner peace </span>
          begins here
        </h1>
        <div
          className={`${subtitle}  font-medium text-xs md:text-sm leading-relaxed max-w-xl`}
        >
          DeepSoul connects you with professional therapists, supportive
          community, and powerful self-help tools for your mental wellbeing
          journey.
        </div>
        
        <form className="flex items-center gap-3 mt-6 rounded-md max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-orange-800 rounded-md outline-none focus:border-orange-900"
          />
          <button
            type="submit"
            className={`px-4 py-2 bg-orange-800 text-white rounded-md hover:bg-orange-900 transition `}
          >
            Book an Appointment
          </button>
        </form>
      </div>

      {/* Right Column - Hero Image with Text Bubbles */}
      <div className="relative w-full md:w-1/2 mx-auto">
        <Image
          src={homeImg}
          alt="Hero Image"
          className="w-full rounded-lg"
          width={500}
          height={500}
        />

        {/* Floating Text Bubbles with Framer Motion */}
        <motion.div
          className="absolute -top-4 left-1/4 transform -translate-x-1/2 bg-white dark:bg-slate-200 px-3 py-2 rounded-xl shadow-md"
          variants={floatVariants}
          animate="float1"
        >
          <p className="text-sm font-bold text-blue-600">
            Discover Inner Peace
          </p>
        </motion.div>

        <motion.div
          className="absolute top-1/3 -left-8 transform -translate-y-1/2"
          variants={floatVariants}
          animate="float2"
        >
          <div className="bg-green-100 px-4 py-2 rounded-full shadow-md rotate-12">
            <p className="text-sm font-bold text-green-600 whitespace-nowrap">
              Mindful Journey
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 px-4 py-2 rounded-full shadow-md"
          variants={floatVariants}
          animate="float3"
        >
          <p className="text-sm font-bold text-amber-600">Daily Growth</p>
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-0 transform bg-teal-100 px-3 py-2 rounded shadow-md rotate-6"
          variants={floatVariants}
          animate="float2"
        >
          <p className="text-xs font-bold text-teal-900">Healing</p>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 -left-4 transform bg-pink-100 px-3 py-2 rounded-xl shadow-md -rotate-12"
          variants={floatVariants}
          animate="float1"
        >
          <p className="text-xs font-medium text-pink-500">Self-care</p>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-0 transform bg-purple-100 px-3 py-2 rounded-xl shadow-md rotate-12"
          variants={floatVariants}
          animate="float3"
        >
          <p className="text-xs font-medium text-purple-600">Growth</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
