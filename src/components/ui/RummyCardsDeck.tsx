import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
} from "lucide-react";
import { HERO_POSTS } from "../../data/agencyMediaData";

export const RummyCardsDeck: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const posts = HERO_POSTS;
  const currentPost = posts[activeIndex];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Self-changing auto-slide every 3.8s (Pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered, posts.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % posts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  // Touch Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Helper to get relative offset: -1 (left), 0 (center/active), +1 (right)
  const getCardPosition = (index: number) => {
    const total = posts.length;
    let diff = (index - activeIndex) % total;
    if (diff < 0) diff += total;

    if (diff === 0) return "active";
    if (diff === 1 || (diff === total - 1 && diff > 1)) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] mx-auto flex flex-col items-center select-none"
    >
      {/* Ambient Glow behind Rummy Cards Deck */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-gradient-to-tr from-[#0066FF]/25 via-[#00D2FF]/20 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* Floating Category Pill */}
      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/95 border border-blue-200/90 shadow-sm text-[11px] sm:text-xs font-mono font-bold text-[#0066FF] mb-3 sm:mb-5 z-20 backdrop-blur-md">
        <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#0066FF]" />
        <span>{currentPost.badge || "FEATURED SPOTLIGHT"}</span>
      </div>

      {/* ============================================================ */}
      {/* 3D RUMMY CARDS FAN STACK (True 1:1 Aspect Ratio on All Screens) */}
      {/* ============================================================ */}
      <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[310px] sm:max-w-[390px] md:max-w-[430px] lg:max-w-[470px] flex items-center justify-center mx-auto">
        {posts.map((post, index) => {
          const position = getCardPosition(index);
          const isActive = position === "active";
          const isLeft = position === "left";
          const isRight = position === "right";

          if (position === "hidden") return null;

          // Responsive 3D Rummy Fan Transformations
          const xOffset = isMobile ? 26 : 62;
          const yOffset = isMobile ? 8 : 15;
          const rotateAngle = isMobile ? 5 : 9;

          let x = 0;
          let y = 0;
          let rotate = 0;
          let scale = 1;
          let zIndex = 10;
          let opacity = 1;

          if (isActive) {
            x = 0;
            y = isMobile ? -6 : -10;
            rotate = 0;
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isLeft) {
            x = -xOffset;
            y = yOffset;
            rotate = -rotateAngle;
            scale = isMobile ? 0.92 : 0.88;
            zIndex = 15;
            opacity = 0.72;
          } else if (isRight) {
            x = xOffset;
            y = yOffset;
            rotate = rotateAngle;
            scale = isMobile ? 0.92 : 0.88;
            zIndex = 14;
            opacity = 0.72;
          }

          return (
            <motion.div
              key={post.id}
              onClick={() => handleCardClick(index)}
              animate={{
                x,
                y,
                rotate,
                scale,
                zIndex,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className={`absolute top-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                isActive
                  ? "shadow-[0_20px_50px_rgba(0,102,255,0.28)] border-2 border-[#0066FF]/70 bg-white ring-2 sm:ring-4 ring-blue-500/15"
                  : "shadow-[0_10px_25px_rgba(0,0,0,0.14)] border border-slate-200 bg-white/90 hover:opacity-90"
              }`}
            >
              {/* Card Image (100% Uncropped 1:1 Creative - Fits Full Frame on Mobile) */}
              <div className="relative w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain sm:object-cover block"
                  loading="lazy"
                />

                {/* Glassy Sheen on Inactive Cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[0.5px] transition-opacity" />
                )}

                {/* Overlaid Badges for Active Card (Compact on Mobile so it doesn't obstruct text) */}
                {isActive && (
                  <div className="absolute top-2 sm:top-3.5 inset-x-2 sm:inset-x-3.5 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/20 text-[9px] sm:text-[10px] font-mono font-bold tracking-wider uppercase pointer-events-auto shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>{post.tag}</span>
                    </span>

                    {post.id === "ajit-ceo" && (
                      <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-[9px] sm:text-[10px] font-mono shadow-md pointer-events-auto">
                        <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                        <span>FOUNDER & CEO</span>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ============================================================ */}
      {/* NAVIGATION CONTROLS (Arrows & Dot Indicators)                 */}
      {/* ============================================================ */}
      <div className="flex items-center justify-between w-full max-w-[260px] sm:max-w-[300px] mt-5 sm:mt-7 z-20">
        <button
          onClick={handlePrev}
          className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0066FF] border border-slate-200 shadow-sm transition transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {posts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-6 sm:w-7 bg-[#0066FF]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0066FF] border border-slate-200 shadow-sm transition transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next card"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-2 text-[10px] sm:text-[11px] font-mono text-slate-500">
        Swipe or click to flip &bull; {activeIndex + 1} of {posts.length}
      </div>
    </div>
  );
};

export default RummyCardsDeck;
