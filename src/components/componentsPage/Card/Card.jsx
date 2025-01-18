import React from "react";

const Card = () => {
  // Handle button click
  const handleButtonClick = (title) => {
    alert(`Clicked on: ${title}`);
  };

  // Demo data for cards
  const cards = [
    {
      id: 1,
      image: "https://shorturl.at/dHsQf",
      title: "Nature Landscape",
      description: "Experience the beauty of nature with stunning landscapes.",
      buttonText: "Learn More",
    },
    // {
    //   id: 2,
    //   image: "https://shorturl.at/dHsQf",
    //   title: "Technology",
    //   description: "Stay updated with the latest tech trends and innovations.",
    //   buttonText: "Explore",
    // },
    // {
    //   id: 3,
    //   image: "https://shorturl.at/dHsQf",
    //   title: "Travel Destinations",
    //   description: "Discover top travel destinations and plan your next trip.",
    //   buttonText: "Get Started",
    // },
  ];

  return (
    <div className="flex justify-center items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />

          {/* Details */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4">{card.description}</p>

            {/* CTA Button */}
            <button
              onClick={() => handleButtonClick(card.title)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
