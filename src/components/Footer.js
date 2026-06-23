import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram, Github, } from "lucide-react";
import logo from "../assets/atsnewlogo.png";
const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msgColor, setMsgColor] = useState("");
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = useCallback(() => {
        if (typeof window === "undefined")
            return;
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        }
        else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", checkScrollTop);
            return () => {
                window.removeEventListener("scroll", checkScrollTop);
            };
        }
    }, [checkScrollTop]);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubscribe = () => {
        setMessage("");
        if (!email) {
            setMsgColor("text-red-500");
            setMessage("Please enter your email.");
            return;
        }
        if (!validateEmail(email)) {
            setMsgColor("text-red-500");
            setMessage("Invalid email, please try again.");
            return;
        }
        setMsgColor("text-green-500");
        setMessage("Subscribed successfully! Thank you.");
        setEmail("");
    };
    return (_jsx("footer", { className: "bg-[#0F1B2E] text-white relative", style: { fontFamily: "Times New Roman, serif" }, children: _jsxs("div", { className: "w-full px-4 sm:px-8 lg:px-16 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex flex-col items-start mb-4", children: [_jsx("img", { src: logo, alt: "ATS Logo", className: "w-28 h-16 object-contain mb-2 " }), _jsx("h1", { className: "font-bold text-xl sm:text-2xl leading-tight text-white", children: "ATS GLOBAL TECH" })] }), _jsx("p", { className: "text-gray-300 text-sm mb-6 leading-relaxed", children: "Empowering businesses with modern digital transformation and advanced software engineering." }), _jsxs("div", { className: "flex space-x-3 sm:space-x-4", children: [_jsx("a", { href: "https://www.facebook.com/profile.php?id=61574788298611", target: "_blank", rel: "noopener noreferrer", children: _jsx(Facebook, { className: "h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" }) }), _jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(Twitter, { className: "h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" }) }), _jsx("a", { href: "https://www.linkedin.com/in/sudo-techlabs-8b6708375", target: "_blank", rel: "noopener noreferrer", children: _jsx(Linkedin, { className: "h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" }) }), _jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(Instagram, { className: "h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" }) }), _jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", children: _jsx(Github, { className: "h-6 w-6 text-gray-400 hover:text-orange-400 transition cursor-pointer" }) })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2", children: "Quick Links" }), _jsx("ul", { className: "space-y-3 text-sm", children: [
                                        { name: "Home", href: "/" },
                                        { name: "About Us", href: "/about" },
                                        { name: "Services", href: "/services" },
                                        { name: "Projects", href: "/projects" },
                                        { name: "Industries", href: "/industries" },
                                        { name: "Case Studies", href: "/case-studies" },
                                        { name: "Portfolio", href: "/portfolio" },
                                        { name: "Careers", href: "/careers" },
                                        { name: "Contact", href: "/contact" },
                                    ].map((item) => (_jsx("li", { children: _jsx(Link, { className: "text-gray-300 hover:text-orange-400 transition", to: item.href, children: item.name }) }, item.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2", children: "Our Services" }), _jsxs("ul", { className: "space-y-3 text-sm text-gray-300", children: [_jsx("li", { children: "Custom Software Development" }), _jsx("li", { children: "Mobile App Development" }), _jsx("li", { children: "Web App Development" }), _jsx("li", { children: "Cloud & DevOps Solutions" }), _jsx("li", { children: "UI / UX Design" }), _jsx("li", { children: "AI & Automation" }), _jsx("li", { children: "Cybersecurity Solutions" })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-lg mb-6 text-white border-b border-gray-700 pb-2", children: "Contact Info" }), _jsxs("div", { className: "space-y-5 text-sm", children: [_jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Mail, { className: "h-4 w-4 text-white mt-1 shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-gray-300 leading-snug", children: "info@atsglobaltech.in" }), _jsx("div", { className: "text-gray-400 text-xs", children: "General Support" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Phone, { className: "h-4 w-4 text-white mt-1 shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-gray-300 leading-snug", children: "+91 9929825003" }), _jsx("div", { className: "text-gray-400 text-xs", children: "24/7 Support" })] })] }), _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(MapPin, { className: "h-4 w-4 text-white mt-1 shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-gray-300 leading-snug", children: "ATS building, 4/98, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur" }), _jsx("div", { className: "text-gray-400 text-xs", children: "Rajasthan, India" })] })] })] })] })] }), _jsxs("div", { className: "border-t border-gray-700 mt-12 pt-8", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center", children: [_jsxs("div", { className: "mb-4 md:mb-0", children: [_jsx("h3", { className: "font-bold text-lg mb-2 text-white", children: "Stay Updated" }), _jsx("p", { className: "text-gray-300 text-sm", children: "Subscribe for insights, updates, and innovation tips." })] }), _jsxs("div", { className: "flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 w-full md:w-auto", children: [_jsx("input", { type: "email", value: email, onChange: handleEmailChange, placeholder: "Enter your email", className: "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white w-full sm:w-64 focus:border-orange-400 focus:outline-none" }), _jsx("button", { onClick: handleSubscribe, className: "bg-teal-600 px-6 py-2 rounded-lg text-white hover:bg-orange-600 transition w-full sm:w-auto font-medium", children: "Subscribe" })] })] }), message && (_jsx("p", { className: `mt-3 text-sm text-center md:text-left ${msgColor}`, children: message }))] }), _jsx("div", { className: "border-t border-gray-700 mt-8 pt-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-8 text-sm", children: [_jsx(Link, { to: "/privacy-policy", className: "text-gray-400 hover:text-orange-400 transition text-center md:text-left", children: "Privacy Policy" }), _jsx(Link, { to: "/terms-of-service", className: "text-gray-400 hover:text-orange-400 transition text-center md:text-left", children: "Terms of Service" })] }) }), _jsx("div", { className: "mt-8 pt-4 text-center", children: _jsx("p", { className: "text-gray-400 text-sm", children: "\u00A9 2026 ATS GLOBAL TECH \u2014 All Rights Reserved" }) })] }) }));
};
export default Footer;
