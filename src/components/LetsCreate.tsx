import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Cpu,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  Layers,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface FormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  category: string;
  timeline: string;
  budget: string;
  description: string;
}

const initialState: FormData = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  category: "Web Application",
  timeline: "1 - 3 Months",
  budget: "$10,000 - $25,000",
  description: "",
};

const categories = [
  { id: "Web Application", label: "Web Platform", icon: Globe },
  { id: "Mobile App", label: "Mobile App (iOS/Android)", icon: Smartphone },
  { id: "AI & Automation", label: "AI & Automation", icon: Cpu },
  { id: "Cloud Infrastructure", label: "Cloud & DevOps", icon: Cloud },
  { id: "Enterprise Software", label: "Enterprise Software", icon: Layers },
  { id: "Cybersecurity", label: "Security & Compliance", icon: Shield },
];

export const LetsCreate: React.FC = () => {
  const [form, setForm] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INNOVATION INCUBATOR</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#0A1629] tracking-tight font-display mb-4">
              IDEABANK: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Let's Create Your Vision</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Share your concept or enterprise challenge. Our engineering leads will analyze your scope and construct a scalable implementation blueprint.
            </p>
          </div>

          <Card3D intensity={6} className="cloud-card p-6 sm:p-10 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#0066FF] mx-auto" />
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1629] font-display">
                  Project Concept Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-sans">
                  Thank you, <strong className="text-slate-900 font-bold">{form.name}</strong>. An ATS solution architect will review your requirements and schedule an initial strategy session within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialState);
                    }}
                    className="px-6 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-md transition cursor-pointer"
                  >
                    Submit Another Concept
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Category Selection */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-3">
                    01. Select Project Domain *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categories.map((c) => {
                      const Icon = c.icon;
                      const isSelected = form.category === c.id;
                      return (
                        <button
                          type="button"
                          key={c.id}
                          onClick={() => setForm({ ...form, category: c.id })}
                          className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? "bg-[#EBF5FF] border-[#0066FF] text-[#0066FF] shadow-sm"
                              : "bg-white border-blue-200 text-slate-700 hover:border-blue-300 hover:text-[#0066FF]"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isSelected ? "text-[#0066FF]" : "text-slate-400"}`} />
                          <span className="text-xs font-bold">{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Personal Info */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-3">
                    02. Contact Information *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#F0F7FF]/50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company / Organization Name"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        className="w-full bg-[#F0F7FF]/50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#F0F7FF]/50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Contact Phone / WhatsApp *"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#F0F7FF]/50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                      Target Timeline
                    </label>
                    <select
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      className="w-full bg-white border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF] transition"
                    >
                      <option>&lt; 1 Month (Fast Prototype)</option>
                      <option>1 - 3 Months (Standard MVP)</option>
                      <option>3 - 6 Months (Complete System)</option>
                      <option>6+ Months (Enterprise Scale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                      Approximate Budget Tier
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-white border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0066FF] transition"
                    >
                      <option>&lt; $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000+</option>
                    </select>
                  </div>
                </div>

                {/* 4. Description */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                    03. Describe Your Vision & Business Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Provide a summary of what you are aiming to build, key feature requirements, or any existing infrastructure to integrate..."
                    className="w-full bg-[#F0F7FF]/50 border border-blue-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:bg-white transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition transform hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{loading ? "Transmitting to Idea Bank..." : "Submit Concept to ATS Idea Bank"}</span>
                </button>
              </form>
            )}
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default LetsCreate;
