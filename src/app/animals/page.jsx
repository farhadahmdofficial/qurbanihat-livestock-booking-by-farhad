import AnimlCrad from '@/componets/AnimlCrad';
import React from 'react';

const Animalspage = async() => {

    // //     const res = await fetch('http://localhost:3000/Data.json')
    // //     // const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json')
    // // const Animals = await res.json()
    // // const displayedAnimals = Animals.slice(0, 4)
    // let displayedAnimals = [];

    // try {
    //     // লাইভ ইউআরএল এ ভুল থাকলে যেন বিল্ড না আটকায়
    //     const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
    //         next: { revalidate: 10 } 
    //     });

    //     if (res.ok) {
    //         const text = await res.text();
    //         // এই ট্রিকটি ব্যবহার করুন: ডাটা ক্লিন করে পার্স করা
    //         const cleanText = text.trim(); 
    //         const animals = JSON.parse(cleanText);
    //         displayedAnimals = animals.slice();
    //         // displayedAnimals = animals.slice(0, 14);
    //     }
    // } catch (error) {
    //     console.error("Build-time JSON Error ignored:", error);
    //     // ডাটা না পেলে খালি অ্যারে থাকবে, কিন্তু বিল্ড ফেইল হবে না
    //     displayedAnimals = []; 
    // }








    let displayedAnimals = [];

    try {
        // cache: 'no-store' ব্যবহার করুন যাতে লেটেস্ট ডাটা আসে
        const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
            cache: 'no-store' 
        });

        if (res.ok) {
            const text = await res.text();
            // JSON-এর শেষের অদৃশ্য ক্যারেক্টার ক্লিন করার জন্য trim()
            const cleanText = text.trim(); 
            const animals = JSON.parse(cleanText);
            
            // সব ডাটা দেখানোর জন্য সরাসরি এসাইন করুন
            displayedAnimals = animals; 
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        displayedAnimals = []; 
    }
  
    return (

        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                All Available Animals ({displayedAnimals.length})
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {displayedAnimals.length > 0 ? (
                   displayedAnimals.map(animal => (
                       <AnimlCrad key={animal.id} animal={animal} />
                   ))
               ) : (
                   <p>No animals found. Please check your Data.</p>
               )}
            </div>
        </div>



        // <div className="max-w-7xl mx-auto p-6">
        //     <h2 className="text-2xl font-bold mb-6 text-gray-800 animate__animated animate__fadeIn">
        //         Featured Animals
        //     </h2>

        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        //        {displayedAnimals.map(animal=><AnimlCrad key={animal.id} animal={animal}></AnimlCrad>)}
               
        //     </div>
        // </div>
    );
};;

export default Animalspage;