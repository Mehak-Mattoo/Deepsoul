"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Phone } from "lucide-react";
import therapist from "../../../public/therapist.webp";

const TherapistsSection: React.FC = () => {
  return (
    <section className="bg-[#f9e2c5] flex flex-col md:flex-row w-full items-center justify-center  text-white py-10 px-6">
      <div className="w-1/2 justify-center items-end ">
        <Image
          src={therapist}
          alt="Therapist"
          className="w-2xl md:w-2xl lg:w-3xl"
        />
      </div>

      <div className="w-1/2 ">
        {/* Left Column */}
        <div>
          {/* Badge */}
          <div className="mb-4">
            <span className="px-6 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-medium">
              Professional Support
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl  text-[#49111C]  sm:text-5xl font-bold mb-6">
            Connect with Licensed Therapists
          </h2>

          {/* Description */}
          <p className=" text-[#49111C]  text-sm mb-5">
            Our platform makes it easy to schedule sessions, whether in-person
            or virtual, so you can get the support you need, when you need it.
          </p>

          {/* Features List */}
          <div className="space-y-8 ">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Calendar className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-400">
                  Book appointments that fit your busy life
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Personalized Matching
                </h3>
                <p className="text-gray-400">
                  Find therapists who specialize in your specific needs
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Video className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-pink-500 mb-1">
                  Virtual Sessions
                </h3>
                <p className="text-gray-400">
                  Attend therapy from the comfort of your home
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full mr-4">
                <Phone className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Direct Communication
                </h3>
                <p className="text-gray-400">
                  Message your therapist between sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}

      {/* <div>
          
            <div className="bg-indigo-900 rounded-2xl  p-8 text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Therapists</h3>
              <p className="text-lg mb-6">
                Our network includes hundreds of licensed professionals ready to
                support you.
              </p>

           
              <div className="space-y-6  grid grid-cols-1 md:grid-cols-2">
             
                <div className="flex items-center bg-opacity-50 rounded-xl p-4">
                  <div className="w-16 h-16 flex-shrink-0 relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-orange-300">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <Image
                          src="/api/placeholder/64/64"
                          alt="Dr. Sarah Johnson"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl">Dr. Sarah Johnson</h4>
                    <p className="text-gray-400">Anxiety & Depression</p>
                  </div>
                </div>

             
                <div className="flex items-center bg-opacity-50 rounded-xl p-4">
                  <div className="w-16 h-16 flex-shrink-0 relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-300">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <Image
                          src="/api/placeholder/64/64"
                          alt="Dr. Michael Chen"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl">Dr. Michael Chen</h4>
                    <p className="text-gray-400">Trauma & PTSD</p>
                  </div>
                </div>

               
                <div className="flex items-center bg-opacity-50 rounded-xl p-4">
                  <div className="w-16 h-16 flex-shrink-0 relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <Image
                          src="/api/placeholder/64/64"
                          alt="Dr. Amara Patel"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl">Dr. Amara Patel</h4>
                    <p className="text-gray-400">Relationship Issues</p>
                  </div>
                </div>

              
                <div className="bg-indigo-800 rounded-xl p-2 text-center">
                  <div className="text-4xl font-bold mb-2">+200</div>
                  <p className="text-gray-300">
                    Licensed therapists ready to help
                  </p>
                </div>
              </div>
            </div>
          </div> */}
    </section>
  );
};

export default TherapistsSection;
