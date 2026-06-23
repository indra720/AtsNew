import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowRight, Star, Users, Briefcase, Clock, Zap, Shield, Smartphone, ChartNoAxesColumnIncreasing, Cloud, Heart, } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const projects = [
    {
        title: "E-Commerce Platform Modernization",
        description: "Transforming retail with a high-performance cloud commerce solution built on a microservices architecture.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        link: "/ai-page",
        category: "Web Application",
        industry: "Retail",
        rating: 4.8,
        users: "20K+",
        timeline: "9 Months",
        icon: _jsx(Zap, { className: "h-5 w-5 text-white" }),
    },
    {
        title: "Healthcare Management System",
        description: "Next-gen healthcare data analytics and patient care portal for seamless hospital operations and reporting.",
        image: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200&auto=format&fit=crop&q=80",
        link: "/health-page",
        category: "SaaS Platform",
        industry: "Healthcare",
        rating: 4.9,
        users: "5K+",
        timeline: "12 Months",
        icon: _jsx(Heart, { className: "h-5 w-5 text-white" }),
    },
    {
        title: "FinTech Mobile Banking App",
        description: "Secure mobile-first banking app with fast transactions, biometric login, and personalized financial insights.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
        link: "/fintech-page",
        category: "Mobile App",
        industry: "Finance",
        rating: 4.7,
        users: "1M+",
        timeline: "6 Months",
        icon: _jsx(Smartphone, { className: "h-5 w-5 text-white" }),
    },
    {
        title: "SaaS Analytics Dashboard",
        description: "Full visibility into sales revenue, marketing KPIs, and user behavior through real-time, customizable dashboards.",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&auto=format&fit=crop&q=80",
        link: "/saas-page",
        category: "Data Analytics",
        industry: "B2B SaaS",
        rating: 4.6,
        users: "8K+",
        timeline: "4 Months",
        icon: _jsx(ChartNoAxesColumnIncreasing, { className: "h-5 w-5 text-white" }),
    },
    {
        title: "Travel Booking Platform",
        description: "Smart travel booking platform integrating flight, hotel, and rental services with AI-driven price prediction.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        link: "/travel-page",
        category: "Cloud Solution",
        industry: "Travel & Hospitality",
        rating: 4.5,
        users: "500K+",
        timeline: "10 Months",
        icon: _jsx(Cloud, { className: "h-5 w-5 text-white" }),
    },
    {
        title: "AI-Powered Chat Assistant",
        description: "A context-aware customer support automation tool, providing instant and accurate responses 24/7.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        link: "/aichat-page",
        category: "Artificial Intelligence",
        industry: "Customer Service",
        rating: 4.9,
        users: "30K+",
        timeline: "5 Months",
        icon: _jsx(Shield, { className: "h-5 w-5 text-white" }),
    },
];
const Projects = () => {
    const navigate = useNavigate();
    const [activeCategory, setactiveCategory] = useState("All");
    const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "relative pt-4 **pb-20 md:pb-40** bg-linear-to-br from-teal-50 via-white to-white text-gray-900 overflow-hidden", children: [_jsx("div", { className: "absolute -top-32 -left-24 w-[450px] h-[450px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" }), _jsx("div", { className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" }), _jsx("div", { className: "absolute inset-0 opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]" }), _jsxs("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: ["Our ", _jsx("span", { className: "text-teal-600", children: "Projects" })] }), _jsxs("p", { className: "text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16", children: ["At ", _jsx("span", { className: "font-semibold ml-1 text-teal-600", children: "ATS Global Tech" }), ", we build impactful digital solutions that empower organizations, redefine user experiences, and drive sustainable business growth across industries."] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mb-4", children: [_jsxs("div", { className: "relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", alt: "Web Development", className: "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-semibold text-teal-600 mb-2", children: "E-Commerce Platform" }), _jsx("p", { className: "text-gray-700 text-sm", children: "A scalable online platform built with React and Next.js, enabling seamless global shopping experiences." })] })] }), _jsxs("div", { className: "relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80", alt: "Mobile App", className: "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-semibold text-teal-600 mb-2", children: "FinTech Mobile App" }), _jsx("p", { className: "text-gray-700 text-sm", children: "A cross-platform app for financial analytics, offering real-time data visualization and performance insights." })] })] }), _jsxs("div", { className: "relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-teal-100 transition-all duration-300 overflow-hidden group", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=80", alt: "Analytics Dashboard", className: "w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-semibold text-teal-600 mb-2", children: "AI Analytics Dashboard" }), _jsx("p", { className: "text-gray-700 text-sm", children: "A data intelligence dashboard that provides predictive insights using AI and machine learning algorithms." })] })] })] })] })] }), _jsx("section", { className: "py-16 bg-white text-gray-900", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-18", children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-stretch justify-around", children: [_jsxs("div", { className: "bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-teal-600 mb-2", children: "15+" }), _jsx("div", { className: "text-gray-700", children: "Projects Completed" })] }), _jsxs("div", { className: "bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-teal-600 mb-2", children: "50+" }), _jsx("div", { className: "text-gray-700", children: "Happy Clients" })] }), _jsxs("div", { className: "bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-teal-600 mb-2", children: "5+" }), _jsx("div", { className: "text-gray-700", children: "Industries Served" })] }), _jsxs("div", { className: "bg-white shadow-lg border border-teal-100 p-6 rounded-2xl flex flex-col items-center justify-center transition-all transform duration-300 cursor-pointer hover:scale-105 h-full", children: ["              ", _jsx("div", { className: "text-3xl md:text-4xl font-bold text-teal-600 mb-2", children: "98%" }), _jsx("div", { className: "text-gray-700", children: "Success Rate" })] })] }) }) }), _jsx("section", { className: "py-8 bg-teal-50 text-gray-900", children: _jsx("div", { className: "w-full px-4 sm:px-6 ", children: _jsx("div", { className: "flex flex-wrap justify-center gap-2", children: [
                            "All",
                            "Web Application",
                            "Mobile App",
                            "Data Analytics",
                            "SaaS Platform",
                            "Cloud Solution",
                            "Artificial Intelligence",
                        ].map((category, i) => (_jsx("button", { onClick: () => setactiveCategory(category), className: `inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 transition ${activeCategory === category
                                ? "bg-linear-to-r from-teal-400 to-cyan-500 text-white" // Active Button
                                : "border border-teal-300 text-teal-700 hover:bg-teal-100" // Inactive Button
                            }`, children: category }, i))) }) }) }), _jsx("section", { className: "py-2 md:py-6 bg-white text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-8 ", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-teal-700", children: "Our Projects" }), _jsx("p", { className: "mt-4 text-gray-700", children: "A selection of our most impactful work, showcasing innovation, design, and results." })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filteredProjects.length > 0 ? (filteredProjects.map((project) => (_jsxs("div", { className: "bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col border border-gray-100", children: [_jsx("img", { src: project.image, alt: project.title, className: "rounded-t-2xl w-full h-48 object-cover", loading: "lazy" }), _jsxs("div", { className: "p-6 flex flex-col grow", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "bg-teal-500 w-8 h-8 rounded-full flex items-center justify-center shrink-0", children: project.icon }), _jsx("span", { className: "inline-flex items-center rounded-full border border-teal-300 px-2.5 py-0.5 text-xs font-semibold text-teal-600", children: project.category })] }), _jsxs("div", { className: "flex items-center space-x-1 text-teal-600 text-sm", children: [_jsx(Star, { className: "h-4 w-4 fill-teal-500 stroke-teal-500" }), _jsx("span", { className: "font-semibold", children: project.rating })] })] }), _jsx("h3", { className: "text-xl font-bold text-teal-700 mb-2", children: project.title }), _jsx("p", { className: "text-gray-700 mb-4 text-sm grow", children: project.description }), _jsxs("div", { className: "flex justify-between items-center text-xs text-gray-500 border-t pt-3 mt-auto", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Briefcase, { className: "h-4 w-4 text-teal-500" }), project.industry] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-4 w-4 text-teal-500" }), project.timeline] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Users, { className: "h-4 w-4 text-teal-500" }), project.users] })] })] }), _jsx("div", { className: "px-6 pb-6 pt-0", children: _jsxs("button", { onClick: () => navigate(project.link), className: "text-teal-500 hover:text-teal-700 font-medium inline-flex items-center transition", children: ["View Case Study", _jsx(ArrowRight, { className: "h-4 w-4 ml-1" })] }) })] }, project.title)))) : (_jsx("div", { className: "col-span-full text-center py-10", children: _jsx("p", { className: "text-gray-500 text-lg", children: "No projects found in this category." }) })) })] }) }), _jsx("section", { className: "py-10 bg-teal-50 text-gray-900", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 text-teal-700", children: "Ready to Start Your Project?" }), _jsx("p", { className: "text-lg mb-8 text-gray-700", children: "Let's discuss your project requirements and create something amazing together. We're excited to bring your vision to life." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", children: _jsxs("button", { className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-teal-500 text-white hover:bg-teal-600 h-11 rounded-md px-8 py-3 w-full sm:w-auto", children: ["Start Your Project", _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-arrow-right ml-2 h-5 w-5", children: [_jsx("path", { d: "M5 12h14" }), _jsx("path", { d: "m12 5 7 7-7 7" })] })] }) }), _jsx("a", { href: "/services", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 border border-teal-400 text-teal-600 hover:bg-teal-100 h-11 rounded-md px-8 py-3 w-full sm:w-auto", children: "View Services" }) })] })] }) })] }));
};
export default Projects;
