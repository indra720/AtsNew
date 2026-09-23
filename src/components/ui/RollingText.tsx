import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Individual character that rolls on hover and on periodic wake-up
export const RollingChar: React.FC<{ char: string; index: number }> = ({ char, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block overflow-hidden cursor-default align-baseline"
      style={{ height: "1.18em", verticalAlign: "top" }}
    >
      <motion.span
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.36, delay: index * 0.018, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
      <motion.span
        aria-hidden="true"
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.36, delay: index * 0.018, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-0 text-[#0066FF] select-none pointer-events-none"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

// Phrase with rolling letters on hover
export const RollingPhrase: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((c, i) => (
        <RollingChar key={`${c}-${i}`} char={c} index={i} />
      ))}
    </span>
  );
};

// 3D vertical rolling dynamic word cycler (Ideas -> Visions -> Innovations -> Solutions -> Future)
export const RollingDynamicWord: React.FC<{
  words?: string[];
  interval?: number;
  className?: string;
}> = ({
  words = ["Ideas", "Visions", "Innovations", "Solutions", "Future"],
  interval = 2800,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const currentWord = words[index];

  return (
    <span className={`inline-flex relative overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: "115%", opacity: 0, rotateX: -65, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
          exit={{ y: "-115%", opacity: 0, rotateX: 65, filter: "blur(4px)" }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1], // Smooth luxury cubic-bezier ease
          }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2FF] font-bold origin-center select-none"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RollingDynamicWord;
