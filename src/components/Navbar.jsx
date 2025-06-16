import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-10 bg-white bg-opacity-75 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Home</Link>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/about" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300">Projects</Link>
            <Link to="/contact" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Hire Me</Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</Link>
            <Link to="/projects" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Projects</Link>
            <Link to="/contact" className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Hire Me</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
