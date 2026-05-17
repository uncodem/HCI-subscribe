"use client";
import { useState } from "react";
import Image from "next/image"; // For standard Next.js images, or use an svg
import { useRouter } from "next/navigation"; // Make sure it's next/navigation, not next/router

type ScreenMode = "initial" | "login" | "signup";

export default function LoginScreen() {
    // Replaced boolean 'started' with a 3-state mode
    const [mode, setMode] = useState<ScreenMode>("initial");
    const router = useRouter();

    function handleMainAction() {
        if (mode === "initial") {
            setMode("login");
        } else if (mode === "signup") {
            router.push("/setup");
        } else if (mode === "login") {
            router.push("/dashboard");
        }
    }

    function toggleAuthMode() {
        setMode(prev => prev === "login" ? "signup" : "login");
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
            <div className="mb-12 flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <Image 
                        src="/vercel.svg" 
                        alt="Vercel Logo" 
                        width={16} 
                        height={16} 
                        className="w-16 h-16" 
                        priority 
                    />
                </div>
                <h1 className="text-4xl font-bold text-brand-yellow">SubScribe</h1>
            </div>

            <div className="flex flex-col w-full max-w-xs gap-4">
                {/* Only render inputs if we aren't in the initial state */}
                {mode !== "initial" && (
                    <>
                    <input type="email" placeholder="Email"
                            className="w-full border-2 rounded-xl border-gray-300 text-center p-2 focus:outline-none focus:border-brand-teal transition-colors"/>
                    <input type="password" placeholder="Password" 
                            className="w-full border-2 rounded-xl border-gray-300 text-center p-2 focus:outline-none focus:border-brand-teal transition-colors"/>
                    </>
                )}
                
                <button 
                    className={`mt-4 w-full border border-solid border-black font-bold py-3 rounded-xl transition-all duration-300 ${
                        mode === "initial" 
                            ? "bg-white text-brand-yellow" 
                            : "bg-brand-teal text-white"
                    }`} 
                    onClick={handleMainAction}
                >
                    {/* Dynamically change button text based on mode */}
                    {mode === "signup" ? "Sign-up" : "Login"}
                </button>
            </div>

            {/* Footer toggle text */}
            {mode !== "initial" && (
                <div className="mt-6 flex gap-1 text-sm">
                    <span className="text-gray-500">
                        {mode === "login" ? "Don't have an account?" : "Already have an account?"}
                    </span>
                    <button 
                        className="text-blue-600 font-bold hover:underline"
                        onClick={toggleAuthMode}
                    >
                        {mode === "login" ? "Sign-up" : "Log in"}
                    </button>
                </div>
            )}
        </main>
    )
}