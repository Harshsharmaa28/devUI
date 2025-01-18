import React, { useState } from "react";

const Pagination = () => {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total number of pages

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent going beyond valid pages
    setCurrentPage(page);
    console.log(`Page changed to: ${page}`);
  };

  // Generate page numbers dynamically
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-4 sm:p-8">
      {/* Title */}
      <h1 className="text-xl text-gray-900 sm:text-2xl font-bold text-center mb-6">Pagination Demo</h1>
      
      {/* Content */}
      <div className="text-center text-gray-900 mb-6">
        <p>Displaying data for page {currentPage}</p>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center space-y-4">
        {/* Page Navigation Buttons */}
        <div className="flex justify-between items-center w-full max-w-sm">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-blue-600 border-blue-500 hover:bg-blue-50"
            }`}
          >
            Previous
          </button>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-blue-600 border-blue-500 hover:bg-blue-50"
            }`}
          >
            Next
          </button>
        </div>

        {/* Page Numbers */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 w-full max-w-sm">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 border rounded-lg flex-shrink-0 ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-500 hover:bg-blue-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
