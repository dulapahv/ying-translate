import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Contact Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            orem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <div className="mt-8">
                            <div className="flex">
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Address
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        123 Lorem St
                                        <br />
                                        Lorem, Thailand 12345
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M22 11.08V12a10 10 0 11-5.93-9.14"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M22 4L12 14.01l-3-3"
                                    />
                                </svg>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Phone
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        (123) 456-7890
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20 15v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16-2V9a4 4 0 00-4-4H6a4 4 0 00-4 4v4m16-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
                                    />
                                </svg>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Email
                                    </h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        info@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <form
                            action="#"
                            method="POST"
                            className="grid grid-cols-1 gap-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
