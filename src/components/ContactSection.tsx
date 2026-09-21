import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import Card3D from "./ui/Card3D";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  details: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  details: "",
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitStatus === "submitting") return;

    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 1200);
  };

  const isSubmitting = submitStatus === "submitting";

  return (
    <section id="contact-section" className="relative py-24 bg-gradient-to-b from-[#F0F7FF] via-[#E8F4FD] to-white text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONSULTATION INTAKE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-6 leading-tight">
              Let's Build Something Exceptional Together
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium">
              Ready to transform your business operations with cutting-edge technology? 
              Connect with our senior architects and turn your vision into an enterprise reality.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-10 font-normal">
              We follow a disciplined, client-first approach from concept validation to full-scale deployment. 
              You receive structured sprint roadmaps, proactive communication, and predictable timelines.
            </p>

            {/* Direct Contact Pills */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Direct Support Hotline",
                  info: "+91 820 917 5003 / +91 9929825003",
                  link: "tel:+918209175003",
                },
                {
                  icon: Mail,
                  title: "Inquiries & Proposals",
                  info: "info@atsglobaltech.in",
                  link: "mailto:info@atsglobaltech.in",
                },
                {
                  icon: MapPin,
                  title: "Corporate Headquarters",
                  info: "ATS building, 4/98, Ajmer Rd, Vidhyut Nagar, Jaipur (302021)",
                  link: "#",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.link}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-blue-100 hover:border-[#0066FF]/50 transition group shadow-xs hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition shrink-0 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-bold">{item.title}</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition">{item.info}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Modern 3D Form Card */}
          <div className="lg:col-span-7">
            <Card3D intensity={6} className="cloud-card p-6 sm:p-8 lg:p-10 border border-blue-100/90 rounded-3xl shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900 font-display mb-2">
                  Request Free Enterprise Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Fill out your project specifications and our solution leads will respond within 24 business hours.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center gap-3 text-emerald-800 text-sm font-semibold shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your project details have been received. An ATS engineering lead will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Alex"
                      required
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Morgan"
                      required
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 999 999 9999"
                      className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1.5 uppercase">Project Scope & Requirements *</label>
                  <textarea
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project vision, timeline expectations, or technical architecture challenges..."
                    required
                    className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] shadow-xs transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition transform hover:scale-[1.01] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Project Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
