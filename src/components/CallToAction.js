import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, MessageSquare, Calendar, Target } from "lucide-react";
const CallToAction = () => {
    return (_jsx("section", { className: " bg-white text-gray-900 relative overflow-hidden", style: { fontFamily: "Times New Roman, serif" }, children: _jsxs("div", { className: "relative w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900", "data-aos": "fade-up", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-lg sm:text-xl mb-6 text-gray-600 max-w-4xl mx-auto leading-relaxed", "data-aos": "fade-up", "data-aos-delay": "200", children: "Join hundreds of successful companies who have partnered with us to achieve digital transformation. Let\u2019s discuss how we can accelerate your growth and create solutions that drive real business value." }), _jsx("p", { className: "text-base sm:text-lg mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed", "data-aos": "fade-up", "data-aos-delay": "350", children: "With a dedicated team, structured process, and cutting-edge technology, we ensure every project receives the focus and precision it deserves. Your business goals become our mission \u2014 and we deliver results that create long-term impact." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16", "data-aos": "zoom-in", "data-aos-delay": "450", children: [_jsx("a", { href: "/contact", children: _jsxs("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap\n              bg-linear-to-r from-cyan-500 to-teal-600 text-white h-12 rounded-md\n              w-full sm:w-auto\n              px-8 sm:px-12 py-3 text-base sm:text-xl font-semibold hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-xl", children: ["Start Your Project Today", _jsx(ArrowRight, { className: "ml-2 h-5 w-5 sm:h-6 sm:w-6" })] }) }), _jsx("a", { href: "/services", children: _jsx("button", { className: "inline-flex items-center justify-center gap-2 whitespace-nowrap\n              border border-gray-300 text-gray-800 h-12 rounded-md\n              w-full sm:w-auto\n              px-8 sm:px-12 py-3 text-base sm:text-xl font-medium hover:bg-gray-100 transition-all duration-300", children: "Explore Our Services" }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6  mb-10 text-center", children: [
                        {
                            icon: (_jsx(MessageSquare, { className: "h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-teal-600" })),
                            title: "Free Consultation",
                            desc: "Get expert advice tailored to your needs",
                            animation: "flip-left",
                        },
                        {
                            icon: (_jsx(Calendar, { className: "h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-teal-600" })),
                            title: "Quick Response",
                            desc: "We respond within 24 hours",
                            animation: "flip-up",
                        },
                        {
                            icon: (_jsx(Target, { className: "h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-teal-600" })),
                            title: "Customized Solutions",
                            desc: "Solutions designed specifically for you",
                            animation: "flip-right",
                        },
                    ].map((feature, idx) => (_jsxs("div", { "data-aos": feature.animation, "data-aos-delay": idx * 200, className: "bg-white  border border-gray-200 shadow-md hover:shadow-xl\n              hover:-translate-y-1 rounded-xl py-2 transition-all duration-300", children: [feature.icon, _jsx("h3", { className: "font-bold text-lg mb-2 text-gray-900", children: feature.title }), _jsx("p", { className: "text-sm text-gray-600", children: feature.desc })] }, idx))) })] }) }));
};
export default CallToAction;
