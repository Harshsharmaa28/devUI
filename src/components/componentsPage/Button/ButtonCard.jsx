import React, { useState } from 'react';


const ButtonCard = ({ label, color, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="border rounded-lg p-4 w-[50%] shadow-md flex justify-between">
      <div className="">
        <button className={`${color} text-white px-4 py-2 rounded hover:opacity-80 transition`}>
          {label}
        </button>
      </div>
      {/* View Code and Copy Button */}
      <div className="flex items-center gap-10">
        <button
          onClick={() => setShowCode(!showCode)}
          className="text-blue-500 underline hover:text-blue-700 transition"
        >
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center text-gray-950 bg-gray-100 p-2 rounded hover:bg-gray-300 transition"
        >
          {/* <FiCopy className="mr-2" /> */}
          {copied ? 'Copied' : 'Copy Code'}
        </button>
      </div>

      {/* Code Display */}
      {showCode && (
        <div className="mt-4 absolute bg-gray-800 p-4 rounded text-sm">
          <pre>{code}</pre>
        </div>
      )}
    </div>
  );
};

export default ButtonCard;
