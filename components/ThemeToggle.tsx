"use client";
import React, { useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className="w-14 h-7 rounded-full border-2 border-black flex items-center p-0.5 cursor-pointer transition-colors duration-300"
      aria-label="Theme toggle"
    >
      <div
        className={`w-5 h-5 bg-black rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-[28px]" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
