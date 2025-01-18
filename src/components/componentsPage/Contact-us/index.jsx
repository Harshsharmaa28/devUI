import React from "react";

const ContactUs = () => {
    return (
        <div className="md:w-[90%] w-[100%] max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row mx-auto my-8">
            {/* Left Section: Contact Details */}
            <div className="vsm:max-sm:hidden bg-blue-600 text-white flex flex-col justify-center items-start px-6 py-8 sm:px-10 sm:py-12 lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-sm sm:text-lg font-light mb-6">
                    We’re here to help and answer any question you might have. Reach out to us, and we’ll respond as soon as possible.
                </p>
                <div className="space-y-4 text-sm sm:text-lg">
                    <p className="flex items-center">
                        <span className="mr-3 text-blue-300">
                            <i className="fas fa-phone-alt"></i>
                        </span>
                        +1 123 456 7890
                    </p>
                    <p className="flex items-center">
                        <span className="mr-3 text-blue-300">
                            <i className="fas fa-envelope"></i>
                        </span>
                        support@example.com
                    </p>
                    <p className="flex items-center">
                        <span className="mr-3 text-blue-300">
                            <i className="fas fa-map-marker-alt"></i>
                        </span>
                        123 Street, City, Country
                    </p>
                </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="p-4 sm:p-8 lg:w-1/2">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                    Drop Us a Message
                </h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Write your message here"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
