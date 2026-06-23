import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Target, Users, Award, ExternalLink, CircleCheckBig, } from "lucide-react";
const PRIMARY_COLOR = "teal-500";
const HOVER_COLOR = "teal-600";
const ACCENT_TEXT = "text-teal-600";
const CaseStudies = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: `relative py-10 bg-linear-to-br from-teal-50 to-blue-50 text-gray-900`, children: [_jsx("div", { className: "absolute inset-0" }), _jsxs("div", { className: "relative w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h1", { className: `text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight ${ACCENT_TEXT}`, children: "Client Success Stories" }), _jsx("p", { className: "text-lg sm:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-600", children: "Discover how we've helped businesses across industries achieve       remarkable transformations through innovative technology solutions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center", children: [_jsxs("button", { className: `inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold shadow-xl shadow-teal-200 transition w-full sm:w-auto`, children: ["Explore Case Studies", _jsx(ExternalLink, { className: "h-5 w-5" })] }), _jsx("button", { className: `inline-flex items-center justify-center gap-2 font-medium h-11 rounded-lg border-2 border-teal-300 ${ACCENT_TEXT} hover:bg-teal-100 transition px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg w-full sm:w-auto`, children: "Start Your Success Story" })] })] })] }), _jsx("section", { className: "py-12 sm:py-20 bg-white  text-gray-900 border-b border-gray-100", children: _jsx("div", { className: "w-full px-4  sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [_jsxs("div", { children: [_jsx(Award, { className: `h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}` }), _jsx("div", { className: `text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`, children: "15+" }), _jsx("div", { className: "text-sm sm:text-base text-gray-600", children: "Successful Projects" })] }), _jsxs("div", { children: [_jsx(Users, { className: `h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}` }), _jsx("div", { className: `text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`, children: "2k" }), _jsx("div", { className: "text-sm sm:text-base text-gray-600", children: "Client Trusted" })] }), _jsxs("div", { children: [_jsx(CircleCheckBig, { className: `h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}` }), _jsx("div", { className: `text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`, children: "98%" }), _jsx("div", { className: "text-sm sm:text-base text-gray-600", children: "Client Satisfaction" })] }), _jsxs("div", { children: [_jsx(Target, { className: `h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${ACCENT_TEXT}` }), _jsx("div", { className: `text-3xl sm:text-4xl font-bold ${ACCENT_TEXT} mb-1`, children: "5+" }), _jsx("div", { className: "text-sm sm:text-base text-gray-600", children: "Industry Awards" })] })] }) }) }), _jsx("section", { className: `py-10 bg-linear-to-br from-teal-50 to-blue-50 text-gray-900`, children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [_jsx("h2", { className: `text-3xl sm:text-4xl md:text-5xl font-bold ${ACCENT_TEXT} mb-4`, children: "Transformative Case Studies" }), _jsx("p", { className: "text-base sm:text-xl text-gray-600 max-w-3xl mx-auto", children: "Real challenges, innovative solutions, and measurable results that        demonstrate our commitment to delivering exceptional value." })] }), _jsx("div", { className: " space-y-6", children: [
                                {
                                    title: "AI-Powered E-Commerce Revolution",
                                    industry: "E-commerce",
                                    featured: true,
                                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop",
                                    challenge: "Low conversion rates, high cart abandonment, and inefficient inventory management were costing millions in lost revenue.",
                                    metrics: [
                                        ["300%", "Revenue Increase"],
                                        ["+85%", "Conversion Rate"],
                                        ["-60%", "Cart Abandonment"],
                                        ["96%", "Customer Satisfaction"],
                                    ],
                                },
                                {
                                    title: "Secure Banking Transformation",
                                    industry: "Financial Services",
                                    featured: false,
                                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop",
                                    challenge: "Legacy banking systems hindered digital transformation and security modernization.",
                                    metrics: [
                                        ["90%", "Mobile Adoption"],
                                        ["99.9%", "Fraud Prevention"],
                                        ["10x", "Processing Speed"],
                                        ["45%", "Cost Reduction"],
                                    ],
                                },
                                {
                                    title: "Healthcare Analytics Revolution",
                                    industry: "Healthcare",
                                    featured: false,
                                    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
                                    challenge: "Hospitals struggled with patient data management and delayed diagnoses.",
                                    metrics: [
                                        ["+40%", "Diagnosis Speed"],
                                        ["+35%", "Patient Outcomes"],
                                        ["$5M", "Annual Savings"],
                                        ["99.8%", "Data Accuracy"],
                                    ],
                                },
                                {
                                    title: "Enterprise Cloud Migration",
                                    industry: "Cloud Solutions",
                                    featured: false,
                                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop",
                                    challenge: "On-prem infrastructure was costly and unscalable. We migrated systems seamlessly.",
                                    metrics: [
                                        ["60%", "Cost Reduction"],
                                        ["99.99%", "System Uptime"],
                                        ["90%", "Faster Deployment"],
                                        ["15", "Countries Covered"],
                                    ],
                                },
                                {
                                    title: "EdTech Learning Platform",
                                    industry: "Education Technology",
                                    featured: false,
                                    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop",
                                    challenge: "Traditional learning lacked engagement. AI-personalized education increased results.",
                                    metrics: [
                                        ["+75%", "Engagement"],
                                        ["85%", "Completion Rate"],
                                        ["+50%", "Efficiency"],
                                        ["500K+", "Users"],
                                    ],
                                },
                                {
                                    title: "Smart Logistics Optimization",
                                    industry: "Logistics",
                                    featured: false,
                                    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop",
                                    challenge: "Inefficient fleet management was driving up costs and delays. AI-driven logistics fixed it.",
                                    metrics: [
                                        ["30%", "Fuel Savings"],
                                        ["95%", "On-time Delivery"],
                                        ["+40%", "Efficiency"],
                                        ["92%", "Customer Satisfaction"],
                                    ],
                                },
                            ].map((study, index) => (_jsx("div", { className: "rounded-xl overflow-hidden border border-gray-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-500", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: study.image, alt: study.title, className: "w-full h-64 lg:h-[70vh] object-cover" }), _jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [_jsx("span", { className: `bg-${PRIMARY_COLOR} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase`, children: study.industry }), study.featured && (_jsx("span", { className: "bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase", children: "Featured" }))] })] }), _jsxs("div", { className: "p-6 sm:p-8 lg:p-12", children: [_jsx("h3", { className: `text-xl sm:text-2xl font-bold ${ACCENT_TEXT} mb-4`, children: study.title }), _jsxs("p", { className: "text-gray-700 mb-6 text-sm sm:text-base", children: ["**Challenge:** ", study.challenge] }), _jsx("div", { className: "grid grid-cols-2 gap-3 sm:gap-4", children: study.metrics.map(([val, label]) => (_jsxs("div", { className: "text-center p-3 sm:p-4 bg-teal-50 rounded-lg border border-teal-100", children: [_jsx("div", { className: `text-xl sm:text-2xl font-bold ${ACCENT_TEXT} mb-1`, children: val }), _jsx("div", { className: "text-xs sm:text-sm text-gray-700", children: label })] }, label))) }), _jsxs("button", { className: `mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-${PRIMARY_COLOR} hover:bg-${HOVER_COLOR} text-white h-10 px-6 py-2 transition-all w-full lg:w-auto text-sm sm:text-base`, children: [_jsx(ExternalLink, { className: "h-4 w-4" }), "View Case Study"] })] })] }) }, index))) })] }) }), _jsx("section", { className: `py-16 sm:py-24 bg-${PRIMARY_COLOR} text-white text-center`, children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8", children: "Ready to Write Your Success Story?" }), _jsx("p", { className: "text-lg sm:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto", children: "Join our growing list of successful clients who have transformed       their businesses with our innovative solutions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12", children: [_jsxs("button", { className: `inline-flex items-center justify-center gap-2 bg-white text-${PRIMARY_COLOR} hover:bg-gray-100 px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition shadow-xl w-full sm:w-auto`, children: ["Start Your Transformation", _jsx(ExternalLink, { className: "h-5 w-5 sm:h-6 sm:w-6" })] }), _jsx("a", { href: "/contact", className: "w-full sm:w-auto", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition w-full", children: "Schedule Free Consultation" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center", children: [
                                [
                                    "Proven Methodology",
                                    "Battle-tested processes that deliver consistent results",
                                ],
                                [
                                    "Industry Recognition",
                                    "Award-winning solutions recognized by leaders",
                                ],
                                [
                                    "Measurable Impact",
                                    "Quantifiable results that drive real business value",
                                ],
                            ].map(([title, desc]) => (_jsxs("div", { className: "bg-white shadow-lg rounded-xl p-4 sm:p-6 hover:shadow-xl transition", children: [_jsx("h3", { className: `font-bold text-base sm:text-lg ${ACCENT_TEXT} mb-2`, children: title }), _jsx("p", { className: "text-gray-700 text-sm sm:text-base", children: desc })] }, title))) })] }) })] }));
};
export default CaseStudies;
