


   {/* <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Animals</Link>
          </li>
        
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul> */}





// nave berr responsive 

        "use client";
import React, { useState } from 'react';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navber = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু টগল করার জন্য
    const user = null; // আপনার Auth লজিক অনুযায়ী এটি পরিবর্তন হবে

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Animals', href: '/animals' },
        { name: 'Profile', href: '/profile' },
    ];

    return (
        <div className="border-b px-4 sticky top-0 bg-white z-50">
            <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                
                {/* ১. লোগো সেকশন */}
                <div className="flex gap-2 items-center">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={35}
                        height={35}
                        priority
                        className="object-contain"
                    />
                    <h3 className="font-black text-xl text-green-700">Fahbiha Agro</h3>
                </div>

                {/* ২. ডেস্কটপ মেনু (বড় স্ক্রিনে দেখাবে, মোবাইলে hidden) */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                href={link.href} 
                                className={`${
                                    pathname === link.href 
                                    ? "text-green-600 font-bold border-b-2 border-green-600 pb-1" 
                                    : "text-gray-600 hover:text-green-600 transition-colors"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ৩. ডানদিকের সেকশন (Auth এবং মোবাইল বাটন) */}
                <div className="flex items-center gap-4">
                    {/* ডেস্কটপ অথেনটিকেশন বাটন */}
                    <div className="hidden md:flex gap-4 items-center">
                        {!user ? (
                            <>
                                <Link href="/login" className="text-sm font-semibold text-gray-600 hover:text-green-600">SignIn</Link>
                                <Link href="/register">
                                    <Button size="sm" color="success" className="text-white font-bold px-5">SignUp</Button>
                                </Link>
                            </>
                        ) : (
                            <div className="flex gap-3 items-center">
                                <Avatar size="sm" src={user?.image} name={user?.name?.charAt(0)} isBordered color="success" />
                                <Button size="sm" color="danger" variant="flat" className="font-bold">SignOut</Button>
                            </div>
                        )}
                    </div>

                    {/* ৪. মোবাইল হ্যামবার্গার বাটন (শুধু ছোট স্ক্রিনে দেখাবে) */}
                    <button 
                        className="md:hidden p-2 text-gray-600 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* ৫. মোবাইল মেনু ড্রপডাউন (ছোট স্ক্রিনে দেখাবে) */}
            {isOpen && (
                <div className="md:hidden absolute left-0 right-0 top-[65px] bg-white border-b shadow-lg py-5 px-6 z-40 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
                                    className={`block text-lg ${
                                        pathname === link.href ? "text-green-600 font-bold" : "text-gray-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <hr className="border-gray-100" />
                        {!user ? (
                            <div className="flex flex-col gap-4">
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-2 font-semibold text-gray-600">SignIn</Link>
                                <Link href="/register" onClick={() => setIsOpen(false)}>
                                    <Button color="success" className="w-full text-white font-bold py-6">SignUp</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 py-2 border-t pt-4">
                                    <Avatar size="sm" src={user?.image} name={user?.name?.charAt(0)} isBordered color="success" />
                                    <span className="font-medium text-gray-700">{user?.name || "User Name"}</span>
                                </div>
                                <Button color="danger" variant="flat" className="w-full font-bold py-6">SignOut</Button>
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navber;







// banner animiton add 

<div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 max-w-2xl leading-tight">
                            Quality Livestock for <br className="hidden sm:block" />
                            <span className="text-green-500  ">Your Qurbani</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-gray-300 mx-auto md:mx-0">
                            Explore healthy cows and goats from top breeds. Book yours today with ease.
                        </p>

                        {/* Buttons: Stacked on small mobile, row on larger screens */}
                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            {/* <Link href="/animals" className="w-full sm:w-auto">
               
               

                            {/* Secondary Button: View Pricing */}
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
