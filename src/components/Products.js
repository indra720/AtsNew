import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heart, Banknote, GraduationCap, House, ShoppingCart, Zap, ArrowRight, Star, Users, Shield, Smartphone, ChartNoAxesColumnIncreasing, Cloud, Award, Check, } from "lucide-react";
const products = [
    {
        id: 1,
        title: "Hospital Management System",
        category: "Workflow Automation",
        icon: _jsx(Zap, { className: "h-5 w-5 text-white" }),
        description: "Streamline your business processes with intelligent automation and workflow management capabilities designed for healthcare.",
        rating: 4.8,
        users: "10K+",
        price: "Free",
        free: true,
    },
    {
        id: 2,
        title: "Hotel & Restaurant Management System",
        category: "Security Management",
        icon: _jsx(Shield, { className: "h-5 w-5 text-white" }),
        description: "Integrated property management solution with robust booking, point-of-sale, and guest security features.",
        rating: 4.9,
        users: "5K+",
        price: "$49/month",
    },
    {
        id: 3,
        title: "Learning Management System",
        category: "Mobile Development",
        icon: _jsx(Smartphone, { className: "h-5 w-5 text-white" }),
        description: "A scalable platform for corporate training, course creation, and skill-gap analysis, accessible via mobile.",
        rating: 4.7,
        users: "15K+",
        price: "Free",
        free: true,
    },
    {
        id: 4,
        title: "POS (Billing Management System)",
        category: "Data Analytics",
        icon: _jsx(ChartNoAxesColumnIncreasing, { className: "h-5 w-5 text-white" }),
        description: "Point-of-Sale system providing real-time inventory tracking, sales reporting, and comprehensive data analytics.",
        rating: 4.6,
        users: "8K+",
        price: "$59/month",
    },
    {
        id: 5,
        title: "Real Estate Management System",
        category: "Cloud Management",
        icon: _jsx(Cloud, { className: "h-5 w-5 text-white" }),
        description: "Cloud-based solution for property listing, tenant management, and financial oversight of real estate portfolios.",
        rating: 4.8,
        users: "3K+",
        price: "$79/month",
    },
    {
        id: 6,
        title: "E-Commerce Platform",
        category: "Collaboration",
        icon: _jsx(Users, { className: "h-5 w-5 text-white" }),
        description: "A comprehensive, customizable e-commerce storefront with multi-vendor support and seamless payment gateway integration.",
        rating: 4.5,
        users: "25K+",
        price: "Free",
        free: true,
    },
];
const primaryProducts = [
    {
        title: "ATS ERP Suite",
        features: [
            "Integrated Finance & Accounting",
            "Supply Chain Management (SCM)",
            "Manufacturing & Production Planning",
        ],
    },
    {
        title: "CRM Pro+",
        features: [
            "Lead & Opportunity Tracking",
            "Sales Automation & Forecasting",
            "Customer Service & Ticketing",
        ],
    },
    {
        title: "HRMS Cloud",
        features: [
            "Cloud-Based Payroll & Tax Filing",
            "Employee Attendance & Leave Management",
            "Performance and Review Tracking",
        ],
    },
    {
        title: "ATS POS System",
        features: [
            "Inventory & Stock Control",
            "Multi-Store Synchronization",
            "Mobile & Contactless Payment Support",
        ],
    },
    {
        title: "ProjectFlow",
        features: [
            "Agile & Scrum Project Boards",
            "Real-time Team Collaboration",
            "AI-driven Resource Allocation",
        ],
    },
    {
        title: "DataVision Analytics",
        features: [
            "Customizable Business Dashboards",
            "Predictive Modeling & Reporting",
            "Data Governance & Security",
        ],
    },
];
const getFeaturedImageUrl = (id) => {
    switch (id) {
        case 1:
            return "https://placehold.co/600x400/10b981/ffffff?text=Hospital+System";
        case 2:
            return "https://placehold.co/600x400/0d9488/ffffff?text=Hotel+Management";
        case 3:
            return "https://placehold.co/600x400/0f766e/ffffff?text=LMS+E-Learning";
        case 4:
            return "https://placehold.co/600x400/14b8a6/ffffff?text=POS+Billing";
        case 5:
            return "https://placehold.co/600x400/06b6d4/ffffff?text=Real+Estate+CRM";
        case 6:
            return "https://placehold.co/600x400/0891b2/ffffff?text=E-Commerce+Store";
        default:
            return "https://placehold.co/600x400/0f766e/ffffff?text=Featured+Solution";
    }
};
const getFeaturedIcon = (id) => {
    switch (id) {
        case 1:
            return _jsx(Heart, { className: "h-5 w-5 text-black" });
        case 2:
            return _jsx(Banknote, { className: "h-5 w-5 text-black" });
        case 3:
            return _jsx(GraduationCap, { className: "h-5 w-5 text-black" });
        case 4:
            return _jsx(ShoppingCart, { className: "h-5 w-5 text-black" });
        case 5:
            return _jsx(House, { className: "h-5 w-5 text-black" });
        case 6:
            return _jsx(Users, { className: "h-5 w-5 text-black" });
        default:
            return _jsx(Award, { className: "h-5 w-5 text-black" });
    }
};
const Products = () => {
    return (_jsxs("div", { className: "font-serif min-h-screen", children: [_jsx("section", { className: "py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8 text-center", children: [_jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: ["Our ", _jsx("span", { className: "text-teal-600", children: "Products" })] }), _jsx("p", { className: "text-xl text-gray-700 mb-12 max-w-3xl mx-auto", children: "Discover our suite of innovative software products designed tostreamline your business operations and drive digital transformation." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left", children: primaryProducts.map((product, index) => (_jsxs("div", { className: "bg-gray-900 text-gray-200 p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300 flex flex-col", children: [_jsx("h3", { className: "text-2xl font-semibold mb-4 text-teal-400 grow-0", children: product.title }), _jsx("ul", { className: "space-y-3 text-gray-300 mb-6 text-base  grow", children: product.features.map((feature, i) => (_jsxs("li", { className: "flex items-start gap-2", children: [_jsx(Check, { className: "h-5 w-5 text-teal-400 shrink-0 mt-1" }), _jsx("span", { children: feature })] }, i))) }), _jsx("button", { className: "bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold w-full mt-auto", children: "Learn More" })] }, index))) }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mt-16", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 h-11 rounded-lg text-black bg-teal-200 font-bold hover:bg-teal-300 transition px-8 py-3 w-full sm:w-auto", children: ["Explore Products", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-teal-300 text-teal-600 font-bold hover:bg-teal-100 px-8 py-3 w-full sm:w-auto", children: "Watch Demo" })] })] }) }), _jsx("section", { className: "py-10 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-4", children: "Featured Products" }), _jsx("p", { className: "text-lg text-gray-700 max-w-2xl mx-auto", children: "Our most popular and innovative solutions trusted by thousands of \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 businesses." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", children: products.map((product) => (_jsxs("div", { className: "rounded-xl bg-white/80 backdrop-blur-md border border-teal-100 shadow-xl hover:shadow-2xl transition hover:scale-[1.02] duration-300 flex flex-col overflow-hidden", children: [_jsx("div", { className: "aspect-3/2 relative overflow-hidden", children: _jsx("img", { src: getFeaturedImageUrl(product.id), alt: product.title, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110", onError: (e) => {
                                                e.currentTarget.src = `https://placehold.co/600x400/cccccc/000000?text=${product.title.replace(/\s/g, "+")}`;
                                            } }) }), _jsxs("div", { className: "p-6 flex flex-col grow", children: [_jsxs("div", { className: "flex items-center justify-between gap-3 mb-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center border border-teal-300", children: getFeaturedIcon(product.id) }), _jsx("div", { className: "inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700", children: product.category })] }), _jsx("div", { className: "text-xl font-bold text-teal-600", children: product.price })] }), _jsx("h3", { className: "font-extrabold text-2xl text-teal-800 mb-2", children: product.title }), _jsxs("div", { className: "flex items-center justify-between text-sm mb-3 pt-3 border-t border-gray-100", children: [_jsxs("div", { className: "flex items-center space-x-1 text-teal-600", children: [_jsx(Star, { className: "h-4 w-4 fill-amber-400 stroke-amber-400" }), _jsx("span", { className: "font-semibold", children: product.rating })] }), _jsxs("div", { className: "flex items-center space-x-1 text-gray-600", children: [_jsx(Users, { className: "h-4 w-4 text-teal-500" }), _jsxs("span", { children: [product.users, " Users"] })] })] }), _jsx("p", { className: "text-gray-700 mb-4 text-base grow", children: product.description }), _jsxs("button", { className: "inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold bg-teal-500 text-white hover:bg-teal-600 h-11 px-6 py-2 w-full transition-all mt-auto shadow-md hover:shadow-lg", children: ["View Details", _jsx(ArrowRight, { className: "h-5 w-5" })] })] })] }, product.id))) })] }) }), _jsx("section", { className: "py-10 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-4", children: "Complete Product Suite" }), _jsx("p", { className: "text-lg text-gray-700 max-w-2xl mx-auto", children: "Comprehensive solutions for every aspect of your business." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: products.map((product) => (_jsxs("div", { className: "rounded-xl bg-white/80 backdrop-blur-md border border-teal-100 shadow-lg hover:shadow-2xl transition hover:scale-[1.02] duration-300 flex flex-col", children: [_jsxs("div", { className: "flex flex-col space-y-1.5 p-6 grow", children: [_jsxs("div", { className: "flex items-start space-x-3 mb-4", children: [_jsx("div", { className: "bg-teal-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md", children: product.icon }), _jsxs("div", { className: "flex flex-col grow", children: [_jsx("h3", { className: "font-extrabold text-xl text-teal-800", children: product.title }), _jsx("div", { className: "inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 w-fit mt-1", children: product.category })] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm mb-3 pt-3 border-t border-gray-100", children: [_jsxs("div", { className: "flex items-center space-x-1 text-teal-600", children: [_jsx(Star, { className: "h-4 w-4 fill-amber-400 stroke-amber-400" }), _jsx("span", { className: "font-semibold", children: product.rating })] }), _jsxs("div", { className: "flex items-center space-x-1 text-gray-600", children: [_jsx(Users, { className: "h-4 w-4 text-teal-500" }), _jsxs("span", { children: [product.users, " Users"] })] })] }), _jsx("p", { className: "text-base text-gray-700 grow", children: product.description })] }), _jsxs("div", { className: "p-6 pt-0 flex justify-between items-center mt-auto", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xl font-extrabold text-teal-600", children: product.price }), product.free && (_jsx("p", { className: "text-xs text-gray-500", children: "Free tier available" }))] }), _jsx("button", { className: "inline-flex items-center justify-center gap-2 bg-teal-500 text-white hover:bg-teal-600 h-10 rounded-lg px-4 text-base font-semibold transition shadow-md hover:shadow-lg", children: "Buy Now" })] })] }, product.id))) })] }) }), _jsx("section", { className: "py-20 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900 text-center", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-lg mb-8 text-gray-700", children: "Choose from our suite of products or let us build a custom solution \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 for you." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs("button", { className: "inline-flex items-center justify-center gap-2 bg-teal-500 text-white hover:bg-teal-600 h-11 rounded-lg px-8 py-3 w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl", children: ["Get Custom Solution", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsxs("button", { className: "inline-flex items-center justify-center gap-2 border border-teal-400 text-teal-600 hover:bg-teal-100 h-11 rounded-lg px-8 py-3 w-full sm:w-auto font-semibold shadow-md hover:shadow-lg", children: [_jsx(Award, { className: "mr-2 h-5 w-5" }), " Enterprise Demo"] })] })] }) })] }));
};
export default Products;
