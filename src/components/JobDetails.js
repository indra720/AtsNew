import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Clock, Briefcase, DollarSign } from "lucide-react";
const jobs = [
    {
        slug: "senior-full-stack-developer",
        title: "Senior Full Stack Developer",
        description: "Lead the development of scalable web applications and mentor junior developers. Collaborate with cross-functional teams to design, build, and deploy modern software solutions.",
        location: "Jaipur, Rajasthan",
        type: "Full-time",
        salary: "12k - 16k",
        experience: "5+ years",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000",
        tags: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
        slug: "devops-engineer",
        title: "DevOps Engineer",
        description: "Design, implement, and maintain CI/CD pipelines and automate cloud deployments. Ensure scalability and reliability across our infrastructure.",
        location: "Remote",
        type: "Full-time",
        salary: "10k - 14k",
        experience: "3+ years",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
        tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    },
];
const JobDetails = () => {
    const { slug } = useParams();
    const job = jobs.find((j) => j.slug === slug);
    if (!job)
        return (_jsx("div", { className: "text-center py-32 text-gray-600 text-xl", children: "Job not found." }));
    return (_jsx("section", { className: "py-28 bg-linear-to-br from-orange-50 via-white to-orange-100 text-gray-900", children: _jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [_jsxs(Link, { to: "/careers", className: "inline-flex items-center text-orange-600 hover:text-orange-700 mb-8", children: [_jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }), " Back to Careers"] }), _jsx("img", { src: job.image, alt: job.title, className: "w-full h-80 object-cover rounded-2xl shadow-md mb-8" }), _jsx("h1", { className: "text-4xl font-bold text-orange-700 mb-4", children: job.title }), _jsxs("div", { className: "flex flex-wrap gap-6 text-gray-700 mb-8", children: [_jsxs("p", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-5 w-5 text-orange-500" }), " ", job.location] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Briefcase, { className: "h-5 w-5 text-orange-500" }), " ", job.type] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "h-5 w-5 text-orange-500" }), " ", job.experience] }), _jsxs("p", { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "h-5 w-5 text-orange-500" }), " ", job.salary] })] }), _jsx("p", { className: "text-lg text-gray-700 mb-10", children: job.description }), _jsx("h3", { className: "text-2xl font-semibold mb-3 text-orange-600", children: "Skills Required" }), _jsx("div", { className: "flex flex-wrap gap-2 mb-10", children: job.tags.map((tag) => (_jsx("span", { className: "text-sm px-3 py-1 bg-orange-100 text-orange-700 rounded-full", children: tag }, tag))) }), _jsx("a", { href: "mailto:hr@atsglobaltech.com", className: "inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition", children: "Apply for this Role" })] }) }));
};
export default JobDetails;
