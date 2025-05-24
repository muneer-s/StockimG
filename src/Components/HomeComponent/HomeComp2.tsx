// const img1 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
// const img2 = "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
// const img3 = "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const HomeComp2 = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-rose-50/30 to-white py-20 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-sm font-medium text-rose-700 mb-4">
            🎨 Curated Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-4">
            Featured Images
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our handpicked selection of stunning visuals, carefully chosen to inspire your next creative project.
          </p>
        </div>
        
        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[img1, img2, img3].map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 bg-white"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={img} 
                  alt={`Featured ${idx + 1}`} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
                    <h3 className="font-bold text-slate-800 text-lg mb-1">Premium Quality</h3>
                    <p className="text-slate-600 text-sm mb-3">High-resolution stock image</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-xs text-slate-600 font-medium">Available</span>
                      </div>
                      <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">
                        View
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20">
                  <span className="text-slate-700 font-bold text-sm">{idx + 1}</span>
                </div>

                {/* Like Button */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-rose-50">
                  <svg className="w-5 h-5 text-slate-600 hover:text-rose-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>

              {/* Enhanced Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400/20 via-pink-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5 -z-10">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Images
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeComp2;