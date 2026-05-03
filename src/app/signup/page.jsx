


"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        const toastId = toast.loading("Creating your account...");

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
            });

            if (error) {
                
                toast.error(error.message || "Sign up failed!", { id: toastId });
                return;
            }

           
            // toast.success("Account created successfully!", { id: toastId });

            toast.success("Account created successfully!", {
                            id: loadingToast,
                            duration: 3000, // ৩ সেকেন্ড পর চলে যাবে
                            icon: '👋', // কাস্টম ইমোজি বা আইকন
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        });
            router.push('/');

        } catch (err) {
            toast.error("Something went wrong!", { id: toastId });
        }
    };

    const handlGoogleSignIn = async () => {
        try {
            
            toast.loading("Redirecting to Google...");

            await authClient.signIn.social({
                provider: 'google'
            });
        } catch (err) {
            toast.error("Google sign in failed!");
        }
    };










   



    return (<Card className="border mx-auto w-[95%] sm:w-[450px] py-8 md:py-10 my-10 md:my-20 shadow-lg px-4 sm:px-0">
        <h1 className="text-center text-2xl font-bold mb-6">Sign Up</h1>

       
        <Form className="flex w-full max-w-[350px] mx-auto flex-col gap-4" onSubmit={onSubmit}>

            {/* Name Field */}
            <TextField isRequired name="name" type="text" className="flex flex-col gap-1">
                <Label className="font-medium">Name</Label>
                <Input placeholder="Enter your name" className="w-full" />
                <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Email Field */}
            <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label className="font-medium">Email</Label>
                <Input placeholder="john@example.com" className="w-full" />
                <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Password Field */}
            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                className="flex flex-col gap-1"
                validate={(value) => {
                    if (value.length < 8) {
                        return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }
                    return null;
                }}
            >
                <Label className="font-medium">Password</Label>
                <Input placeholder="Enter your password" />
                <Description className="text-[10px] text-gray-500 leading-tight">
                    Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError className="text-xs text-red-500" />
            </TextField>


            {/* moble button niche ashbe */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 font-bold py-2">
                    <Check className="mr-1" size={18} />
                    Sign Up
                </Button>
                <Button type="reset" variant="secondary" className="flex-1 py-2">
                    Reset
                </Button>
            </div>
        </Form>

        {/* Or Divider */}
        <div className="flex items-center my-6 w-full max-w-[350px] mx-auto">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign In */}
        <div className="w-full max-w-[350px] mx-auto">
            <Button
                onClick={handlGoogleSignIn}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-2"
            >
                <GrGoogle className="text-red-500" /> Sign In With Google
            </Button>
        </div>
    </Card>






        // <Card className="border mx-auto w-125 py-10 my-25">
        //   <h1 className="text-center text-2xl font-bold">Sign Up</h1>

        //   <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        //     <TextField isRequired name="name" type="text">
        //       <Label>Name</Label>
        //       <Input placeholder="Enter your name" />
        //       <FieldError />
        //     </TextField>



        //     <TextField
        //       isRequired
        //       name="email"
        //       type="email"
        //       validate={(value) => {
        //         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        //           return "Please enter a valid email address";
        //         }

        //         return null;
        //       }}
        //     >
        //       <Label>Email</Label>
        //       <Input placeholder="john@example.com" />
        //       <FieldError />
        //     </TextField>

        //     <TextField
        //       isRequired
        //       minLength={8}
        //       name="password"
        //       type="password"
        //       validate={(value) => {
        //         if (value.length < 8) {
        //           return "Password must be at least 8 characters";
        //         }
        //         if (!/[A-Z]/.test(value)) {
        //           return "Password must contain at least one uppercase letter";
        //         }
        //         if (!/[0-9]/.test(value)) {
        //           return "Password must contain at least one number";
        //         }

        //         return null;
        //       }}
        //     >
        //       <Label>Password</Label>
        //       <Input placeholder="Enter your password" />
        //       <Description>
        //         Must be at least 8 characters with 1 uppercase and 1 number
        //       </Description>
        //       <FieldError />
        //     </TextField>

        //     <div className="flex gap-2">
        //       <Button type="submit">
        //         <Check />
        //         Submit
        //       </Button>
        //       <Button type="reset" variant="secondary">
        //         Reset
        //       </Button>
        //     </div>
        //   </Form>
        //    <p className="text-center">Or</p>

        //         <Button onClick={handlGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle/> Sign In With Google</Button>


        // </Card>
    );
}


// const image = e.target.image.value;

// import React from 'react';

// const SingnUPpage = () => {
//     return (
//         <div>
//             this singnuppage
//         </div>
//     );
// };

// export default SingnUPpage;