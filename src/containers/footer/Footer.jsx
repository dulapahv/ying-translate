import React from "react";

const Footer = () => {
    return (
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-sm font-light">
                    &copy; 2023 My Website. All Rights Reserved.
                </div>
                <div>
                    <a href="#home" class="mx-2 hover:text-gray-400">
                        Home
                    </a>
                    <a href="#about" class="mx-2 hover:text-gray-400">
                        About
                    </a>
                    <a href="#contact" class="mx-2 hover:text-gray-400">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
