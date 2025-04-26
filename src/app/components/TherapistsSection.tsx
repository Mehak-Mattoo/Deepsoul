"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Phone } from "lucide-react";
import therapist from "../../../public/therapist.png";
import { useTheme } from "../context/ThemeContext";

const TherapistsSection: React.FC = () => {

    const { theme } = useTheme();
    

    const mainContainer =
      theme === "dark"
        ? "bg-[#121212] transition-colors"
        : "bg-[#f9e2c5] transition-colors";

    const subtitle =
      theme === "dark"
        ? "text-gray-400 transition-colors"
        : "text-[#49111C] transition-colors";

    const title =
      theme === "dark"
        ? "text-[#8DB38B] transition-colors"
        : "text-[#49111C] transition-colors";

    const cards =
      theme === "dark"
        ? "bg-[#282828] rounded-lg  transition-colors"
        : "bg-none text-orange-900 transition-colors";
  return (
    <section
      className={`${mainContainer} flex flex-col md:flex-row w-full items-center justify-center  text-white min-h-screen p-6 md:p-10`}
    >
      <div className="w-full md:w-1/2 ">
        <Image
          src={therapist}
          alt="Therapist"
          className="w-2xl md:w-2xl lg:w-3xl"
        />
      </div>

      <div className="w-full md:w-1/2 ">
        {/* Left Column */}
        <div>
          {/* Badge */}
          <div className="my-4">
            <span className="px-6 py-2  bg-pink-100 text-pink-500 rounded-full text-xs md:text-sm font-medium">
              Professional Support
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl ${title}  font-bold mb-4`}
          >
            Connect with Licensed Therapists
          </h2>

          {/* Description */}
          <p className={`${subtitle}  text-sm mb-10`}>
            Our platform makes it easy to schedule sessions, whether in-person
            or virtual, so you can get the support you need, when you need it.
          </p>

          {/* Features List */}
          <div className={`space-y-4  `}>
            {/* Feature 1 */}
            <div className={`flex items-start p-2 ${cards}`}>
              <div className={`flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4`}>
                <Calendar className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-400 text-sm ">
                  Book appointments that fit your busy life
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`flex items-start p-2 ${cards}`}>
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Personalized Matching
                </h3>
                <p className="text-gray-400 text-sm">
                  Find therapists who specialize in your specific needs
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={`flex items-start p-2 ${cards}`}>
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Video className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Virtual Sessions
                </h3>
                <p className="text-gray-400 text-sm">
                  Attend therapy from the comfort of your home
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className={`flex items-start p-2 ${cards}`}>
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Phone className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  Direct Communication
                </h3>
                <p className="text-gray-400 text-sm">
                  Message your therapist between sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
