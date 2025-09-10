import React from 'react'
import Navbar from "../components/Navbar"
import {FileTextIcon, MicIcon, PlusIcon} from "lucide-react"
const home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-full flex-col min-h-screen  sm:p-6 text-center ">
        <div className="flex space-x-2 mb:4 sm:mb-6">
          <FileTextIcon size={24} className="text-gray-400" />
          <MicIcon size={24} className="text-gray-400" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-700">
          No note selected
        </h2>
        <p className="text-gray-700 max-w-sm mb-4 sm:mb-6">
          Select a note from the sidebar to view or edit, or create a new note
          to get started.
        </p>

        <button
        //   onClick={onNewNote}
          className="flex items-center gap-1 bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          <PlusIcon size={18} />
          <span>Create a new note</span>
        </button>
      </div>
    </>
  );
}

export default home