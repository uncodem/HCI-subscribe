"use client";
import Image from "next/image"; // For standard Next.js images, or use an svg
import { useRouter } from "next/navigation"; // Make sure it's next/navigation, not next/router
import TopBar from "@/app/components/TopBar";

export default function SetupScreen() {
    const router = useRouter();
    return (
        <main className="flex flex-col w-full bg-white">
            <TopBar title="Set-up" showBack={false} showFilter={false}/>
            <div className="flex flex-col items-center flex-grow p-6 pt-16">
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
                </div>
                <div className="flex flex-col w-full max-w-xs gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-brand-dark font-bold text-lg pl-1">Currency</label>
                        <select defaultValue="PHP" className="w-full border-2 border-gray-300 rounded-xl p-3 text-gray-700 focus:outline-none focus:border-brand-teal bg-white">
                            <option value="PHP">PHP ₱</option>
                            <option value="USD">USD $</option>
                            <option value="EUR">EUR €</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => router.push("/dashboard")}
                        className="mt-4 px-36 bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors hover:bg-blue-700">
                        Next
                </button>
            </div>
        </main>
    )
}
