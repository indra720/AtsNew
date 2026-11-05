import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Video as VideoIcon,
  CheckCircle2,
  X,
} from "lucide-react";
import { COMPANY_VIDEOS, CompanyVideo } from "../data/agencyMediaData";
import CinemaVideoModal from "./ui/CinemaVideoModal";

export const CompanyVideoShowreel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [modalVideo, setModalVideo] = useState<CompanyVideo | null>(null);

  // Screen width for responsive 3D spacing
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Touch swipe support for tablet / md screens
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // References to all 7 video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalVideos = COMPANY_VIDEOS.length;
  const currentVideo = COMPANY_VIDEOS[activeIndex];

  // Self-change Auto-slide (every 3.8s)
  // Pauses when audio is active OR user is hovering
  useEffect(() => {
    if (isAudioActive || isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalVideos);
    }, 3800);

    return () => clearInterval(interval);
  }, [isAudioActive, isHovered, totalVideos]);

  // When active index changes: mute all other videos, keep active in sync
  useEffect(() => {
    videoRefs.current.forEach((vidEl, idx) => {
      if (!vidEl) return;
      if (idx !== activeIndex) {
        vidEl.muted = true;
        vidEl.volume = 0;
        if (vidEl.paused) {
          vidEl.play().catch(() => {});
        }
      } else {
        if (isAudioActive) {
          vidEl.muted = isMuted;
          vidEl.volume = 1;
        } else {
          vidEl.muted = true;
          vidEl.volume = 0;
        }
        if (vidEl.paused && !isPaused) {
          vidEl.play().catch(() => {});
        }
      }
    });
  }, [activeIndex, isAudioActive, isMuted, isPaused]);

  // Play with Audio on click!
  const handleStartAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const activeEl = videoRefs.current[activeIndex];
    if (!activeEl) return;

    activeEl.muted = false;
    activeEl.volume = 1;
    activeEl.currentTime = 0;
    activeEl
      .play()
      .then(() => {
        setIsAudioActive(true);
        setIsMuted(false);
        setIsPaused(false);
      })
      .catch((err) => {
        console.warn("Audio playback issue:", err);
        setIsAudioActive(true);
      });
  };

  // Toggle pause/resume for active video
  const handleTogglePause = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const activeEl = videoRefs.current[activeIndex];
    if (!activeEl) return;

    if (activeEl.paused) {
      activeEl.play().catch(() => {});
      setIsPaused(false);
    } else {
      activeEl.pause();
      setIsPaused(true);
    }
  };

  // Stop audio mode and return to silent preview
  const handleStopAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const activeEl = videoRefs.current[activeIndex];
    if (activeEl) {
      activeEl.muted = true;
      activeEl.volume = 0;
      if (activeEl.paused) activeEl.play().catch(() => {});
    }
    setIsAudioActive(false);
    setIsMuted(false);
    setIsPaused(false);
  };

  // Toggle Mute / Unmute
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const activeEl = videoRefs.current[activeIndex];
    if (!activeEl) return;

    if (isMuted) {
      activeEl.muted = false;
      activeEl.volume = 1;
      setIsMuted(false);
    } else {
      activeEl.muted = true;
      activeEl.volume = 0;
      setIsMuted(true);
    }
  };

  // Select video card
  const handleSelectIndex = (index: number) => {
    if (index === activeIndex) return;

    const prevEl = videoRefs.current[activeIndex];
    if (prevEl) {
      prevEl.muted = true;
      prevEl.volume = 0;
    }
    setIsAudioActive(false);
    setIsMuted(false);
    setIsPaused(false);
    setActiveIndex(index);
  };

  const handleNext = () => {
    handleSelectIndex((activeIndex + 1) % totalVideos);
  };

  const handlePrev = () => {
    handleSelectIndex((activeIndex - 1 + totalVideos) % totalVideos);
  };

  // Touch Swipe for Tablets & Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const handleOpenFullscreenModal = (vid: CompanyVideo, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const activeEl = videoRefs.current[activeIndex];
    if (activeEl) {
      activeEl.muted = true;
      activeEl.pause();
    }
    setIsAudioActive(false);
    setModalVideo(vid);
  };

  // Calculate signed circular offset [-3, -2, -1, 0, 1, 2, 3]
  const getOffset = (index: number) => {
    let diff = (index - activeIndex) % totalVideos;
    if (diff > 3) diff -= totalVideos;
    if (diff < -3) diff += totalVideos;
    return diff;
  };

  // Responsive 3D Geometry calculation
  const getCardTransforms = (offset: number) => {
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;
    const isDesktop = windowWidth >= 1024 && windowWidth < 1440;

    // Mobile (< 640px)
    if (isMobile) {
      if (offset === 0)
        return { x: 0, scale: 1.05, rotateY: 0, zIndex: 40, opacity: 1, pointerEvents: "auto" as const };
      if (offset === -1)
        return { x: -125, scale: 0.82, rotateY: 16, zIndex: 30, opacity: 0.55, pointerEvents: "auto" as const };
      if (offset === 1)
        return { x: 125, scale: 0.82, rotateY: -16, zIndex: 30, opacity: 0.55, pointerEvents: "auto" as const };
      if (offset === -2)
        return { x: -195, scale: 0.65, rotateY: 26, zIndex: 20, opacity: 0.25, pointerEvents: "auto" as const };
      if (offset === 2)
        return { x: 195, scale: 0.65, rotateY: -26, zIndex: 20, opacity: 0.25, pointerEvents: "auto" as const };
      return {
        x: offset < 0 ? -250 : 250,
        scale: 0.5,
        rotateY: offset < 0 ? 32 : -32,
        zIndex: 10,
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }

    // Tablet / iPad (640px to 1023px) — Tuned for md screens
    if (isTablet) {
      if (offset === 0)
        return { x: 0, scale: 1.08, rotateY: 0, zIndex: 40, opacity: 1, pointerEvents: "auto" as const };
      if (offset === -1)
        return { x: -145, scale: 0.86, rotateY: 16, zIndex: 30, opacity: 0.85, pointerEvents: "auto" as const };
      if (offset === 1)
        return { x: 145, scale: 0.86, rotateY: -16, zIndex: 30, opacity: 0.85, pointerEvents: "auto" as const };
      if (offset === -2)
        return { x: -255, scale: 0.72, rotateY: 25, zIndex: 20, opacity: 0.55, pointerEvents: "auto" as const };
      if (offset === 2)
        return { x: 255, scale: 0.72, rotateY: -25, zIndex: 20, opacity: 0.55, pointerEvents: "auto" as const };
      if (offset === -3)
        return { x: -345, scale: 0.58, rotateY: 32, zIndex: 10, opacity: 0.3, pointerEvents: "auto" as const };
      return { x: 345, scale: 0.58, rotateY: -32, zIndex: 10, opacity: 0.3, pointerEvents: "auto" as const };
    }

    // Standard Desktop (1024px to 1439px)
    if (isDesktop) {
      if (offset === 0)
        return { x: 0, scale: 1.12, rotateY: 0, zIndex: 40, opacity: 1, pointerEvents: "auto" as const };
      if (offset === -1)
        return { x: -210, scale: 0.90, rotateY: 22, zIndex: 30, opacity: 0.88, pointerEvents: "auto" as const };
      if (offset === 1)
        return { x: 210, scale: 0.90, rotateY: -22, zIndex: 30, opacity: 0.88, pointerEvents: "auto" as const };
      if (offset === -2)
        return { x: -365, scale: 0.78, rotateY: 32, zIndex: 20, opacity: 0.65, pointerEvents: "auto" as const };
      if (offset === 2)
        return { x: 365, scale: 0.78, rotateY: -32, zIndex: 20, opacity: 0.65, pointerEvents: "auto" as const };
      if (offset === -3)
        return { x: -480, scale: 0.66, rotateY: 40, zIndex: 10, opacity: 0.40, pointerEvents: "auto" as const };
      return { x: 480, scale: 0.66, rotateY: -40, zIndex: 10, opacity: 0.40, pointerEvents: "auto" as const };
    }

    // Large Displays (1440px+)
    if (offset === 0)
      return { x: 0, scale: 1.15, rotateY: 0, zIndex: 40, opacity: 1, pointerEvents: "auto" as const };
    if (offset === -1)
      return { x: -240, scale: 0.92, rotateY: 24, zIndex: 30, opacity: 0.90, pointerEvents: "auto" as const };
    if (offset === 1)
      return { x: 240, scale: 0.92, rotateY: -24, zIndex: 30, opacity: 0.90, pointerEvents: "auto" as const };
    if (offset === -2)
      return { x: -420, scale: 0.80, rotateY: 34, zIndex: 20, opacity: 0.70, pointerEvents: "auto" as const };
    if (offset === 2)
      return { x: 420, scale: 0.80, rotateY: -34, zIndex: 20, opacity: 0.70, pointerEvents: "auto" as const };
    if (offset === -3)
      return { x: -560, scale: 0.68, rotateY: 42, zIndex: 10, opacity: 0.45, pointerEvents: "auto" as const };
    return { x: 560, scale: 0.68, rotateY: -42, zIndex: 10, opacity: 0.45, pointerEvents: "auto" as const };
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-18 lg:py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F0F6FE] to-[#E6F0FA] text-slate-900 overflow-hidden border-t border-b border-blue-100">
      {/* Ambient Radial Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#0066FF]/12 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Full Cinema Video Modal */}
      <CinemaVideoModal
        video={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />

      <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
        {/* ============================================================ */}
        {/* BALANCED RESPONSIVE HEADER: Perfectly aligned on md & all    */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 md:mb-12 gap-5 sm:gap-6 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] mb-2.5 shadow-xs">
              <VideoIcon className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>ATS VIDEO SHOWCASE &bull; 7 CAPABILITIES IN MOTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-slate-950 tracking-tight font-display leading-[1.18]">
              Inside ATS Global Tech &mdash;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
                Engineering Showcase
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 font-sans font-medium max-w-xl mx-auto lg:mx-0">
              Watch real vertical video reels showcasing our enterprise architectures, AI voice telephony,
              multi-tenant ERP platforms, and cloud engineering delivered in production.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 text-xs font-mono font-semibold text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>3 Left &bull; 1 Center &bull; 3 Right</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0066FF] shadow-xs">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Click Play for Audio</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3D COVER FLOW STAGE: RESPONSIVE ACROSS MD, TABLET & DESKTOP  */}
        {/* ============================================================ */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[450px] sm:h-[490px] md:h-[520px] lg:h-[580px] xl:h-[610px] flex items-center justify-center select-none overflow-hidden"
          style={{ perspective: "1300px" }}
        >
          {COMPANY_VIDEOS.map((video, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const { x, scale, rotateY, zIndex, opacity, pointerEvents } =
              getCardTransforms(offset);

            return (
              <motion.div
                key={video.id}
                onClick={() => {
                  if (!isActive) handleSelectIndex(index);
                }}
                animate={{
                  x,
                  scale,
                  rotateY,
                  zIndex,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 26,
                  mass: 0.9,
                }}
                style={{
                  pointerEvents,
                  transformStyle: "preserve-3d",
                }}
                className={`absolute top-1/2 -translate-y-1/2 w-[210px] sm:w-[230px] md:w-[250px] lg:w-[280px] xl:w-[295px] aspect-[9/16] rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                  isActive
                    ? "shadow-[0_25px_65px_rgba(0,102,255,0.35)] border-2 border-[#0066FF] ring-4 ring-[#0066FF]/25 bg-slate-950"
                    : "shadow-[0_12px_35px_rgba(0,0,0,0.18)] border border-slate-300/80 bg-slate-950 hover:border-blue-400"
                }`}
              >
                {/* DIRECT VIDEO ELEMENT ON EVERY CARD */}
                <div className="relative w-full h-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.videoUrl}
                    playsInline
                    loop
                    autoPlay
                    muted={!isActive || !isAudioActive || isMuted}
                    preload="auto"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Vignette over video */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isActive
                        ? isAudioActive
                          ? "bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"
                          : "bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/40"
                        : "bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/50 hover:opacity-75"
                    }`}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md shadow-xs ${
                        isActive
                          ? "bg-[#0066FF] text-white border-blue-400 shadow-[0_0_15px_rgba(0,102,255,0.5)]"
                          : "bg-slate-900/80 text-slate-300 border-white/15"
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-cyan-300" />
                      <span>{video.duration}</span>
                    </span>
                  </div>

                  {/* ACTIVE CARD OVERLAY (AUDIO ON / OFF CONTROLS) */}
                  {isActive && (
                    <>
                      {isAudioActive ? (
                        /* Audio Playing HUD */
                        <div className="absolute inset-0 flex flex-col justify-between p-3.5 z-30 pointer-events-auto">
                          {/* Top Live Bar */}
                          <div className="flex items-center justify-between pt-8">
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-[10px] font-bold flex items-center gap-1.5 shadow-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                              <span>AUDIO ACTIVE</span>
                            </span>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={handleToggleMute}
                                className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition cursor-pointer"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                              >
                                {isMuted ? (
                                  <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                                ) : (
                                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                                )}
                              </button>

                              <button
                                onClick={(e) => handleOpenFullscreenModal(video, e)}
                                className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md transition cursor-pointer"
                                aria-label="Fullscreen Cinema"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={handleStopAudio}
                                className="p-1.5 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white border border-white/20 backdrop-blur-md transition cursor-pointer"
                                aria-label="Stop Audio"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Center Pause/Resume on Click */}
                          <div className="my-auto flex justify-center">
                            <button
                              onClick={handleTogglePause}
                              className="p-4 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white border border-white/25 shadow-lg backdrop-blur-md transition transform hover:scale-110 active:scale-95 cursor-pointer"
                              aria-label={isPaused ? "Resume video" : "Pause video"}
                            >
                              {isPaused ? (
                                <Play className="w-6 h-6 fill-current text-emerald-400 ml-0.5" />
                              ) : (
                                <Pause className="w-6 h-6 fill-current text-white" />
                              )}
                            </button>
                          </div>

                          {/* Bottom Info Bar */}
                          <div className="p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                            <div className="truncate pr-2">
                              <p className="text-[11px] font-bold truncate">
                                {video.title}
                              </p>
                              <p className="text-[9px] text-slate-400 font-mono">
                                {video.category}
                              </p>
                            </div>

                            <button
                              onClick={handleTogglePause}
                              className="p-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white shrink-0 transition cursor-pointer shadow-md"
                              aria-label={isPaused ? "Resume" : "Pause"}
                            >
                              {isPaused ? (
                                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                              ) : (
                                <Pause className="w-3.5 h-3.5 fill-current" />
                              )}
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Center Card Ready State: Big Glowing Play Button */
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-auto p-4 text-center">
                          <button
                            onClick={handleStartAudio}
                            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#0052CC] via-[#0066FF] to-[#00D2FF] text-white shadow-[0_0_35px_rgba(0,102,255,0.7)] hover:shadow-[0_0_50px_rgba(0,102,255,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                            aria-label={`Play video with audio: ${video.title}`}
                          >
                            <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-60 pointer-events-none" />
                            <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-white group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      )}
                    </>
                  )}

                  {/* Side Cards: Click to Focus Indicator */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-mono font-bold border border-white/20 shadow-md">
                        Click to Focus
                      </span>
                    </div>
                  )}

                  {/* Bottom Info Overlay (When Audio is not active) */}
                  {!isAudioActive && (
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#38BDF8] block mb-1">
                        {video.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-white font-display leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Floating Previous & Next Chevrons */}
          <button
            onClick={handlePrev}
            className="absolute left-1.5 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 md:p-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#0066FF] border border-blue-200 shadow-[0_8px_25px_rgba(0,102,255,0.2)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Previous capability video"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1.5 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 md:p-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-[#0066FF] border border-blue-200 shadow-[0_8px_25px_rgba(0,102,255,0.2)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Next capability video"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM ACTIVE VIDEO DETAILS & 7-DOT NAVIGATION               */}
        {/* ============================================================ */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* 7 Dot Indicators */}
          <div className="flex items-center gap-2 mb-5">
            {COMPANY_VIDEOS.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => handleSelectIndex(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 h-2.5 rounded-full bg-gradient-to-r from-[#0052CC] to-[#0066FF] shadow-sm"
                    : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to video ${idx + 1}: ${vid.title}`}
              />
            ))}
          </div>

          {/* Active Video Feature Bar */}
          <motion.div
            key={currentVideo.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-blue-100 shadow-[0_10px_35px_rgba(0,102,255,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5"
          >
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0066FF] border border-blue-200 text-[10px] font-mono font-extrabold uppercase">
                  {currentVideo.category}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Video {activeIndex + 1} of {totalVideos}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-950 font-display">
                {currentVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {currentVideo.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {currentVideo.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#0066FF]" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-row md:flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={isAudioActive ? handleTogglePause : handleStartAudio}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0052CC] to-[#0066FF] hover:from-[#0047BA] hover:to-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer"
              >
                {isAudioActive ? (
                  isPaused ? (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Resume Audio</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause Audio</span>
                    </>
                  )
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Play With Audio</span>
                  </>
                )}
              </button>

              <button
                onClick={(e) => handleOpenFullscreenModal(currentVideo, e)}
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 hover:border-[#0066FF] shadow-xs transition cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Full Cinema</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVideoShowreel;
