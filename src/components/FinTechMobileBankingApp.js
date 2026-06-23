import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShieldCheck, TrendingUp, HandCoins } from "lucide-react";
const FeatureCard = ({ title, description, Icon, }) => (_jsxs("div", { className: "bg-white border border-teal-200 p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-teal-300/60 transform hover:-translate-y-0.5", children: [_jsxs("div", { className: "flex items-start space-x-4 mb-3", children: [_jsx("div", { className: "text-teal-600 bg-teal-100 p-2 rounded-full shadow-inner shrink-0", children: Icon && _jsx(Icon, { className: "w-6 h-6" }) }), _jsx("h4", { className: "text-xl font-bold text-teal-800 mt-1", children: title })] }), _jsx("p", { className: "text-base text-gray-700 leading-relaxed pl-10 -mt-1", children: description })] }));
export default function App() {
    const coreFeatures = [
        {
            title: "Biometric Login",
            description: "Face and fingerprint recognition for secure access with fallback PIN.",
            Icon: ShieldCheck,
        },
        {
            title: "Instant Transfers",
            description: "Real-time peer-to-peer payments with advanced fraud protection.",
            Icon: HandCoins,
        },
        {
            title: "Card Controls",
            description: "Freeze cards instantly, set limits, manage merchants and track usage.",
            Icon: ShieldCheck,
        },
        {
            title: "Spending Insights",
            description: "Categorized reports, personalized financial goals, and proactive budgeting reminders.",
            Icon: TrendingUp,
        },
        {
            title: "Digital Onboarding",
            description: "KYC verification and e-signatures completed entirely within the app in minutes.",
            Icon: HandCoins,
        },
        {
            title: "Push Notifications",
            description: "Instant, configurable alerts for every transaction and suspicious activity.",
            Icon: ShieldCheck,
        },
    ];
    const metrics = [
        { value: "4.8", label: "App Store rating" },
        { value: "+60%", label: "User Engagement" },
        { value: "-35%", label: "Fraud Attempts" },
        { value: "99.99%", label: "API Uptime" },
    ];
    return (_jsx("main", { className: "min-h-screen bg-linear-to-b from-teal-50 via-white to-cyan-100 text-gray-900 py-16 md:py-24 lg:py-32 px-4 font-serif antialiased", children: _jsxs("div", { className: "w-full", children: [_jsxs("section", { className: "grid gap-10 lg:grid-cols-2 items-center mb-20 md:mb-24", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold bg-teal-100 px-4 py-1.5 inline-block rounded-full text-teal-700 shadow-sm mb-4", children: "Case Study \u00B7 FinTech Digital Transformation" }), _jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold my-4 leading-tight text-teal-900", children: "Next-Gen Mobile Banking Experience" }), _jsx("p", { className: "text-gray-700 text-lg md:text-xl mb-8 max-w-xl", children: "A secure, cross-platform banking solution offering biometric authentication, instant payments, card controls, and proactive fraud detection." }), _jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-inner border border-teal-100 max-w-2xl", children: [_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-3xl font-extrabold text-teal-700", children: "3M+" }), _jsx("p", { className: "text-xs text-gray-600 uppercase tracking-wider mt-0.5", children: "Active users" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-3xl font-extrabold text-teal-700", children: "99.95%" }), _jsx("p", { className: "text-xs text-gray-600 uppercase tracking-wider mt-0.5", children: "Uptime SLA" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-3xl font-extrabold text-teal-700", children: "PCI-DSS" }), _jsx("p", { className: "text-xs text-gray-600 uppercase tracking-wider mt-0.5", children: "Compliance" })] }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-3xl font-extrabold text-teal-700", children: "2ms" }), _jsx("p", { className: "text-xs text-gray-600 uppercase tracking-wider mt-0.5", children: "Avg. Transfer Time" })] })] }), _jsx("button", { className: "mt-10 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto", children: "Download Full Case Study" })] }), _jsx("div", { className: "rounded-3xl overflow-hidden shadow-2xl transition duration-500", children: _jsx("img", { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop", alt: "Mobile banking mockup", className: "w-full h-64 sm:h-80 lg:h-96 object-cover", onError: (e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src =
                                        "https://placehold.co/1200x900/4DB6AC/FFFFFF?text=Mobile+Banking+App";
                                } }) })] }), _jsxs("section", { className: "grid gap-8 lg:grid-cols-3 items-start mb-20 md:mb-24", children: [_jsxs("div", { className: "lg:col-span-2 bg-white border border-teal-200 rounded-3xl p-8 shadow-xl", children: [_jsx("h2", { className: "text-3xl font-bold mb-4 text-teal-800", children: "Project Overview" }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed border-l-4 border-teal-400 pl-4 italic", children: "The goal was to build a secure, feature-rich banking app that combines next-gen digital payments, real-time insights, and personalized controls \u2014 empowering users with trust and transparency across iOS and Android platforms." })] }), _jsxs("div", { className: "bg-teal-100 border border-teal-300 rounded-3xl p-8 shadow-xl", children: [_jsx("h4", { className: "text-2xl font-bold mb-4 text-teal-800", children: "Project Snapshot" }), _jsxs("div", { className: "space-y-3 text-base text-gray-800", children: [_jsxs("p", { className: "flex justify-between border-b border-teal-200 pb-2", children: [_jsx("span", { className: "font-semibold", children: "Duration:" }), _jsx("span", { children: "8 months" })] }), _jsxs("p", { className: "flex justify-between border-b border-teal-200 pb-2", children: [_jsx("span", { className: "font-semibold", children: "Team Size:" }), _jsx("span", { children: "15 specialists" })] }), _jsxs("p", { className: "flex justify-between border-b border-teal-200 pb-2", children: [_jsx("span", { className: "font-semibold", children: "Core Stack:" }), _jsx("span", { children: "React Native, Node.js" })] }), _jsxs("p", { className: "flex justify-between", children: [_jsx("span", { className: "font-semibold", children: "Compliance:" }), _jsx("span", { className: "text-teal-700 font-bold", children: "PCI DSS aligned" })] })] })] })] }), _jsxs("section", { className: "mb-20 md:mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-10 text-teal-800", children: "Platform Core Features" }), _jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: coreFeatures.map((f, i) => (_jsx(FeatureCard, { title: f.title, description: f.description, Icon: f.Icon }, i))) })] }), _jsxs("section", { className: "grid gap-10 lg:grid-cols-2 mb-20 md:mb-24 items-center", children: [_jsx("div", { className: "rounded-3xl overflow-hidden shadow-2xl transition duration-500", children: _jsx("img", { src: "https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000", alt: "Secure mobile banking", className: "w-full h-64 sm:h-80 object-cover", onError: (e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src =
                                        "https://placehold.co/1200x800/26A69A/FFFFFF?text=Bank-Grade+Security";
                                } }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-3xl font-bold mb-4 text-teal-800", children: "Bank-Grade Security Architecture" }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed mb-6", children: "The app includes multi-layered encryption, continuous risk monitoring, and adaptive fraud detection \u2014 ensuring full financial safety for every transaction." }), _jsxs("ul", { className: "text-gray-700 space-y-2 text-base", children: [_jsxs("li", { className: "flex items-center", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-teal-600 mr-2 shrink-0" }), "Encrypted end-to-end communication (TLS 1.3)"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-teal-600 mr-2 shrink-0" }), "Device binding and tokenization for sensitive data"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-teal-600 mr-2 shrink-0" }), "Adaptive, anomaly-based fraud detection engine"] }), _jsxs("li", { className: "flex items-center", children: [_jsx(ShieldCheck, { className: "w-5 h-5 text-teal-600 mr-2 shrink-0" }), "Strict role-based access controls (RBAC)"] })] })] })] }), _jsxs("section", { className: "mb-20 md:mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-8 text-teal-800", children: "Impact & Performance Metrics" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto", children: metrics.map((stat, i) => (_jsxs("div", { className: "bg-white border-2 border-teal-200 p-6 rounded-2xl text-center shadow-md transition duration-200 hover:shadow-lg", children: [_jsx("p", { className: "text-4xl font-extrabold text-teal-700 mb-1", children: stat.value }), _jsx("p", { className: "text-sm text-gray-600 uppercase tracking-wider", children: stat.label })] }, i))) })] }), _jsxs("section", { className: "mb-20 md:mb-24 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-teal-800", children: "Technology Stack" }), _jsx("div", { className: "flex flex-wrap gap-4 justify-center max-w-4xl mx-auto", children: [
                                "React Native (Cross-platform)",
                                "Node.js (Microservices)",
                                "PostgreSQL (Encrypted)",
                                "AWS (Cloud Infrastructure)",
                                "Kafka (Event Streaming)",
                                "JWT (Authentication)",
                                "GraphQL (Data Fetching)",
                                "Docker & Kubernetes",
                            ].map((t) => (_jsx("span", { className: "px-4 py-2 bg-teal-50 border border-teal-300 rounded-full text-sm font-medium text-teal-700 shadow-sm", children: t }, t))) })] }), _jsxs("section", { className: "bg-teal-100 border-2 border-teal-300 rounded-3xl p-10 sm:p-12 text-center shadow-2xl shadow-teal-300/40", children: [_jsx("h3", { className: "text-3xl md:text-4xl font-extrabold mb-4 text-teal-900", children: "Ready to deliver a next-generation banking experience?" }), _jsx("p", { className: "text-lg text-gray-700 mb-8 max-w-3xl mx-auto", children: "Let\u2019s build a secure, future-ready financial platform that drives user adoption and financial trust." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("button", { className: "bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto", children: "Start Your Project Assessment" }), _jsx("a", { href: "#", className: "px-8 py-4 rounded-full border-2 border-teal-500 text-teal-700 font-bold hover:bg-teal-200 transition duration-300 w-full sm:w-auto", children: "Contact FinTech Experts" })] })] })] }) }));
}
