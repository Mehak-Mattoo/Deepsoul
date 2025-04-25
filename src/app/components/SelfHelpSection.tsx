// pages/self-help-tools.tsx
import React from "react";
import Head from "next/head";
import { Activity, Wind, BookOpen, Play, ChevronUp } from "lucide-react";
import MoodTracker from "./MoodTracker";

type ExerciseCardProps = {
  icon: React.ReactNode;
  title: string;
  duration: string;
  bgColor: string;
};

const ExerciseCard = ({
  icon,
  title,
  duration,
  bgColor,
}: ExerciseCardProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className={`${bgColor} rounded-full p-3 w-12 h-12 flex items-center justify-center`}
      >
        {icon}
      </div>
      <div>
        <div className="text-[#49111C] md:text-xl font-bold">{title}</div>
        <div className="text-pink-500 text-sm md:text-base">{duration}</div>
      </div>
    </div>
  );
};

type MoodButtonProps = {
  color: string;
  label: string;
  isSelected?: boolean;
};

const MoodButton = ({ color, label, isSelected = false }: MoodButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${color} w-10 h-10 rounded-full ${
          isSelected
            ? "ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900"
            : ""
        }`}
      ></div>
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
};

export default function SelfHelpSection() {
  return (
    <div className="min-h-screen bg-[#da1674] text-white">
      <Head>
        <title>Self-Help Tools For Your Wellbeing | DeepSoul</title>
        <meta
          name="description"
          content="Build resilience and mindfulness with our guided exercises, meditations, and personalized activities."
        />
      </Head>

      <div className="mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Self-Help Tools For Your Wellbeing
          </h1>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Build resilience and mindfulness with our extensive library of
            guided exercises, meditations, and personalized activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#ffb2d7] rounded-xl p-6">
            <div className="my-5">
              <div className="flex justify-between my-2">
                <h3 className="font-bold">Your Daily Progress</h3>
                <span className="text-blue-400">60%</span>
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
              />

              <ExerciseCard
                icon={<Wind size={24} className="text-white" />}
                title="Breathing Exercise"
                duration="5 min"
                bgColor="bg-emerald-500"
              />

              <ExerciseCard
                icon={<BookOpen size={24} className="text-white" />}
                title="Mindful Journaling"
                duration="15 min"
                bgColor="bg-amber-500"
              />

              <ExerciseCard
                icon={<Play size={24} className="text-white" />}
                title="Sleep Stories"
                duration="20 min"
                bgColor="bg-blue-500"
              />
            </div>
          </div>

          <MoodTracker />
        </div>
      </div>
    </div>
  );
}
