import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Sparkles,
  Layers,
  Phone,
  MessageSquare,
  Users,
  Briefcase,
  FileCode2,
  X,
  ExternalLink,
  ShieldCheck,
  Building,
} from "lucide-react";
import { REAL_PROJECTS } from "../../data/projectsData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Define static quick actions & pages
  const staticActions = [
    {
      id: "action-consult",
      title: "Schedule Free Architecture Consultation",
      subtitle: "Connect with senior engineers within 24 hours",
      category: "Actions",
      icon: Sparkles,
      action: () => {
        onClose();
        navigate("/lets-create");
      },
    },
    {
      id: "action-call",
      title: "Call ATS Engineering Office (+91 9929825003)",
      subtitle: "Direct line for enterprise enquiries",
      category: "Actions",
      icon: Phone,
      action: () => {
        window.location.href = "tel:+919929825003";
        onClose();
      },
    },
    {
      id: "action-whatsapp",
      title: "WhatsApp Direct Connect",
      subtitle: "Chat with a solution architect on WhatsApp",
      category: "Actions",
      icon: MessageSquare,
      action: () => {
        window.open("https://wa.me/919929825003?text=Hi%20ATS%20Global%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20software%20project.", "_blank");
        onClose();
      },
    },
    {
      id: "page-projects",
      title: "Projects Gallery (All 8+ Production Platforms)",
      subtitle: "View real-world enterprise deployments",
      category: "Navigation",
      icon: Layers,
      action: () => {
        onClose();
        navigate("/work/projects");
      },
    },
    {
      id: "page-services",
      title: "All Core Technology Services & Pricing",
      subtitle: "Custom software, Cloud, DevOps, Mobile, AI/ML",
      category: "Navigation",
      icon: FileCode2,
      action: () => {
        onClose();
        navigate("/services");
      },
    },
    {
      id: "page-about",
      title: "About ATS Global Tech & Leadership",
      subtitle: "CEO Ajeet Singh & 15+ years engineering pedigree",
      category: "Navigation",
      icon: Users,
      action: () => {
        onClose();
        navigate("/about");
      },
    },
    {
      id: "page-careers",
      title: "Careers & Open Engineering Positions",
      subtitle: "Join our development teams in Jaipur, Rajasthan",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        onClose();
        navigate("/careers");
      },
    },
  ];

  // Convert real projects to search items
  const projectItems = REAL_PROJECTS.map((p) => ({
    id: `project-${p.id}`,
    title: p.title,
    subtitle: `${p.tagline} • ${p.techStack.slice(0, 3).join(", ")}`,
    category: "Real Projects",
    icon: Building,
    badge: p.badge,
    action: () => {
      onClose();
      navigate(`/project-details/${p.id}`);
    },
  }));

  const allItems = [...projectItems, ...staticActions];

  const filteredItems = allItems.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation inside command palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_70px_rgba(0,102,255,0.25)] border border-blue-200/90 overflow-hidden flex flex-col z-10"
        >
          {/* Top Search Input Bar */}
          <div className="relative flex items-center px-5 py-4 border-b border-slate-100">
            <Search className="w-5 h-5 text-[#0066FF] shrink-0 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search real projects, services, or type an action..."
              className="w-full bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg mr-2 text-xs font-mono"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
              aria-label="Close Command Palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-10 text-center text-slate-500 text-xs">
                No results found for "{query}". Try searching "Call Center", "ERP", "Ecommerce", or "Services".
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-sm"
                        : "hover:bg-blue-50/70 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-blue-50 text-[#0066FF] border border-blue-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className={`text-xs sm:text-sm font-bold truncate ${
                              isSelected ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {item.title}
                          </p>
                          {"badge" in item && (
                            <span
                              className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase shrink-0 ${
                                isSelected
                                  ? "bg-white/25 text-white"
                                  : "bg-blue-100/70 text-[#0066FF]"
                              }`}
                            >
                              {(item as any).badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-[11px] truncate mt-0.5 ${
                            isSelected ? "text-blue-100" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md hidden sm:inline-block ${
                          isSelected
                            ? "bg-white/15 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.category}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${
                          isSelected ? "text-white translate-x-0.5" : "text-slate-300"
                        } transition-transform`}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Controls / Keyboard Hints */}
          <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-xs">
                  ↑
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-xs">
                  ↓
                </kbd>
                <span className="hidden sm:inline">Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-xs">
                  ↵
                </kbd>
                <span className="hidden sm:inline">Select</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] shadow-xs">
                  ESC
                </kbd>
                <span className="hidden sm:inline">Close</span>
              </span>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-bold text-[#0066FF]">
              <Sparkles className="w-3 h-3" />
              <span>ATS Global Quick Finder</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;

