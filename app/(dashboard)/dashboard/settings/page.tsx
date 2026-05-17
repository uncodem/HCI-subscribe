"use client";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/TopBar";
import SettingsRow from "@/app/components/SettingsRow";
import { User, Bell, Lock, BarChart2, MoreHorizontal, LogOut, Search, Archive } from "lucide-react";

export default function Settings() {
    const router = useRouter();

    return (
        <div className="flex flex-col h-full w-full bg-white pb-24">
            <div className="shrink-0">
                <TopBar title="Settings" showBack={false} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col items-center px-6 py-6 w-full">
                
                <div className="w-28 h-28 bg-[#1E293B] rounded-full flex items-center justify-center mb-8 shadow-md">
                    <User size={64} className="text-white" />
                </div>

                <div className="w-full flex flex-row items-center bg-gray-100 rounded-full px-5 py-3 mb-6 shadow-sm">
                    <Search size={20} className="text-gray-500 mr-3" />
                    <input
                        type="text"
                        className="bg-transparent focus:outline-none w-full text-brand-dark font-medium"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <SettingsRow title="Account" icon={<User className="text-brand-yellow"/>} />
                    <SettingsRow title="Notifications" icon={<Bell className="text-brand-yellow"/>} />
                    <SettingsRow title="Privacy & Security" icon={<Lock className="text-brand-yellow"/>} />
                    <SettingsRow title="Summary" icon={<BarChart2 className="text-brand-yellow"/>} 
                        onClick={() => router.push('/dashboard/summary')}/>
                    <SettingsRow title="Past Subscriptions" icon={<Archive className="text-brand-yellow"/>}
                        onClick={() => router.push('/dashboard/inactive')}/>
                    <SettingsRow title="Other Settings" icon={<MoreHorizontal className="text-brand-yellow"/>} />
                    <SettingsRow
                        title="Log Out"
                        icon={<LogOut className="text-brand-yellow"/>}
                        onClick={() => router.push('/')}
                    />
                </div>
            </div>
        </div>
    );
}