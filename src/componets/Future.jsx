


// import React, { use } from 'react';

// const Future = () => {

//     // const fethPomiss = async () => {
//     //     const res = await fetch("/Data.json")

//     //     return res.json();

//     // }
//     // console.log(fethPomiss() ,'data json ');

//     // const promiss =fethPomiss()

//     // const creatdata =use(promiss)


//     return (
//         <div>

//         </div>
//     );
// };

// export default Future;







// "use client";
// import Image from 'next/image';
// import React, { use } from 'react';
// // import AnimalCard from '../componets/AnimalCard';

// // ডাটা ফেচ করার ফাংশনটি কম্পোনেন্টের বাইরে রাখা ভালো যাতে প্রতি রেন্ডারে নতুন প্রমিস তৈরি না হয়
// const fetchAnimals = async () => {
//     const res = await fetch("/Data.json");
//     if (!res.ok) throw new Error("Failed to fetch data");
//     return res.json();
// };

// // প্রমিসটি কম্পোনেন্টের বাইরে ডিফাইন করা হচ্ছে
// const animalsPromise = fetchAnimals();

// const Future = () => {
//     // use() হুক প্রমিসটিকে রিজলভ করবে
//     const data = use(animalsPromise);

//     // প্রথম ৪টি ডাটা দেখানোর জন্য slice(0, 4) ব্যবহার করা হয়েছে
//     const displayedAnimals = data.slice(0, 4);

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800 animate__animated animate__fadeIn">
//                 Featured Animals
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {displayedAnimals.map((animal) => (
//                     <div key={animal.id} className="animate__animated animate__fadeInUp">
//                         {/* <AnimalCard animal={animal} /> */}

                        



//                         {/* animail crad  */}

//                         <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
//                             <div className="relative h-48 w-full">
//                                 <Image
//                                     src={animal.image}
//                                     alt={animal.name}
//                                     fill
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//                                     {animal.category}
//                                 </div>
//                             </div>

//                             <div className="p-4 space-y-2">
//                                 <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
//                                 <p className="text-sm text-gray-500">{animal.breed} • {animal.location}</p>

//                                 <div className="flex justify-between items-center pt-2">
//                                     <span className="text-lg font-black text-green-700">৳ {animal.price.toLocaleString()}</span>
//                                     <span className="text-sm font-semibold text-gray-600">{animal.weight} kg</span>
//                                 </div>

//                                 <button className="w-full bg-gray-900 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors mt-2">
//                                     View Details
//                                 </button>
//                             </div>
//                         </div>



//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Future;












import Image from 'next/image';
import React, { use } from 'react';
import AnimlCrad from './AnimlCrad';



const Future = async() => {

    //     const res = await fetch('http://localhost:3000/Data.json')
    //     // const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json')
    // const Animals = await res.json()
    // const displayedAnimals = Animals.slice(0, 4)
    let displayedAnimals = [];

    try {
        // লাইভ ইউআরএল এ ভুল থাকলে যেন বিল্ড না আটকায়
        const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
            next: { revalidate: 10 } 
        });

        if (res.ok) {
            const text = await res.text();
            // এই ট্রিকটি ব্যবহার করুন: ডাটা ক্লিন করে পার্স করা
            const cleanText = text.trim(); 
            const animals = JSON.parse(cleanText);
            displayedAnimals = animals.slice(0, 4);
        }
    } catch (error) {
        console.error("Build-time JSON Error ignored:", error);
        // ডাটা না পেলে খালি অ্যারে থাকবে, কিন্তু বিল্ড ফেইল হবে না
        displayedAnimals = []; 
    }
  
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 animate__animated animate__fadeIn">
                Featured Animals
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

               {displayedAnimals.map(animal=><AnimlCrad key={animal.id} animal={animal}></AnimlCrad>)}
               
            </div>
        </div>
    );
};

export default Future;

