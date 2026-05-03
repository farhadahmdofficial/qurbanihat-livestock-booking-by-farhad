"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
        
        const toastId = toast.loading("Signing out...");

        await authClient.signOut();

        
        toast.success("Successfully signed out!", { id: toastId });

      
        router.push('/signin'); 
        
    } catch (err) {
        
        toast.error("Failed to sign out. Please try again.");
    }
};




  // const handleSignOut = async () => {
  //   await authClient.signOut();
  // };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="w-11/12 mx-auto py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex gap-2 items-center group cursor-pointer">
            <Image
              src={"/logo.png"}
              alt="logo"
              loading="eager"
              width={35}
              height={35}
              className="object-cover h-auto w-auto animate__animated animate__rotateIn animate__fast group-hover:animate__pulse"
            />
            <h3 className="font-black text-xl text-green-700 animate__animated animate__pulse animate__infinite animate__slow">
              QurbaniHat
            </h3>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href={"/"} className={pathname === "/" ? "text-green-600 font-bold border-b-2 border-green-600" : "text-gray-600 hover:text-green-600 transition-colors"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/animals"} className={pathname === "/animals" ? "text-green-600 font-bold border-b-2 border-green-600" : "text-gray-600 hover:text-green-600 transition-colors"}>
                All Animals
              </Link>
            </li>
            <li>
              <Link href={"/profile"} className={pathname === "/profile" ? "text-green-600 font-bold border-b-2 border-green-600" : "text-gray-600 hover:text-green-600 transition-colors"}>
                Profile
              </Link>
            </li>
          </ul>

          {/* Right Side Actions (Auth) */}
          <div className="hidden md:flex items-center gap-3">
            {!user ? (
              <div className="flex gap-3">
                <Link href={"/signup"}>
                  <Button className="font-bold text-white bg-green-600 hover:bg-green-700 rounded-xl px-6">SignUp</Button>
                </Link>
                <Link href={"/signin"}>
                  <Button variant="flat" className="font-bold text-green-700 bg-green-50 border border-green-200 rounded-xl px-6">SignIn</Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Avatar size="sm" isBordered color="success" src={user?.image} />
                <Button className="bg-red-500 text-white font-semibold" onClick={handleSignOut} size="sm">SignOut</Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-green-700 focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate__animated animate__fadeIn">
            <ul className="flex flex-col gap-4 text-center font-semibold text-gray-700 border-t pt-4">
              <li onClick={() => setIsOpen(false)}>
                <Link href={"/"} className={pathname === "/" ? "text-green-600" : ""}>Home</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href={"/animals"} className={pathname === "/animals" ? "text-green-600" : ""}>All Animals</Link>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <Link href={"/profile"} className={pathname === "/profile" ? "text-green-600" : ""}>Profile</Link>
              </li>
              
              <div className="flex flex-col gap-2 pt-2 border-t">
                {!user ? (
                  <>
                    <Link href={"/signup"} onClick={() => setIsOpen(false)}>
                      <Button className="w-full font-bold text-white bg-green-600">SignUp</Button>
                    </Link>
                    <Link href={"/signin"} onClick={() => setIsOpen(false)}>
                      <Button className="w-full font-bold border border-green-600 text-green-700 bg-transparent">SignIn</Button>
                    </Link>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3"> 
                                                                <Avatar 
  showFallback 
  size="md" 
  src={user?.image} 
  name={user?.name || "User"} 
/>

                    
 
                    {/* <Avatar size="md" src={user?.image} /> */}
                    <Button className="w-full bg-red-500 text-white" onClick={() => {handleSignOut(); setIsOpen(false);}}>SignOut</Button>
                  </div>
                )}
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;








// "use client";

// import { authClient } from '@/lib/auth-client';
// import { Avatar, Button } from '@heroui/react';


// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';
// // import logo from '../../assets/log.png';

// const Navber = () => {
//   const userData = authClient.useSession();
//   const user = userData.data?.user;

//   const pathname = usePathname();
//   const handleSignOut = async () => {
//     await authClient.signOut();
//   }
//   return (
//     <div className=" px-2">
//       <nav className=" flex justify-between items-center  py-3 w-11/12 mx-auto  ">
//         {/* <div className="flex gap-1 items-center ">
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             loading="eager"
//             width={35}
//             height={35}
//             className="object-cover h-auto w-auto"
//           />
//           <h3 className=" font-black text-xl text-green-700">QurbaniHat</h3>
//         </div> */}
//         <div className="flex gap-2 items-center group cursor-pointer">
//           {/* লোগো এনিমেশন: মাউস নিলে ঘুরবে (Rotate) */}
//           <Image
//             src={"/logo.png"}
//             alt="logo"
//             loading="eager"
//             width={35}
//             height={35}
//             className="object-cover h-auto w-auto animate__animated animate__rotateIn animate__fast group-hover:animate__pulse"
//           />

//           {/* ব্র্যান্ড নাম এনিমেশন: বাম থেকে স্লাইড করে আসবে */}
//           <h3 className="font-black text-xl text-green-700 animate__animated animate__pulse animate__infinite animate__slow ">
//             QurbaniHat
//           </h3>



//           {/* <h3 className="font-black text-xl text-green-700 animate__animated animate__fadeInLeft ">
//             QurbaniHat
//           </h3> */}
//         </div>






//         <ul className="flex items-center gap-5 text-sm font-medium">
//           <li>
//             <Link
//               href={"/"}
//               className={pathname === "/" ? "text-green-600 font-bold border-b-2" : "text-gray-600"}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/animals"}
//               className={pathname === "/animals" ? "text-green-600 font-bold border-b-2 " : "text-gray-600"}
//             >
//               All Animals
//             </Link>
//           </li>
//           <li>
//             <Link
//               href={"/profile"}
//               className={pathname === "/profile" ? "text-green-600 font-bold border-b-2" : "text-gray-600"}
//             >
//               Profile
//             </Link>
//           </li>
//         </ul>



//         <div className="flex gap-2">




//           {!user &&(
//             <ul className="flex items-center  text-sm gap-5">
//             <li>
//               <Link href={"/signup"}><Button className="w-full sm:w-auto font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 rounded-xl px-8 py-2">SignUp</Button></Link>
//             </li>
//             <li>
//               {/* <Link href={"/signin"}><Button>SignIn</Button></Link> */}

//               <Link href={"/signin"}><Button className="w-full sm:w-auto font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 rounded-xl px-8 py-2">SignIn</Button></Link>
//             </li>
//             {/* addd new   */}

            

           
//           </ul>

//           )}





         


//           {/* {!user && (
//             <ul className="flex items-center  text-sm gap-5">
//               <li>
//                 <Link href={"/signup"}>SignUp</Link>
//               </li>
//               <li>
//                 <Link href={"/signin"}>SignIn</Link>
//               </li>
//             </ul>
//           )} */}
//           {/* <div>singin</div> */}

//           {user && (
//             <div className="flex gap-3">
//               <Avatar size="sm">
//                 <Avatar.Image
//                   alt="John Doe"
//                   src={user?.image}
//                   referrerPolicy="no-referrer"
//                 />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>

//               <Button className="bg-red-600/70 " onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
//             </div>
//           )}



//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navber;

