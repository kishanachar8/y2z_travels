import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Map, Edit2, Trash2, MapPin, MoreVertical, GripVertical } from 'lucide-react';
import clsx from 'clsx';

const DraggableAttraction = ({ attraction, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: attraction.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1000 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        'bg-white rounded-lg mb-4 relative',
        isDragging ? 'shadow-xl' : 'shadow'
      )}
    >
      <div className="flex p-2 items-center">
        <div className="flex items-center pr-2" {...attributes} {...listeners}>
          <GripVertical className="text-gray-400 cursor-grab" />
        </div>
        
        <div className="flex flex-1">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <div className="absolute top-0 left-0 w-6 h-6 bg-purple-500 flex items-center justify-center text-white font-bold text-sm z-10">
              {index + 1}
            </div>
            <img 
              src={attraction.image} 
              alt={attraction.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{attraction.name}</h3>
              <div className="flex space-x-1">
                <button className="p-1 text-yellow-500">
                  <MapPin className="w-4 h-4" />
                </button>
                <button className="p-1">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mt-0.5">
              <span className="font-medium">{attraction.rating}</span>
              <span className="mx-1">★</span>
              <span className="text-gray-400">({attraction.reviews.toLocaleString()})</span>
            </div>
            
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              {attraction.description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between border-t border-gray-100 px-2 py-1">
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Edit2 className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Map className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded-full">
          <Trash2 className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default DraggableAttraction;