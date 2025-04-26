// pages/self-help-tools.tsx
"use client";
import React from "react";

import { Activity, Wind, BookOpen, Play } from "lucide-react";
import MoodTracker from "./MoodTracker";
import { useTheme } from "../context/ThemeContext";

type ExerciseCardProps = {
  icon: React.ReactNode;
  title: string;
  duration: string;
  bgColor: string;
  titles: string;
};

const ExerciseCard = ({
  icon,
  title,
  duration,
  bgColor,
  titles
}: ExerciseCardProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className={`${bgColor} rounded-full p-3 w-12 h-12 flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <div className={`${titles} md:text-xl font-bold`}>{title}</div>
        <div className="text-pink-500 text-sm md:text-base">{duration}</div>
      </div>
    </div>
  );
};




export default function SelfHelpSection() {

  
      const { theme } = useTheme();
    
    
  
  
      const mainContainer =
        theme === "dark"
          ? "bg-[#121212] transition-colors"
          : "bg-[#da1674] transition-colors";
  
      const subtitle =
        theme === "dark"
          ? "text-gray-400 transition-colors"
          : "text-[#49111C] transition-colors";
  
      const titles =
        theme === "dark"
          ? "text-pink-400 transition-colors"
          : "text-[#49111C] transition-colors";
  
      const cards =
        theme === "dark"
          ? "bg-[#282828] rounded-lg  transition-colors"
          : "bg-[#ffb2d7] transition-colors";
  return (
    <div className={`${mainContainer} text-white min-h-screen p-6 md:p-10`}>
      <div className="mx-auto p-4">
        <div className="text-center mb-10">
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 ${titles}`}
          >
            Self-Help Tools For Your Wellbeing
          </h1>
          <p className={`text-sm md:text-base  ${subtitle} max-w-2xl mx-auto`}>
            Build resilience and mindfulness with our extensive library of
            guided exercises, meditations, and personalized activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 ${cards} rounded-xl p-6`}>
            <div className="my-5">
              <div className="flex justify-between my-2">
                <h3 className="font-bold">Your Daily Progress</h3>
                {/* <span className="text-b">60%</span> */}
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#49111C] to-pink-400 h-2 rounded-full w-3/5"></div>
              </div>
              <div className="text-sm text-pink-600 mt-2">
                3 of 5 exercises completed
              </div>
            </div>
            <h2 className="text-lg mt-10 mb-5 md:text-xl text-pink-600  font-bold ">
              Featured Exercises
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExerciseCard
                icon={<Activity size={24} className="text-white" />}
                title="Guided Meditation"
                duration="10 min"
                bgColor="bg-purple-500"
                titles={titles}
              />

              <ExerciseCard
                icon={<Wind size={24} className="text-white" />}
                title="Breathing Exercise"
                duration="5 min"
                bgColor="bg-emerald-500"
                titles={titles}
              />

              <ExerciseCard
                icon={<BookOpen size={24} className="text-white" />}
                title="Mindful Journaling"
                duration="15 min"
                bgColor="bg-amber-500"
                titles={titles}
              />

              <ExerciseCard
                icon={<Play size={24} className="text-white" />}
                title="Sleep Stories"
                duration="20 min"
                bgColor="bg-blue-500"
                titles={titles}
              />
            </div>
          </div>

          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
