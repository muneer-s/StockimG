import { useEffect, useState } from 'react';
import { getImages } from '../../Api/api';
import { useAppSelector } from '../../Redux/store';

interface ImageData {
  email: string;
  title: string;
  image: string;
}

const ImageLists = () => {
  const { userData } = useAppSelector((state) => state.auth);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages: any = await getImages(userData.email);
        console.log('img ;;; ', fetchedImages);

        setImages(fetchedImages?.images);
      } catch (err) {
        console.error('Failed to fetch images', err);
      }
    };

    fetchImages();
  }, [userData.email]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
          Image Gallery
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">Discover your visual collection</p>
      </div>

      {/* Loading State */}
      {images.length === 0 && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/50"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img 
                src={img.image} 
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={img.title}
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Hover Icons */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                {img.title}
              </h3>
              
              {/* Decorative Elements */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                </div>
                
                {/* View Button */}
                <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-purple-600 hover:text-purple-800 font-medium">
                  View →
                </button>
              </div>
            </div>

            {/* Accent Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {images.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
          <p className="text-gray-500">Your gallery is waiting for some beautiful images!</p>
        </div>
      )}
    </div>
  );
};

export default ImageLists;