import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Zap,
  Users,
  Target,
  MessageSquare,
  ChevronsRight,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success";

const OFFICE_ADDRESS =
  "ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  const contactHighlights = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@atsglobaltech.com",
      sub: "Average response: under 2 hours",
      color: "from-cyan-500 to-blue-500",
      border: "border-cyan-500/20 hover:border-cyan-400/50",
      href: "mailto:info@atsglobaltech.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9929825003",
      sub: "Mon – Sat, 10:00 AM – 6:00 PM IST",
      color: "from-indigo-500 to-purple-500",
      border: "border-indigo-500/20 hover:border-indigo-400/50",
      href: "tel:+919929825003",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "ATS Global Tech HQ",
      sub: OFFICE_ADDRESS,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-500/20 hover:border-emerald-400/50",
      href: "https://maps.google.com/?q=ATS+GLOBAL+TECH+Jaipur",
    },
  ];

  const valueProps = [
    {
      icon: Zap,
      title: "Fast Response",
      text: "We respond to all inquiries within 2 hours with actionable technical guidance.",
      gradient: "from-cyan-500/20 to-blue-500/10",
      glow: "text-cyan-400",
    },
    {
      icon: Users,
      title: "Expert Team",
      text: "Work directly with senior developers and solution architects, not sales intermediaries.",
      gradient: "from-indigo-500/20 to-purple-500/10",
      glow: "text-indigo-400",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      text: "Tailored for your specific business needs, legacy stacks, and scaling benchmarks.",
      gradient: "from-purple-500/20 to-pink-500/10",
      glow: "text-purple-400",
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      text: "Ongoing support, proactive infrastructure monitoring, and rapid emergency response.",
      gradient: "from-teal-500/20 to-cyan-500/10",
      glow: "text-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] font-sans text-slate-900 relative overflow-hidden selection:bg-blue-500/30 selection:text-[#0052CC]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-400/15 via-cyan-400/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Floating Success Toast */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 inset-x-0 z-50 flex justify-center px-4"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-white border border-emerald-300 text-emerald-800 rounded-2xl shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Message Transmitted Successfully!</p>
                <p className="text-xs text-slate-600 font-medium">Our engineering leads will connect with you within 2 business hours.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="relative pt-4 sm:pt-6 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066FF] text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Engineering Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-display tracking-tight text-slate-900 mb-6"
          >
            Get In <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed mb-12 font-medium"
          >
            Ready to start your next project? We'd love to hear from you. Send us a message, and our solution architects will reach out shortly.
          </motion.p>
        </div>

        {/* 3D Contact Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={idx}
                href={item.href}
                target={item.label === "Visit Us" ? "_blank" : undefined}
                rel={item.label === "Visit Us" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group block"
              >
                <Card3D className="h-full">
                  <div className="h-full p-6 sm:p-7 rounded-3xl cloud-card border border-blue-100/90 transition-all duration-300 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-5 shadow-inner group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <h3 className="text-xs uppercase tracking-wider font-mono text-[#0066FF] font-bold mb-2">{item.label}</h3>
                      <p className="text-lg font-black text-slate-900 group-hover:text-[#0066FF] transition-colors break-words mb-2">{item.value}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.sub}</p>
                  </div>
                </Card3D>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Main Form & Interactive Details Grid */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Map & Detailed Contact Info (5 cols) */}
          {/* Left Column: Interactive Map & Detailed Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* 3D Map Box */}
            <div className="p-6 rounded-3xl cloud-card border border-blue-100/90 shadow-xl relative group overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-ping" />
                  <h3 className="text-lg font-black font-display text-slate-900">Find Our Location</h3>
                </div>
                <span className="text-[11px] font-mono text-[#0066FF] font-bold px-3 py-1 rounded-full bg-blue-50 border border-blue-200">Jaipur HQ</span>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-blue-100 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ATS GLOBAL TECH Office Location"
                  className="opacity-95"
                  style={{ border: 0 }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
                <span>LAT: 26.8984° N</span>
                <span>LON: 75.7530° E</span>
              </div>
            </div>

            {/* Structured Contact Details Card */}
            <div className="p-8 rounded-3xl cloud-card border border-blue-100/90 shadow-xl space-y-6">
              <h2 className="text-2xl font-black font-display text-slate-900 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0066FF]" />
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 shadow-inner">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Office Address</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{OFFICE_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 shadow-inner">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Direct Line</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-mono">+91 9929825003</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 shadow-inner">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Email Inquiries</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-mono break-all">info@atsglobaltech.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 shadow-inner">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Monday - Saturday: 10:00 AM - 6:00 PM IST <br />
                      Sunday: Emergency Deployment Team On-Call
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Form & Service Pipeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form Card */}
            <div className="p-8 sm:p-10 rounded-3xl cloud-card border border-blue-100/90 shadow-2xl relative">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-bold">Direct Portal</span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-1 mb-2">Send Us a Message</h3>
                <p className="text-sm text-slate-600 font-medium">Fill out the form below and our technical leads will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Indrajeet Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="indrajeet@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99298 25003"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Company / Organization</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Project Subject *</label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Enterprise Cloud Migration or AI Application"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-2 uppercase tracking-wider">Project Scope & Requirements *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your tech stack, scope, goals, and anticipated timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] text-sm transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Encrypted Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Service Details Card */}
            <div className="p-8 rounded-3xl cloud-card border border-blue-100/90 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <Globe2 className="w-5 h-5 text-[#0066FF]" />
                <h3 className="text-xl font-black font-display text-slate-900">Quick Service Details</h3>
              </div>
              <p className="text-xs text-slate-600 mb-6 font-medium">Have an urgent requirement? Check out how we start collaboration.</p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Initial Consultation",
                    desc: "Free 30-minute discovery call to understand your needs.",
                  },
                  {
                    title: "Detailed Proposal",
                    desc: "Get a personalized, non-binding quote and roadmap within 48 hours.",
                  },
                  {
                    title: "Dedicated Team",
                    desc: "We assign a project manager and expert developers tailored to your stack.",
                  },
                  {
                    title: "Global Reach",
                    desc: "Serving clients across Asia, Europe, and North America with 99.98% SLA delivery.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <ChevronsRight className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900 font-bold">{step.title}:</strong> {step.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us 3D Grid */}
      <section className="py-16 sm:py-24 border-t border-blue-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-bold">Enterprise Standard</span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1 mb-4">Why Work With Us?</h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">We're committed to delivering exceptional results and building lasting partnerships.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card3D key={idx} className="h-full">
                <div className="h-full p-8 rounded-3xl cloud-card border border-blue-100/90 hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center mb-6 shadow-inner text-[#0066FF]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{item.text}</p>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contact;
