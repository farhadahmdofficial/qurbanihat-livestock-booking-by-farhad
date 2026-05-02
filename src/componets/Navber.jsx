


"use client";
import { Avatar, Button } from '@heroui/react';


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
// import logo from '../../assets/log.png';

const Navber = () => {

  const pathname = usePathname();
  return (
    <div className=" px-2">
      <nav className=" flex justify-between items-center  py-3 w-11/12 mx-auto  border-2">
        {/* <div className="flex gap-1 items-center ">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={35}
            height={35}
            className="object-cover h-auto w-auto"
          />
          <h3 className=" font-black text-xl text-green-700">QurbaniHat</h3>
        </div> */}
        <div className="flex gap-2 items-center group cursor-pointer">
          {/* লোগো এনিমেশন: মাউস নিলে ঘুরবে (Rotate) */}
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={35}
            height={35}
            className="object-cover h-auto w-auto animate__animated animate__rotateIn animate__fast group-hover:animate__pulse"
          />

          {/* ব্র্যান্ড নাম এনিমেশন: বাম থেকে স্লাইড করে আসবে */}
          <h3 className="font-black text-xl text-green-700 animate__animated animate__pulse animate__infinite animate__slow ">
            QurbaniHat
          </h3>
      


          {/* <h3 className="font-black text-xl text-green-700 animate__animated animate__fadeInLeft ">
            QurbaniHat
          </h3> */}
        </div>






        <ul className="flex items-center gap-5 text-sm font-medium">
          <li>
            <Link
              href={"/"}
              className={pathname === "/" ? "text-green-600 font-bold border-b-2" : "text-gray-600"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/animals"}
              className={pathname === "/animals" ? "text-green-600 font-bold border-b-2 " : "text-gray-600"}
            >
              All Animals
            </Link>
          </li>
          <li>
            <Link
              href={"/profile"}
              className={pathname === "/profile" ? "text-green-600 font-bold border-b-2" : "text-gray-600"}
            >
              Profile
            </Link>
          </li>
        </ul>



        <div className="flex gap-2">

          {/* <div>
            singup
          </div> */}
          {/* {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )} */}
          {/* <div>singin</div> */}

          {/* {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navber;

