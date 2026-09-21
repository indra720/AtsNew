import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, Bell, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AppEntry {
  name: string;
  job: string;
  email?: string;
  phone?: string;
  time: string;
}

const initialApplications: AppEntry[] = [
  {
    name: "Vikram Mehta",
    job: "Senior Full Stack Developer",
    email: "vikram@example.com",
    phone: "+91 9876543210",
    time: "Just now",
  },
  {
    name: "Ananya Sharma",
    job: "UI/UX Designer",
    email: "ananya@example.com",
    phone: "+91 9123456789",
    time: "2 hours ago",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [applications, setApplications] = useState<AppEntry[]>(initialApplications);
  const [count, setCount] = useState(12);
  const [scrolled, setScrolled] = useState(false);

  const closeAllDropdowns = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (
        notifOpen &&
        !(e.target as HTMLElement).closest(".notification-dropdown-container")
      ) {
        setNotifOpen(false);
      }
      if (
        openDropdown &&
        !(e.target as HTMLElement).closest(".desktop-dropdown-container")
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [notifOpen, openDropdown]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Ambient Telemetry Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-blue-100/80 text-xs text-slate-600 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@atsglobaltech.in"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#0066FF] transition font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="hidden sm:inline">info@atsglobaltech.in</span>
            </a>
            <a
              href="tel:+919929825003"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#0066FF] transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>+91 9929825003</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#0066FF] bg-[#EBF5FF] px-3 py-0.5 rounded-full border border-blue-200 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping"></span>
              THE FUTURE WITH NEXT GEN-AI
            </span>

            {/* Notification Bell with Red Badge */}
            <div className="relative notification-dropdown-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setNotifOpen(!notifOpen);
                  if (!notifOpen) setCount(0);
                }}
                className="relative p-1.5 text-slate-600 hover:text-[#0066FF] transition rounded-full hover:bg-blue-50"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-1 bg-[#FF3B30] text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded-full shadow-sm">
                    {count}
                  </span>
                )}
              </button>

              {/* Notification Popover */}
              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-76 bg-white/95 border border-blue-100 shadow-2xl rounded-2xl p-4 z-50 backdrop-blur-2xl"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-bold text-[#0066FF]">
                      <span>Live Notifications</span>
                      <span className="text-[10px] text-slate-400 font-mono">Applications</span>
                    </div>
                    <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto mt-2">
                      {applications.map((app, idx) => (
                        <div key={idx} className="py-2 hover:bg-blue-50/50 px-2 rounded-xl transition">
                          <p className="text-xs font-bold text-slate-900">{app.name}</p>
                          <p className="text-[11px] text-[#0066FF] font-medium">{app.job}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 font-mono">{app.time}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Floating Cloud-Dock Navbar */}
      <div className="px-4 sm:px-6 lg:px-8 mt-2.5">
        <nav
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
            scrolled
              ? "cloud-dock shadow-[0_15px_35px_-10px_rgba(0,102,255,0.12)] border border-white"
              : "bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(0,102,255,0.06)]"
          }`}
        >
          <div className="px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
            {/* Official ATS 3D Logo (Seamlessly Blended) */}
            <Link to="/" onClick={closeAllDropdowns} className="flex items-center py-1 group">
              <img
                src="/newlogo.png"
                alt="ATS GLOBAL TECH - The Future with Next Gen-AI"
                className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:scale-[1.02] transition-transform"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/ats_white_logo.png";
                }}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <Link
                to="/"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/about")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/about") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative desktop-dropdown-container">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                  className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors flex items-center gap-1 z-0 ${
                    location.pathname.startsWith("/services")
                      ? "text-white"
                      : "text-slate-800 hover:text-[#0066FF]"
                  }`}
                >
                  {location.pathname.startsWith("/services") && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  Services <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {openDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-2.5 w-60 bg-white/95 border border-blue-100 rounded-2xl shadow-2xl p-2.5 z-50 backdrop-blur-2xl">
                    <Link
                      to="/services"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      All Services & Pricing
                    </Link>
                    <Link
                      to="/services/mobile"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      Mobile & Cloud Solutions
                    </Link>
                    <Link
                      to="/services/industries"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      Industries Served
                    </Link>
                  </div>
                )}
              </div>

              {/* Work Dropdown */}
              <div className="relative desktop-dropdown-container">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "work" ? null : "work")}
                  className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors flex items-center gap-1 z-0 ${
                    location.pathname.startsWith("/work")
                      ? "text-white"
                      : "text-slate-800 hover:text-[#0066FF]"
                  }`}
                >
                  {location.pathname.startsWith("/work") && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  Work <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>

                {openDropdown === "work" && (
                  <div className="absolute top-full left-0 mt-2.5 w-60 bg-white/95 border border-blue-100 rounded-2xl shadow-2xl p-2.5 z-50 backdrop-blur-2xl">
                    <Link
                      to="/work/projects"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      Projects Gallery
                    </Link>
                    <Link
                      to="/work/portfolio"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      Portfolio Matrix
                    </Link>
                    <Link
                      to="/work/case-studies"
                      onClick={closeAllDropdowns}
                      className="block px-3.5 py-2 text-[14px] text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/70 rounded-xl transition font-bold"
                    >
                      Case Studies Deep-Dive
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/products"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/products")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/products") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Products
              </Link>

              <Link
                to="/testimonials"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/testimonials")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/testimonials") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Testimonials
              </Link>

              <Link
                to="/blogs"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/blogs")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/blogs") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Blogs
              </Link>

              <Link
                to="/careers"
                onClick={closeAllDropdowns}
                className={`relative px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-colors z-0 ${
                  isActive("/careers")
                    ? "text-white"
                    : "text-slate-800 hover:text-[#0066FF]"
                }`}
              >
                {isActive("/careers") && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] rounded-full -z-10 shadow-[0_4px_16px_rgba(1,45,148,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Careers
              </Link>
            </div>

            {/* Right Action CTA (With Logo Gradient: #000c3d, #012d94, #86909e) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/lets-create"
                onClick={closeAllDropdowns}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] hover:shadow-[0_10px_30px_rgba(1,45,148,0.45)] transition-all duration-300 shadow-[0_8px_25px_rgba(1,45,148,0.3)] hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#86909e]" />
                Let's Create
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0066FF] transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0066FF]" />}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-slate-100 px-5 py-5 space-y-2 bg-white/95 backdrop-blur-2xl rounded-b-3xl shadow-xl"
              >
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/services", label: "Services & Pricing" },
                  { to: "/services/mobile", label: "Solutions" },
                  { to: "/services/industries", label: "Industries" },
                  { to: "/work/projects", label: "Projects" },
                  { to: "/work/portfolio", label: "Portfolio Matrix" },
                  { to: "/work/case-studies", label: "Case Studies" },
                  { to: "/products", label: "Products" },
                  { to: "/testimonials", label: "Testimonials" },
                  { to: "/blogs", label: "Blogs" },
                  { to: "/careers", label: "Careers" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.to}
                    onClick={closeAllDropdowns}
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:text-[#0066FF] hover:bg-blue-50/80 transition"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-3">
                  <Link
                    to="/lets-create"
                    onClick={closeAllDropdowns}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#86909e] shadow-lg shadow-[#012d94]/30"
                  >
                    <Sparkles className="w-4 h-4 text-[#86909e]" />
                    Let's Create Together
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
