import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  CircleCheckBig,
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  Wrench,
  Rocket,
  Sparkles,
  Star,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  tag: string;
}

const servicesData: ServiceCardProps[] = [
  {
    title: "Custom Software Development",
    description: "Fully tailored software built for business growth, addressing unique operational requirements and scalability demands.",
    price: "25,000",
    features: ["Full-stack development", "Scalable API integration", "Testing & automated deployment", "Ongoing maintenance & upgrades"],
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    popular: true,
    tag: "ENTERPRISE CORE",
  },
  {
    title: "Mobile App Development",
    description: "iOS & Android apps with smooth UI and performance, designed for maximum reach and user engagement across devices.",
    price: "18,000",
    features: ["Cross-platform options (React Native/Flutter)", "User-friendly ergonomic UI design", "Real-time push notifications", "Complete App Store publishing"],
    icon: <Smartphone className="h-6 w-6 text-indigo-400" />,
    tag: "MOBILE APPS",
  },
  {
    title: "High-Performance Web Platforms",
    description: "High-performance websites optimized for conversion, SEO, and lightning-fast loading speeds on any device.",
    price: "13,000",
    features: ["Responsive 120fps UI design", "Technical SEO optimization", "Sub-second loading speeds", "Zero-trust secure hosting"],
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    tag: "WEB ECOSYSTEM",
  },
  {
    title: "Database Engineering & Tuning",
    description: "Secure, scalable and optimized database systems that ensure data integrity and fast access for mission-critical applications.",
    price: "12,000",
    features: ["Deep performance query tuning", "Automated backup & replication", "Zero-downtime data migration", "Custom admin observability dashboards"],
    icon: <Database className="h-6 w-6 text-amber-400" />,
    tag: "DATA SCALE",
  },
  {
    title: "Cloud Architecture & DevOps",
    description: "Cloud hosting, infrastructure & DevOps automation for resilient and cost-effective operations on platforms like AWS and Azure.",
    price: "24,000",
    features: ["Multi-cloud migration roadmaps", "Automated CI/CD pipelines", "24/7 Monitoring & instant alerts", "Serverless Kubernetes deployment"],
    icon: <Cloud className="h-6 w-6 text-purple-400" />,
    popular: true,
    tag: "CLOUD NATIVE",
  },
  {
    title: "Cybersecurity & Vulnerability Audit",
    description: "Protection against evolving threats and vulnerabilities, ensuring compliance and robust security posture for your digital assets.",
    price: "23,000",
    features: ["Full security infrastructure audits", "Ethical penetration testing", "Real-time threat monitoring implementation", "Regulatory compliance (SOC2, HIPAA)"],
    icon: <Shield className="h-6 w-6 text-emerald-400" />,
    tag: "ZERO TRUST",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Lightbulb,
    title: "Discovery & Analysis",
    desc: "We deeply understand your technical hurdles, business goals, and user demands.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Architecture & Planning",
    desc: "We design a comprehensive blueprint, wireframes, and scalable technology roadmaps.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Agile Development",
    desc: "We build resilient, scalable systems with continuous integration and QA checks.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deployment & Hypercare",
    desc: "Seamless cloud launch followed by 24/7 SLA monitoring, optimization, and support.",
  },
];

export const ServicesSection: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight font-display mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Engineering Services</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
            Professional solutions that help your business thrive in the digital era. We build, scale, and secure your mission-critical digital assets.
          </p>

          {/* Quick Category Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Web Development", desc: "Modern, responsive, and high-performing websites built using React, Next.js, and modern tailwind architectures." },
              { title: "Mobile App Development", desc: "Cross-platform mobile apps for Android and iOS that provide seamless user experiences and 60fps performance." },
              { title: "AI & Automation", desc: "Harness the power of Artificial Intelligence and automation to streamline business operations and make data-driven decisions." },
              { title: "Cloud Solutions", desc: "Secure, scalable, and reliable cloud infrastructure setup and management using AWS, Azure, and Google Cloud." },
              { title: "UI/UX Design", desc: "Intuitive, user-focused design systems that enhance usability and ensure your digital products stand out visually." },
              { title: "Digital Marketing", desc: "Comprehensive technical SEO, branding, and conversion strategies to help your business reach the right audience." },
            ].map((s, idx) => (
              <Card3D key={idx} intensity={8} className="cloud-card p-6 border border-blue-100/90 rounded-3xl">
                <h3 className="text-lg font-bold text-[#0066FF] mb-2 font-display">{s.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{s.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Offerings & Pricing */}
      <section className="py-24 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
              Detailed Service Offerings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Clear scope, transparent engagement models, and dedicated enterprise delivery guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <Card3D
                key={idx}
                intensity={12}
                className="cloud-card p-8 flex flex-col justify-between border border-blue-100/90 hover:border-blue-300 rounded-3xl group relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D2FF] text-white shadow-md">
                      <Star className="w-3 h-3 fill-white" /> Popular Tier
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0066FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">{service.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-[#0066FF] transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 pt-4 border-t border-blue-100">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CircleCheckBig className="w-4 h-4 text-[#0066FF] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-blue-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-medium">Starting from</div>
                    <div className="text-2xl font-black text-slate-900 font-display">${service.price}</div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] transition shadow-md"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-24 bg-white/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              A battle-tested engineering methodology that eliminates friction and guarantees consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card3D key={i} intensity={8} className="cloud-card p-8 border border-blue-100/90 rounded-3xl text-center relative group">
                  <div className="text-4xl font-black font-mono text-[#0066FF]/15 absolute top-4 right-6 group-hover:text-[#0066FF]/30 transition">
                    {step.step}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mx-auto mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition shadow-inner">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-display">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F0F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display mb-4">
            Ready to Build Your Future?
          </h2>
          <p className="text-base text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            Let's transform your brilliant idea into an impactful, high-performing digital product today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-[#0066FF] via-[#0077FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_10px_30px_rgba(0,102,255,0.35)] transition"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
