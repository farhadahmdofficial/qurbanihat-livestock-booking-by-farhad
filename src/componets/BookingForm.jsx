"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingForm = ({ animalName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const toastId = toast.loading("Processing your booking...");

        setTimeout(() => {
            toast.success(`Success! Your booking for ${animalName} is confirmed.`, { id: toastId });
            setIsOpen(false); 
            e.target.reset(); 
        }, 1500);
    };

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-xl hover:bg-gray-900 transition-all shadow-lg active:scale-95"
            >
                Confirm Booking Now
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate__animated animate__fadeIn">
                    <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate__animated animate__zoomIn">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Booking Form</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 text-2xl">&times;</button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input required type="text" className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input required type="tel" className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="017XXXXXXXX" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea required className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Your location"></textarea>
                            </div>
                            
                            <div className="bg-green-50 p-3 rounded-xl">
                                <p className="text-sm text-green-800 font-medium text-center">Booking for: <span className="font-bold">{animalName}</span></p>
                            </div>

                            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-all">
                                Submit Booking
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingForm;