import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface GsapRollingTextProps {
  words?: string[];
  interval?: number;
  className?: string;
}

export const GsapRollingText: React.FC<GsapRollingTextProps> = ({
  words = ["Ideas", "Visions", "Innovations", "Products", "Future"],
  interval = 2800,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const word1Ref = useRef<HTMLSpanElement | null>(null);
  const word2Ref = useRef<HTMLSpanElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const isAnimating = useRef(false);

  useEffect(() => {
    const word1 = word1Ref.current;
    const word2 = word2Ref.current;
    if (!word1 || !word2) return;

    // Set initial 3D transform properties
    gsap.set(word1, {
      yPercent: 0,
      rotateX: 0,
      opacity: 1,
      transformPerspective: 1000,
      transformOrigin: "50% 50% -35px",
    });

    gsap.set(word2, {
      yPercent: 120,
      rotateX: -90,
      opacity: 0,
      transformPerspective: 1000,
      transformOrigin: "50% 50% -35px",
    });

    let currentIdx = 0;

    const timer = setInterval(() => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const nxtIdx = (currentIdx + 1) % words.length;
      setNextIndex(nxtIdx);

      // Pre-position word2 at the bottom before rolling up
      gsap.set(word2, {
        yPercent: 120,
        rotateX: -90,
        opacity: 0,
        filter: "blur(4px)",
      });

      const tl = gsap.timeline({
        onComplete: () => {
          currentIdx = nxtIdx;
          setCurrentIndex(nxtIdx);

          // Reset word1 content to current word, snap it to 0deg
          gsap.set(word1, {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          });
          // Hide word2
          gsap.set(word2, {
            yPercent: 120,
            rotateX: -90,
            opacity: 0,
          });

          isAnimating.current = false;
        },
      });

      // 1. Current word rolls UP and away into 3D space
      tl.to(
        word1,
        {
          yPercent: -120,
          rotateX: 90,
          opacity: 0,
          filter: "blur(4px)",
          duration: 0.85,
          ease: "power3.inOut",
        },
        0
      );

      // 2. Next word rolls UP into view from below in 3D space
      tl.to(
        word2,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.inOut",
        },
        0
      );
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative overflow-visible select-none align-baseline text-left ${className}`}
      style={{
        perspective: 1200,
        minWidth: "3.2ch",
        height: "1.15em",
        verticalAlign: "bottom",
      }}
    >
      {/* Active Word 1 */}
      <span
        ref={word1Ref}
        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2FF] font-bold will-change-transform"
      >
        {words[currentIndex]}
      </span>

      {/* Incoming Word 2 (Absolute on top of Word 1 during 3D roll) */}
      <span
        ref={word2Ref}
        className="absolute left-0 top-0 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2FF] font-bold will-change-transform pointer-events-none"
      >
        {words[nextIndex]}
      </span>
    </span>
  );
};

export default GsapRollingText;
