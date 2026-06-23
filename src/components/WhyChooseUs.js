import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, CircleCheckBig, Lightbulb, Users, Rocket, TrendingUp, } from "lucide-react";
const WhyChooseUs = () => {
    const features = [
        { text: "24/7 Technical Support & Maintenance" },
        { text: "Agile Development Methodology" },
        { text: "Comprehensive Quality Assurance" },
        { text: "Scalable & Future-Proof Architecture" },
        { text: "Modern Technology Stack" },
        { text: "Cost-Effective Solutions" },
        { text: "Regular Progress Updates" },
        { text: "Post-Launch Support & Training" },
    ];
    const cards = [
        {
            title: "Innovation First",
            description: "We implement modern, future-ready technologies that keep you ahead of market trends and competitors.",
            icon: _jsx(Lightbulb, { className: "h-6 w-6 text-teal-600" }),
            videoPoster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        },
        {
            title: "Expert Team",
            description: "Our certified engineers, architects, and consultants bring years of real-world expertise to every project.",
            icon: _jsx(Users, { className: "h-6 w-6 text-teal-600" }),
            videoPoster: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
        },
        {
            title: "Rapid Delivery",
            description: "Our agile workflows ensure your product ships faster with consistent quality and predictable timelines.",
            icon: _jsx(Rocket, { className: "h-6 w-6 text-teal-600" }),
            videoPoster: "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
        },
        {
            title: "Scalable Solutions",
            description: "Every solution is designed to grow effortlessly as your business evolves, ensuring long-term sustainability.",
            icon: _jsx(TrendingUp, { className: "h-6 w-6 text-teal-600" }),
            videoPoster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        },
    ];
    return (_jsx("section", { className: "py-12 md:py-16 lg:py-24 bg-white overflow-x-hidden", style: { fontFamily: "Times New Roman, serif" }, children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6", "data-aos": "fade-right", children: "Why Choose ATS GLOBAL TECH?" }), _jsx("p", { className: "text-lg md:text-xl text-gray-600 mb-8 leading-relaxed", "data-aos": "fade-right", "data-aos-delay": "200", children: "We don\u2019t just build digital solutions \u2014 we engineer long-lasting, scalable systems backed by innovation, deep expertise, and a commitment to helping businesses thrive in the modern digital era." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10", children: features.map((feature, index) => (_jsxs("div", { className: "flex items-start space-x-3", "data-aos": "zoom-in", "data-aos-delay": index * 100, children: [_jsx(CircleCheckBig, { className: "h-5 w-5 text-teal-600 mt-1 shrink-0" }), _jsx("span", { className: "text-gray-700 font-medium text-base", children: feature.text })] }, index))) }), _jsxs("button", { "data-aos": "flip-up", "data-aos-delay": "400", className: "inline-flex items-center justify-center gap-2\n              bg-linear-to-r from-cyan-500 to-teal-600\n              text-white h-11 rounded-md px-8 py-3\n              text-base font-medium transition-all duration-300\n              hover:scale-[1.02] hover:shadow-lg", children: ["Learn More About Us", _jsx(ArrowRight, { className: "ml-1 h-5 w-5" })] })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 lg:mt-0", "data-aos": "fade-left", "data-aos-delay": "300", children: cards.map((card, index) => (_jsxs("div", { "data-aos": "fade-left", "data-aos-delay": index * 150, className: "bg-white border border-gray-200 rounded-2xl\n                overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1\n                transition-all duration-500 group", children: [_jsxs("div", { className: "relative h-40 overflow-hidden", children: [_jsx("img", { src: card.videoPoster, onError: (e) => (e.currentTarget.src =
                                                "https://placehold.co/400x250/E2E8F0/475569?text=Image+Placeholder"), alt: card.title, className: "w-full h-full object-cover\n                    group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/40 to-transparent" }), _jsx("div", { className: "absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md", children: card.icon })] }), _jsxs("div", { className: "p-6 text-center", children: [_jsx("h3", { className: "font-bold text-gray-900 mb-2 text-xl", children: card.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: card.description })] })] }, index))) })] }) }) }));
};
export default WhyChooseUs;
