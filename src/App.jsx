import React, { useState } from 'react';
import DayItinerary from './components/DayItinerary';
import { mockItinerary } from './data/mockData';

function App() {
  const [itinerary, setItinerary] = useState(mockItinerary);

  const handleDayUpdate = (updatedDay) => {
    setItinerary(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.id === updatedDay.id ? updatedDay : day
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <header className="flex justify-between items-center p-4 bg-white">
          <h1 className="text-2xl font-bold text-pink-600">Y2Z TRAVEL</h1>
        </header>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Scrollable Content */}
        <main className="w-full lg:w-[600px] bg-white overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
          {itinerary.days.map(day => (
            <DayItinerary 
              key={day.id} 
              day={day} 
              onOrderChange={handleDayUpdate} 
            />
          ))}
        </main>

        {/* Fixed Map */}
        <div className="hidden lg:block flex-1">
          <div className="sticky top-0" style={{ height: '100vh' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5725583374087!2d77.22731081507721!3d28.547977982451657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c16e028cd1%3A0x9c73c3c92e0df97c!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1645541548693!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;