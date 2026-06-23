import React from "react";
import { ShieldCheck, TrendingUp, HandCoins } from "lucide-react";
interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
}) => (
  <div className="bg-white border border-teal-200 p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-teal-300/60 transform hover:-translate-y-0.5">
    <div className="flex items-start space-x-4 mb-3">

      <div className="text-teal-600 bg-teal-100 p-2 rounded-full shadow-inner shrink-0">
        {Icon && <Icon className="w-6 h-6" />}
      </div>

      <h4 className="text-xl font-bold text-teal-800 mt-1">{title}</h4>
    </div>
    <p className="text-base text-gray-700 leading-relaxed pl-10 -mt-1">
      {description}
    </p>
  </div>
);
export default function App() {
  const coreFeatures = [
    {
      title: "Biometric Login",
      description:
        "Face and fingerprint recognition for secure access with fallback PIN.",
      Icon: ShieldCheck,
    },
    {
      title: "Instant Transfers",
      description:
        "Real-time peer-to-peer payments with advanced fraud protection.",
      Icon: HandCoins,
    },
    {
      title: "Card Controls",
      description:
        "Freeze cards instantly, set limits, manage merchants and track usage.",
      Icon: ShieldCheck,
    },
    {
      title: "Spending Insights",
      description:
        "Categorized reports, personalized financial goals, and proactive budgeting reminders.",
      Icon: TrendingUp,
    },
    {
      title: "Digital Onboarding",
      description:
        "KYC verification and e-signatures completed entirely within the app in minutes.",
      Icon: HandCoins,
    },
    {
      title: "Push Notifications",
      description:
        "Instant, configurable alerts for every transaction and suspicious activity.",
      Icon: ShieldCheck,
    },
  ];

  const metrics = [
    { value: "4.8", label: "App Store rating" },
    { value: "+60%", label: "User Engagement" },
    { value: "-35%", label: "Fraud Attempts" },
    { value: "99.99%", label: "API Uptime" },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-24 lg:py-32 px-4 font-serif antialiased">
      <div className="w-full">
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20 md:mb-24">
          <div>
            <p className="text-sm font-semibold bg-teal-100 px-4 py-1.5 inline-block rounded-full text-teal-700 shadow-sm mb-4">
              Case Study · FinTech Digital Transformation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-4 leading-tight text-teal-900">
              Next-Gen Mobile Banking Experience
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
              A secure, cross-platform banking solution offering biometric
              authentication, instant payments, card controls, and proactive
              fraud detection.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner border border-teal-100 max-w-2xl">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-teal-700">3M+</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">
                  Active users
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-teal-700">99.95%</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">
                  Uptime SLA
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-teal-700">PCI-DSS</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">
                  Compliance
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-teal-700">2ms</p>
                <p className="text-xs text-gray-600 uppercase tracking-wider mt-0.5">
                  Avg. Transfer Time
                </p>
              </div>
            </div>

            <button className="mt-10 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Download Full Case Study
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
              alt="Mobile banking mockup"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x900/4DB6AC/FFFFFF?text=Mobile+Banking+App";
              }}
            />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20 md:mb-24">
          <div className="lg:col-span-2 bg-white border border-teal-200 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-teal-800">
              Project Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-teal-400 pl-4 italic">
              The goal was to build a secure, feature-rich banking app that
              combines next-gen digital payments, real-time insights, and
              personalized controls — empowering users with trust and
              transparency across iOS and Android platforms.
            </p>
          </div>

          <div className="bg-teal-100 border border-teal-300 rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-teal-800">
              Project Snapshot
            </h4>
            <div className="space-y-3 text-base text-gray-800">
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Duration:</span>
                <span>8 months</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Team Size:</span>
                <span>15 specialists</span>
              </p>
              <p className="flex justify-between border-b border-teal-200 pb-2">
                <span className="font-semibold">Core Stack:</span>
                <span>React Native, Node.js</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Compliance:</span>
                <span className="text-teal-700 font-bold">PCI DSS aligned</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-teal-800">
            Platform Core Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((f, i) => (
              <FeatureCard
                key={i}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2 mb-20 md:mb-24 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl transition duration-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000"
              alt="Secure mobile banking"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/1200x800/26A69A/FFFFFF?text=Bank-Grade+Security";
              }}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4 text-teal-800">
              Bank-Grade Security Architecture
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The app includes multi-layered encryption, continuous risk
              monitoring, and adaptive fraud detection — ensuring full financial
              safety for every transaction.
            </p>

            <ul className="text-gray-700 space-y-2 text-base">
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                Encrypted end-to-end communication (TLS 1.3)
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                Device binding and tokenization for sensitive data
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                Adaptive, anomaly-based fraud detection engine
              </li>
              <li className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-teal-600 mr-2 shrink-0" />
                Strict role-based access controls (RBAC)
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">
            Impact & Performance Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((stat, i) => (
              <div
                key={i}
                className="bg-white border-2 border-teal-200 p-6 rounded-2xl text-center shadow-md transition duration-200 hover:shadow-lg"
              >
                <p className="text-4xl font-extrabold text-teal-700 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-teal-800">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {[
              "React Native (Cross-platform)",
              "Node.js (Microservices)",
              "PostgreSQL (Encrypted)",
              "AWS (Cloud Infrastructure)",
              "Kafka (Event Streaming)",
              "JWT (Authentication)",
              "GraphQL (Data Fetching)",
              "Docker & Kubernetes",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-medium text-teal-700 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-teal-100 border-2 border-teal-300 rounded-3xl p-10 sm:p-12 text-center shadow-2xl shadow-teal-300/40">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-900">
            Ready to deliver a next-generation banking experience?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Let’s build a secure, future-ready financial platform that drives
            user adoption and financial trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
              Start Your Project Assessment
            </button>
            <a
              href="#" 
              className="px-8 py-4 rounded-full border-2 border-teal-500 text-teal-700 font-bold hover:bg-teal-200 transition duration-300 w-full sm:w-auto"
            >
              Contact FinTech Experts
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
