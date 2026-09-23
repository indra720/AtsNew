import React from "react";
import { motion } from "framer-motion";

export default function HeroWaveNodes3D() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      
      {/* ============================================================ */}
      {/* CENTER-BOTTOM SCROLL TO DISCOVER MOUSE INDICATOR */}
      {/* ============================================================ */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto z-20 hidden md:flex flex-col items-center gap-1.5 text-slate-400 group cursor-pointer">
        <div className="w-5 h-7.5 rounded-full border-2 border-slate-400/60 flex items-start justify-center p-1 backdrop-blur-xs">
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#0066FF]"
          />
        </div>
        <span className="text-[10px] sm:text-[11px] font-sans font-medium text-slate-500 tracking-wide">
          Scroll to Discover
        </span>
      </div>

    </div>
  );
}
