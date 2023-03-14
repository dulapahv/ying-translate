import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed flex items-center justify-between flex-wrap bg-gray-900 p-6 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-manrope font-semibold text-2xl tracking-tight">
                    Logo
                </span>
            </div>
            <div className="flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-lg lg:flex-grow">
                    <a
                        href="#responsive-header"
                        className="font-manrope mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        About
                    </a>
                    <a
                        href="#responsive-header"
                        className="font-manrope mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
