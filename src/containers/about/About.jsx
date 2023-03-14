import React from "react";

const About = () => {
    return (
        <div id="about">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,229.3C672,213,768,171,864,160C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div className="bg-[#0099ff] text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
                            <img
                                className="w-full rounded-lg shadow-lg"
                                src="https://picsum.photos/id/24/800/500"
                                alt=""
                            ></img>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-xl font-bold mb-4">
                                My Experiences
                            </h3>
                            <ul className="list-disc ml-6">
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                            </ul>
                            <h3 className="text-xl font-bold mt-6 mb-4">
                                Lorem Ipsum
                            </h3>
                            <p className="leading-loose">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#0099ff"
                    d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,74.7C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default About;
