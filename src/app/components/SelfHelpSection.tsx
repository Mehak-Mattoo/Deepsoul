// pages/self-help-tools.tsx
import React from "react";
import Head from "next/head";
import { Activity, Wind, BookOpen, Play, ChevronUp } from "lucide-react";

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
        <div className="text-white font-medium">{title}</div>
        <div className="text-gray-400 text-sm">{duration}</div>
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
    <div className="min-h-screen bg-indigo-950 text-white">
      <Head>
        <title>Self-Help Tools For Your Wellbeing | DeepSoul</title>
        <meta
          name="description"
          content="Build resilience and mindfulness with our guided exercises, meditations, and personalized activities."
        />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <button className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
            Daily Practice
          </button>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Self-Help Tools For Your Wellbeing
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Build resilience and mindfulness with our extensive library of
            guided exercises, meditations, and personalized activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Featured Exercises</h2>

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

            <div className="mt-10">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold">Your Daily Progress</h3>
                <span className="text-blue-400">60%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-3/5"></div>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                3 of 5 exercises completed
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Personalized For You</h2>
              <p className="text-gray-300">
                Exercises tailored to your needs and goals based on your
                progress.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Track Your Mood</h2>
              <p className="text-gray-300 mb-6">
                Monitor your emotional wellbeing with our daily check-ins.
              </p>

              <div className="flex justify-between">
                <MoodButton color="bg-red-600" label="Low" />
                <MoodButton color="bg-orange-500" label="Mild" />
                <MoodButton
                  color="bg-amber-500"
                  label="Okay"
                  isSelected={true}
                />
                <MoodButton color="bg-green-600" label="Good" />
                <MoodButton color="bg-blue-500" label="Great" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors">
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  );
}
