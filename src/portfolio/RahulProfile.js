import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Code, Briefcase, Mail, Phone, MapPin, ExternalLink, Star, TrendingUp, Linkedin, Github, Calendar, } from "lucide-react";
import RahulImage from "/Rahul5.jpg";
const SkillTag = ({ children }) => (_jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-700 bg-orange-50", children: children }));
const StatItem = ({ children }) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }), _jsx("span", { className: "text-sm text-gray-700", children: children })] }));
const ProjectCard = ({ title, role, description, imageUrl, imageAlt, skills, stats, liveLink, caseStudyLink, }) => (_jsx("div", { className: "border border-orange-200 rounded-xl p-6 bg-white shadow-sm", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [_jsx("img", { src: imageUrl, alt: imageAlt, className: "w-full md:w-48 h-40 rounded-lg object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900", children: title }), _jsx("div", { className: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 border-orange-300", children: role })] }), _jsx("p", { className: "text-gray-700 mb-4", children: description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: skills.map((skill) => (_jsx(SkillTag, { children: skill }, skill))) }), stats && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: stats.map((stat) => (_jsx(StatItem, { children: stat }, stat))) })), _jsxs("div", { className: "flex gap-3", children: [_jsxs("a", { href: liveLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors", children: [_jsx(ExternalLink, { className: "h-4 w-4" }), "View Live"] }), caseStudyLink && (_jsx("a", { href: caseStudyLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 text-sm font-medium border bg-white hover:bg-orange-50 h-9 rounded-md px-3 border-orange-300 text-orange-700 transition-colors", children: "Case Study" }))] })] })] }) }));
const ExperienceItem = ({ title, company, duration, location, bulletPoints, }) => (_jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900", children: title }), _jsx("p", { className: "text-orange-600 font-semibold", children: company }), _jsxs("p", { className: "text-gray-600 mb-2", children: [duration, " \u2022 ", location] }), _jsx("ul", { className: "space-y-2", children: bulletPoints.map((point, index) => (_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(Star, { className: "h-4 w-4 text-orange-500 mt-0.5" }), _jsx("span", { className: "text-gray-700", children: point })] }, index))) })] }));
const RahulProfile = () => {
    const featuredProjects = [
        {
            title: "Modern E-Commerce Platform",
            role: "Full Stack Developer",
            description: "A complete MERN eCommerce system with product filters, cart, payments, and admin analytics.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
            imageAlt: "Ecommerce",
            skills: ["React", "Node.js", "MongoDB", "Express", "Redux"],
            stats: ["Automated cart system", "Payment gateway added"],
            liveLink: "#",
        },
        {
            title: "Employee Management System (EMS)",
            role: "MERN Developer",
            description: "Attendance, roles, payroll & admin dashboard with secure authentication.",
            imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop",
            imageAlt: "EMS",
            skills: ["React", "Node.js", "MongoDB", "JWT"],
            stats: ["RBAC Security", "Realtime Insights"],
            liveLink: "#",
        },
        {
            title: "Dynamic Portfolio Builder",
            role: "Frontend Developer",
            description: "Users create portfolios with drag-and-drop blocks and live preview.",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop",
            imageAlt: "Portfolio Builder",
            skills: ["React", "TailwindCSS", "Framer Motion"],
            liveLink: "#",
        },
        {
            title: "Smart Admin Dashboard",
            role: "React Developer",
            description: "Charts, dark mode, API integration & user management dashboard.",
            imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
            imageAlt: "Dashboard",
            skills: ["React", "Recharts", "TailwindCSS"],
            stats: ["+40% UX improvement", "Faster API performance"],
            liveLink: "#",
        },
        {
            title: "Blog CMS Platform",
            role: "Full Stack Developer",
            description: "Users publish, edit & manage blog content with full CMS features.",
            imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&auto=format&fit=crop",
            imageAlt: "Blog CMS",
            skills: ["React", "Node.js", "MongoDB"],
            liveLink: "#",
        },
        {
            title: "Innomind B2B Informatic Website",
            role: "Frontend Developer",
            description: "Corporate website showcasing professional lighting solutions.",
            imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format&fit=crop",
            imageAlt: "Innomind",
            skills: ["React", "TailwindCSS", "JavaScript"],
            stats: ["+30% SEO boost", "-45% Page load"],
            liveLink: "#",
        },
    ];
    const workExperience = [
        {
            title: "Full Stack (MERN) Developer Intern",
            company: "SudoTechLabs",
            duration: "March 2025 – Present",
            location: "Jaipur, Rajasthan",
            bulletPoints: [
                "Developed robust modules using MERN stack",
                "Optimized APIs and improved UI workflow",
            ],
        },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-linear-to-r from-orange-50 via-white to-orange-100 text-gray-900", children: [_jsxs("section", { className: "relative", children: [_jsx("div", { className: "h-96 bg-cover bg-center", style: {
                            backgroundImage: 'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=80")',
                        } }), _jsx("div", { className: "w-full px-4 relative -mt-32", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-end gap-8", children: [_jsx("div", { className: "relative", children: _jsx("img", { src: RahulImage, alt: "Rahul Kumawat", className: "w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover" }) }), _jsx("div", { className: "flex-1 bg-white shadow-lg rounded-xl p-8", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Rahul Kumawat" }), _jsx("p", { className: "text-xl text-orange-600 font-semibold mb-4", children: "MERN Developer" }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 text-gray-700", children: [_jsx(MapPin, { className: "h-4 w-4" }), "Jaipur, Rajasthan", _jsx(Calendar, { className: "h-4 w-4" }), "Joined Oct. 2025"] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("a", { href: "https://www.linkedin.com/feed/", target: "_blank", children: _jsx(Linkedin, { className: "h-5 w-5 hover:text-orange-600 transition" }) }), _jsx("a", { href: "https://github.com/Rahul800589", target: "_blank", children: _jsx(Github, { className: "h-5 w-5 hover:text-orange-600 transition" }) })] })] }) })] }) })] }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "w-full px-4", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [_jsxs("div", { className: "lg:col-span-2 space-y-10", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-sm p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2", children: [_jsx(Users, { className: "h-6 w-6" }), " About Me"] }), _jsx("p", { className: "text-gray-700 text-lg leading-relaxed", children: "Passionate **MERN Developer** creating fast, scalable and modern products with clean UI & optimized backend logic. Expertise in **React** for frontend, **Node.js/Express** for APIs, and **MongoDB** for database management." })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-sm p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-600 mb-8 flex items-center gap-2", children: [_jsx(Code, { className: "h-6 w-6" }), " Featured Projects"] }), _jsx("div", { className: "space-y-8", children: featuredProjects.map((project, i) => (_jsx(ProjectCard, { ...project }, i))) })] })] }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-sm p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-orange-600 mb-8 flex items-center gap-2", children: [_jsx(Briefcase, { className: "h-6 w-6" }), " Work Experience"] }), workExperience.map((exp, index) => (_jsx(ExperienceItem, { ...exp }, index)))] }), _jsxs("div", { className: "bg-white rounded-xl shadow-sm p-6", children: [_jsx("h3", { className: "text-lg font-bold text-orange-600 mb-4", children: "Contact Info" }), _jsxs("p", { className: "text-gray-700", children: [_jsx(Mail, { className: "inline-block h-4 w-4 mr-2 text-orange-500" }), "rahulkumawat0992@gmail.com"] }), _jsxs("p", { className: "text-gray-700 mt-2", children: [_jsx(Phone, { className: "inline-block h-4 w-4 mr-2 text-orange-500" }), "+91 8005894312"] })] })] })] }) }) })] }));
};
export default RahulProfile;
