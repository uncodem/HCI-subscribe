import Link from "next/link";
import { Calendar, Home, Bell, Settings, Plus } from "lucide-react";

export default function BottomBar() {
    return (
        <nav 
            className="fixed bg-brand-teal bottom-0 w-full max-w-md mx-auto rounded-t-xl flex flex-row items-center justify-around pb-4 pt-4 px-2 z-50 left-0 right-0">
            <Link href="/dashboard/calendar" className="p-2 text-white transition-colors">
                <Calendar size={28}/>
            </Link>

            <Link href="/dashboard" className="p-2 text-white transition-colors">
                <Home size={28}/>
            </Link>

            <div className="relative -top-8">
                <Link href="/add-subscription" className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gray-50 hover:scale-105 transition-transform text-brand-teal">
                    <Plus size={36} strokeWidth={1.5}/>
                </Link>
            </div>

            <Link href="/dashboard/notifications" className="p-2 text-white transition-colors">
                <Bell size={28} />
            </Link>

            <Link href="/dashboard/settings" className="p-2 text-white transition-colors">
                <Settings size={28} />
            </Link>
        </nav>
    );
}