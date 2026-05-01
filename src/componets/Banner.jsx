

// import { Button, ButtonGroup } from '@heroui/react';
import { Button } from "@heroui/react";
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('/herebanner1.png')` }} className=" w-11/12 mx-auto relative h-[80vh]  bg-cover bg-no-repeat bg-center flex items-center  rounded-lg overflow-hidden shadow-2xl ">

      
<h1>add new awsome none way </h1>
            {/* Overlay */}
            {/* <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Turn Ideas into Stunning AI Art
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Generate high-quality images from simple text prompts.
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Generate Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div> */}




            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full text-white">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">
                        Quality Livestock for <br />
                        <span className="text-green-500">Your Qurbani</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-300">
                        Explore healthy cows and goats from top breeds. Book yours today with ease.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/animals">
                            <Button size="lg" color="success" className="font-bold text-white shadow-lg">
                                Browse Animals
                            </Button>
                        </Link>

                        <Link href="/pricing">
                            <Button size="lg" variant="bordered" className="text-white border-white hover:bg-white hover:text-black font-semibold">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div> */}



            {/* ২. Overlay - এটি শুধুমাত্র এই ডিভ-এর ভেতরেই থাকবে */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                
                <div className="max-w-7xl mx-auto px-6 w-full text-white z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">
                        Quality Livestock for <br />
                        <span className="text-green-500">Your Qurbani</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-300">
                        Explore healthy cows and goats from top breeds. Book yours today with ease.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/animals">
                            <Button size="lg" color="success" className="font-bold text-white shadow-lg">
                                Browse Animals
                            </Button>
                        </Link>

                        <Link href="/pricing">
                            <Button size="lg" variant="bordered" className="text-white border-white hover:bg-white hover:text-black font-semibold">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div> */}


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

                        {/* ৩. বাটন সেকশন: বাম দিক থেকে স্লাইড করে আসবে (২ সেকেন্ড দেরি করে) */}
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

                            {/* Secondary Button */}
                            <Link href="/pricing" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    variant="bordered"
                                    className="w-full sm:w-auto text-white border-2 border-white/50 hover:border-white hover:bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 rounded-xl px-8 py-2"
                                >
                                    View Pricing
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

