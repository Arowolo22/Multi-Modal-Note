

import React from "react";
import { PlusIcon, MenuIcon } from "lucide-react";

export const Navbar = ({ onNewNote, onToggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="mr-3 p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md md:hidden"
          aria-label="Toggle sidebar"
        >
          <MenuIcon size={20} />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Note App</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onNewNote}
          className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          <PlusIcon size={16} />
          <span className="hidden sm:inline">New Note</span>
        </button>
       
      </div>
    </header>
  );
};


export default Navbar
