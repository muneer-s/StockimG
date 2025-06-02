import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { editImage } from '../../Api/api';
import toast from 'react-hot-toast';

const EditImageComp = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const image = state?.image;

    const [title, setTitle] = useState(image?.title || '');
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>(image?.image || ''); // Assuming imageUrl holds the URL

    useEffect(() => {
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setPreviewUrl(fileUrl);

            // Clean up the object URL after component unmount or file change
            return () => URL.revokeObjectURL(fileUrl);
        } else {
            setPreviewUrl(image?.image || '');
        }
    }, [file, image]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        // if (file) formData.append('image', file);
        formData.append('imageId', image._id);
        if (file) {
            formData.append('image', file);
        } else {
            formData.append('existingImageUrl', image?.image || '');
        }


        try {
            console.log(11, formData)
            const response:any = await editImage(image._id, formData);
            console.log('Image updated:', response);
            toast.success(response?.message)
            navigate('/viewImages');
        } catch (error) {
            console.error('Error updating image', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Image</h2>
            <label className="block mb-2 font-semibold">Title</label>
            <input
                type="text"
                className="w-full border px-3 py-2 mb-4 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <label className="block mb-2 font-semibold">New Image (optional)</label>
            <input
                type="file"
                accept="image/*"
                className="w-full mb-4"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            {previewUrl && (
                <div className="mb-4">
                    <p className="font-semibold mb-1">Image Preview:</p>
                    <img src={previewUrl} alt="Preview" className="w-full rounded border" />
                </div>
            )}

            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                Update
            </button>
        </form>
    );
};

export default EditImageComp;
