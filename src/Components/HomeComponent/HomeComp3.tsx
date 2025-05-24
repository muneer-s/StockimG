import { Upload, Image } from "lucide-react";

const features = [
    {
        icon: <Upload size={32} className="text-pink-600" />,
        title: "Upload",
        description: "Contribute your photos and build a global portfolio with ease and visibility.",
    },
    {
        icon: <Image size={32} className="text-pink-600" />,
        title: "Explore",
        description: "Browse a curated collection of visuals across categories, styles, and moods.",
    },
];

const HomeComp3 = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-rose-50/30 py-24 px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-purple-200/15 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                {/* Enhanced Header Section */}
                <div className="mb-20 space-y-6">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full text-sm font-medium text-rose-700 mb-6">
                        ⚡ Platform Features
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                            StokeimG
                        </span>
                        ?
                    </h2>
                    <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        We provide a platform for creators to share, explore, and upload top-quality stock images with ease.
                        <span className="block mt-2 text-rose-500 font-medium">Built by creators, for creators.</span>
                    </p>
                </div>

                {/* Enhanced Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-2"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-pink-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 space-y-6">
                                {/* Enhanced Icon Container */}
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transform transition-shadow duration-300 group-hover:scale-110">
                                        <div className="w-16 h-16 bg-gradient-to-br from-white to-rose-50 rounded-xl flex items-center justify-center shadow-inner">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    {/* Floating decorative elements */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                                </div>

                                {/* Enhanced Text Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Interactive Element */}
                                <div className="pt-4">
                                    <button className="group/btn inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors duration-300">
                                        Learn More
                                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Enhanced Border Effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400/10 via-pink-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5 -z-10">
                                <div className="w-full h-full bg-white rounded-3xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced Call to Action */}
                <div className="mt-20 space-y-6">
                    <p className="text-slate-600 text-lg font-medium">Ready to get started?</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                            <span className="relative z-10">Start Exploring</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                        </button>
                        <button className="group relative border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-rose-400 hover:text-rose-600 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            <span className="relative z-10">Upload Images</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeComp3;