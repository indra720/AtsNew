
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

const FloatingSocialBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <button
        onClick={() => setOpen(!open)}
        className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition"
      >
        {open ? <X size={26} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          className="flex flex-col gap-4 bg-white shadow-2xl p-4
                     rounded-2xl border border-gray-300 animate-slideIn"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61574788298611"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            <Facebook className="h-7 w-7" />
          </a>

          <a
            href="https://x.com/TechlabsSu58347"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <Twitter className="h-7 w-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/sudo-techlabs-8b6708375"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            <Linkedin className="h-7 w-7" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600 transition"
          >
            <Instagram className="h-7 w-7" />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <Github className="h-7 w-7" />
          </a>

          <a
            href="https://wa.me/919929825003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-7 w-7"
            />
          </a>

          <a
            href="tel:+919929825003"
            className="text-gray-700 hover:text-green-700 transition"
          >
            <PhoneCall className="h-7 w-7" />
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingSocialBar;
