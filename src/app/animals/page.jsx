// import AnimlCrad from '@/componets/AnimlCrad';
// import React from 'react';

// const Animalspage = async() => {

    







//     let displayedAnimals = [];

//     try {
//         // cache: 'no-store' ব্যবহার করুন যাতে লেটেস্ট ডাটা আসে
//         const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
//             cache: 'no-store' 
//         });

//         if (res.ok) {
//             const text = await res.text();
//             // JSON-এর শেষের অদৃশ্য ক্যারেক্টার ক্লিন করার জন্য trim()
//             const cleanText = text.trim(); 
//             const animals = JSON.parse(cleanText);
            
//             // সব ডাটা দেখানোর জন্য সরাসরি এসাইন করুন
//             displayedAnimals = animals; 
//         }
//     } catch (error) {
//         console.error("Fetch Error:", error);
//         displayedAnimals = []; 
//     }
  
//     return (

//         <div className="max-w-7xl mx-auto p-6">
//             <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                 All Available Animals ({displayedAnimals.length})
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                {displayedAnimals.length > 0 ? (
//                    displayedAnimals.map(animal => (
//                        <AnimlCrad key={animal.id} animal={animal} />
//                    ))
//                ) : (
//                    <p>No animals found. Please check your Data.</p>
//                )}
//             </div>
//         </div>



//         // <div className="max-w-7xl mx-auto p-6">
//         //     <h2 className="text-2xl font-bold mb-6 text-gray-800 animate__animated animate__fadeIn">
//         //         Featured Animals
//         //     </h2>

//         //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         //        {displayedAnimals.map(animal=><AnimlCrad key={animal.id} animal={animal}></AnimlCrad>)}
               
//         //     </div>
//         // </div>
//     );
// };;

// export default Animalspage;


import AnimlCrad from '@/componets/AnimlCrad';
import React from 'react';

const Animalspage = async ({ searchParams }) => {
    // URL থেকে সর্ট অপশনটি নেওয়া হচ্ছে (ডিফল্টভাবে 'default' থাকবে)
    const sortOrder = (await searchParams).sort || 'default';
    
    let displayedAnimals = [];

    try {
        const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
            cache: 'no-store' 
        });

        if (res.ok) {
            const text = await res.text();
            const cleanText = text.trim(); 
            let animals = JSON.parse(cleanText);
            
            // সর্টিং লজিক প্রয়োগ
            if (sortOrder === 'low') {
                animals.sort((a, b) => a.price - b.price); // কম থেকে বেশি
            } else if (sortOrder === 'high') {
                animals.sort((a, b) => b.price - a.price); // বেশি থেকে কম
            }

            displayedAnimals = animals; 
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        displayedAnimals = []; 
    }
  
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-3xl font-bold text-gray-800">
                    All Available Animals ({displayedAnimals.length})
                </h2>

                {/* সর্টিং বাটনসমূহ */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-xl shadow-sm">
                    <a 
                        href="/animals?sort=default" 
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${sortOrder === 'default' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                         Normal
                    </a>
                    <a 
                        href="/animals?sort=low" 
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${sortOrder === 'low' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Price: Low to High
                    </a>
                    <a 
                        href="/animals?sort=high" 
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${sortOrder === 'high' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Price: High to Low
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {displayedAnimals.length > 0 ? (
                   displayedAnimals.map(animal => (
                       <AnimlCrad key={animal.id} animal={animal} />
                   ))
               ) : (
                   <p className="col-span-full text-center py-10 text-gray-500">No animals found. Please check your data source.</p>
               )}
            </div>
        </div>
    );
};

export default Animalspage;
