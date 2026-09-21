import React, { FC, useState } from "react";
import { ArrowRight, Calendar, Clock, Eye, Sparkles, BookOpen } from "lucide-react";
import Card3D from "./ui/Card3D";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  views: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Cloud Architecture: Best Practices Guide",
    description: "Learn essential principles for designing multi-region cloud architecture that scales seamlessly with enterprise growth and traffic spikes.",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    author: "Michael Rodriguez",
    readTime: "6 min read",
    date: "December 12, 2024",
    views: "1.8K",
  },
  {
    id: 2,
    title: "Cybersecurity in the Age of Remote Work & Distributed Teams",
    description: "Organizations must adapt zero-trust security strategies as distributed work becomes permanent. Here is how to shield critical digital assets.",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
    author: "Emily Davis",
    readTime: "7 min read",
    date: "December 10, 2024",
    views: "2.1K",
  },
  {
    id: 3,
    title: "Mobile-First Architecture: Why It Matters for High Conversion",
    description: "Mobile traffic continues to dominate globally. Learn why mobile-first engineering is crucial for user retention and frictionless conversions.",
    category: "Mobile Engineering",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    author: "Alex Johnson",
    readTime: "5 min read",
    date: "December 8, 2024",
    views: "1.6K",
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Business Intelligence",
    description: "Discover how modern data lakehouses and streaming ETL pipelines transform raw numbers into actionable strategic insights.",
    category: "Data Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: "David Kim",
    readTime: "9 min read",
    date: "December 6, 2024",
    views: "1.9K",
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development & Enterprise Accelerators",
    description: "Modern platforms are changing how rapid prototypes are built. Explore trade-offs, architecture limitations, and enterprise use cases.",
    category: "Development Tools",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: "Lisa Wang",
    readTime: "6 min read",
    date: "December 4, 2024",
    views: "1.4K",
  },
  {
    id: 6,
    title: "DevOps Best Practices for High-Velocity Software Delivery",
    description: "Streamline engineering pipelines with automated testing, infrastructure as code, and continuous deployment workflows.",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&h=400&fit=crop",
    author: "James Mitchell",
    readTime: "8 min read",
    date: "December 2, 2024",
    views: "2.3K",
  },
];

export const Blog: FC = () => {
  const [activeCat, setActiveCat] = useState("All");

  const categories = ["All", "Cloud Computing", "Cybersecurity", "Mobile Engineering", "Data Engineering", "DevOps"];

  const filtered = activeCat === "All" ? articles : articles.filter((a) => a.category === activeCat);

  return (
    <div className="bg-[#F0F7FF] text-[#0A1629] min-h-screen">
      <section className="relative pt-6 sm:pt-8 pb-14 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/20 via-[#0066FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 shadow-xs text-xs font-mono font-bold text-[#0066FF] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING INSIGHTS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0A1629] tracking-tight font-display mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">Insights & Blog</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-sans">
            In-depth guides, architecture best practices, and technology analysis written by senior ATS engineers and architects.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCat === cat
                    ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white shadow-[0_4px_16px_rgba(0,102,255,0.3)]"
                    : "bg-white/80 border border-blue-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3D Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filtered.map((item) => (
              <Card3D
                key={item.id}
                intensity={10}
                className="cloud-card overflow-hidden rounded-3xl flex flex-col justify-between group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#0066FF] border border-blue-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-3">
                    <div className="flex items-center gap-1 font-bold text-[#0066FF]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{item.views}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#0A1629] mb-2 font-display group-hover:text-[#0066FF] transition leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-blue-100 flex items-center justify-between mt-auto">
                    <div>
                      <div className="text-xs font-black text-[#0A1629] font-display">{item.author}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{item.date}</div>
                    </div>
                    <button className="p-2 rounded-xl bg-blue-50 text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition duration-300 shadow-xs cursor-pointer">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;