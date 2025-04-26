// MoodTracker.tsx
"use client";
import React, {  useState } from "react";
import { useTheme } from "../context/ThemeContext";

const MoodTracker = () => {

      const { theme } = useTheme();
       
    
       
    
        const cards =
          theme === "dark"
            ? "bg-[#282828] rounded-lg  transition-colors"
            : "bg-[#ffb2d7] transition-colors";

  const [selectedMood, setSelectedMood] = useState<string>("Depress");
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const moods = [
    { name: "Good", emoji: "🙂", color: "#D9DBC9" },
    { name: "Love", emoji: "😁", color: "#F9ECD9" },
    { name: "Depress", emoji: "😑", color: "#F9B384" },
    { name: "Sad", emoji: "😔", color: "#D9DCDF" },
    { name: "Worried", emoji: "😣", color: "#F9D9D2" },
  ];

  const reasons = [
    { id: "loneliness", label: "Loneliness" },
    { id: "self-esteem", label: "Self esteem" },
    { id: "anxiety", label: "Anxiety" },
    { id: "stress", label: "Stress", highlight: true },
    { id: "relationship", label: "Relationship issue" },
    { id: "aggression", label: "Aggression" },
    { id: "overthinking", label: "Over thinking", highlight: true },
    { id: "marital", label: "Marital conflict" },
    { id: "grief", label: "Grief" },
    { id: "communication", label: "Communication problem" },
    { id: "exam", label: "Exam stress" },
    { id: "communication2", label: "Communication problem", highlight: true },
    { id: "exam2", label: "Exam stress", highlight: true },
    { id: "sleep", label: "Sleep related problem" },
    { id: "decision", label: "Decision making", highlight: true },
  ];

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleReasonClick = (reason: string) => {
    setSelectedReason(reason);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* Mood selector */}
      <div className={` rounded-xl shadow-lg w-full p-6 mb-6 ${cards}`}>
        <div className="flex justify-between items-center">
          {moods.map((mood) => (
            <div key={mood.name} className="flex flex-col items-center">
              <button
                onClick={() => handleMoodClick(mood.name)}
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2`}
                style={{
                  backgroundColor: mood.color,
                  border:
                    selectedMood === mood.name ? "2px solid #333" : "none",
                }}
              >
                <span className="text-2xl">{mood.emoji}</span>
              </button>
              <span className="text-gray-500 text-sm">{mood.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reason selector */}
      <div className={` rounded-xl shadow-lg w-full p-6 mb-6 ${cards}`}>
        <h2 className="text-xl md:text-2xl text-orange-500 font-bold mb-2 flex items-center">
          Why do you feel {selectedMood}?
          <span className="ml-2 text-2xl">
            {moods.find((m) => m.name === selectedMood)?.emoji}
          </span>
        </h2>

        {/* <p className="text-orange-300 mb-4">Select the most relevant option</p> */}

        <div className="flex flex-wrap gap-2">
          {reasons.map((reason) => (
            <button
              key={reason.id}
              onClick={() => handleReasonClick(reason.label)}
              className={`px-4 py-2 border rounded-full text-sm  ${
                reason.highlight
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-800 border-gray-300"
              } ${
                selectedReason === reason.label ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {reason.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
