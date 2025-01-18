import React from "react";

const Introduction = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-50 p-6 sm:p-12 lg:p-20 text-center lg:text-left">
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
                    Welcome to DevUIX
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    DevUIX provides powerful, modern, and responsive components to enhance your UI/UX design. Explore our library to create stunning designs effortlessly.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </div>

            {/* Right Section: Image or Illustration */}
            {/* <div className="lg:w-1/2">
                <img
                    src="https://via.placeholder.com/500x300"
                    alt="UI/UX Design Illustration"
                    className="w-full h-auto rounded-lg shadow"
                />
            </div> */}
        </div>
    );
};

export default Introduction;
