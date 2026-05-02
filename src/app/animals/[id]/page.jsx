


import Image from 'next/image';
import React from 'react';

const AnimalsDetealspage = async ({ params }) => {
    const { id } = await params;

    // const res = await fetch('http://localhost:3000/Data.json')
    const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json')
    const Animals = await res.json()
    const animal = Animals.find(A => A.id == id)


    // console.log(id,Animal);
    return (
        <div className="max-w-6xl mx-auto p-6 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">

                {/* বাম পাশ: ইমেজ সেকশন */}
                <div className="relative h-[400px] md:h-full w-full group">
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            className="object-contain p-2  " // 'object-cover' এর বদলে 'object-contain' ব্যবহার করুন
                            priority
                            unoptimized={true}
                        />
                    </div>
                   
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        {animal.category}
                    </div>
                </div>

                {/* ডান পাশ: বিস্তারিত তথ্য */}
                <div className="p-8 flex flex-col justify-center space-y-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900">{animal.name}</h1>
                        <p className="text-lg text-green-700 font-semibold">{animal.breed} • {animal.type}</p>
                    </div>

                    <hr className="border-gray-100" />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Price</p>
                            <p className="text-2xl font-bold text-gray-900">৳ {animal.price.toLocaleString()}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Weight</p>
                            <p className="text-2xl font-bold text-gray-900">{animal.weight} kg</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Age</p>
                            <p className="text-xl font-semibold text-gray-900">{animal.age} Years</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Location</p>
                            <p className="text-xl font-semibold text-gray-900">{animal.location}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-800">Description</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {animal.description}
                        </p>
                    </div>

                    <div className="pt-6">
                        <button className="w-full bg-green-700 text-white py-4 rounded-2xl font-bold text-xl hover:bg-gray-900 transition-all shadow-lg active:scale-95">
                            Confirm Booking Now
                        </button>
                        <p className="text-center text-sm text-gray-400 mt-4 italic">
                            * Please visit our farm for a physical inspection before final payment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalsDetealspage;