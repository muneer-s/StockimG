import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { uploadImage } from '../../Api/api';
import { useAppSelector } from '../../Redux/store';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ImageAdd = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { userData } = useAppSelector((state) => state.auth);
  const email = userData.email

  const navigate = useNavigate()
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if ( !email) {
      Swal.fire({
        icon: 'warning',
        title: 'Please login',
        text: 'Please login!',
        confirmButtonColor: '#d33',
      }); 
      return;
    }

    if (!title || !image) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please add a title and an image!',
        confirmButtonColor: '#d33',
      }); 
      return;
    }

    // Handle form submission (e.g., send to backend)
    console.log('Title:', title);
    console.log('Image:', image);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("email", email);


 try {
       let result:any = await uploadImage(formData);
       console.log(111,result);
       

     toast.success(result.message)

      setTitle("");
      setImage(null);
      setPreviewUrl(null);
      navigate('/')
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Something went wrong. Try again!",
        confirmButtonColor: "#d33",
      });
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">Add New Image</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter image title"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-white border border-gray-300 rounded-md p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {previewUrl && (
            <div className="relative mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-60 object-cover rounded-lg border border-gray-300 shadow-sm"
              />
              <button
                type="button"
                onClick={handleCancelImage}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md"
              >
                Cancel
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageAdd;
