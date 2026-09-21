import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Briefcase,
  Plus,
  MessageSquare,
  Users,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  PhoneCall,
  X,
  Sparkles,
} from "lucide-react";

const FloatingSocialBar: React.FC = () => {
  const [socialOpen, setSocialOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61574788298611",
      icon: Facebook,
      label: "Facebook",
      hover: "hover:text-[#1877F2]",
    },
    {
      href: "https://x.com/TechlabsSu58347",
      icon: Twitter,
      label: "Twitter",
      hover: "hover:text-[#1DA1F2]",
    },
    {
      href: "https://www.linkedin.com/in/sudo-techlabs-8b6708375",
      icon: Linkedin,
      label: "LinkedIn",
      hover: "hover:text-[#0A66C2]",
    },
    {
      href: "https://instagram.com",
      icon: Instagram,
      label: "Instagram",
      hover: "hover:text-[#E4405F]",
    },
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
      hover: "hover:text-slate-900",
    },
    {
      href: "https://wa.me/919929825003",
      isCustom: true,
      label: "WhatsApp",
      render: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-5 h-5"
        />
      ),
    },
    {
      href: "tel:+919929825003",
      icon: PhoneCall,
      label: "Phone",
      hover: "hover:text-emerald-500",
    },
  ];

  return (
    <>
      {/* Mobile-Only Bottom Navigation Dock (Touches bottom edge, zero space beneath) */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden pointer-events-none">
        <div className="pointer-events-auto relative w-full">
          
          {/* Social Popover Menu */}
          <AnimatePresence>
            {socialOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: -10 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white/95 border border-blue-100 shadow-2xl p-3.5 rounded-3xl backdrop-blur-2xl flex items-center gap-2.5 z-50"
              >
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`w-10 h-10 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-center text-slate-700 hover:scale-110 hover:shadow-md transition-all ${
                        item.hover || ""
                      }`}
                    >
                      {item.isCustom ? item.render : Icon ? <Icon className="w-5 h-5" /> : null}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Flush Edge-to-Edge Bottom Dock Touching the Screen Base */}
          <nav className="w-full bg-white/95 backdrop-blur-2xl border-t border-blue-100/90 shadow-[0_-8px_30px_rgba(0,102,255,0.1)] px-5 py-2 flex items-center justify-between pb-[calc(env(safe-area-inset-bottom,0px)+8px)]">
            {/* Home Link */}
            <Link
              to="/"
              className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition ${
                location.pathname === "/"
                  ? "text-[#0066FF]"
                  : "text-slate-500 hover:text-[#0066FF]"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* Work Link */}
            <Link
              to="/work/projects"
              className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition ${
                location.pathname.startsWith("/work")
                  ? "text-[#0066FF]"
                  : "text-slate-500 hover:text-[#0066FF]"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Work</span>
            </Link>

            {/* Signature Concentric Ripple Center 3D Action Button */}
            <div className="relative -mt-6">
              <button
                onClick={() => setSocialOpen(!socialOpen)}
                aria-label="Quick Connect Menu"
                className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#0052CC] via-[#0066FF] to-[#00D2FF] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,102,255,0.45)] ripple-ring ripple-pulse cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <motion.div
                  animate={{ rotate: socialOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-6 h-6 stroke-[2.5]" />
                </motion.div>
              </button>
            </div>

            {/* Contact / Inquiries Link */}
            <Link
              to="/contact"
              className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition ${
                location.pathname === "/contact"
                  ? "text-[#0066FF]"
                  : "text-slate-500 hover:text-[#0066FF]"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Inquiry</span>
            </Link>

            {/* Careers Link */}
            <Link
              to="/careers"
              className={`flex flex-col items-center gap-1 text-[11px] font-semibold transition ${
                location.pathname === "/careers"
                  ? "text-[#0066FF]"
                  : "text-slate-500 hover:text-[#0066FF]"
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Careers</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default FloatingSocialBar;
