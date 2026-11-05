import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Volume2, Maximize2, ShieldCheck } from "lucide-react";
import { CompanyVideo } from "../../data/agencyMediaData";

interface CinemaVideoModalProps {
  video: CompanyVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CinemaVideoModal: React.FC<CinemaVideoModalProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Close on ESC key & stop playback
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Dark Cinematic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl transition-opacity cursor-pointer"
        />

        {/* Modal Window (Optimized for 9:16 Vertical Reel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-sm sm:max-w-md bg-slate-950 rounded-3xl border border-blue-500/30 shadow-[0_25px_80px_rgba(0,102,255,0.35)] overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Cinema Header Bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-900/90 border-b border-slate-800 text-white">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/15 text-[#38BDF8] border border-blue-500/30 text-[10px] font-mono font-bold uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{video.category}</span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 line-clamp-1 max-w-[180px] sm:max-w-[220px]">
                {video.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* HTML5 Vertical Reel Video Player (9:16 Portrait) */}
          <div className="relative w-full aspect-[9/16] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.posterImage}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>

          {/* Cinema Footer Bar */}
          <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/80 text-white">
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-sm font-black text-white font-display line-clamp-1">
                {video.title}
              </h4>
              <span className="text-[10px] font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                4K VERTICAL REEL
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-2">
              {video.description}
            </p>

            <div className="flex flex-wrap items-center gap-1.5">
              {video.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CinemaVideoModal;
