import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        details: "",
      });
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-md bg-white/95 border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>Project Consultation</span>
            </div>
            <h3 className="text-2xl font-black font-display text-slate-900">
              Get in Touch
            </h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              Have a project in mind? Our architects will respond within 2 hours.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-display text-slate-900">Inquiry Transmitted!</h4>
              <p className="text-xs text-slate-600 font-medium">Thank you. We will connect with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-mono">
              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Indrajeet Sharma"
                  className="w-full h-11 rounded-xl border border-blue-200 bg-white text-slate-900 px-3.5 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition shadow-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full h-11 rounded-xl border border-blue-200 bg-white text-slate-900 px-3.5 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99298 25003"
                    className="w-full h-11 rounded-xl border border-blue-200 bg-white text-slate-900 px-3.5 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                  Company / Organization
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                  className="w-full h-11 rounded-xl border border-blue-200 bg-white text-slate-900 px-3.5 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition shadow-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold uppercase tracking-wider mb-1.5">
                  Project Details *
                </label>
                <textarea
                  name="details"
                  rows={3}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Describe your tech stack, goals, or timeline..."
                  className="w-full rounded-xl border border-blue-200 bg-white text-slate-900 px-3.5 py-2.5 resize-none focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition shadow-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] text-white font-bold text-xs uppercase tracking-wider flex justify-center items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Inquiry</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;