import React from "react";
import { Link } from "react-router-dom";
import {
  Cloud,
  TrendingUp,
  Lock,
  HardHat,
  FileText,
  Settings,
  Zap,
  Sparkles,
  ArrowRight,
  Server,
  ShieldCheck,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const CloudFeature = ({
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
    <div className="h-full cloud-card bg-white/90 border border-blue-100/80 hover:border-blue-300 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] hover:shadow-[0_15px_35px_rgba(0,102,255,0.15)]">
      <div>
        <div className="relative w-full h-48 overflow-hidden bg-blue-50">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/600x400/e0f2fe/0066ff?text=Cloud+Feature";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-md rounded-xl border border-blue-200 text-[#0066FF] shadow-md group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <div className="p-6">
          <h4 className="font-bold font-display text-xl text-[#0A1629] group-hover:text-[#0066FF] transition-colors mb-2">{title}</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </Card3D>
);

export default function EnterpriseCloudMigration() {
  const migrationPhases = [
    {
      title: "1️⃣ Assessment",
      detail:
        "Comprehensive application audit, technical feasibility study, and Total Cost of Ownership (TCO) estimation to form a clear transformation roadmap.",
      Icon: FileText,
      glow: "text-[#0066FF]",
      bg: "bg-blue-50",
    },
    {
      title: "2️⃣ Planning & Architecture",
      detail:
        "Designing the target cloud-native solution (e.g., microservices, serverless) using AWS/GCP best practices and compliance standards.",
      Icon: Settings,
      glow: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      title: "3️⃣ Migration Execution",
      detail:
        "Phased execution strategy: from simple Lift & Shift to complex Replatforming and Microservices decomposition, utilizing automated tools.",
      Icon: HardHat,
      glow: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "4️⃣ Optimization & FinOps",
      detail:
        "Continuous monitoring, performance refinement, auto-scaling configuration, and FinOps practices to ensure cost efficiency post-migration.",
      Icon: TrendingUp,
      glow: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const stats = [
    { label: "Infra Cost Savings", value: "60%", glow: "text-emerald-600" },
    { label: "Downtime Reduced", value: "95%", glow: "text-[#0066FF]" },
    { label: "Faster Deployment", value: "4x", glow: "text-indigo-600" },
    { label: "Microservices Shift", value: "100%", glow: "text-purple-600" },
  ];

  const techExpertise = [
    "AWS/Azure/GCP",
    "Docker Containers",
    "Kubernetes (EKS/AKS/GKE)",
    "Terraform / Ansible",
    "NoSQL (MongoDB/DynamoDB)",
    "Event Streaming (Kafka)",
    "CI/CD Pipelines (GitOps)",
    "Serverless Computing",
  ];

  return (
    <main className="bg-[#F0F7FF] text-[#0A1629] min-h-screen pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <section className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0066FF] bg-white border border-blue-200 px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Cloud Solutions · Enterprise · DevOps</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] leading-tight mb-6">
              Accelerate Enterprise{" "}
              <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
                Cloud Transformation
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              High-scale cloud transformation ensuring peak performance,
              zero-trust security, and maximum cost efficiency. We move your
              legacy infrastructure to modern cloud-native architecture —
              seamlessly executed with a zero-downtime strategy.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/35"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#0066FF]/20 to-[#00D2FF]/20 blur-xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-[0_20px_50px_rgba(0,102,255,0.15)] bg-white">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Cloud Migration Strategy"
                className="w-full h-72 sm:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/1400x900/e0f2fe/0066ff?text=Enterprise+Cloud";
                }}
              />
            </div>
          </div>
        </section>

        {/* Live Metrics Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20 p-8 rounded-3xl bg-white/90 border border-blue-100 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,102,255,0.08)]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r last:border-r-0 border-blue-100 px-2"
            >
              <p className={`text-3xl sm:text-4xl font-black font-display ${stat.glow} mb-1`}>
                {stat.value}
              </p>
              <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Why Migrate Section */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0066FF] font-semibold">Architectural Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629] mt-1">
              Why Migrate to the Cloud?
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CloudFeature
              title="Scalability & Flexibility"
              desc="Leverage auto-scaling to guarantee consistent performance under fluctuating loads while precisely optimizing resource costs."
              img="https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={Cloud}
            />

            <CloudFeature
              title="Improved Performance"
              desc="Achieve sub-millisecond latency and high availability with globally distributed compute and robust storage solutions."
              img="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={Zap}
            />

            <CloudFeature
              title="Zero Trust Security"
              desc="Implement identity-aware access management, granular control policies, and continuous compliance checks across your entire environment."
              img="https://images.pexels.com/photos/5965892/pexels-photo-5965892.jpeg?auto=compress&cs=tinysrgb&w=1200"
              Icon={Lock}
            />
          </div>
        </section>

        {/* Our Proven Migration Process */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-semibold">Zero-Downtime Delivery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0A1629] mt-1">
              Our Proven Migration Process
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
            {migrationPhases.map((step) => (
              <Card3D key={step.title} className="h-full">
                <div className="h-full p-6 cloud-card bg-white/90 border border-blue-100 hover:border-blue-300 rounded-3xl backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,102,255,0.08)] flex flex-col justify-between group transition-all duration-300">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.Icon className={`w-6 h-6 ${step.glow}`} />
                    </div>
                    <h4 className="font-bold font-display text-base text-[#0A1629] mb-2 group-hover:text-[#0066FF] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Core Tech Expertise */}
        <section className="mb-20 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Cloud Ecosystem</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0A1629] mt-1 mb-6">
            Core Technology Expertise
          </h2>
          <div className="flex gap-3 justify-center flex-wrap max-w-4xl mx-auto">
            {techExpertise.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white border border-blue-100 rounded-xl text-xs font-mono text-[#0066FF] hover:border-blue-300 shadow-xs hover:shadow-md transition-all"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section className="p-8 sm:p-12 bg-gradient-to-br from-white via-[#F0F7FF] to-[#E0F2FE] border border-blue-200/80 rounded-3xl text-center shadow-[0_20px_50px_rgba(0,102,255,0.12)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#0A1629] mb-4">
            Ready for a Digital-First Infrastructure?
          </h3>
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Transform your infrastructure with future-proof cloud modernization
            and unlock significant operational efficiencies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-500/25 transition duration-300 hover:scale-105"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
