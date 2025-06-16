import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-white bg-opacity-75 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Home</Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">Projects</Link>
            <Link to="/contact" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Hire Me</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
