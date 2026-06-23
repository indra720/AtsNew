import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const AOS = {
    init: (config) => console.log("AOS initialized with config:", config),
};
const motion = {
    div: (props) => _jsx("div", { ...props }),
};
import { Rocket, Lightbulb, Globe2, ShieldCheck, SmilePlus, Zap, } from "lucide-react";
const stats = [
    {
        icon: Rocket,
        title: "Fast Delivery",
        desc: "We ensure rapid project turnaround without compromising quality.",
    },
    {
        icon: Lightbulb,
        title: "Creative Ideas",
        desc: "Innovation-driven solutions tailored uniquely for each client.",
    },
    {
        icon: Globe2,
        title: "Global Presence",
        desc: "We work with clients across the world to deliver impactful results.",
    },
    {
        icon: ShieldCheck,
        title: "Top Security",
        desc: "Your projects and data stay protected with enterprise-grade security.",
    },
    {
        icon: SmilePlus,
        title: "Client First",
        desc: "We prioritize your satisfaction above everything else.",
    },
    {
        icon: Zap,
        title: "High Performance",
        desc: "Powerful, optimized, and scalable solutions every single time.",
    },
];
const ProvenTrackRecord = () => {
    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
    }, []);
    return (_jsx("section", { className: "py-12  bg-white", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4", style: { fontFamily: "Times New Roman, serif" }, "data-aos": "fade-up", children: "Why Clients Love Working With Us" }), _jsx("p", { className: "text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16", style: { fontFamily: "Times New Roman, serif" }, "data-aos": "fade-up", "data-aos-delay": "150", children: "We deliver powerful digital solutions designed to accelerate growth, enhance performance, and help businesses stay ahead in a fast-changing world." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ", children: stats.map(({ icon: Icon, title, desc }, index) => (_jsxs(motion.div, { "data-aos": "zoom-in", "data-aos-delay": index * 100, className: "p-6 sm:p-8 bg-linear-to-br from-gray-50 to-white\n              shadow-lg hover:shadow-2xl rounded-xl border border-gray-200\n              transition-all duration-600 hover:scale-[1.03] cursor-pointer", style: { fontFamily: "Times New Roman, serif" }, children: [_jsx("div", { className: "flex items-center justify-center mb-6", children: _jsx("div", { className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gray-800 text-white shadow-inner", children: _jsx(Icon, { className: "w-8 h-8 sm:w-10 sm:h-10" }) }) }), _jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-2", children: title }), _jsx("p", { className: "text-gray-600 text-sm sm:text-base", children: desc })] }, title))) })] }) }));
};
export default ProvenTrackRecord;
