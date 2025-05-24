// Using a placeholder image for demonstration
const heroImg = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const HomeComp = () => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 min-h-[85vh] flex items-center justify-center px-6 overflow-hidden mt-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-sm font-medium text-rose-700 mb-4">
              ✨ Premium Stock Images Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                StokeimG
              </span>
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Discover and download high-quality royalty-free stock images for your creative projects. 
              <span className="text-rose-500 font-medium"> Unleash your creativity today.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View Images</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            <a
              href="#"
              className="group relative border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-rose-400 hover:text-rose-600 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="relative z-10">Upload Your Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
          </div>

          {/* Stats or features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">10K+</div>
              <div className="text-sm text-slate-600 font-medium">Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">5K+</div>
              <div className="text-sm text-slate-600 font-medium">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">99%</div>
              <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="relative group">
            {/* Main image container with enhanced styling */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
              <img
                src={heroImg}
                alt="Creative stock imagery"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-pink-500/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl shadow-xl opacity-80 blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg opacity-60 blur-md"></div>
            
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 p-1 -z-10">
              <div className="w-full h-full bg-white rounded-3xl"></div>
            </div>
          </div>

          {/* Floating info cards */}
          <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">High Quality</span>
            </div>
          </div>
          
          <div className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📸</div>
              <span className="text-sm font-medium text-slate-700">Royalty Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComp;