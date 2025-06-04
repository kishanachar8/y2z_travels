import React, { useState } from 'react';
import Header from './components/Header';
import DayItinerary from './components/DayItinerary';
import { mockItinerary } from './data/mockData';
import { Itinerary, Day } from './types';

function App() {
  const [itinerary, setItinerary] = useState<Itinerary>(mockItinerary);

  const handleDayUpdate = (updatedDay: Day) => {
    setItinerary(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.id === updatedDay.id ? updatedDay : day
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Y2Z TRAVEL" />
      
      <div className="flex flex-col lg:flex-row">
        <main className="w-full lg:w-[600px] bg-white min-h-[calc(100vh-64px)] shadow-sm">
          {itinerary.days.map(day => (
            <DayItinerary 
              key={day.id} 
              day={day} 
              onOrderChange={handleDayUpdate} 
            />
          ))}
        </main>
        
        <div className="hidden lg:block flex-1 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5725583374087!2d77.22731081507721!3d28.547977982451657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c16e028cd1%3A0x9c73c3c92e0df97c!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1645541548693!5m2!1sen!2sin" 
            className="w-full h-[calc(100vh-64px)]" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default App;