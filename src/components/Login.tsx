import { FC, useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Logo from "../assets/ats-logo.png";


const Login: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Background updated to dark gradient + top padding for navbar */}
      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#1c2b4d] to-[#303e4f] pt-32 px-4">
        <div className="max-w-md w-full space-y-10">

          {/* Logo + Header */}
          <div className="text-center">
            <a href="/" className="flex items-center justify-center mb-6">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-16 object-contain drop-shadow-lg"
              />
              <span className="font-bold text-2xl ml-2 text-orange-500 drop-shadow-md">
                ATS GLOBAL TECH
              </span>
            </a>

            <h2 className="text-3xl font-extrabold text-white drop-shadow-sm">
              Welcome Back 👋
            </h2>
            <p className="mt-2 text-gray-300 font-medium">
              Login to continue
            </p>
          </div>

          {/* ✅ Dark Blur Glass Card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-2xl shadow-2xl border border-white/20">
            <div className="p-8 space-y-7">
              <form className="space-y-7">
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="hello@sudotech.com"
                      className="h-12 w-full rounded-xl border border-white/30 pl-11 pr-3 bg-white/10 
                      focus:outline-none focus:ring-2 focus:ring-orange-500 text-white
                      placeholder-gray-300 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 h-5 w-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 w-full rounded-xl border border-white/30 pl-11 pr-10 bg-white/10 
                      focus:outline-none focus:ring-2 focus:ring-orange-500 text-white
                      placeholder-gray-300 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-500"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Options */}
                <div className="flex items-center justify-between text-gray-300">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded text-orange-400" />
                    Remember me
                  </label>
                  <a href="/forgot-password" className="text-sm text-orange-400 hover:text-orange-300">
                    Forgot Password?
                  </a>
                </div>

                {/* Gradient Button */}
                <button
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-white text-lg font-semibold py-3 
                  bg-linear-to-r from-orange-600 to-red-600 hover:opacity-90 transition-all
                  shadow-orange-500/30 shadow-lg hover:shadow-orange-500/50 hover:scale-[1.02]"
                >
                  Sign In <ArrowRight className="h-5 w-5" />
                </button>

              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white/10 px-3 text-gray-300 text-sm backdrop-blur-xl rounded-md">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-3 gap-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="bg-white/10 rounded-xl p-3 border border-white/20 backdrop-blur-xl 
                    hover:bg-white/20 transition shadow-md"
                  >
                    <Icon className="h-5 w-5 text-orange-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-300 text-sm font-medium">
            Don’t have an account?{" "}
            <a href="/signup" className="text-orange-400 font-bold hover:text-orange-300">
              Create Now
            </a>
          </p>

        </div>
      </div>
    </>
  );
};
export default Login;
