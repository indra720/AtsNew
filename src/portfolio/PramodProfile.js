import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Code, Briefcase, Mail, Phone, MapPin, BookOpen, Linkedin, Github, } from "lucide-react";
const profileData = {
    name: "Pramod Saini",
    title: "Frontend Developer",
    location: "Jaipur, India",
    contact: {
        email: "pramodsaini189@gmail.com",
        phone: "+91 820 917 5003",
    },
    about: `
A passionate <strong>Frontend Developer</strong> skilled in
<strong>React, Tailwind CSS, JavaScript</strong> and modern UI practices.
`,
    profileImageUrl: "/src/assets/Pramod.png",
    bannerImageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1500&q=80",
    social: {
        linkedin: "https://www.linkedin.com/in/pramod-saini-0577a5229/",
        github: "https://github.com/Pramod-saini",
    },
};
const featuredProjects = [
    {
        title: "E-Commerce Platform",
        role: "Frontend Developer",
        description: "A modern e-commerce website with filtering, cart, and checkout features.",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=60",
        skills: ["React", "Tailwind", "JavaScript"],
    },
    {
        title: "Portfolio Website",
        role: "Frontend Developer",
        description: "Personal portfolio with smooth animations and responsive UI.",
        imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=60",
        skills: ["React", "Tailwind"],
    },
    {
        title: "Task Manager App",
        role: "UI Engineer",
        description: "Task manager with drag & drop functionality and clean UI layout.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60",
        skills: ["React", "JavaScript"],
    },
    {
        title: "Weather Forecast App",
        role: "Frontend Developer",
        description: "Weather app using OpenWeather API with animated UI backgrounds.",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=60",
        skills: ["React", "API"],
    },
    {
        title: "Real Estate Landing Page",
        role: "UI Developer",
        description: "High-conversion landing page for real estate with modern UI.",
        imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60",
        skills: ["HTML", "CSS", "JavaScript"],
    },
];
const workExperience = [
    {
        title: "Frontend Developer (Intern)",
        company: "SudoTechLabs",
        duration: "Jun 2023 - Aug 2023 • Remote",
        bulletPoints: [
            "Built reusable UI components",
            "Improved responsiveness",
            "Worked on dashboard UI",
        ],
    },
    {
        title: "Open Source Contributor",
        company: "GitHub Community",
        duration: "2022 - Present",
        bulletPoints: [
            "Contributed to React projects",
            "Improved documentation",
            "Enhanced UI/UX designs",
        ],
    },
];
const educationData = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "University of Rajasthan",
        years: "2021–2024",
    },
    {
        degree: "12th – Science",
        institution: "Govt. Senior Secondary School",
        years: "2021",
    },
];
const SkillTag = ({ children }) => (_jsx("span", { className: "px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold border border-orange-300", children: children }));
const ProjectCard = ({ title, role, description, imageUrl, skills, }) => (_jsx("div", { className: "bg-white border border-orange-100 rounded-xl p-6 shadow-sm", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [_jsx("img", { src: imageUrl, className: "w-full h-40 sm:w-64 md:w-48 md:h-36 rounded-lg object-cover" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex justify-between flex-wrap", children: [_jsx("h3", { className: "text-xl font-bold", children: title }), _jsx("p", { className: "text-orange-600 font-semibold", children: role })] }), _jsx("p", { className: "text-gray-600 mt-2 mb-3", children: description }), _jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((s, i) => (_jsx(SkillTag, { children: s }, i))) })] })] }) }));
const ExperienceItem = ({ title, company, duration, bulletPoints, }) => (_jsxs("div", { className: "border-l-4 border-orange-500 pl-4", children: [_jsx("h3", { className: "text-xl font-bold", children: title }), _jsx("p", { className: "text-orange-600 font-semibold", children: company }), _jsx("p", { className: "text-sm text-gray-500", children: duration }), _jsx("ul", { className: "list-disc ml-5 mt-2 space-y-1 text-gray-700", children: bulletPoints.map((b, i) => (_jsx("li", { children: b }, i))) })] }));
const TeamMembers = () => {
    return (_jsxs("section", { className: "min-h-screen bg-linear-to-r from-orange-50 via-white to-orange-100", children: [_jsx("div", { className: "h-48 sm:h-64 md:h-80 bg-cover bg-center", style: { backgroundImage: `url(${profileData.bannerImageUrl})` } }), _jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24 relative", children: _jsxs("div", { className: "bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6", children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left", children: [_jsx("img", { src: profileData.profileImageUrl, className: "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border-4 border-orange-400 object-cover shadow-md" }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl sm:text-3xl font-bold", children: profileData.name }), _jsx("p", { className: "text-orange-600 font-semibold", children: profileData.title }), _jsxs("p", { className: "flex items-center justify-center sm:justify-start gap-2 text-gray-600 mt-1", children: [_jsx(MapPin, { className: "h-4 w-4 text-orange-500" }), profileData.location] })] })] }), _jsxs("div", { className: "flex items-center gap-3 sm:gap-4 mt-4 md:mt-0", children: [_jsx("a", { href: profileData.social.linkedin, target: "_blank", className: "p-2 sm:p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md", children: _jsx(Linkedin, { className: "h-5 w-5" }) }), _jsx("a", { href: profileData.social.github, target: "_blank", className: "p-2 sm:p-3 bg-gray-900 hover:bg-black text-white rounded-full shadow-md", children: _jsx(Github, { className: "h-5 w-5" }) })] })] }) }), _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "md:col-span-2 space-y-8 md:space-y-10", children: [_jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-xl shadow-sm", children: [_jsxs("h2", { className: "text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2", children: [_jsx(Users, {}), " About Me"] }), _jsx("p", { className: "text-gray-700 leading-relaxed mt-3 text-sm sm:text-base", dangerouslySetInnerHTML: { __html: profileData.about } })] }), _jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-xl shadow-sm", children: [_jsxs("h2", { className: "text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4", children: [_jsx(Code, {}), " Featured Projects"] }), _jsx("div", { className: "space-y-6", children: featuredProjects.map((p, i) => (_jsx(ProjectCard, { ...p }, i))) })] })] }), _jsxs("div", { className: "space-y-6 md:space-y-8", children: [_jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-xl shadow-sm", children: [_jsxs("h2", { className: "text-xl sm:text-2xl font-bold text-orange-600 flex items-center gap-2 mb-4", children: [_jsx(Briefcase, {}), " Work Experience"] }), _jsx("div", { className: "space-y-6", children: workExperience.map((exp, i) => (_jsx(ExperienceItem, { ...exp }, i))) })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm", children: [_jsx("h3", { className: "text-lg font-bold text-orange-600 mb-2", children: "Contact" }), _jsxs("p", { className: "text-gray-700 text-sm sm:text-base", children: [_jsx(Mail, { className: "inline h-4 w-4 mr-2 text-orange-500" }), profileData.contact.email] }), _jsxs("p", { className: "text-gray-700 mt-2 text-sm sm:text-base", children: [_jsx(Phone, { className: "inline h-4 w-4 mr-2 text-orange-500" }), profileData.contact.phone] })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm", children: [_jsxs("h3", { className: "text-lg font-bold text-orange-600 flex items-center gap-2 mb-2", children: [_jsx(BookOpen, {}), " Education"] }), educationData.map((e, i) => (_jsxs("div", { className: "mb-3", children: [_jsx("p", { className: "font-semibold text-sm sm:text-base", children: e.degree }), _jsx("p", { className: "text-xs sm:text-sm text-gray-600", children: e.institution }), _jsx("p", { className: "text-xs text-gray-500", children: e.years })] }, i)))] })] })] })] }));
};
export default TeamMembers;
