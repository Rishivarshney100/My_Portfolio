import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { socialLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-[999] bg-white dark:bg-gray-900 bg-opacity-75 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Home
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <Link to="/about" className="text-lg font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link to="/projects" className="text-lg font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Projects
              </Link>
              <Link to="/contact" className="text-xl font-bold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Hire Me
              </Link>
              <div className="flex items-center gap-4 ml-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <img
                      src={link.iconUrl}
                      alt={link.name}
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="-mr-2 flex sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            <Link to="/projects" className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Projects
            </Link>
            <Link to="/contact" className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Hire Me
            </Link>
            <div className="flex items-center gap-4 px-3 py-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
