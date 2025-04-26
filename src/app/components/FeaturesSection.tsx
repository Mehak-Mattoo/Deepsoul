// pages/index.tsx
"use client";
import React, { useEffect, useState } from "react";

import {
  Calendar,
  Heart,
  User,
  MessageCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTheme } from "../context/ThemeContext";

const FeatureCard = ({
  icon,
  title,
  description,
  cardClass,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cardClass: string;
}) => {
  return (
    <div
      className={`${cardClass} rounded-lg p-6 flex flex-col items-start h-full`}
    >
      <div className="text-white p-3 rounded-lg mb-4">{icon}</div>
      <h3 className="text-orange-300 text-xl font-bold mb-2">{title}</h3>
      <p className="text-orange-100">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Store swiper instance
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mainContainer =
    theme === "dark"
      ? "bg-[#121212] transition-colors"
      : "bg-[#8DB38B] transition-colors";

  const subtitle =
    theme === "dark"
      ? "text-gray-400 transition-colors"
      : "text-white transition-colors";

  const title =
    theme === "dark"
      ? "text-[#8DB38B] transition-colors"
      : "text-white transition-colors";

  const cards =
    theme === "dark"
      ? "bg-[#282828] transition-colors"
      : "bg-[#49111C] transition-colors";

  // Define your feature cards data
  const features = [
    {
      icon: (
        <Calendar
          size={32}
          className="text-center flex mx-auto text-pink-200"
        />
      ),
      title: "Therapy Booking",
      description:
        "Schedule sessions with licensed therapists who match your needs and preferences. Easy booking, rescheduling, and virtual sessions.",
    },
    {
      icon: <Heart size={32} className="text-pink-200" />,
      title: "Self-help Exercises",
      description:
        "Access guided meditations, journaling prompts, breathing exercises, and personalized activities to build resilience and mindfulness.",
    },
    {
      icon: <User size={32} className="text-pink-200" />,
      title: "Therapist Buddy",
      description:
        "Your assigned therapist keeps track of your progress, provides personalized exercises, and is available when you need guidance.",
    },
    {
      icon: <MessageCircle size={32} className="text-pink-200" />,
      title: "Supportive Community",
      description:
        "Connect with others who understand what you're going through. Share experiences, offer support, and never feel alone in your journey.",
    },
    {
      icon: <BookOpen size={32} className="text-pink-200" />,
      title: "Wellness Resources",
      description:
        "Explore our extensive library of articles, blogs, audiobooks, and podcasts covering various mental health topics.",
    },
  ];

  if (!mounted) {
    // Return a placeholder or loading state
    return <div className="min-h-screen bg-gray-800"></div>;
  }

  return (
    <div
      className={` ${mainContainer} text-white min-h-screen  p-6 md:p-10`}
    >
      <div className="mx-auto flex flex-col ">
        <div className="text-center mb-16">
          <h1
            className={`${title} text-3xl md:text-5xl lg:text-6xl font-bold  mb-4`}
          >
            Your Complete Mental Wellness Solution
          </h1>
          <p className={` ${subtitle} text-sm md:text-base max-w-3xl mx-auto`}>
            DeepSoul combines multiple approaches to provide comprehensive
            support for your mental wellbeing journey.
          </p>
        </div>

        {/* Features Swiper with Custom Navigation */}
        <div className="relative  pt-5 md-mt-0 mt-10">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              // When window width is >= 640px (sm)
              640: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px (lg)
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={setSwiper}
            className="pb-12" // Add padding bottom for pagination bullets
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  cardClass={cards}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="flex justify-center gap-4 mt-8 md:mt-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="bg-[#68a764] hover:bg-[#588e56] text-white p-3 rounded-full shadow-lg transition duration-200"
              aria-label="Previous features"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="bg-[#68a764] hover:bg-[#588e56] text-white p-3 rounded-full shadow-lg transition duration-200"
              aria-label="Next features"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
