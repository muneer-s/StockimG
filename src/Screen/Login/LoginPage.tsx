import { useState } from "react";
import { Eye, EyeOff, Sparkles, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";


// Mock Lottie animation component
const Lottie = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-3xl flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 animate-pulse"></div>
      <div className="relative z-10 text-center">
        <Heart className="w-20 h-20 text-pink-500 mx-auto mb-4 animate-bounce" />
        <Sparkles className="w-12 h-12 text-rose-400 mx-auto animate-spin" />
      </div>
      <div className="absolute top-4 left-4 w-3 h-3 bg-white/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-6 right-6 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
    </div>
  );
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  
  const togglePassword = () => setShowPassword((prev) => !prev);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-rose-900 to-pink-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-pink-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-16 w-1 h-1 bg-violet-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-rose-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12">
        {/* Animation section */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center px-8">
          <div className="w-[450px] max-w-full">
            <Lottie />
          </div>
        </div>

        {/* Login form */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative">
            {/* Glassmorphism container */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 max-w-lg w-full border border-white/10 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/70 text-sm">Sign in to your StokeimG account</p>
              </div>

              <div className="space-y-6">
                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label htmlFor="password" className="block text-sm font-semibold text-white/90 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 pr-12 group-hover:bg-white/15"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePassword}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-pink-400 transition-colors duration-200 p-1"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Remember me & Forgot password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                      <input type="checkbox" className="sr-only" />
                      <div className="w-4 h-4 mr-2 border border-white/30 rounded bg-white/10 flex items-center justify-center hover:border-pink-400 transition-colors">
                        <div className="w-2 h-2 bg-pink-400 rounded opacity-0 hover:opacity-100 transition-opacity"></div>
                      </div>
                      Remember me
                    </label>
                    <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Forgot password?
                    </a>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      onClick={handleSubmit}
                      className="relative w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 overflow-hidden group disabled:opacity-50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 transition-transform duration-300 group-hover:scale-105"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Signing in...
                          </>
                        ) : (
                          'Sign In'
                        )}
                      </span>
                    </button>

                    <button
                      onClick={() => navigate(-1)}
                      className="relative w-full py-4 rounded-2xl font-semibold text-white/80 transition-all duration-300 overflow-hidden group border border-white/20 hover:border-white/40"
                    >
                      <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>
                      <span className="relative z-10">Cancel</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-white/60">New to StokeimG?</span>
                    </div>
                  </div>

                  {/* Sign up link */}
                  <div className="text-center">
                    <a href="/register" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-200">
                      Create an account
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;