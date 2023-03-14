import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <>
            <div className="pt-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#0099ff"
                        d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,149.3C672,181,768,203,864,224C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8 pt-8 pb-16 md:pb-20 px-6 md:px-10">
                <div className="text-zinc-700 font-manrope text-center space-y-4 sm:space-y-8">
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        Ying Translate
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium">
                        Government Interpreter and Translator
                    </h2>
                    <h3 className="text-xl md:text-2xl">
                        English to Thai and from Thai to English
                    </h3>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#0099ff] text-zinc-50 px-5 py-2 rounded hover:bg-[#00b3ff] text-lg md:text-2xl"
                >
                    Learn More
                </motion.button>
            </div>
        </>
    );
};

export default Header;
