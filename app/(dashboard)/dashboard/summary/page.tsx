"use client";
import TopBar from "@/app/components/TopBar";
import SubscriptionChip from "@/app/components/SubscriptionChip";
import { Bell } from "lucide-react";
import { dummySubs } from "@/app/lib/data";

export default function Summary() {
    const validSubs = dummySubs.filter(sub => !sub.status || sub.status === "Active");

    const monthlyTotal = validSubs
        .filter(sub => sub.cycle === "monthly")
        .reduce((sum, sub) => sum + parseFloat(sub.price), 0);

    const yearlyTotal = (monthlyTotal * 12) + validSubs
        .filter(sub => sub.cycle === "yearly")
        .reduce((sum, sub) => sum + parseFloat(sub.price), 0);

    const topSubs = [...validSubs]
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        .slice(0, 3);

    const chartBars = [
        { height: "h-[60%]", color: "bg-brand-teal" },
        { height: "h-[45%]", color: "bg-brand-yellow" },
        { height: "h-[80%]", color: "bg-brand-teal" },
        { height: "h-[50%]", color: "bg-brand-yellow" },
        { height: "h-[30%]", color: "bg-brand-teal" },
        { height: "h-[90%]", color: "bg-brand-yellow" },
    ];

    function formatNum(num: number) {
        return num.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    return (
        <div className="flex flex-col h-full w-full bg-white pb-24">
            <div className="shrink-0">
                <TopBar title="Summary" showBack={true} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-6 py-6 w-full">
                
                <div className="flex flex-row justify-between w-full gap-4 mb-6">
                    <div className="flex-1 bg-brand-yellow text-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                        <span className="font-bold text-sm mb-2 text-center text-white/90">Monthly Total:</span>
                        <span className="font-bold text-xl">PHP {formatNum(monthlyTotal)}</span>
                    </div>
                    <div className="flex-1 bg-brand-yellow text-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                        <span className="font-bold text-sm mb-2 text-center text-white/90">Yearly Estimate:</span>
                        <span className="font-bold text-xl">PHP {formatNum(yearlyTotal)}</span>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-200 mb-6 w-full" />

                <div className="flex flex-col w-full mb-6">
                    <div className="flex flex-row items-center gap-2 mb-4">
                        <Bell className="text-brand-yellow" size={24} />
                        <h2 className="text-2xl font-bold text-brand-yellow">By Category</h2>
                    </div>
                    
                    <div className="w-full h-48 bg-[#7AC5D8]/30 px-6 pt-8 flex flex-row items-end justify-between">
                        {chartBars.map((bar, i) => (
                            <div 
                                key={i} 
                                className={`w-8 ${bar.height} ${bar.color} transition-all duration-500`}
                            ></div>
                        ))}
                    </div>
                </div>

                <hr className="border-t-2 border-gray-200 mb-6 w-full" />

                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center gap-2 mb-4">
                        <Bell className="text-brand-yellow" size={24} />
                        <h2 className="text-2xl font-bold text-brand-yellow">Top Subscriptions</h2>
                    </div>
                    
                    <div className="flex flex-col w-full gap-1">
                        {topSubs.map(sub => (
                            <SubscriptionChip
                                key={sub.id}
                                id={sub.id}
                                name={sub.name}
                                price={sub.price}
                                cycle={`/${sub.cycle === "monthly" ? "month" : "yearly"}`}
                                dueDate={sub.dueDate}
                                variant="yellow" 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}