import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User, XCircle, CheckCircle } from "lucide-react";
const articles = [
    {
        id: 1,
        title: "Building Scalable Cloud Architecture: Best Practices Guide",
        description: "Learn essential principles for designing cloud architecture that scales with your business growth and handles increasing demand seamlessly.",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        author: "Michael Rodriguez",
        readTime: "6 min read",
        date: "December 12, 2024",
        views: "1.8K",
        comments: "15",
    },
    {
        id: 2,
        title: "Cybersecurity in the Age of Remote Work",
        description: "Organizations must adapt security strategies as remote work becomes the norm. Here's how to protect your business in the digital age effectively.",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
        author: "Emily Davis",
        readTime: "7 min read",
        date: "December 10, 2024",
        views: "2.1K",
        comments: "18",
    },
    {
        id: 3,
        title: "Mobile-First Development: Why It Matters in 2024",
        description: "Mobile traffic continues to dominate. Learn why mobile-first development is crucial for success and how to implement it effectively for your app.",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        author: "Alex Johnson",
        readTime: "5 min read",
        date: "December 8, 2024",
        views: "1.6K",
        comments: "12",
    },
    {
        id: 4,
        title: "Data Analytics: Turning Information into Business Intelligence",
        description: "Discover how modern data analytics tools transform raw data into actionable insights that drive business growth and decision-making rapidly.",
        category: "Data Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        author: "David Kim",
        readTime: "9 min read",
        date: "December 6, 2024",
        views: "1.9K",
        comments: "21",
    },
    {
        id: 5,
        title: "The Rise of Low-Code Development Platforms",
        description: "Low-code platforms are changing application building. Explore the benefits, limitations, and best use cases for this evolving development tool.",
        category: "Development Tools",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        author: "Lisa Wang",
        readTime: "6 min read",
        date: "December 4, 2024",
        views: "1.4K",
        comments: "9",
    },
    {
        id: 6,
        title: "DevOps Best Practices for Faster Software Delivery",
        description: "Streamline your development process with proven DevOps practices that reduce deployment time and improve overall software quality efficiently.",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop",
        author: "James Mitchell",
        readTime: "8 min read",
        date: "December 2, 2024",
        views: "2.3K",
        comments: "17",
    },
];
const App = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];
    const filteredArticles = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState({ text: '', type: null });
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ text: '', type: null });
        if (!email.trim() || !email.includes('@')) {
            setMessage({ text: "Please enter a valid email address.", type: 'error' });
            return;
        }
        setMessage({ text: `Subscribed successfully! Welcome to the newsletter.`, type: 'success' });
        setEmail("");
        setTimeout(() => {
            setMessage({ text: '', type: null });
        }, 4000);
    };
    const NotificationBanner = () => {
        if (!message.text)
            return null;
        const isSuccess = message.type === 'success';
        const classes = isSuccess
            ? "bg-teal-100 border-teal-400 text-teal-800"
            : "bg-red-100 border-red-400 text-red-800";
        const Icon = isSuccess ? CheckCircle : XCircle;
        return (_jsxs("div", { className: `p-4 rounded-lg border flex items-center shadow-lg transition-all duration-300 ${classes} mb-8 max-w-lg mx-auto`, role: "alert", children: [_jsx(Icon, { className: "w-5 h-5 mr-3 shrink-0" }), _jsx("p", { className: "text-sm font-medium grow", children: message.text }), _jsx("button", { onClick: () => setMessage({ text: '', type: null }), className: "ml-4 text-gray-500 hover:text-gray-700 transition", children: _jsx(XCircle, { className: "w-5 h-5" }) })] }));
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 font-sans antialiased", children: [_jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        /* Ensuring full width on mobile/tablet */
        .max-w-7xl {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        @media (min-width: 640px) {
          .max-w-7xl {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        ` }), _jsxs("section", { className: "relative pt-6 pb-12 sm:pb-20 bg-linear-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden", children: [_jsx("div", { className: "absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" }), _jsx("div", { className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" }), _jsxs("div", { className: "relative z-10 w-full text-center px-6", children: [_jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-teal-700", children: "Ready to Join Our Success Stories?" }), _jsxs("p", { className: "text-base sm:text-lg md:text-xl text-gray-700 w-full mb-12 leading-relaxed", children: ["Join hundreds of businesses that have transformed with", _jsx("span", { className: "text-teal-600 font-semibold", children: " ATS Global Tech" }), ". We combine innovation, strategy, and technology to help brands achieve measurable results and sustainable growth."] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left", children: [_jsxs("div", { className: "bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold text-teal-700 mb-3", children: "\uD83D\uDE80 Proven Expertise" }), _jsx("p", { className: "text-sm sm:text-base text-gray-600", children: "Over a decade of experience delivering cutting-edge digital solutions that drive real business outcomes." })] }), _jsxs("div", { className: "bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold text-teal-700 mb-3", children: "\uD83D\uDCA1 Innovative Approach" }), _jsx("p", { className: "text-sm sm:text-base text-gray-600", children: "We use creativity and technology to solve complex challenges and redefine digital success for every client." })] }), _jsxs("div", { className: "bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold text-teal-700 mb-3", children: "\uD83C\uDF0D Global Impact" }), _jsx("p", { className: "text-sm sm:text-base text-gray-600", children: "Our solutions have empowered startups and enterprises worldwide to scale, innovate, and lead in their industries." })] })] })] })] }), _jsx("section", { className: "py-6 sm:py-8 bg-linear-to-r from-teal-100 via-white to-teal-50 border-b text-gray-900", children: _jsx("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "flex flex-wrap justify-center gap-2 sm:gap-3", children: categories.map((category) => (_jsx("button", { onClick: () => setActiveCategory(category), className: `inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium h-9 sm:h-10 rounded-full px-3 sm:px-5 border transition shrink-0 ${activeCategory === category
                                ? "bg-teal-500 text-white border-teal-500 shadow-lg"
                                : "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-500 hover:text-white"}`, children: category }, category))) }) }) }), _jsx("section", { className: "py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900", children: _jsxs("div", { className: "w-full  px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-8 sm:mb-12", children: [_jsx("span", { className: "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-linear-to-r from-teal-400 to-cyan-400 text-white shadow-md", children: "Editor\u2019s Pick" }), _jsx("h2", { className: "text-3xl sm:text-4xl font-bold mt-4 text-teal-700", children: "Featured Article" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl border border-teal-100 rounded-2xl overflow-hidden hover:shadow-teal-300/40 transition group ", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop", alt: "AI Trends", className: "w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]" }), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("span", { className: "px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-teal-500 to-teal-600 text-white shadow", children: "Artificial Intelligence" }) })] }), _jsxs("div", { className: "p-6 sm:p-8 flex flex-col justify-center", children: [_jsx("h3", { className: "font-bold text-xl sm:text-2xl mb-3 text-teal-800", children: "The Future of AI in Software Development: Trends for 2024" }), _jsx("p", { className: "text-gray-700 mb-6 text-sm sm:text-base", children: "Discover how AI innovations like code automation and smart debugging are shaping the software industry, paving the way for unprecedented efficiency." }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 mb-6", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(User, { className: "w-4 h-4 text-teal-600" }), " Sarah Chen"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4 text-teal-600" }), " Dec 15, 2024"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4 text-teal-600" }), " 8 min read"] })] }), _jsxs("button", { className: "inline-flex items-center justify-center self-start gap-2 rounded-lg text-sm font-semibold px-6 py-3 bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 transition", children: ["Read Full Article", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })] })] }) }), _jsx("section", { className: "py-6 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900", children: _jsxs("div", { className: "w-full px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-4", children: "Latest Insights" }), _jsx("p", { className: "text-base sm:text-lg text-gray-700 max-w-2xl mx-auto", children: "Discover the latest trends, tutorials, and insights from our experts." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5", children: filteredArticles.length > 0 ? (filteredArticles.map((a) => (_jsxs("div", { className: "rounded-xl bg-white border border-teal-200 shadow-xl hover:shadow-teal-400/50 transition transform hover:-translate-y-1 h-full flex flex-col group overflow-hidden", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: a.image, alt: a.title, className: "w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-[1.03]", onError: (e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = `https://placehold.co/400x250/0f766e/ffffff?text=${a.category.replace(/ /g, '+')}`;
                                                } }), _jsx("span", { className: "absolute bottom-3 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white shadow-md", children: a.category })] }), _jsxs("div", { className: "p-6 space-y-3 flex flex-col h-full", children: [_jsx("h3", { className: "font-bold text-lg text-teal-800 hover:text-teal-600 transition", children: a.title }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(User, { className: "w-4 h-4 text-teal-600" }), " ", a.author] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4 text-teal-600" }), " ", a.readTime] })] }), _jsx("p", { className: "text-sm text-gray-700 grow leading-relaxed", children: a.description }), _jsxs("div", { className: "text-xs text-gray-500 flex justify-between pt-3 border-t border-teal-100 mt-auto", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-3 h-3 text-teal-600" }), " ", a.date] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Eye, { className: "w-3 h-3 text-teal-600" }), " ", a.views] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(MessageCircle, { className: "w-3 h-3 text-teal-600" }), " ", a.comments] })] }), _jsxs("button", { className: "mt-4 w-full inline-flex justify-center items-center gap-2 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow-md", children: ["Read More ", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })] }, a.id)))) : (_jsx("div", { className: "col-span-full text-center py-10", children: _jsx("p", { className: "text-gray-500 text-lg", children: "No articles found in this category." }) })) })] }) }), _jsx("section", { className: "py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-center text-gray-900", children: _jsxs("div", { className: "w-full px-6 sm:px-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-teal-700 mb-6", children: "Stay Updated with Tech Insights" }), _jsx("p", { className: "text-base sm:text-lg mb-8 text-gray-700", children: "Subscribe to our newsletter and get the latest articles and industry insights delivered to your inbox." }), _jsx(NotificationBanner, {}), _jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto", children: [_jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email address...", className: "flex-1 px-4 py-3 rounded-lg border border-teal-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none placeholder:text-gray-500", required: true }), _jsxs("button", { type: "submit", className: "inline-flex items-center justify-center gap-2 text-sm font-semibold bg-linear-to-r from-teal-500 to-teal-600 text-white h-11 rounded-lg px-8 py-3 shadow-md hover:shadow-teal-400/40 transition shrink-0", children: ["Subscribe Now", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] })] }), _jsx("p", { className: "text-sm mt-4 text-gray-600", children: "No spam \u2014 unsubscribe anytime." })] }) })] }));
};
export default App;
