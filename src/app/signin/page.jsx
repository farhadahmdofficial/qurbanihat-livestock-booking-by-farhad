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


        const loadingToast = toast.loading("Signing in...");

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {

            toast.error(error.message || "Failed to sign in!", { id: loadingToast });
        } else {

            // toast.success("Successfully logged in!", { id: loadingToast });

            toast.success("Successfully logged in!", {
                id: loadingToast,
                duration: 3000, // ৩ সেকেন্ড পর চলে যাবে
                icon: '👋', // কাস্টম ইমোজি বা আইকন
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            console.log(data);
        }
    };

    const handlGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: 'google'
            });

            toast.success("Redirecting to Google...");
        } catch (err) {
            toast.error("Google Sign-In failed!");
        }
    };










    return (<Card className="border mx-auto w-[95%] sm:w-[450px] md:w-[500px] py-10 my-10 md:my-25 shadow-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Sign In</h1>


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

    );
}