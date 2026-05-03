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
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
    const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // লোডিং নোটিফিকেশন শুরু
    const loadingToast = toast.loading("Signing in...");

    const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
    });

    if (error) {
        // এরর হলে লোডিং সরিয়ে এরর মেসেজ দেখাবে
        toast.error(error.message || "Failed to sign in!", { id: loadingToast });
    } else {
        // সফল হলে সাকসেস মেসেজ দেখাবে
        toast.success("Successfully logged in!", { id: loadingToast });
        console.log(data);
    }
};

const handlGoogleSignIn = async () => {
    try {
        await authClient.signIn.social({
            provider: 'google'
        });
        // সোশ্যাল সাইন-ইন সাধারণত রিডাইরেক্ট করে, তাই এখানে নোটিফিকেশন 
        // অনেক সময় দেখা যায় না, তবে কোড লেভেলে এভাবে রাখা যায়।
        toast.success("Redirecting to Google...");
    } catch (err) {
        toast.error("Google Sign-In failed!");
    }
};






    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     const { data, error } = await authClient.signIn.email({
    //         email,
    //         password,
    //         callbackURL: "/",
    //     });

    //     console.log({ data, error });
    // };

    // const handlGoogleSignIn = async () => {
    //     await authClient.signIn.social({
    //         provider: 'google'
    //     })
    // }



    return (<Card className="border mx-auto w-[95%] sm:w-[450px] md:w-[500px] py-10 my-10 md:my-25 shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>

        {/* ফর্মের উইডথ এখন প্যারেন্ট কার্ডের সাথে সামঞ্জস্যপূর্ণ হবে */}
        <Form className="flex w-[90%] sm:w-full max-w-sm mx-auto flex-col gap-4" onSubmit={onSubmit}>
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
                <Label className="font-semibold">Email</Label>
                <Input placeholder="john@example.com" className="w-full" />
                <FieldError className="text-xs text-red-500" />
            </TextField>

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
                <Label className="font-semibold">Password</Label>
                <Input placeholder="Enter your password" />
                <Description className="text-[10px] text-gray-500">
                    Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* বাটনগুলো ছোট স্ক্রিনে নিচে নিচে (flex-col) এবং বড় স্ক্রিনে পাশাপাশি (flex-row) থাকবে */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button type="submit" className="flex-1 bg-green-600 text-white hover:bg-green-700 py-2">
                    <Check size={18} className="mr-1" />
                    Submit
                </Button>
                <Button type="reset" variant="secondary" className="flex-1 border border-gray-300 py-2">
                    Reset
                </Button>
            </div>
        </Form>

        <div className="flex items-center my-6 w-[90%] sm:w-full max-w-sm mx-auto">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="w-[90%] sm:w-full max-w-sm mx-auto">
            <Button
                onClick={handlGoogleSignIn}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border-2 hover:bg-gray-50 transition-all"
            >
                <GrGoogle className="text-red-500" /> Sign In With Google
            </Button>
        </div>
    </Card>
        // <Card className="border  mx-auto w-125 py-10 my-25">
        //   <h1 className="text-center text-2xl font-bold">Sign In</h1>

        //   <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
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

        //   <p className="text-center">Or</p>

        //   <Button onClick={handlGoogleSignIn} variant="outline" className={'w-full'}><GrGoogle/> Sign In With Google</Button>
        // </Card>
    );
}