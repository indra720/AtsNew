import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  ArrowUp,
  Send,
  Sparkles,
} from "lucide-react";

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [msgColor, setMsgColor] = useState<string>("");
  const [showScroll, setShowScroll] = useState<boolean>(false);

  const checkScrollTop = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    }
  }, [checkScrollTop]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMsgColor("text-rose-400");
      setMessage("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setMsgColor("text-rose-400");
      setMessage("Invalid email, please try again.");
      return;
    }
    setMsgColor("text-emerald-400");
    setMessage("Subscribed successfully! Thank you.");
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-[#DDF0FC] text-slate-700 border-t border-blue-200/90 overflow-hidden shadow-inner">
      {/* Ambient Sky-Blue Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 group">
              <img
                src="/newlogo.png"
                alt="ATS GLOBAL TECH - The Future with Next Gen-AI"
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/ats_white_logo.png";
                }}
              />
            </Link>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed max-w-sm">
              Empowering global enterprises with high-performance software engineering, 
              cloud modernization, AI automation, and scalable digital ecosystems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/profile.php?id=61574788298611" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/sudo-techlabs-8b6708375" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
                { icon: <Github className="w-4 h-4" />, href: "https://github.com" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-white/90 border border-blue-200/80 flex items-center justify-center text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF]/40 hover:shadow-md transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 font-display">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/work/projects" },
                { name: "Industries", href: "/services/industries" },
                { name: "Case Studies", href: "/work/case-studies" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-slate-600 hover:text-[#0066FF] transition font-medium"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 font-display">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li><Link to="/services" className="hover:text-[#0066FF] transition">Custom Software</Link></li>
              <li><Link to="/services/mobile" className="hover:text-[#0066FF] transition">Mobile App Dev</Link></li>
              <li><Link to="/services" className="hover:text-[#0066FF] transition">Web Platforms</Link></li>
              <li><Link to="/cloud-page" className="hover:text-[#0066FF] transition">Cloud & DevOps</Link></li>
              <li><Link to="/ai-page" className="hover:text-[#0066FF] transition">AI & Automation</Link></li>
              <li><Link to="/secure-page" className="hover:text-[#0066FF] transition">Cybersecurity</Link></li>
              <li><Link to="/products" className="hover:text-[#0066FF] transition">Enterprise ERP</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 font-display">
              Newsletter
            </h3>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Get the latest insights on AI, cloud engineering, and enterprise digital strategy.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="w-full bg-white border border-blue-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] shadow-sm transition"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white hover:from-[#0052CC] hover:to-[#0047BA] shadow-sm transition flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {message && <p className={`text-xs ${msgColor}`}>{message}</p>}
            </form>

            <div className="mt-6 pt-4 border-t border-blue-200/60 space-y-2 text-xs text-slate-600 font-medium">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>+91 9929825003</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>info@atsglobaltech.in</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ATS GLOBAL TECH. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#0066FF] transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#0066FF] transition">
              Terms of Service
            </Link>
            <Link to="/lets-create" className="hover:text-[#0066FF] transition font-semibold text-[#0066FF]">
              Idea Bank
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 p-3 rounded-2xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] text-white hover:shadow-[0_10px_25px_rgba(0,102,255,0.4)] transition transform hover:scale-110 shadow-lg"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
