import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
// import React from 'react';

const Footer = () => {
    return (
        <div className='bg-red-400'>
            <footer className="bg-gray-900 text-white pt-12 pb-8">
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* ১. About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={40}
                                height={40}
                                className="bg-white rounded-full p-1"
                            />
                            <h3 className="text-2xl font-black text-green-500">QurbaniHat</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            QurbaniHat is your trusted digital marketplace for healthy and certified livestock.
                            We connect you with the best breeds to ensure your Qurbani is easy, transparent, and sacred.
                        </p>
                    </div>

                    {/* ২. Quick Links & Socials */}
                    <div className="flex flex-col md:items-center">
                        <div>
                            <h4 className="text-lg font-bold mb-4 border-b-2 border-green-600 inline-block">Follow Us</h4>
                        

                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li>
                                    <Link href="#" className="flex items-center gap-3 hover:text-green-500 transition group">
                                        <FaFacebook className="text-lg" />
                                        <span>Facebook</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center gap-3 hover:text-green-500 transition group">
                                        <FaInstagram className="text-lg" />
                                        <span>Instagram</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center gap-3 hover:text-green-500 transition group">
                                        <FaXTwitter className="text-lg" />
                                        <span>Twitter</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="flex items-center gap-3 hover:text-green-500 transition group">
                                        <IoLogoYoutube className="text-lg" />
                                        <span>YouTube</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ৩. Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-green-600 inline-block">Contact Info</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500">📍</span>
                                Moulvibazar Govt. College Area, Sylhet, Bangladesh
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500">📞</span>
                                +880 17XX-XXXXXX
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-green-500">✉️</span>
                                support@qurbanihat.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved. Developed by Farhad Ahmed.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;



