// pages/index.tsx
import React from "react";
import Head from "next/head";
import { Calendar, Heart, User, MessageCircle, BookOpen } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-start">
      <div className="bg-gray-800 p-3 rounded-lg mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Head>
        <title>DeepSoul | Your Complete Mental Wellness Solution</title>
        <meta
          name="description"
          content="DeepSoul provides comprehensive support for your mental wellbeing journey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Complete Mental Wellness Solution
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            DeepSoul combines multiple approaches to provide comprehensive
            support for your mental wellbeing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Calendar size={32} className="text-blue-400" />}
            title="Therapy Booking"
            description="Schedule sessions with licensed therapists who match your needs and preferences. Easy booking, rescheduling, and virtual sessions."
          />

          <FeatureCard
            icon={<Heart size={32} className="text-blue-400" />}
            title="Self-help Exercises"
            description="Access guided meditations, journaling prompts, breathing exercises, and personalized activities to build resilience and mindfulness."
          />

          <FeatureCard
            icon={<User size={32} className="text-blue-400" />}
            title="Therapist Buddy"
            description="Your assigned therapist keeps track of your progress, provides personalized exercises, and is available when you need guidance."
          />

          <FeatureCard
            icon={<MessageCircle size={32} className="text-blue-400" />}
            title="Supportive Community"
            description="Connect with others who understand what you're going through. Share experiences, offer support, and never feel alone in your journey."
          />

          <FeatureCard
            icon={<BookOpen size={32} className="text-blue-400" />}
            title="Wellness Resources"
            description="Explore our extensive library of articles, blogs, audiobooks, and podcasts covering various mental health topics."
          />
        </div>
      </main>

      <footer className="mt-20 py-8 bg-gray-900">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DeepSoul. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-200">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
}
