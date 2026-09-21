import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Terminal, Cloud, Database, Cpu, Sparkles } from "lucide-react";
import Card3D from "./ui/Card3D";

type Category = "all" | "languages" | "cloud" | "databases" | "frameworks";

const techItems = [
  // Languages
  { name: "TypeScript", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "C++", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Kotlin", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Swift", category: "languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },

  // Cloud & DevOps
  { name: "AWS", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Jenkins", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "GitHub", category: "cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  // Databases
  { name: "PostgreSQL", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Firebase", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "SQLite", category: "databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },

  // Frameworks
  { name: "React", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flutter", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Django", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Angular", category: "frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
];

export const TechnologyStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredItems = activeTab === "all" ? techItems : techItems.filter((i) => i.category === activeTab);

  return (
    <section className="relative py-24 bg-white/90 text-slate-900 overflow-hidden border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-[#0066FF] mb-4 shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>MODERN TECH ARSENAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display mb-4">
            Battle-Tested Technology Stack
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            We build with world-class, battle-tested modern frameworks and enterprise cloud tools guaranteeing reliability and security.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Technologies", icon: Layers },
            { id: "languages", label: "Languages", icon: Terminal },
            { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
            { id: "databases", label: "Databases", icon: Database },
            { id: "frameworks", label: "Frameworks & Web", icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Category)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-[#0066FF] to-[#0052CC] shadow-[0_6px_20px_rgba(0,102,255,0.35)]"
                    : "text-slate-600 bg-white/90 border border-blue-200/80 hover:text-[#0066FF] hover:bg-blue-50/50 shadow-xs"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Tech Badges Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                <Card3D
                  intensity={15}
                  className="cloud-card p-4 flex flex-col items-center justify-center text-center group cursor-pointer border border-blue-100/90 hover:border-blue-300 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50/90 border border-blue-100 p-2.5 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-md transition duration-300">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain filter group-hover:contrast-125"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#0066FF] transition font-display">
                    {item.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    {item.category}
                  </span>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
