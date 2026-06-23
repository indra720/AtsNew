import React from "react";

const AnimatedGradientText: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a]">
      {/* Gradient Animated Text */}
      <h1
        className="text-6xl font-extrabold text-transparent bg-clip-text 
        bg-linear-to-r from-purple-500 via-pink-500 via-red-500 via-sky-500 via-yellow-400 to-purple-500 
        animate-gradient-x"
      >
        Infinite Gradient Text 🔥
      </h1>

      {/* Animated Gradient Button */}
      <button
        className="relative mt-12 px-10 py-4 text-lg font-semibold text-white rounded-lg overflow-hidden 
        shadow-lg hover:scale-105 transition-all duration-300"
      >
        <span
          className="absolute inset-0 bg-linear-to-r 
          from-purple-500 via-pink-500 via-red-500 via-sky-500 via-yellow-400 to-purple-500 
          animate-gradient-x rounded-lg"
        ></span>
        <span className="relative z-10">Start Project</span>
      </button>
    </div>
  );
};

export default AnimatedGradientText;
