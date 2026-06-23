import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { ArrowRight, Cpu, Cloud, BarChart3, Shield, Smartphone, Code, CheckCircle, } from "lucide-react";
const solutions = [
    {
        title: "AI Solutions",
        description: "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
        icon: _jsx(Cpu, { className: "w-8 h-8" }),
        color: "indigo",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&h=500&fit=crop",
        items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
    },
    {
        title: "Cloud Computing",
        description: "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        color: "blue",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=500&fit=crop",
        items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
    },
    {
        title: "Data Analytics",
        description: "Transform data into actionable insights with advanced analytics and business intelligence tools.",
        icon: _jsx(BarChart3, { className: "w-8 h-8" }),
        color: "amber",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=500&fit=crop",
        items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
    },
    {
        title: "Cybersecurity",
        description: "Protect your digital assets with advanced security frameworks and real-time threat detection.",
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        color: "red",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&h=500&fit=crop",
        items: ["Network Security", "Data Encryption", "Risk Assessment"],
    },
    {
        title: "Mobile Development",
        description: "Build high-performance, cross-platform mobile apps that engage and convert users.",
        icon: _jsx(Smartphone, { className: "w-8 h-8" }),
        color: "green",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
        items: [
            "iOS & Android Apps",
            "Flutter & React Native",
            "App Store Optimization",
        ],
    },
    {
        title: "Web Development",
        description: "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
        icon: _jsx(Code, { className: "w-8 h-8" }),
        color: "purple",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
        items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
    },
];
const Solution = () => {
    return (_jsxs("div", { className: "min-h-screen font-sans bg-linear-to-br from-teal-50 via-white to-cyan-100 text-gray-900", children: [_jsx("section", { className: "relative pt-3 lg:pt-6 pb-16  lg:pb-24 overflow-hidden", children: _jsxs("div", { className: "relative w-full px-4 sm:px-6 lg:px-10 text-center", children: [_jsxs("h1", { className: "text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900", children: ["Innovative ", _jsx("span", { className: "text-teal-600", children: "Solutions" }), _jsx("span", { className: "block text-3xl md:text-5xl mt-3 font-semibold text-gray-700", children: "for Modern Challenges" })] }), _jsx("p", { className: "text-lg sm:text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed", children: "Discover our comprehensive suite of technology solutions designed to accelerate your digital transformation, enhance operational efficiency, and drive sustainable business growth." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 text-lg font-bold shadow-xl shadow-teal-300/50 transition-all duration-300 transform hover:scale-[1.03]", children: ["Explore Solutions", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-white text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg font-medium border-2 border-teal-300 shadow-md transition-colors", children: "Schedule Consultation" })] })] }) }), _jsx("section", { id: "solutions", className: "py-10 bg-white/90 backdrop-blur-sm rounded-t-3xl border-t border-teal-200", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 lg:mb-16", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-4 text-gray-900", children: "Comprehensive Service Offerings" }), _jsx("p", { className: "text-lg text-gray-700 max-w-3xl mx-auto", children: "Empowering your business with cutting-edge digital solutions tailored to your unique needs." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", children: solutions.map((solution, index) => (_jsxs("div", { className: "group relative bg-white border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden transform hover:-translate-y-1 flex flex-col h-full", children: [_jsx("div", { className: "h-40 overflow-hidden shrink-0", children: _jsx("img", { src: solution.image, alt: solution.title, className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500", onError: (e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = `https://placehold.co/800x500/E0F2F7/0F766E?text=${solution.title.replace(/\s/g, "+")}`;
                                            } }) }), _jsx("div", { className: `absolute top-4 left-4 w-14 h-14 bg-${solution.color}-600 text-white rounded-xl flex items-center justify-center z-20 shadow-xl border-2 border-white`, children: React.cloneElement(solution.icon, {
                                            className: "w-8 h-8 text-white",
                                        }) }), _jsxs("div", { className: "p-6 sm:p-8 relative z-10 flex flex-col flex-grow", children: [_jsx("h3", { className: "text-2xl font-bold mb-3 text-gray-900", children: solution.title }), _jsx("p", { className: "text-gray-700 mb-6 text-base flex-grow", children: solution.description }), _jsx("h4", { className: "font-semibold text-gray-800 mb-3", children: "Key Capabilities:" }), _jsx("ul", { className: "space-y-2 text-gray-600 mb-8", children: solution.items.map((item, i) => (_jsxs("li", { className: "flex items-center gap-3 text-base", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-teal-500 shrink-0" }), item] }, i))) }), _jsxs("a", { href: "#", className: "mt-auto inline-flex items-center text-lg font-bold text-teal-600 group-hover:text-teal-700 transition duration-300", children: ["Explore ", solution.title, _jsx(ArrowRight, { className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-10 bg-teal-600", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-white p-8 md:p-12 rounded-2xl shadow-inner bg-teal-700/50 text-center", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-extrabold mb-4 leading-tight", children: "Ready to Start Your Digital Journey?" }), _jsx("p", { className: "text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto", children: "Partner with us to build scalable, secure, and innovative solutions that redefine your business capabilities." }), _jsxs("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-white text-teal-800 hover:bg-teal-50 px-10 py-3 text-lg font-bold shadow-2xl transition-colors transform hover:scale-[1.05]", children: ["Get Started Today", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] })] }) }) })] }));
};
export default Solution;
