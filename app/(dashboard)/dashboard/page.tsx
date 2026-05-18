"use client";
import TopBar from "@/app/components/TopBar";
import SubscriptionChip from "@/app/components/SubscriptionChip";
import { dummySubs } from "@/app/lib/data";
import { useState } from "react";

export default function Dashboard() {
    const [showAll, setShowAll] = useState(false);

    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    
    const currentMonthNum = "05"; 

    const validSubs = dummySubs.filter(sub => !sub.status || sub.status === "Active");
    
    const upcoming = validSubs.filter(sub => sub.dueDate.split("-")[1] === currentMonthNum);
    
    const activePreview = validSubs.slice(0, 3);

    const totalDue = validSubs.reduce((sum, sub) => sum + parseFloat(sub.price), 0);
    const totalPaid = totalDue * 0.4; 
    const remaining = totalDue - totalPaid;

    function handleSeeAll() {
        setShowAll(prev => !prev);
    }

    return (
        <div className="flex flex-col h-full w-full bg-white pb-24">
            <div className="shrink-0">
                <TopBar title="Subscription Tracker" showBack={false} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col w-full">
                <div className="px-4 py-6 w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-brand-yellow mb-4">This Month - {currentMonth}</h2>
                    
                    <div className="flex flex-row justify-between w-full gap-2 mb-2">
                        <div className="flex-1 bg-brand-teal text-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <span className="font-bold text-xs mb-1 text-white/80">Total Due:</span>
                            <span className="font-bold text-sm">PHP {totalDue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex-1 bg-brand-teal text-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <span className="font-bold text-xs mb-1 text-white/80">Total Paid:</span>
                            <span className="font-bold text-sm">PHP {totalPaid.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex-1 bg-brand-teal text-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <span className="font-bold text-xs mb-1 text-white/80">Balance:</span>
                            <span className="font-bold text-sm">PHP {remaining.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-brand-yellow w-full px-6 py-6 pb-8 shadow-inner">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">Upcoming Payments</h3>
                    </div>
                    
                    <div className="flex flex-col gap-1 w-full">
                        {upcoming.map(sub => (
                            <SubscriptionChip key={sub.id} id={sub.id} name={sub.name} price={sub.price} cycle="DUE:" dueDate={sub.dueDate} variant="white" />
                        ))}
                    </div>
                </div>

                <div className="w-full px-6 py-6 bg-white min-h-[300px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-brand-yellow">Active Subscriptions</h3>
                        <button className="text-brand-yellow font-bold text-sm bg-brand-yellow/10 px-3 py-1 rounded-full cursor-pointer hover:bg-brand-yellow/20 transition-colors" onClick={handleSeeAll}>SEE {(showAll ? "LESS" : "ALL")}</button>
                    </div>
                    
                    <div className="flex flex-col gap-1 w-full">
                        {(!showAll ? activePreview : validSubs).map(sub => (
                            <SubscriptionChip key={sub.id} id={sub.id} name={sub.name} price={sub.price} cycle={`/${sub.cycle === "monthly" ? "month" : "yearly"}`} dueDate={sub.dueDate} variant="teal" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}