import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Code2,
  Cpu,
  Laptop,
  Users,
  Award,
  ShieldCheck,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Send,
  Zap,
  ChevronRight,
  Check,
  Star,
  ExternalLink,
  Bot,
  Globe,
  Layers,
  Terminal,
  Server,
  Smartphone,
  TrendingUp,
  Briefcase,
  HelpCircle,
  X,
  FileCheck,
  Building2,
  Sliders,
} from "lucide-react";
import Card3D from "./ui/Card3D";

interface CourseModule {
  week: string;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  category: "web" | "python" | "devops" | "mobile" | "growth" | "all";
  duration: string;
  hours: string;
  mode: string;
  badge: string;
  shortDesc: string;
  detailedDesc: string;
  technologies: string[];
  keyOutcomes: string[];
  realProjects: string[];
  curriculum: CourseModule[];
  avgSalary: string;
  popular?: boolean;
}

const COURSES: Course[] = [
  {
    id: "fullstack-developer",
    title: "Full Stack Web Developer (MERN & Next.js)",
    category: "web",
    duration: "4 - 6 Months",
    hours: "300+ Hours Live Coding",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "HIGHEST HIRING DEMAND",
    shortDesc:
      "Master modern end-to-end web engineering. Build concurrent React 19 apps, high-throughput Node.js APIs, and deploy on AWS cloud.",
    detailedDesc:
      "Become a production-ready Full Stack Engineer trained directly by ATS architects. You will master both modern frontend interfaces and scalable backend systems with industry-standard Git pull-requests, automated CI/CD pipelines, and zero-downtime cloud deployments.",
    technologies: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "Git & GitHub",
    ],
    keyOutcomes: [
      "Architect microservices and multi-tenant database schemas",
      "Implement secure JWT, OAuth 2.0, and RBAC authentication",
      "Deploy scalable production applications on AWS & Vercel",
      "Pass rigorous live coding rounds at top product firms",
    ],
    realProjects: [
      "Multi-Vendor B2B E-Commerce Marketplace with Razorpay/Stripe",
      "Real-Time Team Collaboration SaaS with WebSockets & Kanban",
      "Scalable Enterprise CMS with Headless APIs & CDN caching",
    ],
    avgSalary: "₹5.5 LPA - ₹12 LPA",
    popular: true,
    curriculum: [
      {
        week: "Month 1",
        title: "Modern Frontend Core & React 19 Architecture",
        topics: [
          "HTML5 Semantic DOM, CSS3 Flexbox & Grid, CSS Variables",
          "Modern JavaScript (ES6+), Closures, Promises, Async/Await",
          "React 19 Hooks, Component Lifecycles & Virtual DOM",
          "State Management with Redux Toolkit and Zustand",
        ],
      },
      {
        week: "Month 2",
        title: "Full-Stack React Frameworks & TypeScript",
        topics: [
          "TypeScript Strict Types, Interfaces & Generic Functions",
          "Next.js 15 App Router, Server Components & Actions",
          "Tailwind CSS, Responsive Design & Accessible UI",
          "REST API Integration, TanStack React Query & SWR",
        ],
      },
      {
        week: "Month 3",
        title: "Backend Microservices & Database Engineering",
        topics: [
          "Node.js Event Loop, Streams, Buffers & Core Modules",
          "Express.js & NestJS RESTful API Architecture",
          "MongoDB & Mongoose (NoSQL Schemas, Aggregations)",
          "PostgreSQL & Prisma ORM (Relational Normalization & ACID)",
        ],
      },
      {
        week: "Month 4-6",
        title: "Live Production Sprint, Cloud Deploy & Placements",
        topics: [
          "Docker Containerization & Multi-Container Docker Compose",
          "AWS Cloud Deployment (EC2, S3, RDS, CloudFront)",
          "GitHub Actions CI/CD Pipeline & Code Reviews",
          "Full Resume Redesign, Mock Interviews & ATS Hiring Drive",
        ],
      },
    ],
  },
  {
    id: "python-developer",
    title: "Python & AI Automation Developer",
    category: "python",
    duration: "3 - 5 Months",
    hours: "250+ Hours Practical Coding",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "FASTEST GROWING",
    shortDesc:
      "Master Python from absolute basics to high-performance FastAPI backends, web scrapers, data pipelines, and AI agent integration.",
    detailedDesc:
      "Python powers the modern AI and data revolution. In this course, you will write clean, idiomatic Python code, build asynchronous APIs with FastAPI, automate business workflows, and connect LLMs and vector databases for real enterprise use-cases.",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Celery & Redis",
      "BeautifulSoup & Playwright",
      "LangChain & OpenAI APIs",
      "Docker",
    ],
    keyOutcomes: [
      "Write object-oriented and functional asynchronous Python",
      "Build high-throughput REST APIs handling thousands of req/sec",
      "Create web scraping and automated browser bot workflows",
      "Integrate generative AI LLM RAG pipelines into apps",
    ],
    realProjects: [
      "Automated Financial Data Extraction & Intelligence Pipeline",
      "AI Customer Support Copilot with Vector Embeddings (RAG)",
      "Multi-Tenant SaaS Backend built with FastAPI & Postgres",
    ],
    avgSalary: "₹5.0 LPA - ₹11 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "Python Core Fundamentals & OOP Mastery",
        topics: [
          "Python Syntax, Data Structures (Lists, Dictionaries, Sets, Tuples)",
          "OOP: Classes, Inheritance, Polymorphism, Encapsulation",
          "File I/O, Error Handling, Decorators & Generators",
          "Package Management with Poetry & Virtual Environments",
        ],
      },
      {
        week: "Month 2",
        title: "FastAPI & Django Backend Development",
        topics: [
          "FastAPI Asynchronous Endpoints, Pydantic Schema Validation",
          "Django ORM, Admin Panel, Middleware & Authentication",
          "PostgreSQL Integration, Migrations & Database Indexing",
          "Background Task Processing with Redis & Celery",
        ],
      },
      {
        week: "Month 3",
        title: "Web Scraping, Automation & AI Agent Workflows",
        topics: [
          "Automated Scraping with Playwright & BeautifulSoup",
          "Integrating LLMs (OpenAI, Gemini) via LangChain",
          "Vector Databases (Pinecone, pgvector) for Semantic Search",
          "Building Autonomous Workflow Agents for Enterprise Tasks",
        ],
      },
      {
        week: "Month 4-5",
        title: "Live Production Project, Docker & Placement Drills",
        topics: [
          "Dockerizing Python Microservices & Environment Configs",
          "Writing PyTest Unit Tests & Automated Test Suites",
          "Resume Building, GitHub Showcase & Technical Interview Prep",
          "Company Interviews & Guaranteed Placement Drives",
        ],
      },
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps & Cloud Infrastructure Engineer",
    category: "devops",
    duration: "3 - 5 Months",
    hours: "220+ Hours Hands-On Labs",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "HIGHEST PAYING IT ROLE",
    shortDesc:
      "Learn cloud architecture, Docker containers, Kubernetes orchestration, CI/CD automation, and infrastructure-as-code on AWS.",
    detailedDesc:
      "Modern companies cannot ship software without DevOps. At ATS, you learn on actual cloud servers: configuring multi-region AWS environments, automating zero-downtime rolling deployments, writing Terraform scripts, and setting up real-time monitoring.",
    technologies: [
      "Linux (Ubuntu/CentOS)",
      "Docker",
      "Kubernetes (K8s)",
      "AWS (EC2, S3, VPC, EKS)",
      "Terraform (IaC)",
      "GitHub Actions",
      "Prometheus & Grafana",
      "Nginx & Load Balancing",
    ],
    keyOutcomes: [
      "Configure and secure production Linux cloud servers",
      "Containerize legacy monoliths into lightweight Docker images",
      "Manage Kubernetes clusters with automated scaling and self-healing",
      "Build fully automated CI/CD pipelines from Git commit to deploy",
    ],
    realProjects: [
      "Multi-Tier High-Availability Web App on AWS with Auto-Scaling",
      "Production Kubernetes Cluster with Ingress Controller & SSL",
      "Terraform Infrastructure as Code for Multi-Region Failover",
    ],
    avgSalary: "₹6.5 LPA - ₹14 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "Linux Server Administration & Bash Scripting",
        topics: [
          "Linux Shell, User Permissions, File Systems & SSH Keys",
          "Networking: TCP/IP, DNS, Subnets, Firewalls & Nginx Setup",
          "Automated Bash Scripting for Cron Jobs & System Maintenance",
          "Git Branching Strategies & Repository Governance",
        ],
      },
      {
        week: "Month 2",
        title: "Docker Containerization & CI/CD Pipelines",
        topics: [
          "Docker Architecture, Multi-Stage Dockerfiles, Layer Caching",
          "Docker Compose for Multi-Service Local Stacks",
          "GitHub Actions & GitLab CI Pipeline Automation",
          "Automated Code Quality Scans & Vulnerability Testing",
        ],
      },
      {
        week: "Month 3",
        title: "Kubernetes (K8s) & AWS Cloud Architecture",
        topics: [
          "Kubernetes Pods, Deployments, Services, ConfigMaps & Secrets",
          "AWS Cloud: VPC, Subnets, EC2, S3, RDS, IAM Policies",
          "Managed Kubernetes with AWS EKS & Helm Charts",
          "Zero-Downtime Rolling Updates & Canary Deployments",
        ],
      },
      {
        week: "Month 4-5",
        title: "Terraform IaC, SRE Monitoring & Job Placement",
        topics: [
          "Terraform State Management, Modules & Declarative Cloud",
          "Prometheus Metrics Scraping & Grafana Visual Dashboards",
          "Log Aggregation with ELK Stack (Elasticsearch, Logstash, Kibana)",
          "Mock System Design Interviews & Hiring Partner Placements",
        ],
      },
    ],
  },
  {
    id: "frontend-developer",
    title: "Modern Frontend Web Developer",
    category: "web",
    duration: "3 - 4 Months",
    hours: "200+ Hours Hands-On Labs",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "BEGINNER FRIENDLY",
    shortDesc:
      "Become a master of responsive, fast, beautiful web interfaces. Master HTML5, CSS3, Tailwind CSS, Modern JavaScript ES6+, and UI frameworks.",
    detailedDesc:
      "Frontend engineering is where visual design meets engineering logic. You will learn to transform Figma designs into pixel-perfect, accessible, lightning-fast web experiences that work seamlessly across mobile, tablet, and desktop screens.",
    technologies: [
      "HTML5 & Semantic DOM",
      "CSS3 & Responsive Design",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "TypeScript Basics",
      "Figma to Code",
      "Web Performance (CWV)",
      "Git & Netlify/Vercel",
    ],
    keyOutcomes: [
      "Convert any complex Figma or Adobe XD prototype into code",
      "Master CSS Flexbox, Grid, animations, and responsive layouts",
      "Write modular vanilla JavaScript with DOM manipulation and APIs",
      "Optimize websites for Google Core Web Vitals (LCP, CLS, INP)",
    ],
    realProjects: [
      "Ultra-Modern Luxury Travel Booking Platform UI",
      "Interactive Fintech Expense Analytics Dashboard",
      "High-Converting SaaS Landing Page with Micro-Interactions",
    ],
    avgSalary: "₹4.0 LPA - ₹8.5 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "Semantic HTML5, Modern CSS & Tailwind Mastery",
        topics: [
          "Semantic HTML Elements, SEO Meta Tags & Accessibility (a11y)",
          "CSS Layouts: Flexbox, CSS Grid, Media Queries, Clamp",
          "Tailwind CSS v4 Utility First Styling & Custom Design Systems",
          "Smooth CSS Animations, Transitions & Glassmorphism Effects",
        ],
      },
      {
        week: "Month 2",
        title: "JavaScript (ES6+) Programming from Zero to Hero",
        topics: [
          "Variables, Data Types, Conditionals, Loops & Functions",
          "DOM Manipulation, Event Listeners & Interactive UI Controls",
          "Asynchronous JS: Fetch API, Promises, Async/Await",
          "Client-Side Storage: LocalStorage, SessionStorage & Cookies",
        ],
      },
      {
        week: "Month 3-4",
        title: "Component Architecture, Performance & Live Projects",
        topics: [
          "Introduction to React Components & State Management",
          "Converting Complex Figma Systems into Reusable Components",
          "Lighthouse Optimization, Core Web Vitals & Asset Compression",
          "Deploying Live Web Portfolios on Vercel & Placement Drives",
        ],
      },
    ],
  },
  {
    id: "react-developer",
    title: "React 19 & Next.js Specialization",
    category: "web",
    duration: "3 - 4 Months",
    hours: "220+ Hours Production Coding",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "MOST POPULAR",
    shortDesc:
      "Specialized deep-dive into React 19, Next.js 15, Server Components, Redux Toolkit, TanStack Query, and enterprise frontends.",
    detailedDesc:
      "React powers over 60% of modern enterprise web applications. This specialized track is tailored for developers who want to master React deeply: concurrent rendering, Server Components, advanced custom hooks, state management, and high-performance routing.",
    technologies: [
      "React 19",
      "Next.js 15 (App Router)",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query (React Query)",
      "Framer Motion",
      "Tailwind CSS",
      "Jest & Testing Library",
    ],
    keyOutcomes: [
      "Build complex single-page and server-rendered web applications",
      "Architect clean React code with custom hooks and reusable design patterns",
      "Handle large-scale global application state with Redux Toolkit",
      "Ship animations with Framer Motion and smooth micro-interactions",
    ],
    realProjects: [
      "Real-Time Social Media Feed with Infinite Scroll & Reactions",
      "Multi-Step Enterprise Insurance Quote & KYC Workflow",
      "Interactive 3D Portfolio Matrix with Framer Motion & Tailwind",
    ],
    avgSalary: "₹5.0 LPA - ₹11 LPA",
    popular: true,
    curriculum: [
      {
        week: "Month 1",
        title: "Advanced React 19 Core & Hooks Mastery",
        topics: [
          "React 19 Actions, useTransition, useOptimistic, useActionState",
          "Deep Dive into useState, useEffect, useMemo, useCallback, useRef",
          "Writing Scalable Custom Hooks for Data Fetching & UI State",
          "Context API & Compound Component Design Patterns",
        ],
      },
      {
        week: "Month 2",
        title: "State Management, TypeScript & Form Architectures",
        topics: [
          "Full TypeScript Integration: Typing Props, Hooks, Events & APIs",
          "Redux Toolkit (RTK) & RTK Query for Global Cache State",
          "TanStack React Query for Server State, Caching & Polling",
          "High-Performance Form Validation with React Hook Form & Zod",
        ],
      },
      {
        week: "Month 3-4",
        title: "Next.js 15 Production Architecture & Placements",
        topics: [
          "Next.js 15 App Router: Server vs Client Components",
          "Server Actions, Streaming SSR & Dynamic Suspense",
          "Framer Motion Physics-Based Animations & Page Transitions",
          "Company Mock Technical Rounds & Interview Placement Assistance",
        ],
      },
    ],
  },
  {
    id: "backend-developer",
    title: "Backend & Distributed Systems Developer",
    category: "web",
    duration: "3 - 5 Months",
    hours: "240+ Hours Architecture Labs",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "CORE ENGINEERING",
    shortDesc:
      "Build high-throughput APIs, database schemas, Redis caching, message queues, and secure distributed backend architectures.",
    detailedDesc:
      "Become the backbone of software engineering. Learn how to architect backends that don't crash under millions of requests. You will master Node.js, Express, NestJS, relational SQL (PostgreSQL), NoSQL (MongoDB), Redis in-memory caching, and system design fundamentals.",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Redis Caching",
      "RabbitMQ",
      "Docker",
      "JWT & OAuth",
    ],
    keyOutcomes: [
      "Design normalized relational database schemas with zero data duplication",
      "Implement sub-second Redis caching and session management",
      "Write secure authentication, rate-limiting, and RBAC authorization",
      "Understand System Design: Load balancers, CDNs, sharding, replication",
    ],
    realProjects: [
      "High-Frequency FinTech Ledger & Payment Processing System",
      "Scalable URL Shortener with Analytics handling 10k req/sec",
      "Event-Driven Order Processing System using RabbitMQ & Redis",
    ],
    avgSalary: "₹5.5 LPA - ₹12 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "Node.js Architecture & Asynchronous Programming",
        topics: [
          "Node.js Runtime Internals, Event Loop, Libuv & Thread Pool",
          "Handling Buffers, Streams, File Systems & HTTP Modules",
          "Building Robust RESTful APIs with Express & Clean Architecture",
          "Middleware Design, Input Sanitization & Centralized Error Handling",
        ],
      },
      {
        week: "Month 2",
        title: "Databases, ORMs & Schema Engineering",
        topics: [
          "PostgreSQL: Relational Modeling, Foreign Keys, Indexing, Joins",
          "Prisma ORM & TypeORM Integration with TypeScript",
          "MongoDB: Aggregation Pipelines, Indexes & Document Design",
          "Transactions, ACID Properties & Concurrency Control",
        ],
      },
      {
        week: "Month 3",
        title: "Security, Caching & Message Queues",
        topics: [
          "JWT Token Authentication, Refresh Tokens & OAuth 2.0",
          "Redis Caching Layer for Sub-Millisecond Database Offloading",
          "Rate Limiting, DDOS Protection & Helmet Security Headers",
          "Message Queues with RabbitMQ for Asynchronous Background Jobs",
        ],
      },
      {
        week: "Month 4-5",
        title: "System Design, Microservices & Job Placement",
        topics: [
          "High-Level System Design (HLD) & Low-Level Design (LLD)",
          "Building Enterprise Microservices with NestJS",
          "API Documentation with Swagger / OpenAPI Specs",
          "Technical Coding Interviews & Placement in Tech Companies",
        ],
      },
    ],
  },
  {
    id: "flutter-developer",
    title: "Flutter & Mobile App Developer",
    category: "mobile",
    duration: "3 - 5 Months",
    hours: "240+ Hours App Development",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "MOBILE ENGINEERING",
    shortDesc:
      "Build smooth 60fps native iOS and Android apps with a single codebase using Dart, Flutter 3.x, BLoC state, and native device APIs.",
    detailedDesc:
      "Mobile apps are the primary touchpoint for billions of users. At ATS, you learn mobile engineering from the ground up: Dart programming, fluid Flutter widgets, state management architectures (BLoC / Riverpod), REST API integration, push notifications, and App Store releases.",
    technologies: [
      "Dart 3.x",
      "Flutter 3.x",
      "BLoC / Riverpod",
      "Firebase (Auth & Firestore)",
      "SQLite / Hive (Offline-First)",
      "REST & WebSockets",
      "Google Maps SDK",
      "App Store & Play Store",
    ],
    keyOutcomes: [
      "Build native-feeling iOS and Android applications from single codebase",
      "Implement industry-standard BLoC and Riverpod state management",
      "Integrate GPS navigation, camera, push notifications, and biometric auth",
      "Publish apps to Google Play Store and Apple App Store",
    ],
    realProjects: [
      "On-Demand Food Delivery App with Live GPS Rider Tracking",
      "Crypto & Stocks Real-Time Portfolio Tracking Mobile App",
      "Offline-First Field Sales CRM with SQLite & Background Sync",
    ],
    avgSalary: "₹4.5 LPA - ₹10 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "Dart 3 Fundamentals & Flutter Widget Tree",
        topics: [
          "Dart OOP: Classes, Mixins, Futures, Streams & Null Safety",
          "Flutter Widget Tree: Stateless vs Stateful Widgets",
          "Layouts: Row, Column, Stack, ListView, CustomScrollView",
          "Material 3 UI, Custom Themes & Responsive Mobile Layouts",
        ],
      },
      {
        week: "Month 2",
        title: "State Management & REST API Integration",
        topics: [
          "Provider & Riverpod for Simple to Medium Scale Apps",
          "BLoC (Business Logic Component) Pattern for Enterprise Apps",
          "Networking with Dio & Http, Handling JSON Serialization",
          "JWT Authentication Flows, Secure Token Storage & Auto-Logout",
        ],
      },
      {
        week: "Month 3",
        title: "Device Features, Offline-First & Firebase",
        topics: [
          "Firebase Auth, Cloud Firestore & Cloud Messaging (Push Notifications)",
          "Local Database Persistence with Hive & SQLite",
          "Accessing Camera, Geolocation, Bluetooth & Native Sensors",
          "Smooth 60fps Animations, Hero Transitions & Micro-Interactions",
        ],
      },
      {
        week: "Month 4-5",
        title: "App Publishing, Live Project & Placement Drives",
        topics: [
          "Building & Signing Android APK/AAB and iOS IPA Builds",
          "Google Play Console & Apple App Store Guidelines & Approval",
          "Portfolio App Showcase on GitHub with Architecture Documentation",
          "Mock Technical Rounds & Placement Assistance with Partner Companies",
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Advanced Digital Marketing & Performance Growth",
    category: "growth",
    duration: "3 Months",
    hours: "180+ Hours Live Ad Campaigns",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "HIGH ROI CAREER",
    shortDesc:
      "Master real performance marketing: SEO top Google rankings, Meta & Google PPC ads, conversion funnel optimization, and AI marketing tools.",
    detailedDesc:
      "Forget boring theory. In this program, you manage real ad budgets, optimize real web funnels, conduct technical SEO audits, and master the exact performance marketing frameworks used by fast-scaling startups and global brands to generate high-value leads.",
    technologies: [
      "Google Ads (Search & Display)",
      "Meta Ads (Facebook & Instagram)",
      "Technical & On-Page SEO",
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "HubSpot CRM & Email Funnels",
      "Canva & Creative Copywriting",
      "AI Marketing Tools (Claude, GPT)",
    ],
    keyOutcomes: [
      "Launch and optimize profitable Google Search & Meta ad campaigns",
      "Rank websites on Page 1 of Google with technical and content SEO",
      "Setup GA4 event tracking, conversion funnels, and attribution models",
      "Automate email nurturing sequences that convert leads into buyers",
    ],
    realProjects: [
      "Live Meta & Google Ads Campaign with Real Ad Budget & ROI Tracking",
      "End-to-End Technical SEO Audit & Ranking Strategy for E-Commerce",
      "High-Converting Lead Generation Funnel with GTM Conversion Tracking",
    ],
    avgSalary: "₹3.8 LPA - ₹8.0 LPA",
    curriculum: [
      {
        week: "Month 1",
        title: "SEO Mastery (Search Engine Optimization)",
        topics: [
          "How Google Search Algorithms Work, Crawling & Indexing",
          "Keyword Research, Competitor Analysis with Ahrefs/Semrush",
          "On-Page SEO, Header Tags, Schema Markup & Content Architecture",
          "Technical SEO: Page Speed, XML Sitemaps, Robots.txt & Backlinks",
        ],
      },
      {
        week: "Month 2",
        title: "Google Ads (PPC) & Performance Meta Ads",
        topics: [
          "Google Ads: Search, Display, Shopping & YouTube Video Campaigns",
          "Keyword Match Types, Negative Keywords & Quality Score Bidding",
          "Meta Ads Manager: Audience Targeting, Custom & Lookalike Audiences",
          "High-CTR Ad Creatives, Copywriting & A/B Split Testing",
        ],
      },
      {
        week: "Month 3",
        title: "Analytics, Funnels, Email Automation & Placements",
        topics: [
          "Google Analytics 4 (GA4) Custom Events & Conversion Tracking",
          "Google Tag Manager (GTM) Container Triggers & Server-Side Tracking",
          "Email Marketing Funnels with Mailchimp & HubSpot Automations",
          "Client Pitching, Freelance Client Acquisition & Job Placement Prep",
        ],
      },
    ],
  },
  {
    id: "business-development",
    title: "IT Business Development & Global Client Acquisition (BDE)",
    category: "growth",
    duration: "2.5 - 3 Months",
    hours: "160+ Hours Live Deal Simulation",
    mode: "Classroom (Jaipur) & Live Online",
    badge: "HIGH INCENTIVES & GROWTH",
    shortDesc:
      "Learn international IT sales, Upwork/LinkedIn client acquisition, proposal writing, US/UK client calling, and closing high-ticket tech deals.",
    detailedDesc:
      "Software companies thrive on business development executives who can communicate with global founders and close $5,000 to $50,000+ technology contracts. You will be trained in the exact sales playbook used by ATS Global Tech to acquire enterprise clients across the US, UK, and Middle East.",
    technologies: [
      "Upwork & Freelancer Bidding",
      "LinkedIn Sales Navigator",
      "Apollo.io & Cold Outreach",
      "HubSpot & Zoho CRM",
      "Proposal & SOW Writing",
      "International Client Calling",
      "Contract Negotiation",
      "Tech Stack Estimation",
    ],
    keyOutcomes: [
      "Write high-converting Upwork proposals that win client replies within minutes",
      "Prospect international CXOs & founders on LinkedIn with tailored messaging",
      "Conduct professional discovery calls with US, UK, and European clients",
      "Estimate software development timelines, sprint budgets, and write SOWs",
    ],
    realProjects: [
      "Live Upwork Profile Optimization & Proposal Winning Strategy",
      "Cold Email Campaign Targeting 500+ US Tech Founders with Apollo.io",
      "Simulated High-Stakes Client Discovery & Objection Handling Call",
    ],
    avgSalary: "₹4.0 LPA - ₹10 LPA + Lucrative Incentives",
    curriculum: [
      {
        week: "Month 1",
        title: "IT Industry Fundamentals & Proposal Crafting",
        topics: [
          "Understanding the Software Lifecycle: Web, Mobile, Cloud, AI",
          "How Global Clients Buy Software (Fixed Price vs Dedicated Teams)",
          "Writing Winning Proposals: Structure, Hooks, Case Studies & CTAs",
          "Upwork & Freelancer Platform Mastery: Profile SEO & Bidding Strategy",
        ],
      },
      {
        week: "Month 2",
        title: "Cold Outreach, Lead Generation & LinkedIn Strategy",
        topics: [
          "LinkedIn Sales Navigator Advanced Filters for Decision Makers",
          "Cold Email Infrastructure: Deliverability, Warmup, Sequences",
          "Using Apollo.io, Hunter, and Lusha for Verified Contact Discovery",
          "CRM Pipeline Management with HubSpot: Deal Stages & Follow-Ups",
        ],
      },
      {
        week: "Month 3",
        title: "Client Calling, Objection Handling & Closing Deals",
        topics: [
          "Conducting US/UK/European Discovery Calls with Native Accent Nuances",
          "Handling Objections: Price, Offshore Risk, Timeline & Trust",
          "Drafting Statements of Work (SOW), NDAs & Master Service Agreements",
          "Live Job Placements as BDE / Account Executive in Leading IT Firms",
        ],
      },
    ],
  },
];

const FAQS = [
  {
    q: "Kya non-IT ya non-technical background wale students yeh courses join kar sakte hain?",
    a: "Haan, bilkul! Hamare sabhi programs absolute basics se start hote hain. Hamare 45% se zyada successful placed students non-CS (B.Com, B.A, Mechanical, Electrical, Civil) background se the. Hamare mentors step-by-step logic building sikhate hain taaki koi bhi bina coding background ke professional developer ban sake.",
  },
  {
    q: "Normal coaching center aur ATS Tech Academy me kya difference hai?",
    a: "Traditional coaching institutes me theoretical trainers hote hain jo kai saalo se industry me code nahi karte aur sirf PPTs ya calculator jaise dummy projects sikhate hain. ATS Global Tech ek active software development company hai jisme 150+ live production platforms bane hain. Yahan aap real software developers ke sath baithte hain, live client GitHub repositories par kaam karte hain, aur asli company environment me seekhte hain.",
  },
  {
    q: "Kya course ke baad 100% job placement assistance milti hai?",
    a: "Haan! Har student ko dedicated placement support di jaati hai: 1:1 Resume Optimization, GitHub portfolio building, mock technical interviews, HR round preparation, aur hamare 50+ hiring partner companies me direct interviews. Saath hi top performers ko direct ATS Global Tech me job offer ya paid internship milti hai.",
  },
  {
    q: "Kya training ke baad company ka certified experience letter / internship milti hai?",
    a: "Haan! Sabhi successful candidates ko ATS Global Tech ki taraf se official Verified Company Internship Certificate aur Recommendation Letter milta hai, jisme aapke dwara banaye gaye live production projects aur technologies ka full mention hota hai.",
  },
  {
    q: "Batches offline hain ya online?",
    a: "Dono options available hain! Aap hamare Jaipur HQ Tech Campus me air-conditioned developer workstation par classroom batch join kar sakte hain, ya phir live interactive online batch me ghar baithe direct screen-share aur live doubt solving ke sath join kar sakte hain.",
  },
  {
    q: "Free Demo Class kaise book karein?",
    a: "Aap upar ya neeche diye gaye 'Book Free Demo Class' button par click karke form bhar sakte hain, ya directly hamare Jaipur campus ko call (+91 9929825003) kar sakte hain. Aap bina kisi fees ke 2 din ki demo classes attend karke khud live teaching quality dekh sakte hain.",
  },
];

export const TrainingInstitute: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [openDemoModal, setOpenDemoModal] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Demo Registration Form State
  const [demoForm, setDemoForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Full Stack Web Developer (MERN & Next.js)",
    mode: "Classroom (Jaipur Campus)",
    timing: "Morning Batch (9:00 AM - 12:00 PM)",
    experience: "College Student / Fresher",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const filteredCourses =
    selectedCategory === "all"
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory);

  const handleOpenDemoWithCourse = (courseTitle: string) => {
    setPrefilledCourse(courseTitle);
    setDemoForm((prev) => ({ ...prev, course: courseTitle }));
    setOpenDemoModal(true);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      setTimeout(() => {
        setFormSuccess(false);
        setOpenDemoModal(false);
        setDemoForm({
          name: "",
          phone: "",
          email: "",
          course: "Full Stack Web Developer (MERN & Next.js)",
          mode: "Classroom (Jaipur Campus)",
          timing: "Morning Batch (9:00 AM - 12:00 PM)",
          experience: "College Student / Fresher",
          message: "",
        });
      }, 3000);
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#E8F4FD] text-slate-900 min-h-screen">
      {/* ============================================================ */}
      {/* 1. HERO HEADER: ATS TECH FINISHING SCHOOL & ACADEMY          */}
      {/* ============================================================ */}
      <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-[#EBF5FF]/80 via-[#F0F7FF] to-white">
        {/* Symmetrical Cyber Mesh Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1300px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-cyan-300/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-10 -left-20 w-[450px] h-[350px] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-10 -right-20 w-[450px] h-[350px] bg-cyan-200/25 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-[11px] sm:text-xs font-semibold tracking-wider text-[#0066FF] mb-5 shadow-xs backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-[#0066FF] animate-pulse" />
            <span>ATS TECH FINISHING SCHOOL &bull; JAIPUR IT CAMPUS &bull; 100% PRACTICAL TRAINING</span>
          </div>

          {/* Expansive Full-Width Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[4rem] 2xl:text-[4.3rem] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-5 max-w-6xl xl:max-w-7xl 2xl:max-w-[1450px] mx-auto font-display">
            Launch Your High-Paying IT Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#00D2FF]">
              Inside a Real Software Company
            </span>
          </h1>

          {/* Expansive Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed mb-8 font-normal">
            Don't waste time on textbook theory at traditional coaching centers. Join <strong>ATS Tech Academy</strong> — where you write production code alongside working software architects on live client projects, master high-demand tech stacks, and secure guaranteed job placement assistance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={() => {
                setPrefilledCourse("Full Stack Web Developer (MERN & Next.js)");
                setOpenDemoModal(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition btn-pulse-glow cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free 2-Day Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#courses-catalog"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-blue-300 hover:border-[#0066FF] text-[#0066FF] text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm transition"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All 9 IT Programs</span>
            </a>

            <a
              href="tel:+919929825003"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs transition"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
              <span>Direct Counselor Helpline: +91 9929825003</span>
            </a>
          </div>

          {/* Core Trust Metric Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-6xl xl:max-w-7xl mx-auto mb-10">
            {[
              "100% Practical Live Client Projects",
              "1:1 Senior Architect Mentorship",
              "Jaipur AC Lab & Live Online Batches",
              "Official ATS Company Internship Certificate",
              "100% Job Placement & Referral Support",
              "Weekend & Weekday Flexible Batches",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 border border-blue-200/90 text-xs font-semibold text-slate-700 shadow-xs hover:border-[#0066FF] transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* 4-Stat Highlight Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl xl:max-w-7xl 2xl:max-w-[1450px] mx-auto text-left">
            {[
              {
                value: "9+",
                label: "Industry-Ready IT Programs",
                sub: "Full Stack, Python, DevOps, Flutter, React & Sales",
                icon: BookOpen,
              },
              {
                value: "100%",
                label: "Live Codebase Training",
                sub: "Zero boring PPTs; 80% practical live coding sprints",
                icon: Code2,
              },
              {
                value: "15+ Yrs",
                label: "Real Company Pedigree",
                sub: "Backed by ATS Global Tech software engineering lab",
                icon: Award,
              },
              {
                value: "₹4.5L - ₹14.5L",
                label: "Average Package Range",
                sub: "Fresher to lateral salary bands across partner hiring firms",
                icon: TrendingUp,
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-blue-100 hover:border-blue-300 shadow-xs transition group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] group-hover:scale-105 group-hover:bg-[#0066FF] group-hover:text-white transition mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0066FF] font-display">
                    {st.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {st.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. THE ATS ADVANTAGE: FINISHING SCHOOL VS NORMAL COACHING     */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1450px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE REAL-WORLD DIFFERENCE</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Why ATS Tech Academy Outperforms Traditional Coaching Centers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              See why software companies prefer hiring ATS graduates over students from generic theory institutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Traditional Coaching Box */}
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50/80 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold font-mono mb-4">
                  <X className="w-3.5 h-3.5" />
                  <span>TRADITIONAL COACHING CENTERS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 font-display">
                  Outdated Syllabus &amp; Bookish Theory
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>Theoretical Trainers:</strong> Teachers who haven't worked on live commercial production apps in years.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>Toy Projects:</strong> Building generic todo lists, static calculators, and cloned tutorials that recruiters reject immediately.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>No Git/Agile Experience:</strong> Zero knowledge of real team branch PRs, code reviews, Docker, or CI/CD pipelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold shrink-0">&times;</span>
                    <span>
                      <strong>Generic Placement WhatsApp Groups:</strong> Simply forwarding publicly available links with zero accountability.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
                Result: Struggling to pass technical interviews and facing low-salary dead-end jobs.
              </div>
            </div>

            {/* ATS Software Finishing School Box */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/60 border-2 border-[#0066FF]/60 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-2xl tracking-wider">
                RECOMMENDED BY TECH LEADS
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0066FF] text-xs font-bold font-mono mb-4">
                  <Check className="w-3.5 h-3.5" />
                  <span>ATS TECH FINISHING SCHOOL</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 font-display">
                  Active Software Development Company Experience
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>
                      <strong>Mentored by Working Architects:</strong> Direct sessions with senior architects, Tech Leads, and CEO Ajeet Singh.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>
                      <strong>Live Commercial Projects:</strong> Write code on actual enterprise client requirements, real microservices, and databases.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>
                      <strong>Full Company Culture:</strong> Standups, Jira sprint tracking, Git pull-request code reviews, and Dockerized cloud deploys.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>
                      <strong>Official Company Internship Letter:</strong> Verified ATS Global Tech experience certificate + direct referral to 50+ hiring tech companies.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0066FF]">
                  Result: Fast-Tracked Hires with ₹4.5L - ₹14.5L CTC
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setPrefilledCourse("Full Stack Web Developer (MERN & Next.js)");
                    setOpenDemoModal(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold shadow-xs transition"
                >
                  Join Next Batch &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE COURSE CATALOG (ALL 9 PROGRAMS)               */}
      {/* ============================================================ */}
      <section id="courses-catalog" className="py-14 sm:py-20 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1550px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CAREER-LAUNCHING PROGRAMS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Explore Our 9 Specialized IT Career Tracks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From full-stack web and cloud DevOps to mobile apps, AI automation, and global IT sales. Click any course to view the full module syllabus.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-4xl mx-auto">
            {[
              { id: "all", label: "All 9 Tracks" },
              { id: "web", label: "Web & Full Stack" },
              { id: "python", label: "Python & AI" },
              { id: "devops", label: "DevOps & Cloud" },
              { id: "mobile", label: "Mobile Apps (Flutter)" },
              { id: "growth", label: "Marketing & IT Sales (BDE)" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#0066FF] text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-700 hover:text-[#0066FF] border border-slate-200 hover:border-blue-300 shadow-2xs"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-xs">
                    ⭐ POPULAR TRACK
                  </div>
                )}

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200">
                      {course.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {course.duration}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0066FF] transition font-display mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {course.shortDesc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
                      Technologies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.technologies.slice(0, 6).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-[11px] font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {course.technologies.length > 6 && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[11px] font-bold text-[#0066FF]">
                          +{course.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Real Live Project Preview */}
                  <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100 mb-4">
                    <span className="text-[10px] font-bold font-mono text-[#0066FF] uppercase block mb-1">
                      🚀 Featured Live Project:
                    </span>
                    <p className="text-xs font-semibold text-slate-800">
                      {course.realProjects[0]}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        SALARY POTENTIAL
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-600">
                        {course.avgSalary}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-mono">
                        HOURS &amp; LABS
                      </span>
                      <span className="text-xs font-bold text-slate-700">
                        {course.hours}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(course)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-[#0066FF] border border-slate-200 text-xs font-bold transition cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Syllabus</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenDemoWithCourse(course.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold shadow-xs hover:shadow-md transition cursor-pointer"
                    >
                      <span>Book Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. JAIPUR CAMPUS LAB & INFRASTRUCTURE BENTO                  */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1450px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>JAIPUR IT FINISHING SCHOOL LAB</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Learn in a Modern Software Development Environment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Our campus in Jaipur is designed like an elite tech startup floor, not a crammed tuition room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Laptop,
                title: "High-Performance Workstations",
                desc: "Ergonomic workstations, dual 4K monitors, high-speed fiber internet, and dedicated dev environments.",
                tag: "HARDWARE",
              },
              {
                icon: Users,
                title: "Sit With Senior Developers",
                desc: "Learn in the same room where our commercial software architects build live platforms for US, UK, and India clients.",
                tag: "ATMOSPHERE",
              },
              {
                icon: FileCheck,
                title: "Company Internship Letter",
                desc: "Get an authentic ATS Global Tech internship certificate and experience letter validating your production contributions.",
                tag: "CREDENTIALS",
              },
              {
                icon: Award,
                title: "100% Placement Drives",
                desc: "Direct referrals to 50+ hiring partner companies across Jaipur, Delhi NCR, Bangalore, and remote roles.",
                tag: "CAREER ASSISTANCE",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0066FF] block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. 4-STEP CAREER LAUNCH ENGINE                               */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#F0F7FF] border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1450px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>HOW WE TRANSFORM YOU</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
              Our 4-Step Career Launch Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From day one to your first high-paying software offer letter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Core Fundamentals & Deep Logic",
                desc: "We build your foundation from scratch. Master programming semantics, data structures, clean code, and modular architecture.",
              },
              {
                step: "02",
                title: "Live Production Client Sprints",
                desc: "Move into the company sprint floor. Write real PRs, get code reviewed by senior leads, and integrate real backend APIs.",
              },
              {
                step: "03",
                title: "Portfolio & GitHub Showcase",
                desc: "No dummy clones. Build 3 production-grade, deployed applications with high-conversion READMEs and live demo URLs.",
              },
              {
                step: "04",
                title: "Placement Drives & Mock Interviews",
                desc: "1:1 mock technical interviews, DSA practice, resume optimization, and direct interview pipelines with 50+ hiring partners.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-blue-100 shadow-xs relative"
              >
                <div className="text-3xl font-black text-blue-200 font-mono mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. BOOK A FREE DEMO CLASS / ENROLLMENT INQUIRY FORM          */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-white border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#000c3d] via-[#012d94] to-[#0A1629] rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Info Column */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/40 text-xs font-mono font-bold text-cyan-200 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>NEW BATCHES STARTING THIS MONDAY</span>
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display leading-tight mb-4">
                  Book Your 2-Day Free Demo Class
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-6 font-normal">
                  Attend our live classroom or online session without any commitment. See how working architects teach, inspect the live projects, and get a 1:1 career roadmap counseling session.
                </p>

                <div className="space-y-3 mb-6 text-xs text-blue-100">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>Free 1:1 Career Counseling with Senior Tech Lead</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>Access to Live Lab &amp; Course Syllabus Kit</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>Zero upfront fee required for demo session</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-400/30">
                  <p className="text-xs text-blue-200 mb-1">Direct Admission Helpline:</p>
                  <a
                    href="tel:+919929825003"
                    className="text-lg font-bold text-white hover:text-cyan-300 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-cyan-300" />
                    <span>+91 9929825003</span>
                  </a>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7 bg-white/95 rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl backdrop-blur-md">
                {formSuccess ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-display mb-2">
                      Demo Class Seat Reserved! 🎉
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{demoForm.name}</strong>. Our academic counselor will call you on <strong>{demoForm.phone}</strong> with batch timings and demo class credentials.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={demoForm.name}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={demoForm.phone}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, phone: e.target.value })
                          }
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={demoForm.email}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, email: e.target.value })
                          }
                          placeholder="rahul@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Program *
                        </label>
                        <select
                          value={demoForm.course}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, course: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] bg-white"
                        >
                          {COURSES.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Learning Mode
                        </label>
                        <select
                          value={demoForm.mode}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, mode: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] bg-white"
                        >
                          <option value="Classroom (Jaipur Campus)">
                            Classroom (Jaipur Campus)
                          </option>
                          <option value="Live Interactive Online">
                            Live Interactive Online
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Current Background
                        </label>
                        <select
                          value={demoForm.experience}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, experience: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] bg-white"
                        >
                          <option value="College Student / Fresher">
                            College Student / Final Year
                          </option>
                          <option value="Graduate Fresher Seeking First Job">
                            Graduate Fresher Seeking Job
                          </option>
                          <option value="Working in Non-IT (Career Switch)">
                            Non-IT Professional (Career Switch)
                          </option>
                          <option value="Junior Developer (Skill Upgrade)">
                            Junior Developer (Skill Upgrade)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Any Questions or Target Career Goals? (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={demoForm.message}
                        onChange={(e) =>
                          setDemoForm({ ...demoForm, message: e.target.value })
                        }
                        placeholder="e.g. Want to switch from B.Com to Full Stack Developer..."
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {formSubmitting ? (
                        <span>Reserving Demo Seat...</span>
                      ) : (
                        <>
                          <span>Submit &amp; Reserve Free Demo Seat</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQS)                         */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]/90 border-b border-blue-100">
        <div className="w-full max-w-[98%] xl:max-w-[95%] 2xl:max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0066FF] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>CLEARING YOUR DOUBTS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about ATS Tech Academy admissions, training, and placements.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === fIdx ? null : fIdx)
                  }
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0066FF] transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`transform transition-transform text-[#0066FF] ${
                      expandedFaq === fIdx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {expandedFaq === fIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CURRICULUM SYLLABUS MODAL                                 */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#0A1629] text-white flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/30 text-cyan-200 text-[10px] font-mono font-bold mb-2">
                    <span>{activeCourseModal.badge}</span>
                    <span>&bull;</span>
                    <span>{activeCourseModal.duration}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {activeCourseModal.title}
                  </h3>
                  <p className="text-xs text-blue-100 mt-1 max-w-xl">
                    {activeCourseModal.detailedDesc}
                  </p>
                </div>

                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Syllabus Modules */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-blue-50/80 rounded-2xl border border-blue-100">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">
                      AVERAGE SALARY PACKAGE
                    </span>
                    <span className="text-sm font-bold text-emerald-600">
                      {activeCourseModal.avgSalary}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">
                      TOTAL LAB HOURS
                    </span>
                    <span className="text-sm font-bold text-[#0066FF]">
                      {activeCourseModal.hours}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">
                      BATCH LEARNING MODE
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {activeCourseModal.mode}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-slate-900 font-display">
                  Detailed Module Roadmap:
                </h4>

                <div className="space-y-3">
                  {activeCourseModal.curriculum.map((mod, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-[#0066FF] text-white text-[10px] font-mono font-bold">
                          {mod.week}
                        </span>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          {mod.title}
                        </h5>
                      </div>
                      <ul className="space-y-1.5 pl-2">
                        {mod.topics.map((top, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <span className="text-[#0066FF] font-bold">&bull;</span>
                            <span>{top}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Real Projects Showcase */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-mono">
                    Live Projects You Will Build &amp; Deploy:
                  </h4>
                  <div className="space-y-2">
                    {activeCourseModal.realProjects.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                        <span className="font-medium">{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Includes Official ATS Global Tech Internship Certificate
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCourseModal(null)}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const courseTitle = activeCourseModal.title;
                      setActiveCourseModal(null);
                      handleOpenDemoWithCourse(courseTitle);
                    }}
                    className="px-5 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-bold shadow-xs transition"
                  >
                    Book Free Demo for this Track
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================ */}
      {/* 9. STANDALONE DEMO CLASS MODAL                               */}
      {/* ============================================================ */}
      <AnimatePresence>
        {openDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-blue-200 overflow-hidden my-auto"
            >
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#000c3d] via-[#012d94] to-[#0A1629] text-white flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/30 text-cyan-200 text-[10px] font-mono font-bold mb-1">
                    <span>FREE 2-DAY ACCESS</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Book Free Demo Class
                  </h3>
                  <p className="text-xs text-blue-100 mt-0.5">
                    Experience live training inside ATS Global Tech software lab.
                  </p>
                </div>
                <button
                  onClick={() => setOpenDemoModal(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 sm:p-6">
                {formSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-display">
                      Demo Class Confirmed!
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Our counseling team will reach out with the batch link and lab address.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={demoForm.name}
                        onChange={(e) =>
                          setDemoForm({ ...demoForm, name: e.target.value })
                        }
                        placeholder="e.g. Aman Sharma"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={demoForm.phone}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, phone: e.target.value })
                          }
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#0066FF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={demoForm.email}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, email: e.target.value })
                          }
                          placeholder="aman@example.com"
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#0066FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Selected Program *
                      </label>
                      <select
                        value={demoForm.course}
                        onChange={(e) =>
                          setDemoForm({ ...demoForm, course: e.target.value })
                        }
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:border-[#0066FF]"
                      >
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Learning Mode
                        </label>
                        <select
                          value={demoForm.mode}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, mode: e.target.value })
                          }
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                        >
                          <option value="Classroom (Jaipur Campus)">
                            Classroom (Jaipur Campus)
                          </option>
                          <option value="Live Interactive Online">
                            Live Interactive Online
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Batch Timing Preference
                        </label>
                        <select
                          value={demoForm.timing}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, timing: e.target.value })
                          }
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                        >
                          <option value="Morning Batch (9:00 AM - 12:00 PM)">
                            Morning (9 AM - 12 PM)
                          </option>
                          <option value="Afternoon Batch (2:00 PM - 5:00 PM)">
                            Afternoon (2 PM - 5 PM)
                          </option>
                          <option value="Evening Batch (6:00 PM - 8:30 PM)">
                            Evening (6 PM - 8:30 PM)
                          </option>
                          <option value="Weekend Intensive Batch">
                            Weekend Intensive
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer mt-2"
                    >
                      {formSubmitting
                        ? "Confirming Reservation..."
                        : "Confirm Free Demo Seat"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingInstitute;
