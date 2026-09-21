import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileCode,
  ShieldCheck,
  Scale,
  Sparkles,
  AlertTriangle,
  Globe,
  Lock,
  Mail,
  ArrowRight,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const TermsOfService: React.FC = () => {
  const termsCards = [
    {
      title: "Limitation of Liability",
      text: "ATS GLOBAL TECH is not responsible for indirect, incidental, or consequential damages arising from service use.",
      icon: Scale,
      glow: "text-cyan-400",
    },
    {
      title: "Governing Law",
      text: "All disputes are governed by Indian law and handled within the jurisdiction of New Delhi courts.",
      icon: Globe,
      glow: "text-indigo-400",
    },
    {
      title: "Termination Rights",
      text: "We may suspend or terminate access if users violate the Terms or engage in prohibited activities.",
      icon: AlertTriangle,
      glow: "text-amber-400",
    },
    {
      title: "Account Responsibilities",
      text: "Users are responsible for keeping their login credentials confidential and securing their accounts.",
      icon: Lock,
      glow: "text-purple-400",
    },
    {
      title: "Third‑Party Links",
      text: "We may provide third‑party links; however, we are not responsible for external website content.",
      icon: FileCode,
      glow: "text-teal-400",
    },
    {
      title: "Contact Information",
      text: "For any queries, reach us at info@atsglobaltech.com. We respond within 24–48 business hours.",
      icon: Mail,
      glow: "text-pink-400",
    },
  ];

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-[#0066FF] text-xs font-mono font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Legal Agreement & Standards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] mb-6"
          >
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
              Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Please read these terms carefully before using our website or services. These terms define your rights and responsibilities when engaging with ATS GLOBAL TECH.
          </motion.p>
        </div>

        {/* Hero Banner Image */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full md:w-4/5 rounded-3xl overflow-hidden border border-blue-200 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Terms of Service Illustration"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* 3 Main Clauses with Alternating Layout */}
        <div className="space-y-16 mb-20">
          {/* Usage Agreement */}
          <Card3D>
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl cloud-card shadow-xl">
              <div className="rounded-2xl overflow-hidden border border-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                  alt="Usage Agreement"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Clause 01</span>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
                  Usage Agreement
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  By using our website, you acknowledge that you have read and
                  understood our Terms of Service and agree to comply with all
                  applicable rules, policies, and guidelines.
                </p>
              </div>
            </div>
          </Card3D>

          {/* User Responsibilities */}
          <Card3D>
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl cloud-card shadow-xl">
              <div className="md:order-2 rounded-2xl overflow-hidden border border-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="User Responsibilities"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
              <div className="md:order-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Clause 02</span>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
                  User Responsibilities
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  Users must ensure that all interactions with our platform remain
                  lawful. You must not engage in hacking, unauthorized access,
                  spreading malware, or any form of harmful activity.
                </p>
              </div>
            </div>
          </Card3D>

          {/* Intellectual Property */}
          <Card3D>
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 sm:p-10 rounded-3xl cloud-card shadow-xl">
              <div className="rounded-2xl overflow-hidden border border-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                  alt="Intellectual Property"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Clause 03</span>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  All website content including graphics, code, and branding
                  belongs solely to ATS GLOBAL TECH. Reproduction or commercial
                  usage without permission is strictly prohibited.
                </p>
              </div>
            </div>
          </Card3D>
        </div>

        {/* 6 Structured Policy Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {termsCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card3D key={index} className="h-full">
                <div className="cloud-card h-full p-7 rounded-3xl flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className="w-6 h-6 text-[#0066FF]" />
                    </div>
                    <h3 className="text-lg font-black font-display text-[#0A1629] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="text-center p-8 rounded-3xl cloud-card">
          <p className="text-slate-600 text-sm font-sans">
            For inquiries regarding legal terms or commercial agreements, contact our legal counsel at{" "}
            <a
              href="mailto:info@atsglobaltech.in"
              className="text-[#0066FF] hover:underline font-mono font-bold transition"
            >
              info@atsglobaltech.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
