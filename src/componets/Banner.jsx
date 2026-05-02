

// import { Button, ButtonGroup } from '@heroui/react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('/herebanner1.png')` }} className=" w-11/12 mx-auto relative h-[80vh]  bg-cover bg-no-repeat bg-center flex items-center  rounded-lg overflow-hidden shadow-2xl ">

      




   


            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-6 w-full text-white z-10">

                    {/* Text Section: Centered on mobile, left-aligned on desktop */}



                    <div className="text-center md:text-left">
                       
                        <h1 className="animate__animated animate__fadeInDown text-3xl sm:text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">
                            Quality Livestock for <br className="hidden sm:block" />
                            <span className="text-green-500 inline-block animate__animated animate__pulse animate__infinite animate__slow">
                                Your Qurbani
                            </span>
                        </h1>

                        
                        <p className="animate__animated animate__fadeInUp animate__delay-1s text-base sm:text-lg md:text-xl mb-8 max-w-xl text-gray-300 mx-auto md:mx-0">
                            Explore healthy cows and goats from top breeds. Book yours today with ease.
                        </p>

                        
                        <div className="animate__animated animate__fadeInLeft animate__delay-2s flex flex-col sm:flex-row justify-center md:justify-start gap-4">

                            {/* Primary Button */}
                            <Link href="/animals" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 rounded-xl px-8 py-2"
                                >
                                    Browse Animals
                                </Button>
                            </Link>

                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;

