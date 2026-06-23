import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Bell, ChevronDown, Menu } from "lucide-react";
import { io } from "socket.io-client";
const SOCKET_URL = "http://localhost:5000";
const getInitialApplications = () => {
    try {
        const saved = localStorage.getItem("ats_applications");
        return saved ? JSON.parse(saved) : [];
    }
    catch (e) {
        console.error("Error loading data from Local Storage", e);
        return [];
    }
};
const initialApplications = getInitialApplications();
const initialCount = 0;
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [alertMsg, setAlertMsg] = useState(null);
    const [applications, setApplications] = useState(initialApplications);
    const [count, setCount] = useState(initialCount);
    const closeAllDropdowns = useCallback(() => setOpenDropdown(null), []);
    useEffect(() => {
        localStorage.setItem("ats_applications", JSON.stringify(applications));
    }, [applications]);
    useEffect(() => {
        const socket = io(SOCKET_URL, { transports: ["websocket"] });
        socket.on("new-application", (data) => {
            if (!data?.latest)
                return;
            setCount((prev) => prev + 1);
            const a = data.latest;
            const entry = {
                name: a.name,
                job: a.jobTitle,
                email: a.email,
                phone: a.phone,
                time: new Date(a.time).toLocaleString(),
            };
            setApplications((prev) => [entry, ...prev]);
            setAlertMsg(`New Application: ${entry.name} applied for ${entry.job}`);
            setTimeout(() => setAlertMsg(null), 5000);
        });
        return () => {
            socket.disconnect();
        };
    }, []);
    useEffect(() => {
        const closeOnOutsideClick = (e) => {
            if (notifOpen &&
                !e.target.closest(".notification-dropdown-container")) {
                setNotifOpen(false);
            }
            if (openDropdown &&
                !e.target.closest(".desktop-dropdown-container")) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("click", closeOnOutsideClick);
        return () => {
            document.removeEventListener("click", closeOnOutsideClick);
        };
    }, [notifOpen, openDropdown]);
    return (_jsxs(_Fragment, { children: [alertMsg && (_jsx("div", { className: "fixed top-0 left-0 right-0 bg-green-600 text-white py-2 text-center text-sm z-[9999]", children: alertMsg })), _jsxs("div", { className: `fixed left-0 right-0 z-50 transition-all duration-300 shadow-md ${alertMsg ? "top-8" : "top-0"}`, children: [_jsx("div", { className: `bg-gray-800 text-white w-full border-b border-gray-700`, children: _jsx("div", { className: "w-full px-3 sm:px-4 py-0", children: _jsxs("div", { className: "flex justify-between items-center text-[0.65rem] sm:text-xs", children: [_jsxs("div", { className: "flex items-center gap-2 sm:gap-3 justify-between sm:justify-start", children: [_jsx("div", { className: "hidden sm:flex items-center gap-3", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx(Mail, { className: "w-3 h-3 shrink-0" }), _jsx("a", { href: "mailto:info@atsglobaltech.in", className: "hover:text-orange-300 transition", children: "info@atsglobaltech.in" })] }) }), _jsxs("div", { className: "flex items-center space-x-2 sm:space-x-3 shrink-0", children: [_jsx("a", { href: "mailto:info@atsglobaltech.in", className: "hover:text-orange-300 transition flex items-center sm:hidden", children: _jsx(Mail, { className: "w-3.5 h-3.5 shrink-0" }) }), _jsx("a", { href: "https://wa.me/919929825003", target: "_blank", rel: "noopener noreferrer", className: "hover:text-green-300 transition hidden lg:block", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "currentColor", children: _jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }) }), _jsxs("a", { href: "tel:+919929825003", className: "hover:text-orange-300 transition flex items-center gap-1 whitespace-nowrap", children: [_jsx(Phone, { className: "w-3.5 h-3.5 shrink-0" }), _jsx("span", { className: "hidden sm:block", children: "+91 9929825003" })] })] })] }), _jsx("div", { className: "flex items-center justify-end shrink-0", children: _jsxs("div", { className: "relative pl-3 border-l border-gray-700 shrink-0 notification-dropdown-container", children: [_jsx("button", { onClick: (e) => {
                                                        e.stopPropagation();
                                                        setNotifOpen((prev) => {
                                                            const newState = !prev;
                                                            if (newState)
                                                                setCount(0);
                                                            return newState;
                                                        });
                                                    }, className: "p-1 rounded-full hover:bg-gray-700 transition", children: _jsx(Bell, { className: "w-5 h-5 text-white" }) }), count > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-red-600 w-4 h-4 rounded-full text-white flex items-center justify-center text-xs font-bold", children: count })), notifOpen && (_jsxs("div", { onClick: (e) => e.stopPropagation(), className: "absolute right-0 mt-2 w-64 xs:w-72 bg-white text-gray-800 shadow-xl border border-gray-200 rounded-lg py-1 z-[60] max-h-80 overflow-y-auto", children: [_jsx("div", { className: "p-3 font-semibold border-b text-sm sticky top-0 bg-white z-10", children: "New Applications" }), applications.length === 0 && (_jsx("div", { className: "p-3 text-center text-gray-500 text-sm", children: "No applications yet" })), applications.map((a, i) => (_jsxs("div", { className: "p-3 border-b border-gray-100 hover:bg-orange-50 transition cursor-pointer", children: [_jsx("div", { className: "font-bold text-sm", children: a.name }), _jsx("div", { className: "text-xs text-orange-600", children: a.job }), a.email && (_jsxs("div", { className: "text-xs text-gray-600", children: ["\uD83D\uDCE7 ", a.email] })), a.phone && (_jsxs("div", { className: "text-xs text-gray-600", children: ["\uD83D\uDCDE ", a.phone] })), _jsx("div", { className: "text-xs text-gray-400 mt-1", children: a.time })] }, i)))] }))] }) })] }) }) }), _jsx("nav", { className: `bg-white w-full border-b border-orange-200`, children: _jsxs("div", { className: "w-full px-3 sm:px-4", children: [_jsxs("div", { className: "flex justify-between items-center h-16 sm:h-20", children: [_jsx("div", { className: "flex items-center shrink-0", children: _jsxs(Link, { to: "/", className: "flex items-center gap-2 sm:gap-6", children: [_jsx("img", { src: "/atslogo7.jpg", alt: "ATS Logo", className: "w-10 h-10 sm:w-14 sm:h-14 object-contain shrink-0" }), _jsxs("div", { className: "flex flex-col ml-2", children: [_jsx("span", { className: "text-sm sm:text-xl lg:text-2xl font-extrabold text-gray-800 font-serif whitespace-nowrap text-center", children: "ATS GLOBAL TECH" }), _jsx("span", { className: "text-[0.5rem] sm:text-[0.6rem] lg:text-xs text-gray-600 text-center font-medium tracking-wide font-serif whitespace-nowrap", children: "THE FUTURE WITH NEXT GEN-AI" })] })] }) }), _jsx("button", { className: "lg:hidden p-1 shrink-0", onClick: () => setMobileOpen(!mobileOpen), children: _jsx(Menu, { className: "w-6 h-6 sm:w-7 sm:h-7 text-gray-700" }) }), _jsxs("div", { className: "hidden lg:flex items-center space-x-2", children: [_jsx(NavLink, { to: "/", label: "Home", active: true, onClick: closeAllDropdowns }), _jsx(NavLink, { to: "/about", label: "About", onClick: closeAllDropdowns }), _jsx(DropdownMenu, { label: "Services", menuName: "services", isOpen: openDropdown === "services", setOpenDropdown: setOpenDropdown, onClose: closeAllDropdowns, items: [
                                                        ["Web Development", "/services"],
                                                        ["Solution", "/services/mobile"],
                                                        ["Industries", "/services/industries"],
                                                    ] }), _jsx(NavLink, { to: "/products", label: "Products", onClick: closeAllDropdowns }), _jsx(DropdownMenu, { label: "Work", menuName: "work", isOpen: openDropdown === "work", setOpenDropdown: setOpenDropdown, onClose: closeAllDropdowns, items: [
                                                        ["Projects", "/work/projects"],
                                                        ["Portfolio", "/work/portfolio"],
                                                        ["Case-studies", "/work/case-studies"],
                                                    ] }), _jsx(NavLink, { to: "/testimonials", label: "Testimonials", onClick: closeAllDropdowns }), _jsx(NavLink, { to: "/lets-create", label: " Let\u2019s Create", onClick: closeAllDropdowns }), _jsx(NavLink, { to: "/blogs", label: "Blogs", onClick: closeAllDropdowns }), _jsx(NavLink, { to: "/careers", label: "Careers", onClick: closeAllDropdowns }), _jsx(Link, { to: "/contact", onClick: closeAllDropdowns, className: "px-3 py-1 bg-teal-700 text-white rounded-lg text-xs transition hover:bg-teal-600 ml-2 whitespace-nowrap", children: "Get in touch" })] })] }), mobileOpen && (_jsxs("div", { className: "lg:hidden py-3 space-y-2 border-t", children: [_jsx(MobileLink, { to: "/", label: "Home", onClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/about", label: "About", onClick: () => setMobileOpen(false) }), _jsx(MobileDropdown, { title: "Services", items: [
                                                ["Web Development", "/services"],
                                                ["Solution", "/services/mobile"],
                                                ["Industries", "/services/industries"],
                                            ], onItemClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/products", label: "Products", onClick: () => setMobileOpen(false) }), _jsx(MobileDropdown, { title: "Work", items: [
                                                ["Projects", "/work/projects"],
                                                ["Portfolio", "/work/portfolio"],
                                                ["Case-studies", "/work/case-studies"],
                                            ], onItemClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/testimonials", label: "Testimonials", onClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/lets-create", label: " Let\u2019s Create", onClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/blogs", label: "Blogs", onClick: () => setMobileOpen(false) }), _jsx(MobileLink, { to: "/careers", label: "Careers", onClick: () => setMobileOpen(false) }), _jsx(Link, { to: "/contact", onClick: () => setMobileOpen(false), className: "block text-center px-4 py-2 bg-teal-600 text-white rounded-lg text-sm mt-3 hover:bg-teal-500 transition", children: "Get in touch" })] }))] }) })] })] }));
}
function NavLink({ label, to, active = false, onClick, }) {
    return (_jsx(Link, { to: to, onClick: onClick, className: `text-xs xl:text-sm font-medium px-2 py-1.5 xl:px-3 xl:py-2 rounded-md transition ${active
            ? "text-orange-600 bg-orange-50"
            : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"}`, children: label }));
}
function DropdownMenu({ label, items, isOpen, menuName, setOpenDropdown, onClose, }) {
    const handleToggle = (e) => {
        e.preventDefault();
        setOpenDropdown(isOpen ? null : menuName);
    };
    return (_jsxs("div", { className: "relative desktop-dropdown-container", children: [_jsxs("button", { onClick: handleToggle, className: "flex items-center gap-1 text-xs xl:text-sm font-medium text-gray-700 hover:text-orange-600 px-2 py-1.5 xl:px-3 xl:py-2 rounded-md hover:bg-orange-50 transition", children: [label, _jsx(ChevronDown, { className: `w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}` })] }), isOpen && (_jsx("div", { className: "absolute left-0 top-full mt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-lg py-1 z-50 max-h-96 overflow-y-auto", children: items.map(([text, link]) => (_jsx(Link, { to: link, onClick: onClose, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition", children: text }, text))) }))] }));
}
function MobileLink({ label, to, onClick, }) {
    return (_jsx(Link, { to: to, onClick: onClick, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 rounded-md", children: label }));
}
function MobileDropdown({ title, items, onItemClick, }) {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { children: [_jsxs("button", { className: "w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 rounded-md", onClick: () => setOpen(!open), children: [title, _jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}` })] }), open && (_jsx("div", { className: "pl-6 mt-1 space-y-1 bg-gray-50 rounded-md", children: items.map(([label, link]) => (_jsx(Link, { to: link, onClick: () => {
                        setOpen(false);
                        onItemClick();
                    }, className: "block px-3 py-1 text-sm text-gray-600 hover:text-orange-600 hover:bg-white rounded-md transition", children: label }, label))) }))] }));
}
