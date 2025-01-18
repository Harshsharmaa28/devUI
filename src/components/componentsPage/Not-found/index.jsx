import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center md:h-[80%] md:w-[80%] bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6">
      {/* Floating 404 Text */}
      <div className="relative">
        <h1 className="text-9xl font-extrabold tracking-widest relative z-10">404</h1>
        <div className="absolute inset-0 z-0 bg-white opacity-10 blur-lg"></div>
      </div>

      {/* Subheading */}
      <p className="text-2xl font-light mt-4">
        Oops! The page you're looking for can't be found.
      </p>

      {/* Back Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:shadow-lg hover:bg-gray-100 transition-all"
      >
        Take Me Home
      </button>
    </div>
  );
};

export default NotFound;
