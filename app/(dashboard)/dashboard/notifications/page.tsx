"use client";
import {useState} from "react";
import TopBar from "@/app/components/TopBar";
import {Bell, X} from "lucide-react";
import {dummyNotifs} from "@/app/lib/data";

export default function Notifications() {
    const [dismissed, setDismissed] = useState<string[]>([]);

    const handleDismiss = (id: string) => {
        setDismissed(prev => [...prev, id]);
    };

    const visibleAlerts = dummyNotifs.filter(n => !dismissed.includes(n.id));

    return (
        <div className="flex flex-col w-full h-full bg-white">
            <div className="shrink-0">
                <TopBar title="Notifications" showBack={false} showFilter={true}/>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-6 py-6 gap-4">
                {visibleAlerts.length === 0 ? (
                    <div className="flex items-center justify-center h-40 text-gray-400 font-bold">
                        No new notifications
                    </div>
                ) : (
                    visibleAlerts.map(alert => (
                        <div key={alert.id} className="relative flex flex-row items-center bg-brand-yellow text-white rounded-xl p-4 shadow-sm w-full">
                            <div className="shrink-0 mr-4 opacity-80"> <Bell size={36}/> </div>
                            <div className="flex flex-col flex-grow pr-6">
                                <span className="font-bold text-lg leading-tight">{alert.title}</span>
                                <span className="font-semibold text-white/90">{alert.message}</span>
                                <span className="text-right text-sm font-medium mt-2 opacity-80">{alert.time}</span>
                            </div>

                            <button 
                                onClick={() => handleDismiss(alert.id)}
                                className="absolute top-3 right-3 text-white/70 hover:text-white hover:scale-110 transition-all">
                                <X size={20} strokeWidth={3}/>
                            </button>
                        </div>
                    ))   
                )}
            </div>
        </div>
    );
}
