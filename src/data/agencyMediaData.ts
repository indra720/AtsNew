import ajitCeoImg from "../assets/videos/Ajit-ceo.jpeg";
import post1Img from "../assets/videos/post-1.jpeg";
import post2Img from "../assets/videos/post-2.jpeg";
import post3Img from "../assets/videos/post-3.jpeg";
import post4Img from "../assets/videos/post-4.jpeg";
import post5Img from "../assets/videos/post-5.jpeg";
import post6Img from "../assets/videos/post-6.jpeg";
import post7Img from "../assets/videos/post-7.jpeg";

import videoGaurav1 from "../assets/videos/Gaurav-1.mp4";
import videoAts2 from "../assets/videos/Ats-2.mp4";
import videoAts3 from "../assets/videos/Ats-3.mp4";
import videoAts4 from "../assets/videos/ats-4.mp4";
import videoAts5 from "../assets/videos/Ats-5.mp4";
import videoAts6 from "../assets/videos/Ats-6.mp4";
import videoAts7 from "../assets/videos/ats-7.mp4";

export interface DeckPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  tagColor: string;
  badge?: string;
  author?: string;
  role?: string;
}

export const HERO_POSTS: DeckPost[] = [
  {
    id: "ajit-ceo",
    title: "Ajeet Singh — CEO & Founder",
    subtitle: "Your Technology Partner for a Smarter Tomorrow",
    image: ajitCeoImg,
    tag: "LEADERSHIP & VISION",
    tagColor: "bg-blue-50 text-[#0066FF] border-blue-200",
    badge: "FOUNDER & CEO SPOTLIGHT",
    author: "Ajeet Singh",
    role: "CEO & Founder • ATS GLOBAL TECH",
  },
  {
    id: "post-1",
    title: "Grow Your Brand With ATS",
    subtitle: "Strategic Digital Solutions for Real Business Growth",
    image: post1Img,
    tag: "DIGITAL TRANSFORMATION",
    tagColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    badge: "AGENCY CAPABILITY",
    author: "ATS Growth Team",
    role: "Full-Stack Web & Brand Engineering",
  },
  {
    id: "post-3",
    title: "People Trust People, Not Logos",
    subtitle: "Show the real faces behind your enterprise brand",
    image: post3Img,
    tag: "BRAND HUMANIZATION",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    badge: "ENTERPRISE PHILOSOPHY",
    author: "ATS Brand Strategy",
    role: "High-Trust Corporate Storytelling",
  },
  {
    id: "post-4",
    title: "High-Impact Content Strategy",
    subtitle: "If your first line doesn't hook, people keep scrolling",
    image: post4Img,
    tag: "ATTENTION ENGINEERING",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    badge: "MARKETING SCIENCE",
    author: "ATS Creative Labs",
    role: "Next-Gen Hook & Retention Design",
  },
  {
    id: "post-5",
    title: "Be Visible. Be Found. Be Chosen.",
    subtitle: "If your audience can't find you, they can't follow you",
    image: post5Img,
    tag: "MARKET DOMINANCE",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badge: "OMNICHANNEL VISIBILITY",
    author: "ATS Media Network",
    role: "SEO, Performance Marketing & Cloud Scale",
  },
  {
    id: "post-2",
    title: "Call To Action Clarity",
    subtitle: "Guide your audience. Give them a clear next step",
    image: post2Img,
    tag: "CONVERSION OPTIMIZATION",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    badge: "REVENUE GROWTH",
    author: "ATS Funnel Architects",
    role: "UI/UX & High-Converting Pipelines",
  },
];

export interface CompanyVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  videoUrl: string;
  posterImage: string;
  highlights: string[];
}

export const COMPANY_VIDEOS: CompanyVideo[] = [
  {
    id: "video-1",
    title: "ATS Global Tech — Engineering The Future",
    category: "Company Overview & Leadership",
    duration: "Showreel",
    description:
      "Explore how ATS Global Tech partners with ambitious enterprises and startups to engineer next-generation digital reality, scalable cloud systems, and AI-first platforms.",
    videoUrl: videoGaurav1,
    posterImage: ajitCeoImg,
    highlights: ["Enterprise Leadership", "Full-Stack Engineering", "Scalable Architectures"],
  },
  {
    id: "video-2",
    title: "Enterprise Cloud & Agile Architecture",
    category: "Cloud & Infrastructure",
    duration: "Capability Reel",
    description:
      "A deep walkthrough of modern high-availability cloud setups, microservices orchestration, and DevOps deployment pipelines delivered by ATS.",
    videoUrl: videoAts2,
    posterImage: post1Img,
    highlights: ["Kubernetes & Docker", "Zero-Downtime CI/CD", "Multi-Region Cloud"],
  },
  {
    id: "video-3",
    title: "AI Voice & Omnichannel Contact Center",
    category: "AI & Telephony",
    duration: "Product Deep-Dive",
    description:
      "Real-time AI copilot, speech-to-text live transcription, smart telephony dialer, and automated WhatsApp/SMS sequences in production.",
    videoUrl: videoAts3,
    posterImage: post3Img,
    highlights: ["WebRTC Softphone", "Live Sentiment Scoring", "Omnichannel CRM"],
  },
  {
    id: "video-4",
    title: "Full-Stack SaaS & Web Applications",
    category: "Software Engineering",
    duration: "SaaS Reel",
    description:
      "Building reactive, responsive, and secure web applications with modern tech stacks like React 19, TypeScript, Tailwind CSS, and Node.js.",
    videoUrl: videoAts4,
    posterImage: post4Img,
    highlights: ["React 19 & Vite", "Zustand & State Machines", "High-Performance SSR"],
  },
  {
    id: "video-5",
    title: "Custom ERP & Business Workflow Systems",
    category: "Enterprise ERP",
    duration: "Enterprise Suite",
    description:
      "Tailor-made ERP platforms for construction, hospitality, education, and real estate, automating GST billing, supply chains, and role dashboards.",
    videoUrl: videoAts5,
    posterImage: post5Img,
    highlights: ["Multi-Tenant SaaS", "Automated GST Invoicing", "14+ Role Dashboards"],
  },
  {
    id: "video-6",
    title: "Mobile App Development & Cross-Platform",
    category: "Mobile Solutions",
    duration: "App Reel",
    description:
      "Native-grade mobile applications built for iOS and Android, focusing on seamless UX, offline sync, biometric security, and fast loading.",
    videoUrl: videoAts6,
    posterImage: post2Img,
    highlights: ["iOS & Android Apps", "Biometric Authentication", "Sub-second API Sync"],
  },
  {
    id: "video-7",
    title: "Digital Transformation & Growth Strategy",
    category: "Strategic Growth",
    duration: "Strategy Reel",
    description:
      "End-to-end digital roadmaps, SEO optimization, performance marketing, and conversion funnels that multiply enterprise revenue.",
    videoUrl: videoAts7,
    posterImage: post6Img,
    highlights: ["Growth Marketing", "Conversion Funnels", "Brand Strategy"],
  },
];

