import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { House, CircleCheckBig, Target, TrendingUp, ArrowRight, Gamepad2, Heart, Banknote, ShoppingCart, GraduationCap, Building, Truck, Users, Globe, Award, Check, } from "lucide-react";
const Industries = () => {
    const stats = [
        {
            label: "Industries Served",
            value: "25+",
            icon: _jsx(Users, { className: "h-10 w-10 text-teal-600" }),
        },
        {
            label: "Enterprise Clients",
            value: "200+",
            icon: _jsx(Building, { className: "h-10 w-10 text-teal-600" }),
        },
        {
            label: "Countries",
            value: "5+",
            icon: _jsx(Globe, { className: "h-10 w-10 text-teal-600" }),
        },
        {
            label: "Industry Awards",
            value: "15+",
            icon: _jsx(Award, { className: "h-10 w-10 text-teal-600" }),
        },
    ];
    const industryCards = [
        {
            title: "Healthcare & Life Sciences",
            icon: _jsx(Heart, { className: "h-8 w-8 text-teal-600" }),
            img: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600",
            features: [
                "Telemedicine Platforms",
                "AI Diagnostics & Analysis",
                "HIPAA Compliant Data Management",
            ],
        },
        {
            title: "Financial Services",
            icon: _jsx(Banknote, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
            features: [
                "Secure Mobile Banking Apps",
                "Real-Time Fraud Detection (AI/ML)",
                "Regulatory Compliance (PCI DSS)",
            ],
        },
        {
            title: "Retail & E-commerce",
            icon: _jsx(ShoppingCart, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
            features: [
                "Omni-Channel Store Integration",
                "AI-Powered Product Recommendations",
                "Inventory & Supply Chain Optimization",
            ],
        },
        {
            title: "Education & EdTech",
            icon: _jsx(GraduationCap, { className: "h-8 w-8 text-teal-600" }),
            img: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600",
            features: [
                "Virtual Classroom Solutions",
                "Adaptive Learning Platforms",
                "Student Performance Analytics",
            ],
        },
        {
            title: "Manufacturing & Industrial",
            icon: _jsx(Building, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800",
            features: [
                "IoT Integration & Monitoring",
                "Predictive Maintenance Systems",
                "Robotic Process Automation (RPA)",
            ],
        },
        {
            title: "Transportation & Logistics",
            icon: _jsx(Truck, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
            features: [
                "Real-Time GPS Fleet Tracking",
                "Route Optimization Algorithms",
                "Warehouse Management Systems (WMS)",
            ],
        },
        {
            title: "Real Estate & PropTech",
            icon: _jsx(House, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
            features: [
                "Immersive Virtual Property Tours",
                "Smart Building & IoT Integration",
                "Tenant & Owner Portal Solutions",
            ],
        },
        {
            title: "Entertainment & Media",
            icon: _jsx(Gamepad2, { className: "h-8 w-8 text-teal-600" }),
            img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
            features: [
                "High-Performance Streaming Platforms",
                "Audience Data Analytics",
                "Digital Rights Management (DRM)",
            ],
        },
    ];
    const whyChooseUs = [
        {
            title: "Industry Compliance",
            desc: "We ensure all solutions meet regulations like HIPAA, PCI DSS, and GDPR.",
            icon: _jsx(CircleCheckBig, { className: "h-8 w-8 text-teal-600" }),
        },
        {
            title: "Domain Experts",
            desc: "Our team includes specialists with decades of experience.",
            icon: _jsx(Target, { className: "h-8 w-8 text-teal-600" }),
        },
        {
            title: "Proven Track Record",
            desc: "With 200+ projects delivered, we bring experience that drives success.",
            icon: _jsx(TrendingUp, { className: "h-8 w-8 text-teal-600" }),
        },
    ];
    return (_jsxs("div", { className: "font-serif", children: [_jsx("section", { className: "relative py-2 lg:py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 overflow-hidden text-gray-900", children: _jsxs("div", { className: "relative w-full px-4 sm:px-6 text-center", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 leading-tight", children: "Industries We Serve" }), _jsx("p", { className: "text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed", children: "We bring deep industry expertise and innovative technology solutions to transform businesses across diverse sectors, helping organizations achieve their digital transformation goals with tailored approaches that address specific industry challenges." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md bg-teal-500 text-white hover:bg-teal-600 px-10 py-4 text-sm lg:text-lg font-semibold shadow-lg transition-colors", children: ["Explore Industries", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md border-2 border-teal-500 text-teal-600 hover:bg-teal-100 px-10 py-4 text-sm lg:text-lg font-medium backdrop-blur-sm transition-colors", children: "Schedule Consultation" })] })] }) }), _jsx("section", { className: "py-10 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: stats.map((item, i) => (_jsxs("div", { className: "group bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition p-6", children: [_jsx("div", { className: "bg-teal-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform", children: item.icon }), _jsx("div", { className: "text-2xl sm:text-3xl font-bold text-teal-600 mb-2", children: item.value }), _jsx("div", { className: "text-sm sm:text-base text-gray-700 font-medium", children: item.label })] }, i))) }) }) }), _jsx("section", { className: "py-10 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-teal-700", children: "Specialized Industry Solutions" }), _jsx("p", { className: "text-lg text-gray-700 max-w-3xl mx-auto", children: "Our industry-specific expertise helps organizations overcome unique challenges and capitalize on opportunities in their respective markets." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: industryCards.map((card, index) => (_jsxs("div", { className: "rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-xl transition-all flex flex-col", children: [_jsx("div", { className: "relative h-48 sm:h-56 overflow-hidden shrink-0", children: _jsx("img", { src: card.img, alt: card.title, className: "w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" }) }), _jsxs("div", { className: "p-6 flex flex-col grow", children: [_jsx("div", { className: "flex items-center gap-3 mb-3", children: card.icon }), _jsx("h3", { className: "text-xl font-semibold text-teal-700 mb-3", children: card.title }), _jsx("ul", { className: "space-y-2 text-gray-700 mb-6 grow", children: card.features.map((feature, i) => (_jsxs("li", { className: "flex items-start gap-2 text-sm", children: [_jsx(Check, { className: "h-4 w-4 text-teal-500 mt-1 shrink-0" }), _jsx("span", { children: feature })] }, i))) }), _jsxs("button", { className: "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium bg-teal-500 text-white hover:bg-teal-600 h-10 px-4 py-2 w-full transition-all mt-4", children: ["Learn More ", _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-10  bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Why Choose Us for Your Industry?" }), _jsx("p", { className: "text-lg text-gray-700 mb-10 md:mb-12 max-w-3xl mx-auto", children: "Our deep industry knowledge combined with cutting-edge technology expertise makes us the ideal partner for your digital transformation." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: whyChooseUs.map((box, i) => (_jsxs("div", { className: "p-6 md:p-8 rounded-2xl bg-white/70 hover:bg-white/90 border border-teal-100 shadow-md hover:shadow-xl transition-all", children: [_jsx("div", { className: "flex justify-center mb-4", children: box.icon }), _jsx("h3", { className: "text-xl font-bold text-teal-700 mb-4", children: box.title }), _jsx("p", { className: "text-gray-700", children: box.desc })] }, i))) })] }) }), _jsx("section", { className: "py-20 md:py-24 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900 text-center", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-8 text-teal-700", children: "Ready to Transform Your Industry?" }), _jsx("p", { className: "text-lg mb-10 md:mb-12 text-gray-700 max-w-3xl mx-auto", children: "Let's discuss how our industry-specific solutions can help you achieve breakthrough results." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md bg-teal-500 text-white hover:bg-teal-600 px-10 py-4 text-lg font-semibold shadow-lg", children: ["Schedule Industry Consultation", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 rounded-md border-2 border-teal-500 text-teal-600 hover:bg-teal-100 px-10 py-4 text-lg font-medium", children: "View Case Studies" })] })] }) })] }));
};
export default Industries;
