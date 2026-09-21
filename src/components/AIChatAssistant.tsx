import React from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Brain,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Zap,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  img: string;
}> = ({ title, desc, img }) => (
  <Card3D className="h-full">
    <div className="cloud-card h-full rounded-3xl overflow-hidden flex flex-col justify-between group">
      <div>
        <div className="relative w-full h-44 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/600x400/0f172a/00f2fe?text=AI+Feature";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
        </div>
        <div className="p-6">
          <h4 className="text-lg font-black font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mb-2">
            {title}
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">{desc}</p>
        </div>
      </div>
    </div>
  </Card3D>
);

export default function AIChatAssistant() {
  const stats = [
    { label: "Resolution Time", value: "-62%", glow: "text-cyan-400" },
    { label: "Ticket Deflection", value: "45%", glow: "text-emerald-400" },
    { label: "Supported Languages", value: "89+", glow: "text-indigo-400" },
    { label: "Customer Satisfaction", value: "4.7/5 avg", glow: "text-purple-400" },
  ];

  const features = [
    {
      title: "Intent Recognition",
      desc: "NLU models classify user purpose accurately within milliseconds.",
      img: "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?auto=format&fit=crop&q=60&w=1000",
    },
    {
      title: "Emotion Awareness",
      desc: "Sentiment scoring enables escalation on frustration or negative tone.",
      img: "https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?auto=format&fit=crop&q=60&w=1000",
    },
    {
      title: "Smart Knowledge Retrieval",
      desc: "Embedding search pulls answers from docs, FAQs, and chat history.",
      img: "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?auto=format&fit=crop&q=60&w=1000",
    },
    {
      title: "Human Handoff",
      desc: "Seamless transfer to live reps with context and sentiment memory.",
      img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Personalization Engine",
      desc: "Responses adapt to user profile, product usage, and conversation history.",
      img: "https://plus.unsplash.com/premium_photo-1675793714962-a2413250c490?auto=format&fit=crop&q=60&w=1000",
    },
    {
      title: "Omnichannel Support",
      desc: "Works seamlessly across chat, WhatsApp, mobile, and email.",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const stack = [
    "Python",
    "Rasa",
    "React",
    "Node.js",
    "PostgreSQL",
    "ElasticSearch",
    "Docker",
    "AWS",
    "LangChain",
    "NLU Models",
  ];

  const testimonials = [
    {
      quote:
        "We automated over 40% of our tickets within one quarter. The multilingual support is incredible.",
      author: "Director of Support",
    },
    {
      quote:
        "Customer satisfaction scores improved consistently — our team now focuses on high-value interactions.",
      author: "CX Lead",
    },
  ];

  const faqs = [
    {
      q: "Does it support custom models?",
      a: "Yes — companies can integrate their own finetuned models via a modular ML API.",
    },
    {
      q: "How is sensitive data handled?",
      a: "PII is encrypted server-side, with strict access roles and audit logs for compliance.",
    },
  ];

  return (
    <main className="bg-[#F0F7FF] text-[#0A1629] min-h-screen pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 shadow-xs px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI · Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Chat Assistant
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-sans">
              A multilingual AI assistant that automates customer support with smart
              routing, sentiment insights, and personalized responses — driving faster
              resolution and higher satisfaction.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.3)] transition duration-300 hover:scale-[1.02]"
            >
              <span>Try the Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=60&w=1000"
                alt="AI chat"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* Telemetry Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20 p-6 rounded-3xl cloud-card shadow-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r last:border-r-0 border-blue-100 px-2">
              <p className="text-3xl sm:text-4xl font-black font-display text-[#0066FF] mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Architecture & Flow */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Intelligent Pipeline</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Architecture & System Flow
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card3D className="h-full">
              <div className="cloud-card h-full p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-5 shadow-inner">
                    <Brain className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-black font-display text-[#0A1629] mb-2">
                    Intent Classification
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    NLU models parse customer inquiries in real time, detecting sentiment, language, and core issue tags.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="cloud-card h-full p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-5 shadow-inner">
                    <Bot className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-black font-display text-[#0A1629] mb-2">
                    Dynamic Resolution Engine
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Integrates with internal CRM and billing APIs to provide instant, self-service resolutions without human intervention.
                  </p>
                </div>
              </div>
            </Card3D>

            <Card3D className="h-full">
              <div className="cloud-card h-full p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-5 shadow-inner">
                    <Zap className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-black font-display text-[#0A1629] mb-2">
                    Human-in-the-Loop Handover
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    Seamless escalation to human agents with full conversation context and suggested responses when sentiment drops.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Enterprise Grade</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Core Capabilities
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={i} title={f.title} desc={f.desc} img={f.img} />
            ))}
          </div>
        </section>

        {/* Measurable Success */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20 cloud-card rounded-3xl p-6 sm:p-10">
          <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?auto=format&fit=crop&q=60&w=1000"
              alt="data results"
              className="rounded-2xl w-full h-72 sm:h-80 object-cover"
            />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Proven ROI</span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-4">
              Measurable Success
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Automation frees up agent bandwidth and allows global scaling without
              expanding headcount.
            </p>

            <ul className="space-y-3">
              {[
                "Reduced escalations via proactive guidance",
                "Automated troubleshooting flows",
                "Higher satisfaction via instant responses",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">AI Frameworks</span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-6">
            Technology Stack
          </h2>

          <div className="flex gap-3 justify-center flex-wrap max-w-4xl mx-auto">
            {stack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white border border-blue-200 rounded-2xl text-xs font-mono font-bold text-[#0066FF] shadow-xs hover:border-[#0066FF]/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Client Feedback */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">User Experience</span>
            <h2 className="text-3xl font-black font-display text-[#0A1629] mt-1">
              Client Feedback
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Card3D key={i} className="h-full">
                <blockquote className="cloud-card h-full rounded-3xl p-8 flex flex-col justify-between">
                  <p className="italic text-slate-700 text-base sm:text-lg mb-6 leading-relaxed font-sans">
                    "{t.quote}"
                  </p>
                  <footer className="text-xs font-mono text-[#0066FF] font-bold border-t border-blue-100 pt-4">
                    — {t.author}
                  </footer>
                </blockquote>
              </Card3D>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Architecture Insights</span>
            <h2 className="text-3xl font-black font-display text-[#0A1629] mt-1">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="cloud-card p-5 rounded-2xl group transition-colors">
                <summary className="font-black text-[#0A1629] text-base cursor-pointer flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <HelpCircle className="w-5 h-5 text-[#0066FF] group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-blue-100 leading-relaxed font-sans">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 p-8 sm:p-12 rounded-3xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-black font-display text-[#0A1629] mb-3">
            Enhance your support with intelligent automation
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-sans">
            Deliver faster, smarter, and more personalized assistance across all channels.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white px-8 py-4 rounded-2xl font-bold shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition duration-300 hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
