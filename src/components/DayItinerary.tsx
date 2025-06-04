import React, { useState } from 'react';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable';
import { Day } from '../types';
import DraggableAttraction from './DraggableAttraction';
import { Plus } from 'lucide-react';

interface DayItineraryProps {
  day: Day;
  onOrderChange: (day: Day) => void;
}

const DayItinerary: React.FC<DayItineraryProps> = ({ day, onOrderChange }) => {
  const [items, setItems] = useState(day.attractions);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
          ...item,
          position: index + 1
        }));
        
        // Update the parent component with the new order
        onOrderChange({
          ...day,
          attractions: newItems
        });
        
        return newItems;
      });
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Itinerary</h2>
      <h3 className="text-gray-500 mb-4">{day.name}</h3>
      
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={items.map(item => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((attraction, index) => (
            <DraggableAttraction 
              key={attraction.id} 
              attraction={attraction} 
              index={index}
            />
          ))}
        </SortableContext>
      </DndContext>

      <div className="flex items-center mt-2 text-gray-500">
        <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded mr-2">
          <span className="text-blue-600 font-bold">M</span>
        </div>
        <span className="text-sm">Credit...</span>
        <div className="ml-auto flex space-x-2">
          <button className="p-1">
            <span className="text-gray-400">︙</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-gray-50">
            <Plus className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayItinerary;