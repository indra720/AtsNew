import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { ArrowRight, Code, Cloud, Smartphone, Shield, Bot, Database, CircleCheckBig, } from "lucide-react";
const AOS = {
    init: (config) => console.log("AOS initialized with config:", config),
};
const services = [
    {
        title: "Custom Software Development",
        description: "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
        icon: _jsx(Code, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        features: ["Full-stack development", "API integration", "Database design"],
    },
    {
        title: "Cloud Solutions & DevOps",
        description: "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
        icon: _jsx(Cloud, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
        features: [
            "Cloud migration",
            "CI/CD pipelines",
            "Infrastructure as Code",
            "Monitoring & logging",
        ],
    },
    {
        title: "Mobile App Development",
        description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
        icon: _jsx(Smartphone, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
        features: [
            "iOS & Android native",
            "Cross-platform",
            "App Store optimization",
            "Push notifications",
        ],
    },
    {
        title: "Cybersecurity Solutions",
        description: "Advanced security implementations including penetration testing, security audits, and compliance management.",
        icon: _jsx(Shield, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
        features: [
            "Security audits",
            "Penetration testing",
            "Compliance (SOC2, HIPAA)",
        ],
    },
    {
        title: "AI & Machine Learning",
        description: "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
        icon: _jsx(Bot, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
        features: [
            "Custom AI models",
            "Natural language processing",
            "Computer vision",
        ],
    },
    {
        title: "Data Engineering",
        description: "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
        icon: _jsx(Database, { className: "h-8 w-8 text-white" }),
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        features: [
            "Data pipelines",
            "Real-time analytics",
            "Data warehousing",
            "Business intelligence",
        ],
    },
];
const TechnologyServices = () => {
    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
    }, []);
    const handleImageError = (e, title) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://placehold.co/400x250/111827/F9FAFB?text=${encodeURIComponent(title)}`;
    };
    return (_jsx("section", { className: "py-3 sm:py-6 bg-white", style: { fontFamily: "Times New Roman, serif" }, children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 md:mb-16 lg:mb-20", "data-aos": "fade-up", children: [_jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6", children: "Comprehensive Technology Services" }), _jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto", "data-aos": "fade-up", "data-aos-delay": "150", children: "Empowering businesses with scalable, secure, and innovative digital solutions engineered for long-term success." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6", children: services.map((service, index) => (_jsxs("div", { "data-aos": "zoom-in", "data-aos-delay": index * 150, className: "rounded-xl shadow-lg overflow-hidden group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 flex flex-col h-full", children: [_jsxs("div", { className: "relative h-48 md:h-56 overflow-hidden shrink-0", children: [_jsx("img", { src: service.image, alt: service.title, onError: (e) => handleImageError(e, service.title), className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" }), _jsx("div", { className: "absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/60 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg", children: service.icon }), _jsx("div", { className: "absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6", children: _jsx("h3", { className: "text-lg sm:text-xl font-bold text-white mb-1", children: service.title }) })] }), _jsxs("div", { className: "p-6 md:p-8 flex flex-col flex-grow", children: [_jsx("p", { className: "text-gray-700 mb-6 text-sm sm:text-base leading-relaxed", children: service.description }), _jsx("div", { className: "space-y-2 mb-6", children: service.features.map((feature, i) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CircleCheckBig, { className: "h-4 w-4 text-teal-600 shrink-0" }), _jsx("span", { className: "text-gray-700 text-sm", children: feature })] }, i))) }), _jsxs("button", { className: "mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium\n                    text-white h-10 rounded-md px-4 w-full\n                    bg-linear-to-r from-cyan-500 to-teal-600\n                    hover:shadow-lg hover:scale-[1.01] transition-all", children: ["Learn More", _jsx(ArrowRight, { className: "h-4 w-4 ml-1 text-white" })] })] })] }, index))) })] }) }));
};
export default TechnologyServices;
