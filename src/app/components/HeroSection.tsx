// components/HeroSection.tsx
import React from "react";
import homeImg from "../../../public/home.webp";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#f9e2c5] flex flex-col md:flex-row items-center justify-center mt-10 w-full min-h-screen p-6 md:p-5">
      {/* Left Column - Hero Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6">
        <h1 className="text-5xl md:text-6xl text-[#49111C] font-semibold mb-6">
          Your journey to{" "}
          <span className="font-bold text-[#F40076]">inner peace </span>
          begins here
        </h1>
        <p className="text-sm md:text-base leading-relaxed max-w-xl">
          DeepSoul connects you with professional therapists, supportive
          community, and powerful self-help tools for your mental wellbeing
          journey.
        </p>
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

        {/* Floating Text Bubbles */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
          <p className="text-sm font-bold text-blue-600">
            Discover Inner Peace
          </p>
        </div>

        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-90 origin-center">
          <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
            <p className="text-sm font-bold text-green-600 whitespace-nowrap">
              Mindful Journey
            </p>
          </div>
        </div>

        {/* <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transform">
          <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
            <p className="text-sm font-bold text-purple-600 whitespace-nowrap">
              Mental Wellness
            </p>
          </div>
        </div> */}

        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
          <p className="text-sm font-bold text-amber-600">Daily Growth</p>
        </div>

        <div className="absolute -top-0 -right-4 transform rotate-45 bg-white dark:bg-slate-800 px-3 py-1 rounded shadow-md">
          <p className="text-xs font-medium text-red-500">Healing</p>
        </div>

        <div className="absolute -bottom-4 -left-4 transform -rotate-45 bg-white dark:bg-slate-800 px-3 py-1 rounded shadow-md">
          <p className="text-xs font-medium text-teal-500">Self-care</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
