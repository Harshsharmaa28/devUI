import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[70%] bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">DevUIx</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:bg-blue-500 px-3 py-2 rounded">Home</a>
            <a href="#about" className="hover:bg-blue-500 px-3 py-2 rounded">About</a>
            <a href="#services" className="hover:bg-blue-500 px-3 py-2 rounded">Services</a>
            <a href="#contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-500">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-500">About</a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-500">Services</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
