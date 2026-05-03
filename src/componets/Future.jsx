

import Image from 'next/image';
import React, { use } from 'react';
import AnimlCrad from './AnimlCrad';



const Future = async() => {

  
    let displayedAnimals = [];

    try {
        
        const res = await fetch('https://qurbanihat-livestock-booking-by-far-pi.vercel.app/Data.json', {
            next: { revalidate: 10 } 
        });

        if (res.ok) {
            const text = await res.text();
           
            const cleanText = text.trim(); 
            const animals = JSON.parse(cleanText);
            displayedAnimals = animals.slice(0, 4);
        }
    } catch (error) {
        console.error("Build-time JSON Error ignored:", error);
        
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

