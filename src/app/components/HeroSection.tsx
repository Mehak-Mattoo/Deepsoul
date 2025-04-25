// components/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Hero Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your journey to <span className="text-blue-400">inner</span>
            <br />
            <span className="text-blue-500">peace</span> begins here
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            DeepSoul connects you with professional therapists, supportive
            community, and powerful self-help tools for your mental wellbeing
            journey.
          </p>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Mental Health Quiz Card */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mental Health Quiz</h3>
            <p className="text-gray-400 mb-4">
              Understand your emotional wellbeing
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>

          {/* Upcoming Therapy Session Card */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Upcoming Therapy Session
            </h3>
            <p className="text-gray-400 mb-4">
              Today at 3:00 PM with Dr. Sarah
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>

          {/* Peace of Mind Card */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
            <p className="text-gray-400 mb-4">
              Your mental wellbeing companion is here
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>

          {/* Daily Journal Card */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Daily Journal</h3>
            <p className="text-gray-400 mb-4">
              Take a moment to reflect on your feelings today
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>

          {/* Community Support Card (spans two columns on desktop) */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-400 mb-4">
              Connect with others who understand
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
