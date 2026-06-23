import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
    const [topIndex, setTopIndex] = useState(0);
    const [bottomIndex, setBottomIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const navigate = useNavigate();
    const slidingTexts = ["future", "ideas", "vision", "growth"];
    const topSlides = [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop"
    ];
    const bottomSlides = [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop"
    ];
    useEffect(() => {
        const topTimer = setInterval(() => setTopIndex((prev) => (prev + 1) % topSlides.length), 3000);
        const bottomTimer = setInterval(() => setBottomIndex((prev) => (prev + 1) % bottomSlides.length), 4000);
        const textTimer = setInterval(() => setTextIndex((prev) => (prev + 1) % slidingTexts.length), 3200);
        return () => {
            clearInterval(topTimer);
            clearInterval(bottomTimer);
            clearInterval(textTimer);
        };
    }, []);
    const handleOpenContact = () => {
        navigate("/lets-create");
    };
    return (_jsxs("section", { className: "\n      relative bg-gray-50 overflow-hidden font-serif\n      min-h-[440px]\n      sm:min-h-[480px]\n      md:min-h-[520px]\n      lg:min-h-[550px]\n      xl:min-h-[580px]\n      pb-[30px]\n    ", children: [_jsx("style", { children: `
          @keyframes smoothSlideUp {
            0% { transform: translateY(120%); opacity: 0; }
            15% { transform: translateY(0); opacity: 1; }
            85% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-120%); opacity: 0; }
          }
          .sliderWord {
            animation: smoothSlideUp 3.2s ease-in-out infinite;
            display: inline-block;
            text-transform: lowercase;
          }
        ` }), _jsxs("div", { className: "flex flex-col lg:flex-row h-full w-full px-3 sm:px-4 gap-3", children: [_jsxs("div", { className: "\n          relative w-full lg:w-[60%] flex items-center justify-center text-white\n          px-4 sm:px-6 md:px-10\n          py-8 sm:py-10 rounded-xl overflow-hidden\n\n          min-h-[260px]\n          sm:min-h-[300px]\n          md:min-h-[350px]\n          lg:min-h-[380px]\n          xl:min-h-[410px]\n        ", children: [_jsx("video", { autoPlay: true, loop: true, muted: true, playsInline: true, src: "/company1.mp4", className: "absolute inset-0 w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-[#0a1522]/70" }), _jsxs("div", { className: "relative w-full max-w-xl text-center lg:text-left z-10", children: [_jsx("span", { className: "inline-block px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white/10 border border-white/20 mb-4", children: "\u2728 empowering digital transformation" }), _jsxs("h1", { className: "flex items-center justify-center lg:justify-start gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 whitespace-nowrap", children: [_jsx("span", { children: "building the" }), _jsx("span", { className: "sliderWord text-cyan-400 ml-1", children: slidingTexts[textIndex] }, textIndex)] }), _jsxs("p", { className: "text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-7", children: [_jsx("span", { className: "text-white font-bold text-xl sm:text-2xl block mb-2", children: "ATS GLOBAL TECH" }), "We craft intelligent digital solutions that elevate businesses to the next level. Our team blends creativity with technology to build experiences people love. We believe in delivering innovation that empowers brands to grow faster and smarter."] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start", children: [_jsxs("button", { onClick: handleOpenContact, className: "relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-sm sm:text-lg font-medium text-white rounded-md overflow-hidden group", children: [_jsx("span", { className: "absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-teal-500 transition-transform duration-500 group-hover:scale-110 rounded-md" }), _jsx("span", { className: "relative z-10", children: "start your project" })] }), _jsx("a", { href: "/work/projects", children: _jsx("button", { className: "relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-sm sm:text-lg font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-all duration-300", children: "explore works" }) })] })] })] }), _jsxs("div", { className: "w-full lg:w-[40%] flex flex-col justify-between gap-3", children: [_jsx("div", { className: "relative w-full h-[200px] sm:h-[230px] md:h-[250px] lg:h-[260px] xl:h-[270px] rounded-xl overflow-hidden shadow-lg border border-gray-200", children: topSlides.map((img, i) => (_jsx("img", { src: img, alt: "", className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === topIndex ? "opacity-100" : "opacity-0"}` }, i))) }), _jsx("div", { className: "relative w-full h-[200px] sm:h-[230px] md:h-[250px] lg:h-[260px] xl:h-[270px] rounded-xl overflow-hidden shadow-lg border border-gray-200", children: bottomSlides.map((img, i) => (_jsx("img", { src: img, alt: "", className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === bottomIndex ? "opacity-100" : "opacity-0"}` }, i))) })] })] })] }));
};
export default HeroSection;
