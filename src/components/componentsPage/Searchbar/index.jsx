import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    "React",
    "Angular",
    "Vue",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      setFilteredData([]);
    } else {
      const results = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <div className="md:p-10 w-[80%] flex flex-col items-center justify-center md:w-[100%] md:px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Search Bar</h1>
      {/* Search Bar */}
      <div className="w-full max-w-lg">
        <div className="relative">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search - React"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 border text-gray-950 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 absolute right-3 top-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l-4 4m0 0l4-4m-4 4V8m4 12a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        </div>
        {/* Search Results */}
        {filteredData.length > 0 && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* No Results */}
        {searchQuery && filteredData.length === 0 && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-md">
            <p className="px-4 py-2 text-gray-600">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
