import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  AlertCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Mail,
} from "lucide-react";
import Card3D from "./ui/Card3D";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      id: "collection",
      number: "1",
      title: "Information We Collect and Why",
      content: [
        "We collect several data types to improve your overall experience including Personal Identifiable Information (PII) such as your full name, email address, phone number, company affiliation, and project details, which are voluntarily provided when you fill out contact forms or sign up for services.",
        "We also gather Non-Personal Data including device details (browser type, operating system), IP address, time spent on the site, and interaction logs. This helps us ensure we offer an optimized service tailored for your device and analyze site performance. Cookies and similar tracking technologies are used for better personalization, smoother navigation, and accurate traffic analysis across the platform.",
      ],
      icon: Eye,
      border: "border-cyan-500/30",
    },
    {
      id: "usage",
      number: "2",
      title: "How Your Data Is Used",
      content: [
        "Your data is primarily used to provide, maintain, and improve our services. We utilize your information to fulfill your requests, customize the services you see, enhance website speed and performance, and manage our relationship with you, including accurate troubleshooting whenever needed.",
        "Data insights allow us to conduct internal research, prevent potential illegal activities, and enhance site security. Furthermore, your preferences enable personalized communication and delivery of relevant updates and marketing materials (only with your consent). We adhere strictly to using data only for platform enhancement and business operations as outlined herein.",
      ],
      icon: Lock,
      border: "border-indigo-500/30",
    },
    {
      id: "sharing",
      number: "3",
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your Personal Identifiable Information to others. We may share generic aggregated demographic information not linked to any PII regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.",
        "We may disclose your personal information in the good faith belief that such action is necessary to: comply with a legal obligation, protect and defend the rights or property of ATS Global Tech, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.",
      ],
      icon: ShieldCheck,
      border: "border-purple-500/30",
    },
    {
      id: "retention",
      number: "4",
      title: "Data Retention and Security",
      content: [
        "We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws).",
        "We follow industry-standard protocols to protect your data. This includes advanced encryption during data storage and transmission, secure server configuration, access restriction policies, and regular security audits. Only authorized team members have access to sensitive data under strict compliance guidelines.",
      ],
      icon: Clock,
      border: "border-emerald-500/30",
    },
    {
      id: "children",
      number: "5",
      title: "Children's Privacy",
      content: [
        'Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.',
      ],
      icon: AlertCircle,
      border: "border-amber-500/30",
    },
    {
      id: "changes",
      number: "6",
      title: "Changes to This Privacy Policy",
      content: [
        'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
      ],
      icon: FileText,
      border: "border-cyan-500/30",
    },
  ];

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen pt-6 sm:pt-8 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#38BDF8]/20 via-[#0066FF]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-[#0066FF] text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Compliance & Data Governance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-[#0A1629] mb-6">
            Our Privacy{" "}
            <span className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF] bg-clip-text text-transparent">
              Commitment
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-4 font-sans">
            Your security and trust are our highest priority.
          </p>

          <p className="text-xs font-mono font-semibold text-slate-400">
            Last updated: November 11, 2025 | ATS GLOBAL TECH, India
          </p>
        </div>

        {/* Security Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white via-[#F0F7FF] to-[#EBF5FF] border border-blue-200 shadow-xl mb-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner shrink-0">
              <ShieldCheck className="w-8 h-8 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display text-[#0A1629] mb-1">
                Zero-Knowledge Encryption Standard
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed font-sans">
                All client telemetry, project data, and credentials transferred through ATS GLOBAL TECH are safeguarded with TLS 1.3 encryption and enterprise-grade access protocols.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0066FF] bg-white border border-blue-200 px-4 py-2.5 rounded-2xl shadow-xs shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
            <span>ISO / SOC2 Compliant</span>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <Card3D key={sec.id}>
                <div
                  className="cloud-card p-8 sm:p-10 rounded-3xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shrink-0 mt-1 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0066FF]">Section 0{sec.number}</span>
                      <h2 className="text-2xl font-black font-display text-[#0A1629] mt-0.5">
                        {sec.number}. {sec.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-16 font-sans">
                    {sec.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Immediate Assistance Footer Card */}
        <div className="mt-16 text-center p-8 rounded-3xl cloud-card">
          <p className="text-slate-600 text-sm sm:text-base font-sans">
            <span className="font-bold text-slate-900">
              Need immediate assistance or have privacy concerns?{" "}
            </span>
            Contact our dedicated compliance team at{" "}
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

export default PrivacyPolicy;
