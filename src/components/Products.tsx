import { FC } from "react";
import {
  Heart,
  Banknote,
  GraduationCap,
  Building,
  Truck,
  House,
  Gamepad2,
  ShoppingCart,
  Zap,
  CircleCheckBig,
  Target,
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Shield,
  Download,
  Smartphone,
  ChartNoAxesColumnIncreasing,
  Cloud,
  Award,
  Check,
} from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  rating: number;
  users: string;
  price: string;
  free?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Workflow Automation",
    icon: <Zap className="h-5 w-5 text-white" />,
    description:
      "Streamline your business processes with intelligent automation and workflow management capabilities designed for healthcare.",
    rating: 4.8,
    users: "10K+",
    price: "Free",
    free: true,
  },
  {
    id: 2,
    title: "Hotel & Restaurant Management System",
    category: "Security Management",
    icon: <Shield className="h-5 w-5 text-white" />,
    description:
      "Integrated property management solution with robust booking, point-of-sale, and guest security features.",
    rating: 4.9,
    users: "5K+",
    price: "$49/month",
  },
  {
    id: 3,
    title: "Learning Management System",
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5 text-white" />,
    description:
      "A scalable platform for corporate training, course creation, and skill-gap analysis, accessible via mobile.",
    rating: 4.7,
    users: "15K+",
    price: "Free",
    free: true,
  },
  {
    id: 4,
    title: "POS (Billing Management System)",
    category: "Data Analytics",
    icon: <ChartNoAxesColumnIncreasing className="h-5 w-5 text-white" />,
    description:
      "Point-of-Sale system providing real-time inventory tracking, sales reporting, and comprehensive data analytics.",
    rating: 4.6,
    users: "8K+",
    price: "$59/month",
  },
  {
    id: 5,
    title: "Real Estate Management System",
    category: "Cloud Management",
    icon: <Cloud className="h-5 w-5 text-white" />,
    description:
      "Cloud-based solution for property listing, tenant management, and financial oversight of real estate portfolios.",
    rating: 4.8,
    users: "3K+",
    price: "$79/month",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    category: "Collaboration",
    icon: <Users className="h-5 w-5 text-white" />,
    description:
      "A comprehensive, customizable e-commerce storefront with multi-vendor support and seamless payment gateway integration.",
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
const getFeaturedImageUrl = (id: number) => {
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
const getFeaturedIcon = (id: number) => {
  switch (id) {
    case 1:
      return <Heart className="h-5 w-5 text-black" />;
    case 2:
      return <Banknote className="h-5 w-5 text-black" />;
    case 3:
      return <GraduationCap className="h-5 w-5 text-black" />;
    case 4:
      return <ShoppingCart className="h-5 w-5 text-black" />;
    case 5:
      return <House className="h-5 w-5 text-black" />;
    case 6:
      return <Users className="h-5 w-5 text-black" />;
    default:
      return <Award className="h-5 w-5 text-black" />;
  }
};

const Products: FC = () => {
  return (
    <div className="font-serif min-h-screen">

      <section className="py-6 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900">

        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-600">Products</span>

          </h1>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Discover our suite of innovative software products
            designed tostreamline your business operations and
            drive digital transformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">

            {primaryProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 text-gray-200 p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300 flex flex-col"
              >

                <h3 className="text-2xl font-semibold mb-4 text-teal-400 grow-0">
                  {product.title}
                </h3>

                <ul className="space-y-3 text-gray-300 mb-6 text-base  grow">

                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">

                      <Check className="h-5 w-5 text-teal-400 shrink-0 mt-1" />
                      <span>{feature}</span>

                    </li>
                  ))}

                </ul>

                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold w-full mt-auto">
                  Learn More
                </button>

              </div>
            ))}

          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">

            <button className="inline-flex items-center justify-center gap-2 h-11 rounded-lg text-black bg-teal-200 font-bold hover:bg-teal-300 transition px-8 py-3 w-full sm:w-auto">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 h-11 rounded-lg border border-teal-300 text-teal-600 font-bold hover:bg-teal-100 px-8 py-3 w-full sm:w-auto">
              Watch Demo
            </button>

          </div>

        </div>

      </section>

      <section className="py-10 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900">

        <div className="w-full px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Featured Products
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our most popular and innovative solutions trusted by
              thousands of               businesses.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl bg-white/80 backdrop-blur-md border border-teal-100 shadow-xl hover:shadow-2xl transition hover:scale-[1.02] duration-300 flex flex-col overflow-hidden"
              >

                <div className="aspect-3/2 relative overflow-hidden">

                  <img
                    src={getFeaturedImageUrl(product.id)}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/600x400/cccccc/000000?text=${product.title.replace(
                        /\s/g,
                        "+"
                      )}`;
                    }}
                  />

                </div>

                <div className="p-6 flex flex-col grow">

                  <div className="flex items-center justify-between gap-3 mb-3">

                    <div className="flex items-center gap-3">

                      <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center border border-teal-300">
                        {getFeaturedIcon(product.id)}

                      </div>

                      <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                        {product.category}

                      </div>

                    </div>

                    <div className="text-xl font-bold text-teal-600">
                      {product.price}
                    </div>

                  </div>

                  <h3 className="font-extrabold text-2xl text-teal-800 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm mb-3 pt-3 border-t border-gray-100">

                    <div className="flex items-center space-x-1 text-teal-600">

                      <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />

                      <span className="font-semibold">{product.rating}</span>

                    </div>

                    <div className="flex items-center space-x-1 text-gray-600">

                      <Users className="h-4 w-4 text-teal-500" />
                      <span>{product.users} Users</span>

                    </div>

                  </div>

                  <p className="text-gray-700 mb-4 text-base grow">
                    {product.description}
                  </p>

                  <button className="inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold bg-teal-500 text-white hover:bg-teal-600 h-11 px-6 py-2 w-full transition-all mt-auto shadow-md hover:shadow-lg">
                    View Details
                    <ArrowRight className="h-5 w-5" />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
      <section className="py-10 bg-linear-to-r from-teal-50 via-white to-teal-100 text-gray-900">

        <div className="w-full px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
              Complete Product Suite
            </h2>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive solutions for every aspect of your
              business.
            </p>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl bg-white/80 backdrop-blur-md border border-teal-100 shadow-lg hover:shadow-2xl transition hover:scale-[1.02] duration-300 flex flex-col"
              >

                <div className="flex flex-col space-y-1.5 p-6 grow">

                  <div className="flex items-start space-x-3 mb-4">

                    <div className="bg-teal-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md">
                      {product.icon}
                    </div>

                    <div className="flex flex-col grow">

                      <h3 className="font-extrabold text-xl text-teal-800">
                        {product.title}

                      </h3>

                      <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 w-fit mt-1">
                        {product.category}

                      </div>

                    </div>

                  </div>

                  <div className="flex items-center justify-between text-sm mb-3 pt-3 border-t border-gray-100">

                    <div className="flex items-center space-x-1 text-teal-600">

                      <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />

                      <span className="font-semibold">{product.rating}</span>

                    </div>

                    <div className="flex items-center space-x-1 text-gray-600">

                      <Users className="h-4 w-4 text-teal-500" />
                      <span>{product.users} Users</span>

                    </div>

                  </div>

                  <p className="text-base text-gray-700 grow">
                    {product.description}
                  </p>

                </div>

                <div className="p-6 pt-0 flex justify-between items-center mt-auto">

                  <div>

                    <p className="text-xl font-extrabold text-teal-600">
                      {product.price}
                    </p>

                    {product.free && (
                      <p className="text-xs text-gray-500">
                        Free tier available
                      </p>
                    )}

                  </div>

                  <button className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white hover:bg-teal-600 h-10 rounded-lg px-4 text-base font-semibold transition shadow-md hover:shadow-lg">
                    Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="py-20 bg-linear-to-r from-teal-100 via-white to-teal-50 text-gray-900 text-center">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg mb-8 text-gray-700">
            Choose from our suite of products or let us build a
            custom solution             for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white hover:bg-teal-600 h-11 rounded-lg px-8 py-3 w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl">
              Get Custom Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 border border-teal-400 text-teal-600 hover:bg-teal-100 h-11 rounded-lg px-8 py-3 w-full sm:w-auto font-semibold shadow-md hover:shadow-lg">
              <Award className="mr-2 h-5 w-5" /> Enterprise Demo

            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Products;
