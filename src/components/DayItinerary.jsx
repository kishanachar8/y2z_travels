import React, { useState } from 'react';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import DraggableAttraction from './DraggableAttraction';
import { Plus } from 'lucide-react';

const DayItinerary = ({ day, onOrderChange }) => {
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

  function handleDragEnd(event) {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
          ...item,
          position: index + 1
        }));
        
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
          <div className="space-y-4">
            {items.map((attraction, index) => (
              <DraggableAttraction 
                key={attraction.id} 
                attraction={attraction} 
                index={index}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className="flex items-center mt-4 text-gray-500">
        <button className="w-full flex items-center justify-center p-2 border border-dashed border-gray-300 rounded-lg hover:bg-gray-50">
          <Plus className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-sm text-gray-600">Add Activity</span>
        </button>
      </div>
    </div>
  );
};

export default DayItinerary;