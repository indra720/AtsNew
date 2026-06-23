
import { FC, useState } from "react";
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User, XCircle, CheckCircle } from "lucide-react";


interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  views: string;
  comments: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Cloud Architecture: Best Practices Guide",
    description:
      "Learn essential principles for designing cloud architecture that scales with your business growth and handles increasing demand seamlessly.",
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    author: "Michael Rodriguez",
    readTime: "6 min read",
    date: "December 12, 2024",
    views: "1.8K",
    comments: "15",
  },
  {
    id: 2,
    title: "Cybersecurity in the Age of Remote Work",
    description:
      "Organizations must adapt security strategies as remote work becomes the norm. Here's how to protect your business in the digital age effectively.",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
    author: "Emily Davis",
    readTime: "7 min read",
    date: "December 10, 2024",
    views: "2.1K",
    comments: "18",
  },
  {
    id: 3,
    title: "Mobile-First Development: Why It Matters in 2024",
    description:
      "Mobile traffic continues to dominate. Learn why mobile-first development is crucial for success and how to implement it effectively for your app.",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    author: "Alex Johnson",
    readTime: "5 min read",
    date: "December 8, 2024",
    views: "1.6K",
    comments: "12",
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Business Intelligence",
    description:
      "Discover how modern data analytics tools transform raw data into actionable insights that drive business growth and decision-making rapidly.",
    category: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    author: "David Kim",
    readTime: "9 min read",
    date: "December 6, 2024",
    views: "1.9K",
    comments: "21",
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development Platforms",
    description:
      "Low-code platforms are changing application building. Explore the benefits, limitations, and best use cases for this evolving development tool.",
    category: "Development Tools",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    author: "Lisa Wang",
    readTime: "6 min read",
    date: "December 4, 2024",
    views: "1.4K",
    comments: "9",
  },
  {
    id: 6,
    title: "DevOps Best Practices for Faster Software Delivery",
    description:
      "Streamline your development process with proven DevOps practices that reduce deployment time and improve overall software quality efficiently.",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop",
    author: "James Mitchell",
    readTime: "8 min read",
    date: "December 2, 2024",
    views: "2.3K",
    comments: "17",
  },
];

const App: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];
  const filteredArticles = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' | null }>({ text: '', type: null });

  const handleSubmit = (e: React.FormEvent) => {
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

  const NotificationBanner: FC = () => {
    if (!message.text) return null;

    const isSuccess = message.type === 'success';
    const classes = isSuccess
      ? "bg-teal-100 border-teal-400 text-teal-800"
      : "bg-red-100 border-red-400 text-red-800";
    const Icon = isSuccess ? CheckCircle : XCircle;

    return (
      <div className={`p-4 rounded-lg border flex items-center shadow-lg transition-all duration-300 ${classes} mb-8 max-w-lg mx-auto`} role="alert">
        <Icon className="w-5 h-5 mr-3 shrink-0" />
        <p className="text-sm font-medium grow">{message.text}</p>
        <button
          onClick={() => setMessage({ text: '', type: null })}
          className="ml-4 text-gray-500 hover:text-gray-700 transition"
        >
          <XCircle className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <style>
        {`
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
        `}
      </style>

      <section className="relative pt-6 pb-12 sm:pb-20 bg-linear-to-br from-teal-50 via-white to-cyan-100 text-gray-900 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="relative z-10 w-full text-center px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-teal-700">
            Ready to Join Our Success Stories?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 w-full mb-12 leading-relaxed">
            Join hundreds of businesses that have transformed with
            <span className="text-teal-600 font-semibold"> ATS Global Tech</span>.
            We combine innovation, strategy, and technology to help brands achieve
            measurable results and sustainable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-teal-700 mb-3">
                🚀 Proven Expertise
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Over a decade of experience delivering cutting-edge digital solutions
                that drive real business outcomes.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-teal-700 mb-3">
                💡 Innovative Approach
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We use creativity and technology to solve complex challenges and
                redefine digital success for every client.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-teal-100 hover:shadow-teal-300/40 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-teal-700 mb-3">
                🌍 Global Impact
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our solutions have empowered startups and enterprises worldwide to
                scale, innovate, and lead in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-6 sm:py-8 bg-linear-to-r from-teal-100 via-white to-teal-50 border-b text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium h-9 sm:h-10 rounded-full px-3 sm:px-5 border transition shrink-0 ${activeCategory === category
                  ? "bg-teal-500 text-white border-teal-500 shadow-lg"
                  : "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-500 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900">
        <div className="w-full  px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-linear-to-r from-teal-400 to-cyan-400 text-white shadow-md">
              Editor’s Pick
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-teal-700">
              Featured Article
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl border border-teal-100 rounded-2xl overflow-hidden hover:shadow-teal-300/40 transition group ">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                alt="AI Trends"
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-linear-to-r from-teal-500 to-teal-600 text-white shadow">
                  Artificial Intelligence
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="font-bold text-xl sm:text-2xl mb-3 text-teal-800">
                The Future of AI in Software Development: Trends for 2024
              </h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Discover how AI innovations like code automation and smart
                debugging are shaping the software industry, paving the way for unprecedented efficiency.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4 text-teal-600" /> Sarah Chen
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-teal-600" /> Dec 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-teal-600" /> 8 min read
                </span>
              </div>
              <button className="inline-flex items-center justify-center self-start gap-2 rounded-lg text-sm font-semibold px-6 py-3 bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 transition">
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Latest Insights
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the latest trends, tutorials, and insights from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((a) => (
              <div
                key={a.id}
                className="rounded-xl bg-white border border-teal-200 shadow-xl hover:shadow-teal-400/50 transition transform hover:-translate-y-1 h-full flex flex-col group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x250/0f766e/ffffff?text=${a.category.replace(/ /g, '+')}`;
                    }}
                  />
                  <span className="absolute bottom-3 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-linear-to-r from-cyan-500 to-teal-500 text-white shadow-md">
                    {a.category}
                  </span>
                </div>

                <div
                  className="p-6 space-y-3 flex flex-col h-full"
                >
                  <h3 className="font-bold text-lg text-teal-800 hover:text-teal-600 transition">
                    {a.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4 text-teal-600" /> {a.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-teal-600" /> {a.readTime}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 grow leading-relaxed">{a.description}</p>

                  <div className="text-xs text-gray-500 flex justify-between pt-3 border-t border-teal-100 mt-auto">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-teal-600" /> {a.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-teal-600" /> {a.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-teal-600" /> {a.comments}
                    </span>
                  </div>

                  <button className="mt-4 w-full inline-flex justify-center items-center gap-2 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow-md">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
            ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
            )}
            </div>
        </div>
      </section>

      <section className="py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-center text-gray-900">
        <div className="w-full px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
            Stay Updated with Tech Insights
          </h2>
          <p className="text-base sm:text-lg mb-8 text-gray-700">
            Subscribe to our newsletter and get the latest articles and industry insights delivered to your inbox.
          </p>

          <NotificationBanner />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3 rounded-lg border border-teal-200 text-gray-800 focus:ring-2 focus:ring-teal-400 focus:outline-none placeholder:text-gray-500"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-linear-to-r from-teal-500 to-teal-600 text-white h-11 rounded-lg px-8 py-3 shadow-md hover:shadow-teal-400/40 transition shrink-0"
            >
              Subscribe Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-600">
            No spam — unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;