


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







// data 
[
  {
    "id": 2,
    "name": "Brahman King",
    "type": "Cow",
    "breed": "Brahman",
    "price": 280000,
    "weight": 550,
    "age": 4,
    "location": "Dhaka",
    "description": "Premium Brahman breed, known for high meat quality and size.",
    "image": "https://i.postimg.cc/brahman-cow.jpg",
    "category": "Extra Large"
  },
  {
    "id": 3,
    "name": "Black Bengal Pearl",
    "type": "Goat",
    "breed": "Black Bengal",
    "price": 25000,
    "weight": 35,
    "age": 2,
    "location": "Kushtia",
    "description": "Pure Black Bengal goat. Very healthy and active for Qurbani.",
    "image": "https://i.postimg.cc/black-bengal.jpg",
    "category": "Small Animal"
  },
  {
    "id": 4,
    "name": "Holstein Friesian Giant",
    "type": "Cow",
    "breed": "Friesian",
    "price": 210000,
    "weight": 480,
    "age": 3.5,
    "location": "Sylhet",
    "description": "Massive Friesian cow, well-maintained and disease-free.",
    "image": "https://i.postimg.cc/friesian-cow.jpg",
    "category": "Large Animal"
  },
  {
    "id": 5,
    "name": "Jamnapari Master",
    "type": "Goat",
    "breed": "Jamnapari",
    "price": 45000,
    "weight": 55,
    "age": 2.5,
    "location": "Chittagong",
    "description": "High-quality Jamnapari goat with impressive height and weight.",
    "image": "https://i.postimg.cc/jamnapari.jpg",
    "category": "Small Animal"
  },
  {
    "id": 6,
    "name": "Sahiwal Gold",
    "type": "Cow",
    "breed": "Sahiwal",
    "price": 320000,
    "weight": 600,
    "age": 4,
    "location": "Sirajganj",
    "description": "Golden brown Sahiwal bull. Heavy weight and fully organic feed.",
    "image": "https://i.postimg.cc/sahiwal-bull.jpg",
    "category": "Extra Large"
  },
  {
    "id": 7,
    "name": "Sindhi Red Bull",
    "type": "Cow",
    "breed": "Sindhi",
    "price": 190000,
    "weight": 420,
    "age": 3,
    "location": "Mymensingh",
    "description": "Strong Sindhi breed. Classic choice for a medium-to-large budget.",
    "image": "https://i.postimg.cc/sindhi-cow.jpg",
    "category": "Large Animal"
  },
  {
    "id": 8,
    "name": "Beetal Queen",
    "type": "Goat",
    "breed": "Beetal",
    "price": 38000,
    "weight": 42,
    "age": 2,
    "location": "Jessore",
    "description": "Beautiful Beetal goat with unique spots. Healthy and fit.",
    "image": "https://i.postimg.cc/beetal-goat.jpg",
    "category": "Small Animal"
  },
  {
    "id": 9,
    "name": "Australian Hybrid",
    "type": "Cow",
    "breed": "Australian Mix",
    "price": 240000,
    "weight": 500,
    "age": 3.5,
    "location": "Comilla",
    "description": "Fast-growing Australian hybrid bull. Very muscular build.",
    "image": "https://i.postimg.cc/aus-cow.jpg",
    "category": "Large Animal"
  },
  {
    "id": 10,
    "name": "Gir Special Bull",
    "type": "Cow",
    "breed": "Gir",
    "price": 350000,
    "weight": 620,
    "age": 4.5,
    "location": "Rajshahi",
    "description": "Majestic Gir bull. Known for endurance and quality meat.",
    "image": "https://i.postimg.cc/gir-cow.jpg",
    "category": "Extra Large"
  },
  {
    "id": 11,
    "name": "Totapari Prince",
    "type": "Goat",
    "breed": "Totapari",
    "price": 32000,
    "weight": 38,
    "age": 1.5,
    "location": "Rangpur",
    "description": "Young and healthy Totapari goat. Ready for the next season.",
    "image": "https://i.postimg.cc/totapari.jpg",
    "category": "Small Animal"
  },
  {
    "id": 12,
    "name": "Deshi Chitta Cow",
    "type": "Cow",
    "breed": "Local Deshi",
    "price": 110000,
    "weight": 250,
    "age": 2.5,
    "location": "Moulvibazar",
    "description": "Pure local deshi cow. Raised in a home environment.",
    "image": "https://i.postimg.cc/deshi-cow2.jpg",
    "category": "Large Animal"
  },
  {
    "id": 13,
    "name": "Barbari Beauty",
    "type": "Goat",
    "breed": "Barbari",
    "price": 22000,
    "weight": 30,
    "age": 2,
    "location": "Sylhet",
    "description": "Compact and healthy Barbari goat. Ideal for small family Qurbani.",
    "image": "https://i.postimg.cc/barbari-goat.jpg",
    "category": "Small Animal"
  }
]



// secant data 
[
  {
    "id": 2,
    "name": "Brahman King",
    "type": "Cow",
    "breed": "Brahman",
    "price": 280000,
    "weight": 550,
    "age": 4,
    "location": "Dhaka",
    "description": "Premium Brahman breed, known for high meat quality and size.",
    "image": "https://images.unsplash.com/photo-1570051008101-a3a3fbd27efd?q=80&w=1000&auto=format&fit=crop",
    "category": "Extra Large"
  },
  {
    "id": 3,
    "name": "Black Bengal Pearl",
    "type": "Goat",
    "breed": "Black Bengal",
    "price": 25000,
    "weight": 35,
    "age": 2,
    "location": "Kushtia",
    "description": "Pure Black Bengal goat. Very healthy and active for Qurbani.",
    "image": "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1000&auto=format&fit=crop",
    "category": "Small Animal"
  },
  {
    "id": 4,
    "name": "Holstein Friesian Giant",
    "type": "Cow",
    "breed": "Friesian",
    "price": 210000,
    "weight": 480,
    "age": 3.5,
    "location": "Sylhet",
    "description": "Massive Friesian cow, well-maintained and disease-free.",
    "image": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop",
    "category": "Large Animal"
  },
  {
    "id": 5,
    "name": "Jamnapari Master",
    "type": "Goat",
    "breed": "Jamnapari",
    "price": 45000,
    "weight": 55,
    "age": 2.5,
    "location": "Chittagong",
    "description": "High-quality Jamnapari goat with impressive height and weight.",
    "image": "https://images.unsplash.com/photo-1603504838ef2-482f3a61217e?q=80&w=1000&auto=format&fit=crop",
    "category": "Small Animal"
  },
  {
    "id": 6,
    "name": "Sahiwal Gold",
    "type": "Cow",
    "breed": "Sahiwal",
    "price": 320000,
    "weight": 600,
    "age": 4,
    "location": "Sirajganj",
    "description": "Golden brown Sahiwal bull. Heavy weight and fully organic feed.",
    "image": "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1000&auto=format&fit=crop",
    "category": "Extra Large"
  },
  {
    "id": 7,
    "name": "Sindhi Red Bull",
    "type": "Cow",
    "breed": "Sindhi",
    "price": 190000,
    "weight": 420,
    "age": 3,
    "location": "Mymensingh",
    "description": "Strong Sindhi breed. Classic choice for a medium-to-large budget.",
    "image": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000&auto=format&fit=crop",
    "category": "Large Animal"
  },
  {
    "id": 8,
    "name": "Beetal Queen",
    "type": "Goat",
    "breed": "Beetal",
    "price": 38000,
    "weight": 42,
    "age": 2,
    "location": "Jessore",
    "description": "Beautiful Beetal goat with unique spots. Healthy and fit.",
    "image": "https://images.unsplash.com/photo-1533318088102-183e78430a54?q=80&w=1000&auto=format&fit=crop",
    "category": "Small Animal"
  },
  {
    "id": 9,
    "name": "Australian Hybrid",
    "type": "Cow",
    "breed": "Australian Mix",
    "price": 240000,
    "weight": 500,
    "age": 3.5,
    "location": "Comilla",
    "description": "Fast-growing Australian hybrid bull. Very muscular build.",
    "image": "https://images.unsplash.com/photo-1527153358354-fbc1b5c50eb6?q=80&w=1000&auto=format&fit=crop",
    "category": "Large Animal"
  },
  {
    "id": 10,
    "name": "Gir Special Bull",
    "type": "Cow",
    "breed": "Gir",
    "price": 350000,
    "weight": 620,
    "age": 4.5,
    "location": "Rajshahi",
    "description": "Majestic Gir bull. Known for endurance and quality meat.",
    "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1000&auto=format&fit=crop",
    "category": "Extra Large"
  },
  {
    "id": 11,
    "name": "Totapari Prince",
    "type": "Goat",
    "breed": "Totapari",
    "price": 32000,
    "weight": 38,
    "age": 1.5,
    "location": "Rangpur",
    "description": "Young and healthy Totapari goat. Ready for the next season.",
    "image": "https://images.unsplash.com/photo-1565011523534-747a8601f10a?q=80&w=1000&auto=format&fit=crop",
    "category": "Small Animal"
  },
  {
    "id": 12,
    "name": "Deshi Chitta Cow",
    "type": "Cow",
    "breed": "Local Deshi",
    "price": 110000,
    "weight": 250,
    "age": 2.5,
    "location": "Moulvibazar",
    "description": "Pure local deshi cow. Raised in a home environment.",
    "image": "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?q=80&w=1000&auto=format&fit=crop",
    "category": "Large Animal"
  },
  {
    "id": 13,
    "name": "Barbari Beauty",
    "type": "Goat",
    "breed": "Barbari",
    "price": 22000,
    "weight": 30,
    "age": 2,
    "location": "Sylhet",
    "description": "Compact and healthy Barbari goat. Ideal for small family Qurbani.",
    "image": "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1000&auto=format&fit=crop",
    "category": "Small Animal"
  }
]




// crad  #####
<div key={animal.id} className="animate__animated animate__fadeInUp">
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

                                <button className="w-full bg-gray-900 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors mt-2">
                                    View Details
                                </button>
                            </div>
                        </div>



                    </div>







//  user   qurbanirhat


// passs I2njClRV0eaZBYxl













// new pasdd


// use thefainal
// pass 2QdCPKPKkzSy9gfB