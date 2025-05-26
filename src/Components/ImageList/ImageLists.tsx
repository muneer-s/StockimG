import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
const dummyImages = [ img1, img2, img3,img4, img5];

const ImageLists = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-6">
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-10">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyImages.map((image) => (
          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-pink-300"
          >
            <img src={image} className="w-full h-48 object-cover" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLists;
