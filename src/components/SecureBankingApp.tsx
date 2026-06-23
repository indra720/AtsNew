import React from "react";
import { Zap, Shield, TrendingUp } from "lucide-react";
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
  <div className="bg-white border border-teal-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-teal-300/40 transition duration-300 transform hover:-translate-y-1">
    <div className="relative w-full h-44">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/600x400/80CBC4/1E88E5?text=Feature+Image";
        }}
      />
      <div className="absolute top-0 right-0 m-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-teal-600">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-teal-800 mb-2">{title}</h4>
      <p className="text-gray-700 text-base leading-relaxed">{desc}</p>
    </div>
  </div>
);
export default function App() {
  return (
    <main className="bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 min-h-screen py-16 md:py-32 px-4 font-serif antialiased">
      <div className="w-full">
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-24">
          <div className="lg:pr-8">
            <span className="text-sm bg-teal-100 text-teal-700 px-4 py-1 rounded-full font-medium shadow-sm inline-block mb-4">
              Mobile Banking · Secure · Fast
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-teal-900">
              Your Finances, Always Protected & Accessible
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mb-10">
              Designed for modern customers, this secure mobile banking solution
              offers instant fund transfers, biometric login, card controls,
              transaction insights, and 24/7 fraud detection — all powered by
              robust cloud security.
            </p>

            <button className="bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/40 transition duration-300 transform hover:scale-105">
              Download App Now
            </button>
          </div>

          <img
            src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Banking App Interface"
            className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transition duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/1400x900/50C2C7/ffffff?text=Secure+Banking+App";
            }}
          />
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-24 p-6 bg-white rounded-2xl shadow-inner">
          {[
            { label: "Transactions Secured", value: "45M+" },
            { label: "Fraud Reduction", value: "82%" },
            { label: "Active Users", value: "7.2M+" },
            { label: "CSAT Rating", value: "4.8 / 5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-r last:border-r-0 border-teal-100 px-2"
            >
              <p className="text-4xl font-extrabold text-teal-600 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-teal-800">
            Advanced Features for Peace of Mind
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-teal-800 text-center">
            Built on a Modern & Secure Stack
          </h2>
          <div className="flex gap-3 justify-center flex-wrap max-w-4xl mx-auto">
            {[
              "React Native (Mobile)",
              "Node.js (Backend)",
              "PostgreSQL (Database)",
              "AWS Cloud Infrastructure",
              "OAuth2.0 (Authorization)",
              "JWT (Authentication)",
              "Microservices Architecture",
              "Kotlin (Android Native)",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-semibold text-teal-700 shadow-sm whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="p-8 sm:p-12 bg-white border-2 border-teal-300 rounded-3xl text-center shadow-2xl shadow-teal-200/50">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-teal-900">
            Secure Your Banking Experience Today
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience banking made simple — fast, protected, and accessible
            anywhere. Download the app in seconds.
          </p>
          <button className="bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </section>
      </div>
    </main>
  );
}
