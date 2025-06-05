# Y2Z Travel Itinerary Planner

A modern, interactive travel itinerary planner with smooth drag-and-drop functionality for organizing your daily activities.

![Y2Z Travel Itinerary Planner](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%288%29-5o6RkQJoAMWnGYMIQsqU9zOFvBxCgv.png)

## ✨ Features

- **Smooth Drag & Drop**: Reorder your activities with fluid animations and visual feedback
- **Responsive Design**: Works perfectly on both mobile and desktop devices
- **Interactive UI**: Clean, modern interface with intuitive controls
- **Activity Management**: Add, reorder, and remove activities from your itinerary
- **Visual Feedback**: Clear visual cues during drag operations
- **Location Integration**: Map view with activity locations (desktop view)

## 🚀 Tech Stack

- **React**: Frontend library for building the user interface
- **Framer Motion**: Animation library for smooth drag-and-drop functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Lightweight icon library

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/y2z-travel-itinerary.git
   cd y2z-travel-itinerary
   ```

2. Install all dependencies:
   ```bash
   npm install next react react-dom
   npm install framer-motion
   npm install tailwindcss postcss autoprefixer
   npm install lucide-react
   npm install class-variance-authority
   npm install clsx tailwind-merge
   npm install tailwindcss-animate
   ```

   Or install all at once:
   ```bash
   npm install next react react-dom framer-motion tailwindcss postcss autoprefixer lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate
   ```

   Using yarn:
   ```bash
   yarn add next react react-dom framer-motion tailwindcss postcss autoprefixer lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate
   ```

3. Initialize Tailwind CSS:
   ```bash
   npx tailwindcss init -p
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser to see the application.

## 📦 Dependencies

### Core Dependencies
- `next`: ^14.0.0 - React framework
- `react`: ^18.0.0 - React library
- `react-dom`: ^18.0.0 - React DOM renderer

### Animation & Interaction
- `framer-motion`: ^10.16.0 - Animation library for drag-and-drop

### Styling
- `tailwindcss`: ^3.3.0 - CSS framework
- `postcss`: ^8.4.0 - CSS processor
- `autoprefixer`: ^10.4.0 - CSS autoprefixer
- `tailwindcss-animate`: ^1.0.7 - Tailwind animations

### UI & Icons
- `lucide-react`: ^0.294.0 - Icon library
- `class-variance-authority`: ^0.7.0 - Component variants
- `clsx`: ^2.0.0 - Conditional classes
- `tailwind-merge`: ^2.0.0 - Tailwind class merging

## 🔍 Usage

### Basic Usage

1. View your daily itinerary with all planned activities
2. Drag and drop activities to reorder them within your day
3. Click on map pins to see activity locations
4. Use the "+" button to add new activities

### Drag & Drop

The core feature of this application is the smooth drag-and-drop functionality:

1. Hover over an activity card to see it become draggable
2. Click and hold on the drag handle (vertical dots) or anywhere on the card
3. Drag the card to a new position in the list
4. Release to drop the card in its new position
5. Enjoy the smooth animation as other cards adjust to accommodate the change

## 📁 Project Structure

```
y2z-travel-itinerary/
├── app/
│   ├── page.jsx         # Main itinerary page component
│   ├── layout.jsx       # Root layout component
│   └── globals.css      # Global styles
├── components/
│   └── ui/              # UI components (buttons, etc.)
├── lib/
│   └── utils.js         # Utility functions
├── public/
│   └── images/          # Static images
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
└── README.md            # Project documentation
```

## 🧩 Components

- **ItineraryPlanner**: Main component that handles the itinerary state and rendering
- **Reorder.Group**: Framer Motion component for managing the draggable group
- **Reorder.Item**: Framer Motion component for individual draggable items

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔮 Future Enhancements

- Multi-day itinerary support
- Real map integration with Google Maps or Mapbox
- Activity search and recommendations
- Time scheduling for activities
- Route optimization
- User accounts and saved itineraries
- Sharing capabilities
- Mobile app version

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from Y2Z Travel
- Icons from Lucide React
- Animation powered by Framer Motion

---

Built with ❤️ by Kishan
```

