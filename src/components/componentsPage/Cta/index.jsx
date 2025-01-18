import React from "react";

const CTA = () => {
    return (
        <div className="bg-gradient-to-r md:w-[80%] md:h-[80%] from-blue-600 to-yellow-600 text-white flex items-center justify-center py-16 px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold tracking-tight mb-4">
                    Ready to take your next step?
                </h2>

                {/* Description */}
                <p className="text-lg font-light mb-8">
                    Join thousands of users who are making their workflows more efficient
                    and productive. Start your journey today!
                </p>

                {/* Button */}
                <div className="space-x-4">
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow hover:bg-gray-100 transition duration-300">
                        Get Started
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
