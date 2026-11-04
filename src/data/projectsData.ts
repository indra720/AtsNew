import buildingImg from "../assets/Building.png";
import callCenterImg from "../assets/Call-center.png";
import crmPmsImg from "../assets/Crm+pms.png";
import ecommerceImg from "../assets/Ecommerce.png";
import learningImg from "../assets/Learning.png";
import resortImg from "../assets/Resort.png";
import vrindavanImg from "../assets/Vrindavan.png";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface RealProject {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  category: string;
  filterCat: "all" | "telecom" | "construction" | "ecommerce" | "edtech" | "hospitality" | "realestate" | "crm";
  industry: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  client: string;
  rating: number;
  scale: string;
  timeline: string;
  techStack: string[];
  metrics: ProjectMetric[];
  features: string[];
  accentColor: string;
  glowColor: string;
  caseStudyLink?: string;
  liveDemoLink?: string;
  githubUrl?: string;
  rolesSupported?: string;
}

export const REAL_PROJECTS: RealProject[] = [
  {
    id: "ats-call-center",
    title: "ATS Call Center",
    badge: "AI TELEPHONY & CRM",
    tagline: "AI-Powered Cloud Contact Center & Omnichannel CRM",
    category: "Enterprise SaaS / Telephony / AI Voice",
    filterCat: "telecom",
    industry: "Customer Support, Telecom, BPO & Sales Operations",
    shortDescription:
      "Modern cloud contact center featuring an integrated Web-Dialer, real-time AI Agent Copilot with live call transcription & sentiment analysis, and omnichannel campaigns.",
    fullDescription:
      "ATS Call Center is an all-in-one cloud contact center solution and customer relationship management (CRM) platform designed to streamline inbound/outbound calling operations, sales pipelines, and customer support. Equipped with a floating WebRTC-style softphone, real-time call transcription, instant sentiment analysis, dynamic call scripts, and multi-channel campaign automation (WhatsApp, SMS, Email), the platform helps teams close deals faster and deliver superior customer service.",
    image: callCenterImg,
    client: "ATS Telecom & Enterprise Services",
    rating: 4.9,
    scale: "87+ Screen Archetypes",
    timeline: "6 Months",
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Recharts", "Framer Motion", "Zod"],
    metrics: [
      { label: "Agent Output", value: "+40%" },
      { label: "Handle Time (AHT)", value: "-35%" },
      { label: "QA Visibility", value: "100%" },
    ],
    features: [
      "Integrated 3-Column Dialer: In-browser softphone keypad, international dialing, live timer & one-click disposition logging",
      "Real-Time AI Copilot: Live speech-to-text transcription, context-aware reply suggestions & automated call summaries",
      "Visual Lead CRM: Drag-and-drop Kanban pipeline tracking deals across stages (New Lead to Won/Lost)",
      "Omnichannel Messaging: WhatsApp Business interactive template builder, bulk SMS & Email marketing sequences",
      "Enterprise BI & Custom Report Engine: 15+ specialized reports and 8+ granular RBAC permission roles",
    ],
    accentColor: "from-blue-600 to-indigo-600",
    glowColor: "rgba(3, 98, 250, 0.2)",
    rolesSupported: "8+ Roles (Super Admin, Admin, Agent, Supervisor, Quality Analyst, Data Analyst, HR)",
  },
  {
    id: "buildpro-construction",
    title: "BuildPro — Construction ERP",
    badge: "CONSTRUCTION ERP",
    tagline: "End-to-End Civil Engineering, Site Operations & Procurement Platform",
    category: "Enterprise SaaS / Civil Tech / ERP",
    filterCat: "construction",
    industry: "Construction, Civil Engineering & Infrastructure",
    shortDescription:
      "Comprehensive Construction ERP & CRM platform streamlining site progress, materials procurement, Daily Site Reports (DPR), and multi-tier purchase order approvals.",
    fullDescription:
      "BuildPro is a comprehensive, modern Construction Enterprise Resource Planning (ERP) and CRM platform designed to streamline the entire construction lifecycle. From raw lead acquisition and client onboarding to live site progress, materials procurement, daily site reports (DPR), labor attendance, and multi-tier purchase order approvals — BuildPro brings transparency, speed, and cost-control to large-scale construction enterprises.",
    image: buildingImg,
    client: "BuildPro Infrastructure Ltd",
    rating: 4.8,
    scale: "85+ Active Sites",
    timeline: "7 Months",
    techStack: ["React 18", "Tailwind CSS", "Vite", "Recharts", "Lucide Icons", "JavaScript"],
    metrics: [
      { label: "Active Sites", value: "85+ Sites" },
      { label: "Material Waste Saved", value: "22%" },
      { label: "On-Time Completion", value: "96.5%" },
    ],
    features: [
      "Lead & Client CRM: Multi-stage pipeline with one-click corporate GSTIN/PAN verification",
      "Project & Site Execution: Interactive Kanban boards, Daily Progress Reports (DPR) & concrete pour logs",
      "Materials & Procurement: Real-time stock register, dynamic PO builder with auto GST slabs (5%, 12%, 18%, 28%)",
      "Multi-stage Approval Stepper: Draft → Under Review → Approved → Fulfilled with instant status updates",
      "Executive Dashboard & Command Palette: Revenue vs. expense trends powered by Recharts with global Ctrl+K search",
    ],
    accentColor: "from-amber-600 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.2)",
  },
  {
    id: "oranza-ecommerce",
    title: "ORANZA — Multi-Vendor Marketplace",
    badge: "COMMERCE MARKETPLACE",
    tagline: "Next-Gen Multi-Vendor Hub with Unified Buyer, Seller & Super Admin Portals",
    category: "E-Commerce / Retail Tech / Marketplace",
    filterCat: "ecommerce",
    industry: "E-Commerce, B2B & B2C High-Density Marketplace",
    shortDescription:
      "Ultra-modern multi-vendor marketplace with 57+ dynamic routes unifying Customer Storefront, Vendor Hub (/seller), and Super Admin Hub (/admin) with zero-friction role switching.",
    fullDescription:
      "ORANZA ek ultra-modern, high-performance multi-vendor ecommerce web application hai jise high-density commercial marketplaces (jaise Amazon, Flipkart, AliExpress) ke modern standards par design kiya gaya hai. Isme ek single unified platform ke andar 3 alag-alag portals (Customer Storefront, Vendor Hub, aur Super Admin Hub) seamlessly integrate kiye gaye hain with instant Role Switcher.",
    image: ecommerceImg,
    client: "ORANZA Commercial Retail",
    rating: 4.9,
    scale: "57+ Routes • MVP",
    timeline: "6 Months",
    techStack: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "Recharts", "Zod", "React Hook Form"],
    metrics: [
      { label: "Dynamic Routes", value: "57+ Routes" },
      { label: "Checkout Latency", value: "0.8s" },
      { label: "Unified Portals", value: "3 Hubs" },
    ],
    features: [
      "Zero-Friction Role Switcher: One-click switch between Customer, Vendor & Super Admin personas",
      "Customer Storefront: Multi-facet catalog filtering, PDP with multi-image zoom, side-by-side comparison & accordion checkout",
      "Vendor Portal (/seller): Real-time merchant analytics, 'Add Product' wizard, inventory control & AWB order dispatch",
      "Super Admin Hub (/admin): Executive GMV metrics, vendor onboarding with KYC (PAN/GSTIN validation) & global CMS",
      "Indian E-Commerce Localization: Rupee (₹) Lakhs/Crores formatting, GST slabs & pincode delivery estimators",
    ],
    accentColor: "from-orange-500 to-rose-600",
    glowColor: "rgba(255, 106, 0, 0.25)",
    githubUrl: "https://github.com/indra720/AliEco.git",
  },
  {
    id: "eduflow-ai-lms",
    title: "EduFlow AI — Campus ERP / LMS",
    badge: "AI EDTECH ERP",
    tagline: "All-in-One AI-Powered Education Operating System & Campus ERP/LMS",
    category: "EdTech / Campus ERP / SaaS LMS",
    filterCat: "edtech",
    industry: "Education Management, K-12, Colleges & Coaching Academies",
    shortDescription:
      "Education operating system and enterprise ERP/LMS unifying academics, digital fee collection (UPI), automated biometric attendance, transport GPS, and syllabus-aligned AI tools.",
    fullDescription:
      "EduFlow AI is a next-generation education operating system and enterprise ERP/LMS designed for schools, colleges, and coaching institutes. It unifies academics, digital fee collection (UPI), automated biometric attendance, transport GPS tracking, and syllabus-aligned AI tools into a single high-performance workspace supporting 14+ distinct personas.",
    image: learningImg,
    client: "Apex Educational Group (Repo: learn-run-grow-ai)",
    rating: 4.9,
    scale: "184K+ Learners",
    timeline: "5 Months",
    techStack: ["React 19", "TypeScript", "TanStack Start (SSR)", "TanStack Router", "Tailwind CSS v4", "Radix UI", "Framer Motion", "Recharts"],
    metrics: [
      { label: "Active Institutes", value: "248+" },
      { label: "Learners Managed", value: "184,000+" },
      { label: "AI Requests Handled", value: "1.8M+" },
    ],
    features: [
      "AI Smart Learning Engine: Generates board-aligned lesson plans, worksheets & quizzes in 30 seconds with 24/7 AI tutor",
      "Instant Digital Fee Collection: Dynamic UPI QR codes, auto-reconciliation, digital receipts & automated WhatsApp overdue alerts",
      "Academics & Timetable: CBSE/ICSE/State curriculum pacing, smart timetable generation, period swap & digital lesson plans",
      "Campus Operations: Real-time bus & transport GPS tracking, library barcode system, hostel room allocation & visitor logs",
      "14+ Dedicated User Roles: Super Admin, Institute Admin, Teacher, Student, Parent, Trainer, HR, Accountant, Librarian, Transport",
    ],
    accentColor: "from-purple-600 to-indigo-600",
    glowColor: "rgba(147, 51, 234, 0.2)",
    rolesSupported: "14+ Personas (Admin, Teacher, Student, Parent, HR, Accountant, Transport)",
  },
  {
    id: "aura-palms-resort",
    title: "Aura Palms — Luxury Resort ERP",
    badge: "HOSPITALITY ERP & SAAS",
    tagline: "Multi-Tenant Luxury Resort Management ERP & SaaS Platform",
    category: "Hospitality Tech / Enterprise SaaS / Hotel ERP",
    filterCat: "hospitality",
    industry: "Luxury Resorts, Boutique Hotel Chains & Hospitality ERP",
    shortDescription:
      "Enterprise-grade multi-tenant Resort Management System (RMS) & CRM featuring guest direct booking, 9+ role-based operational dashboards, and automated GST billing.",
    fullDescription:
      "Aura Palms Resort Management System (RMS) ek modern, all-in-one hospitality ERP aur SaaS platform hai jo luxury resorts aur boutique hotel chains ke operations ko streamline karta hai. Isme guest-facing high-converting booking portal ke sath-sath backend multi-tenant management system integrated hai. Platform lead generation aur enquiry management (CRM) se lekar check-in, housekeeping, restaurant F&B orders, inventory, aur GST-compliant tax invoicing tak sabhi operations ko single dashboard se handle karta hai.",
    image: resortImg,
    client: "Aura Palms Luxury Resorts & Boutique Hotels",
    rating: 4.9,
    scale: "9+ Role Dashboards",
    timeline: "5 Months",
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Recharts", "Framer Motion", "Zod"],
    metrics: [
      { label: "Direct Bookings", value: "0% OTA Fee" },
      { label: "Roles Supported", value: "9+ Personas" },
      { label: "Tax Compliance", value: "100% GST" },
    ],
    features: [
      "Guest-Facing Luxury Portal: Dynamic room availability search, live INR (₹) rates, private villas & Ayurvedic spa booking",
      "Direct Booking Engine: Walk-in & web direct reservations eliminating third-party OTA commission dependency",
      "Multi-Tenant SaaS Engine: One-click resort onboarding, multi-tier subscription plans (Starter, Pro, Enterprise) & audit logs",
      "9+ Operational Roles: Dedicated dashboards for Super Admin, Resort Owner, Front Desk, Housekeeping, Restaurant KDS, Accountant",
      "Billing & Indian GST Compliance: Automatic 12% & 18% GST calculation (HSN: 996311) with print-ready tax invoices",
    ],
    accentColor: "from-emerald-600 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.2)",
    rolesSupported: "9+ Roles (Super Admin, Resort Manager, Front Desk, Housekeeping, Restaurant KDS, Accountant, Sales)",
  },
  {
    id: "vrindavan-golden-dreams",
    title: "Vrindavan Golden Dreams",
    badge: "PROPTECH SHOWCASE",
    tagline: "Luxury Real Estate Web Platform & Digital Project Showcase",
    category: "Real Estate & Property Development / PropTech",
    filterCat: "realestate",
    industry: "Luxury Real Estate, Plotted Developments & Townships",
    shortDescription:
      "High-performance SSR real estate portal built with React 19 and TanStack Start, showcasing premium township developments, interactive master plans, and direct buyer enquiry channels.",
    fullDescription:
      "Vrindavan Golden Dreams is an enterprise-grade digital portal engineered for Shree Vrindavan Real Estate Pvt. Ltd., a premier real estate development firm based in Jaipur. The website presents high-growth residential plotted developments, luxury villa communities, and commercial corridors with high-resolution visual storytelling, downloadable layout blueprints, and streamlined enquiry channels with signature gold accents.",
    image: vrindavanImg,
    client: "Shree Vrindavan Real Estate Pvt. Ltd. (Jaipur, Rajasthan)",
    rating: 4.8,
    scale: "4+ Major Townships",
    timeline: "4 Months",
    techStack: ["React 19", "TypeScript", "TanStack Start (SSR)", "TanStack Router", "Tailwind CSS v4", "Radix UI", "Framer Motion", "Nitro Engine"],
    metrics: [
      { label: "Monthly Impressions", value: "300K+" },
      { label: "Plot Dimensions", value: "100-1000+ Yds" },
      { label: "Inventory Value", value: "₹500Cr+" },
    ],
    features: [
      "Township Portfolio & Master Planning: Flagship townships (Vrindavan Yash Vihar, Vasundhara Nagar-II, Sridhar Nagar, Urmila Enclave)",
      "Interactive Lightbox & Gallery: Filterable category galleries (Entrance, Sector Roads, Development Work, Parks) with full-screen zoom",
      "Blueprint & Brochure Downloads: Direct instant access to high-res master plans and project specification PDFs",
      "Connectivity & Transit Matrix: Distance & travel time breakdown (Jaipur Airport, Metro, Ring Road, Hospitals)",
      "High-Performance Full-Stack SSR: Pre-rendered static pages for instant first-contentful paint and top Google SEO ranking",
    ],
    accentColor: "from-amber-600 to-yellow-600",
    glowColor: "rgba(217, 119, 6, 0.2)",
  },
  {
    id: "rems-real-estate",
    title: "REMS — Real Estate ERP",
    badge: "PROPTECH ERP",
    tagline: "Enterprise Property Portfolio & Lease Administration Platform",
    category: "PropTech & Real Estate ERP",
    filterCat: "realestate",
    industry: "Real Estate Asset Management & Developer ERP",
    shortDescription:
      "End-to-end real estate ERP platform managing multi-property listings, automated lease agreements, tenant onboarding, maintenance ticketing, and digital rent collection.",
    fullDescription:
      "A complete enterprise-grade real estate ecosystem built for property developers, brokers, and asset managers. REMS centralizes multi-property portfolio tracking, automated tenant KYC, dynamic digital rent invoicing with auto-reminders, vendor dispatch for maintenance tickets, and predictive revenue yield forecasting.",
    image: vrindavanImg,
    client: "Global Asset Realty Partners",
    rating: 4.9,
    scale: "15,000+ Units",
    timeline: "6 Months",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS S3", "Docker"],
    metrics: [
      { label: "Properties Managed", value: "15,000+" },
      { label: "Rent Collected", value: "₹28Cr+" },
      { label: "Occupancy Rate", value: "98.4%" },
    ],
    features: [
      "Multi-property unit inventory with floor plan visualizer",
      "Automated tenant KYC, digital lease generation & e-signatures",
      "Integrated rent collection with payment gateway & auto-receipts",
      "Maintenance request ticketing with vendor tracking & SLA monitoring",
      "Comprehensive owner dashboards with ROI & tax-ready statements",
    ],
    accentColor: "from-blue-600 to-cyan-500",
    glowColor: "rgba(0, 102, 255, 0.2)",
  },
  {
    id: "crm-pms-system",
    title: "CRM + Project Management Suite",
    badge: "ENTERPRISE WORKSPACE",
    tagline: "High-Velocity Sales Pipeline & Agile Project Execution Hub",
    category: "Enterprise Software / CRM & Agile ERP",
    filterCat: "crm",
    industry: "Enterprise Operations & High-Velocity Sales",
    shortDescription:
      "Unified enterprise workspace combining high-velocity sales CRM, automated lead scoring, interactive Kanban sprint boards, Gantt timelines, and team collaboration.",
    fullDescription:
      "A battle-tested corporate workspace integrating customer relationship management and agile project execution under one unified interface. Empowers sales teams to close deals faster with automated pipelines, while engineering and operations teams track milestones, sprints, timesheets, and deliverables with zero friction.",
    image: crmPmsImg,
    client: "Nexus Enterprise Solutions",
    rating: 4.9,
    scale: "50K+ Users",
    timeline: "8 Months",
    techStack: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Redis"],
    metrics: [
      { label: "Deals Closed", value: "50K+" },
      { label: "Team Velocity", value: "+65%" },
      { label: "Active Workspaces", value: "1,200+" },
    ],
    features: [
      "360° lead tracking, smart deal stages & automated email sequencing",
      "Agile Scrum & Kanban boards with drag-and-drop workflow states",
      "Interactive Gantt timelines with critical-path dependency tracking",
      "Resource allocation, employee timesheets & hourly rate billing",
      "Live executive KPI dashboards with multi-currency revenue forecasting",
    ],
    accentColor: "from-indigo-600 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.2)",
  },
];
