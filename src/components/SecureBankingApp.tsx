import React from "react";
import { Link } from "react-router-dom";
import { Zap, Shield, TrendingUp, Sparkles, ArrowRight, Lock, KeyRound, Smartphone } from "lucide-react";
import Card3D from "./ui/Card3D";

const FeatureCard = ({
  title,
  desc,
  img,
  Icon,
}: {
  title: string;
  desc: string;
  img: string;
  Icon: React.ElementType;
}) => (
  <Card3D className="h-full">
    <div className="cloud-card h-full rounded-3xl overflow-hidden flex flex-col justify-between group">
      <div>
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/600x400/0f172a/00f2fe?text=Secure+Banking";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
          <div className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200 text-[#0066FF] shadow-sm group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-xl font-black font-display text-[#0A1629] group-hover:text-[#0066FF] transition-colors mb-2">{title}</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">{desc}</p>
        </div>
      </div>
    </div>
  </Card3D>
);

export default function SecureBankingApp() {
  const stats = [
    { label: "Transactions Secured", value: "45M+", glow: "text-cyan-400" },
    { label: "Fraud Reduction", value: "82%", glow: "text-emerald-400" },
    { label: "Active Users", value: "7.2M+", glow: "text-indigo-400" },
    { label: "CSAT Rating", value: "4.8 / 5", glow: "text-purple-400" },
  ];

  const stack = [
    "React Native (Mobile)",
    "Node.js (Backend)",
    "PostgreSQL (Database)",
    "AWS Cloud Infrastructure",
    "OAuth2.0 (Authorization)",
    "JWT (Authentication)",
    "Microservices Architecture",
    "Kotlin (Android Native)",
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
              <span>Mobile Banking · Secure · Fast</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              Your Finances, Always{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Protected & Accessible
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-sans">
              Designed for modern customers, this secure mobile banking solution
              offers instant fund transfers, biometric login, card controls,
              transaction insights, and 24/7 fraud detection — all powered by
              robust cloud security.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,102,255,0.3)] transition duration-300 hover:scale-[1.02]"
              >
                <span>Download App Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-200 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Banking App Interface"
                className="w-full h-72 sm:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/1400x900/0f172a/00f2fe?text=Secure+Banking+App";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* Live Metrics Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20 p-6 rounded-3xl cloud-card shadow-xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r last:border-r-0 border-blue-100 px-2"
            >
              <p className="text-3xl sm:text-4xl font-black font-display text-[#0066FF] mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Zero Trust Framework</span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0A1629] mt-1">
              Advanced Features for Peace of Mind
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Biometric Authentication"
              desc="Face ID & fingerprint login ensures ultra-secure, fast access without relying on complex passwords."
              img="https://images.unsplash.com/photo-1587731556938-38755b4803a6?auto=format&fit=crop&q=60&w=1000"
              Icon={Shield}
            />
            <FeatureCard
              title="Instant Payments"
              desc="Seamless UPI, NEFT, and QR-based transactions with real-time notifications and zero latency."
              img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={Zap}
            />
            <FeatureCard
              title="AI Fraud Protection"
              desc="Our AI engine constantly monitors transactions, flagging suspicious activity instantly to protect your assets."
              img="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={TrendingUp}
            />
          </div>
        </section>

        {/* Modern & Secure Stack */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Security Architecture</span>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-[#0A1629] mt-1 mb-6">
            Built on a Modern & Secure Stack
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

        {/* CTA Card */}
        <section className="p-8 sm:p-12 bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 rounded-3xl text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-black font-display text-[#0A1629] mb-4">
            Secure Your Banking Experience Today
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-sans">
            Experience banking made simple — fast, protected, and accessible
            anywhere. Download the app in seconds.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20 transition duration-300 hover:scale-105"
          >
            <span>Get Started Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
