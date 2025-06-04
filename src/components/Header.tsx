import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-pink-600">Y2Z TRAVEL</h1>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100 lg:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;