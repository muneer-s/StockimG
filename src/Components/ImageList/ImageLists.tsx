import { useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { deleteImage, getImages, updateImageOrder } from '../../Api/api';
import { useAppSelector } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

interface ImageData {
  _id: string;
  email: string;
  title: string;
  image: string;
  position: number;
}

const SortableImageCard = ({ image, handleDeleteClick, handleEditClick }: {
  image: ImageData;
  handleDeleteClick: (id: string) => void;
  handleEditClick: (img: ImageData) => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/50">
        <div className="relative overflow-hidden">
          <img
            src={image.image}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            alt={image.title}
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
          <div className="flex justify-between">
            <button onClick={() => handleDeleteClick(image._id)} className="text-red-600">Delete 🗑</button>
            <button onClick={() => handleEditClick(image)} className="text-blue-600">Edit ✎</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageLists = () => {
  const { userData } = useAppSelector((state) => state.auth);
  const [images, setImages] = useState<ImageData[]>([]);
  const navigate = useNavigate();

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res: any = await getImages(userData.email);
        const sorted = res.images.sort((a: ImageData, b: ImageData) => a.position - b.position);
        setImages(sorted);
      } catch (err) {
        console.error('Failed to fetch images', err);
        
      }
    };

    fetchImages();
  }, [userData.email]);

  const handleEditClick = (image: ImageData) => {
    navigate('/editImage', { state: { image } });
  };

  const handleDeleteClick = async (imageId: string) => {
    try {
      const res: any = await deleteImage(imageId);
      if (res.success) {
        toast.success(res.message || "Image deleted");
        setImages(prev => prev.filter(img => img._id !== imageId));
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      toast.error("An error occurred while deleting");
    }
  };

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = images.findIndex(img => img._id === active.id);
      const newIndex = images.findIndex(img => img._id === over.id);

      const newOrder = arrayMove(images, oldIndex, newIndex);

      // Update state and position values
      const updated = newOrder.map((img, idx) => ({ ...img, position: idx }));
      setImages(updated);

      try {
        await updateImageOrder(updated.map(({ _id, position }) => ({ _id, position })));
      } catch (err) {
        toast.error("Failed to update image order");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6 mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-purple-600">Image Gallery</h2>
        <p className="text-gray-600 mt-2">Drag and drop to reorder</p>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={images.map(img => img._id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map(img => (
              <SortableImageCard
                key={img._id}
                image={img}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ImageLists;
