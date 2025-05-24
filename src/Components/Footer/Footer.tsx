import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Enhanced Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                StokeimG
              </h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              A modern stock image platform providing high-quality, royalty-free images for your creative projects.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Serving creators worldwide</span>
            </div>
          </div>

          {/* Enhanced Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  View Image
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Upload
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Connect with Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"></div>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Follow us on social media for the latest updates and featured content.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center hover:bg-sky-600 hover:border-sky-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3 pt-4">
              <p className="text-gray-400 text-sm">Stay updated with our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-l-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-2 rounded-r-xl text-white text-sm font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent h-px"></div>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} StokeimG. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with ❤️ for creative professionals
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;