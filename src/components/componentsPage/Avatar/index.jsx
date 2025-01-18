import React from "react";

const Avatar = () => {
  const avatars = [
    { src: "https://shorturl.at/0THyR", name: "John Doe" },
    // { src: "https://source.unsplash.com/100x100/?person", name: "Jane Smith" },
    // { src: "https://source.unsplash.com/100x100/?face", name: "Chris P." },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6">

      {/* Render all avatars */}
      <div className="space-y-4">
        {avatars.map((avatar, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Avatar Image */}
            <img
              src={avatar.src}
              alt={avatar.name}
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />

            {/* Avatar Name */}
            <span className="text-white-800 font-medium">{avatar.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
