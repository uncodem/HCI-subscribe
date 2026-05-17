"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Filter } from "lucide-react";

interface TopBarProps {
    title: string;
    showBack?: boolean;
    showFilter?: boolean;
}

export default function TopBar({title, showBack=true, showFilter=true}: TopBarProps) {
    const router = useRouter();

    return (
        <header className="flex flex-row items-center justify-between w-full p-4 bg-brand-teal text-white">
            <div className="w-10 flex justify-start">
                {showBack && (
                    <button onClick={() => router.back()} className="hover:text-brand-yellow transition-colors cursor-pointer">
                        <ArrowLeft size={28}/>
                    </button>
                )}
            </div>
            <div className="flex-grow text-center font-bold text-xl tracking-wide">
                {title}
            </div>
            <div className="w-10 flex justify-end">
                {showFilter && (
                    <button className="hover:text-brand-yellow transition-colors cursor-pointer">
                        <Filter size={24}/>
                    </button>
                )}
            </div>
        </header>
    );
}