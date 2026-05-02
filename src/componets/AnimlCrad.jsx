import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimlCrad = ({animal}) => {
    return (
        <div><div key={animal.id} className="animate__animated animate__fadeInUp">
                                {/* <AnimalCard animal={animal} /> */}
        
                            
        
        
        
                                {/* animail crad  */}
        
                                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={animal.image}
                                            alt={animal.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            {animal.category}
                                        </div>
                                    </div>
        
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
                                        <p className="text-sm text-gray-500">{animal.breed} • {animal.location}</p>
        
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-lg font-black text-green-700">৳ {animal.price.toLocaleString()}</span>
                                            <span className="text-sm font-semibold text-gray-600">{animal.weight} kg</span>
                                        </div>


                                        <Link href={`/animals/${animal.id}`}> <button className="w-full bg-gray-900 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors mt-2">
                                            View Details
                                        </button> </Link>
        
                                       
                                    </div>
                                </div>
        
        
        
                            </div>
            
        </div>
    );
};

export default AnimlCrad;