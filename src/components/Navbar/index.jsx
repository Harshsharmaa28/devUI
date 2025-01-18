"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row px-4 md:px-20 py-6 bg-gray-900 border-b border-gray-500">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <span className="text-3xl font-extrabold text-white hover:cursor-pointer">
          DevUIx
        </span>
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } md:flex md:items-center md:ml-auto mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 font-semibold text-lg text-white">
          <Link href="/" className="hover:cursor-pointer hover:text-gray-300">
            Home
          </Link>
          <Link
            href="/components"
            className="hover:cursor-pointer hover:text-gray-300"
          >
            Components
          </Link>
          <Link
            href="/about-us"
            className="hover:cursor-pointer hover:text-gray-300"
          >
            About Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
