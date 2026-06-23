import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Quote, Star, TrendingUp, Building, ArrowRight } from "lucide-react";
const industries = [
    { name: "Technology", projects: 45 },
    { name: "Healthcare", projects: 32 },
    { name: "Finance", projects: 28 },
    { name: "Education", projects: 25 },
    { name: "Retail", projects: 20 },
    { name: "Manufacturing", projects: 18 },
    { name: "Logistics", projects: 15 },
    { name: "Real Estate", projects: 12 },
];
const indianMaleNames = [
    "Ravi Kumar",
    "Amit Sharma",
    "Vikram Singh",
    "Sandeep Menon",
    "Rajesh Patel",
    "Anil Gupta",
];
const indianFemaleNames = [
    "Priya Desai",
    "Anjali Verma",
    "Neha Singh",
    "Pooja Sharma",
    "Shruti Rao",
    "Kavita Reddy",
];
const getProfessionalDummyImageUrl = (isMale, index) => {
    const gender = isMale ? "men" : "women";
    return `https://randomuser.me/api/portraits/${gender}/${index + 10}.jpg`;
};
const designations = [
    "Software Engineer",
    "Marketing Manager",
    "Product Owner",
    "HR Director",
    "Financial Analyst",
    "Operations Lead",
];
const companies = [
    "Infosys Solutions",
    "Wipro Digital",
    "Tech Mahindra",
    "HCL Tech",
    "TCS Innovations",
    "Reliance Digital",
];
const Testimonials = () => {
    return (_jsxs("div", { className: "font-serif min-h-screen", children: [_jsxs("section", { className: "relative py-6 bg-linear-to-br from-teal-50 via-white to-teal-100 text-gray-900 overflow-hidden", children: [_jsx("div", { className: "absolute -top-24 -left-24 w-[400px] h-[400px] bg-teal-300 rounded-full blur-3xl opacity-30 hidden lg:block" }), _jsx("div", { className: "absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-200 rounded-full blur-3xl opacity-30 hidden md:block" }), _jsxs("div", { className: "relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight", children: ["Client", _jsx("span", { className: "bg-linear-to-r from-teal-500 via-cyan-400 to-teal-600 bg-clip-text text-transparent", children: "Testimonials" })] }), _jsxs("p", { className: "text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 lg:mb-16", children: ["Real stories from our partners and clients who trusted", _jsx("strong", { className: "text-teal-600", children: "ATS GLOBAL TECH" }), " to turn their vision into reality."] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ", children: [_jsxs("div", { className: "bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100", children: [_jsx("p", { className: "text-gray-700 italic mb-6 text-base sm:text-lg", children: "\u201CATS Global Tech helped us transform our outdated system into a modern, automated solution. Their team is simply the best!\u201D" }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h3", { className: "text-teal-600 font-semibold text-lg", children: "\u2014 Rahul Kapoor" }), _jsx("p", { className: "text-sm text-gray-500", children: "CEO, Bharat Logistics" })] })] }), _jsxs("div", { className: "bg-white shadow-xl p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100", children: [_jsx("p", { className: "text-gray-700 italic mb-6 text-base sm:text-lg", children: "\u201CFrom UI/UX design to final delivery, their process was seamless. ATS Global Tech truly delivers quality and innovation.\u201D" }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h3", { className: "text-teal-600 font-semibold text-lg", children: "\u2014 Sneha Reddy" }), _jsx("p", { className: "text-sm text-gray-500", children: "Founder, Nexa Startups" })] })] }), _jsxs("div", { className: "bg-white shadow-xl p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-teal-100", children: [_jsx("p", { className: "text-gray-700 italic mb-6 text-base sm:text-lg", children: "\u201CWe wanted a robust AI dashboard and they nailed it. Exceptional attention to detail and great communication throughout.\u201D" }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h3", { className: "text-teal-600 font-semibold text-lg", children: "\u2014 Dinesh Taneja" }), _jsx("p", { className: "text-sm text-gray-500", children: "CTO, Visionary Analytics" })] })] })] })] })] }), _jsx("section", { className: "py-6 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
                            { value: "150+", label: "Happy Clients", icon: "users" },
                            { value: "4.9/5", label: "Average Rating", icon: "star" },
                            { value: "98%", label: "Success Rate", icon: "trending-up" },
                            { value: "25+", label: "Industry Awards", icon: "award" },
                        ].map((stat, i) => (_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "bg-linear-to-r from-teal-400 to-cyan-500 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md", children: [stat.icon === "users" && (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-7 w-7 md:h-8 md:w-8 text-black", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "9", cy: "7", r: "4" }), _jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }), _jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })] })), stat.icon === "star" && (_jsx(Star, { className: "h-7 w-7 md:h-8 md:w-8 text-black", strokeWidth: 2 })), stat.icon === "trending-up" && (_jsx(TrendingUp, { className: "h-7 w-7 md:h-8 md:w-8 text-black" })), stat.icon === "award" && (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-7 w-7 md:h-8 md:w-8 text-black", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "8", r: "6" }), _jsx("path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" })] }))] }), _jsx("div", { className: "text-2xl sm:text-3xl font-bold text-teal-600", children: stat.value }), _jsx("div", { className: "text-sm sm:text-base text-gray-700 font-medium", children: stat.label })] }, i))) }) }) }), _jsx("section", { className: "bg-linear-to-r from-teal-50 via-white to-teal-100 py-6 text-gray-900", children: _jsxs("div", { className: "w-full px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-4", children: "What Our Clients Say" }), _jsx("p", { className: "text-lg text-gray-700 max-w-2xl mx-auto", children: "Real feedback from real clients who have experienced the ATS GLOBAL TECH difference." })] }), _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [...Array(6)].map((_, i) => {
                                const isMale = i % 2 === 0;
                                const clientName = isMale
                                    ? indianMaleNames[Math.floor(i / 2) % indianMaleNames.length]
                                    : indianFemaleNames[Math.floor(i / 2) % indianFemaleNames.length];
                                const clientDesignation = designations[i % designations.length];
                                const clientCompany = companies[i % companies.length];
                                return (_jsxs("div", { className: "rounded-xl bg-white text-gray-800 border border-teal-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden", children: [_jsx("div", { className: "absolute top-4 right-4 text-teal-400 opacity-20", children: _jsx(Quote, { className: "h-10 w-10" }) }), _jsxs("div", { className: "p-6 pb-4", children: [_jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [_jsx("img", { src: getProfessionalDummyImageUrl(isMale, i), alt: `Client ${clientName}`, className: "w-16 h-16 rounded-full object-cover border-4 border-teal-500 shadow-md" }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg text-teal-800", children: clientName }), _jsx("p", { className: "text-sm text-gray-600", children: clientDesignation }), _jsx("p", { className: "text-sm font-medium text-teal-500", children: clientCompany })] })] }), _jsx("div", { className: "flex items-center space-x-1 mb-3", children: [...Array(5)].map((_, j) => (_jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }, j))) }), _jsxs("div", { className: "inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 w-fit mb-4", children: ["Project Type ", i + 1] })] }), _jsxs("div", { className: "p-6 pt-0", children: [_jsx("p", { className: "text-gray-700 mb-4 text-base leading-relaxed italic border-l-4 border-teal-400 pl-4", children: "\u201CATS GLOBAL TECH exceeded our expectations by delivering an innovative and scalable solution tailored to our needs.\u201D" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-teal-700 mb-2 text-sm uppercase tracking-wider", children: "Results Achieved:" }), _jsx("ul", { className: "space-y-1", children: [
                                                                "Increased ROI (25%)",
                                                                "Streamlined Operations (30% Faster)",
                                                                "Enhanced Client Satisfaction (4.9/5 Rating)",
                                                            ].map((r, k) => (_jsxs("li", { className: "flex items-center text-sm text-gray-700", children: [_jsx(TrendingUp, { className: "h-3 w-3 text-teal-600 mr-2 shrink-0" }), r] }, k))) })] })] })] }, i));
                            }) })] }) }), _jsx("section", { className: "py-6  bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-4", children: "Industries We Serve" }), _jsx("p", { className: "text-lg text-gray-700 max-w-2xl mx-auto", children: "We've successfully delivered projects across diverse industries, bringing specialized expertise to each sector." })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 ", children: industries.map((industry) => (_jsxs("div", { className: "rounded-xl bg-white text-gray-900 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-100 p-4 sm:p-6", children: [_jsxs("div", { className: "flex flex-col space-y-1.5 pb-2", children: [_jsx("div", { className: "bg-linear-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg", children: _jsx(Building, { className: "h-6 w-6 text-black" }) }), _jsx("h3", { className: "font-bold text-teal-700  text-sm sm:text-lg", children: industry.name })] }), _jsxs("div", { className: "pt-2", children: [_jsx("p", { className: "text-2xl sm:text-3xl font-bold text-teal-600", children: industry.projects }), _jsx("p", { className: "text-sm text-gray-600", children: "Projects Delivered" })] })] }, industry.name))) })] }) }), _jsx("section", { className: "py-6  bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900 text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-6", children: "Ready to Join Our Success Stories?" }), _jsx("p", { className: "text-lg sm:text-xl mb-8 text-gray-700", children: "Let us help you achieve similar results. Start your digital transformation journey today and become our next success story." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs("a", { href: "/contact", className: "inline-flex items-center justify-center gap-2 text-base font-medium bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 text-white h-12 rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]", children: ["Start Your Project", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("a", { href: "/projects", className: "inline-flex items-center justify-center gap-2 text-base font-medium border-2 border-teal-400 bg-transparent hover:bg-teal-50 transition-all duration-300 text-teal-700 h-12 rounded-lg px-8 py-3", children: "View Our Work" })] })] }) })] }));
};
export default Testimonials;
