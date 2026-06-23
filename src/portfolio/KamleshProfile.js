import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
const ProjectCard = ({ title, desc, image, tech, }) => (_jsxs("div", { className: "bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out", children: [_jsx("img", { src: image, alt: title, className: "w-full h-56 rounded-lg object-cover mb-4" }), _jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: title }), _jsx("p", { className: "text-gray-700 mb-3", children: desc }), _jsx("div", { className: "flex flex-wrap gap-2", children: tech.map((t) => (_jsx("span", { className: "bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap", children: t }, t))) })] }));
const KamleshProfile = () => {
    const projects = [
        {
            title: "Accounting Management System",
            desc: "Role-based secure accounting platform with financial modules, audit tracking & reports.",
            image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&w=900&q=80",
            tech: ["C#", ".NET", "SQL Server", "WinForms"],
        },
        {
            title: "Hospital Management System",
            desc: "OPD, billing, patient records, medical store & appointment management built in C#.",
            image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&w=900&q=80",
            tech: ["C#", ".NET", "SQL Server", "Desktop App"],
        },
        {
            title: "Inventory Management System",
            desc: "Barcode-based stock tracking, supplier records, purchase history & alerts.",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&w=900&q=80",
            tech: ["C#", ".NET", "SQL Server", "WinForms"],
        },
        {
            title: "Portfolio Builder System",
            desc: "A tool to generate developer portfolio templates using .NET backend.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=900&q=80",
            tech: ["C#", ".NET Core", "Razor Pages"],
        },
        {
            title: "Admin Dashboard (API Integrated)",
            desc: "Secure admin panel with analytics, CRUD operations and token-protected APIs.",
            image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&w=900&q=80",
            tech: [".NET Core API", "SQL Server", "Authentication"],
        },
        {
            title: "Student Result Portal",
            desc: "A secure .NET Core portal for managing student marks, results & reports.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=900&q=80",
            tech: ["C#", ".NET Core", "SQL Server"],
        },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-linear-to-r from-orange-50 via-white to-orange-100", children: [_jsxs("section", { className: "relative", children: [_jsx("div", { className: "h-96 bg-cover bg-center", style: {
                            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=1200&q=80')",
                        } }), _jsx("div", { className: "w-full px-6 -mt-32 relative", children: _jsxs("div", { className: "flex flex-col lg:flex-row items-start lg:items-end gap-8", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: "/kamal1.jpg", alt: "Kamlesh Kumar Sharma", className: "w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover" }), _jsx("div", { className: "absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white" })] }), _jsxs("div", { className: "flex-1 bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-8", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Kamlesh Kumar Sharma" }), _jsx("p", { className: "text-xl text-orange-600 font-semibold mt-1", children: "Full Stack Developer (C# / .NET / SQL)" }), _jsxs("div", { className: "mt-4 space-y-1 text-gray-700", children: [_jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "w-4 h-4 text-orange-500" }), _jsx("strong", { children: "Email:" }), " sharmakamal11601@gmail.com"] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "w-4 h-4 text-orange-500" }), _jsx("strong", { children: "Phone:" }), " 7877383709"] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4 text-orange-500" }), _jsx("strong", { children: "Location:" }), " Jaipur, Rajasthan, India"] })] }), _jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx("a", { href: "https://www.linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-orange-600 transition", children: _jsx(Linkedin, { className: "w-7 h-7" }) }), _jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-700 hover:text-orange-600 transition", children: _jsx(Github, { className: "w-7 h-7" }) })] })] })] }) })] }), _jsxs("section", { className: "w-full px-6 py-14", children: [_jsx("h2", { className: "text-3xl font-bold text-orange-700 mb-4 border-b pb-2 border-orange-200", children: "About Me" }), _jsx("p", { className: "text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm", children: "I am a dedicated **Full Stack Developer** with strong expertise in **C#, .NET Framework, .NET Core, SQL Server, WinForms, API Development, Desktop Applications, and Enterprise Systems**. I focus on building secure, scalable and high-performance business software with clean architecture, optimized database structures, and interactive UI components. My experience spans the full SDLC, from requirement gathering to deployment." })] }), _jsxs("section", { className: "w-full px-6 pb-20", children: [_jsx("h2", { className: "text-3xl font-bold text-orange-700 mb-8 border-b pb-2 border-orange-200", children: "Featured Projects" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10", children: projects.map((project, index) => (_jsx(ProjectCard, { ...project }, index))) })] })] }));
};
export default KamleshProfile;
