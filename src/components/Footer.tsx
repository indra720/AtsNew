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
} from "lucide-react";
import logo from "../assets/atsnewlogo.png"
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

  const handleSubscribe = () => {
    setMessage("");

    if (!email) {
      setMsgColor("text-red-500");
      setMessage("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setMsgColor("text-red-500");
      setMessage("Invalid email, please try again.");
      return;
    }
    setMsgColor("text-green-500");
    setMessage("Subscribed successfully! Thank you.");
    setEmail("");
  };

  return (
    <footer
      className="bg-[#0F1B2E] text-white relative"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          <div>
            <div className="flex flex-col items-start mb-4">
              <img
                src={logo}
                alt="ATS Logo"
                className="w-28 h-16 object-contain mb-2 "
              />

              <h1 className="font-bold text-xl sm:text-2xl leading-tight text-white">


                ATS GLOBAL TECH
              </h1>
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering businesses with modern digital transformation and
              advanced software engineering.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574788298611"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/sudo-techlabs-8b6708375"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Industries", href: "/industries" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    className="text-gray-300 hover:text-orange-400 transition"
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Web App Development</li>
              <li>Cloud & DevOps Solutions</li>
              <li>UI / UX Design</li>
              <li>AI & Automation</li>
              <li>Cybersecurity Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-white mt-1 shrink-0" />
                <div>
                  <div className="text-gray-300 leading-snug">
                    info@atsglobaltech.in
                  </div>
                  <div className="text-gray-400 text-xs">General Support</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-white mt-1 shrink-0" />
                <div>
                  <div className="text-gray-300 leading-snug">
                    +91 9929825003
                  </div>
                  <div className="text-gray-400 text-xs">24/7 Support</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white mt-1 shrink-0" />
                <div>
                  <div className="text-gray-300 leading-snug">
                    ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar,
                    Jaipur
                  </div>
                  <div className="text-gray-400 text-xs">Rajasthan, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg mb-2 text-white">

                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm">
                Subscribe for insights, updates, and innovation tips.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white w-full sm:w-64 focus:border-orange-400 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-teal-600 px-6 py-2 rounded-lg text-white hover:bg-orange-600 transition w-full sm:w-auto font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>

          {message && (
            <p className={`mt-3 text-sm text-center md:text-left ${msgColor}`}>
              {message}
            </p>
          )}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-orange-400 transition text-center md:text-left"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 ATS GLOBAL TECH — All Rights Reserved
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
