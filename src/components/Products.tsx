import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Banknote,
  GraduationCap,
  Building,
  Truck,
  House,
  Gamepad2,
  ShoppingCart,
  Zap,
  ArrowRight,
  Star,
  Users,
  Shield,
  Smartphone,
  ChartNoAxesColumnIncreasing,
  Cloud,
  Check,
  Sparkles,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface Product {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  rating: number;
  users: string;
  price: string;
  free?: boolean;
}

const turnkeyProducts: Product[] = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Workflow Automation",
    icon: <Heart className="h-5 w-5 text-cyan-400" />,
    description: "Streamline healthcare business processes with intelligent patient record automation and clinical workflow management.",
    rating: 4.8,
    users: "10K+",
    price: "Free Tier",
    free: true,
  },
  {
    id: 2,
    title: "Hotel & Restaurant Management",
    category: "Hospitality Management",
    icon: <Banknote className="h-5 w-5 text-indigo-400" />,
    description: "Integrated hospitality solution with guest booking engines, real-time room inventory, and multi-POS restaurant billing.",
    rating: 4.9,
    users: "5K+",
    price: "$49/month",
  },
  {
    id: 3,
    title: "Learning Management System (LMS)",
    category: "EdTech Platform",
    icon: <GraduationCap className="h-5 w-5 text-blue-400" />,
    description: "Scalable platform for interactive corporate training, virtual course creation, and student skill-gap analysis.",
    rating: 4.7,
    users: "15K+",
    price: "Free Tier",
    free: true,
  },
  {
    id: 4,
    title: "POS & Billing Management System",
    category: "Retail Intelligence",
    icon: <ChartNoAxesColumnIncreasing className="h-5 w-5 text-amber-400" />,
    description: "Point-of-Sale system providing sub-second barcode scanning, live multi-warehouse inventory, and financial reporting.",
    rating: 4.6,
    users: "8K+",
    price: "$59/month",
  },
  {
    id: 5,
    title: "Real Estate Management CRM",
    category: "PropTech Cloud",
    icon: <House className="h-5 w-5 text-purple-400" />,
    description: "Cloud-based solution for property listings, automated tenant billing, lease renewals, and asset management.",
    rating: 4.8,
    users: "3K+",
    price: "$79/month",
  },
  {
    id: 6,
    title: "Multi-Vendor E-Commerce Platform",
    category: "Commerce Engine",
    icon: <ShoppingCart className="h-5 w-5 text-emerald-400" />,
    description: "High-throughput storefront with AI product recommendations, automated tax calculation, and multi-currency payment gateways.",
    rating: 4.5,
    users: "25K+",
    price: "Free Tier",
    free: true,
  },
];

const enterpriseSuites = [
  {
    title: "ATS ERP Suite",
    desc: "End-to-end enterprise resource planning system.",
    features: ["Integrated Finance & Accounting", "Supply Chain Management (SCM)", "Manufacturing & Production Planning"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "CRM Pro+",
    desc: "Complete customer lifecycle and sales acceleration platform.",
    features: ["Lead & Opportunity Tracking", "Automated Sales Forecasting", "Ticketing & Customer Service"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "HRMS Cloud",
    desc: "Automated human resources & global workforce platform.",
    features: ["Cloud-Based Payroll & Tax Filing", "Biometric Attendance & Leave Sync", "Employee Performance Reviews"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "ATS POS System",
    desc: "Omni-channel retail and multi-store point of sale.",
    features: ["Live Inventory & Stock Control", "Multi-Store Cloud Synchronization", "Mobile & Contactless Payments"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "ProjectFlow",
    desc: "Agile delivery and intelligent team collaboration suite.",
    features: ["Agile & Scrum Project Boards", "Real-Time Team Collaboration", "AI-Driven Resource Allocation"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "DataVision Analytics",
    desc: "Executive business intelligence & data governance.",
    features: ["Customizable Drag-and-Drop Dashboards", "Predictive Modeling & Big Data Reports", "Enterprise Data Governance & Security"],
    color: "from-amber-500 to-orange-600",
  },
];

export const Products: FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* Header */}
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOFTWARE PRODUCTS ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight font-display mb-6">
            Our Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Products</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
            Discover our suite of innovative software products and scalable enterprise platforms designed to streamline operations and accelerate digital transformation.
          </p>

          {/* Enterprise Suites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {enterpriseSuites.map((product, index) => (
              <Card3D
                key={index}
                intensity={10}
                className="cloud-card p-8 border border-blue-100/90 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition shadow-inner">
                    <Zap className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-[#0066FF] transition">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-6 font-normal">{product.desc}</p>
                  <ul className="space-y-2 mb-6 pt-4 border-t border-blue-100">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="h-4 w-4 text-[#0066FF] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-[#0066FF] bg-blue-50/80 hover:bg-[#0066FF] hover:text-white border border-blue-200 hover:border-[#0066FF] transition-all duration-300 mt-auto shadow-xs"
                >
                  <span>Request Enterprise Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Turnkey Products */}
      <section className="py-24 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
              Turnkey SaaS & Ready Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Battle-tested, ready-to-deploy platforms trusted by thousands of enterprise users globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {turnkeyProducts.map((p) => (
              <Card3D
                key={p.id}
                intensity={12}
                className="cloud-card p-8 border border-blue-100/90 hover:border-blue-300 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#0066FF] shadow-inner">
                      {p.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0066FF] px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                      {p.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-[#0066FF] transition">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-blue-100 font-medium">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span className="font-bold text-slate-900">{p.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>{p.users} Users</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-blue-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-500 font-medium">License</div>
                    <div className="text-xl font-black text-slate-900 font-display">{p.price}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] transition shadow-md"
                  >
                    <span>Deploy Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#F0F7FF] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display mb-4">
            Need a Custom Architecture?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            Choose from our existing suite of turnkey platforms or collaborate with ATS architects to engineer a completely bespoke software solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/lets-create"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0047BA] shadow-[0_8px_25px_rgba(0,102,255,0.35)] transition w-full sm:w-auto"
            >
              Get Custom Solution
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-slate-800 bg-white border border-blue-200 hover:bg-slate-50 transition w-full sm:w-auto shadow-sm"
            >
              Schedule Architecture Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
