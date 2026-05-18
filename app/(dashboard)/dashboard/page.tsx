"use client";
import TopBar from "@/app/components/TopBar";
import SubscriptionChip from "@/app/components/SubscriptionChip";
import { dummySubs } from "@/app/lib/data";

export default function Dashboard() {
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });

    const validSubs = dummySubs.filter(sub => !sub.status || sub.status === "Active");
    const upcoming = validSubs.filter(sub => parseInt(sub.dueDate.split("-")[2]) < 15);
    const active = validSubs.filter(sub => parseInt(sub.dueDate.split("-")[2]) >= 15);

    const totalDue = validSubs.reduce((sum, sub) => sum + parseFloat(sub.price), 0);
    const totalPaid = totalDue * 0.4; 
    const remaining = totalDue - totalPaid;

    function formatNum(num: number) {
        return num.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0});
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
                            <span className="font-bold text-sm">PHP {formatNum(totalDue)}</span>
                        </div>
                        <div className="flex-1 bg-brand-teal text-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <span className="font-bold text-xs mb-1 text-white/80">Total Paid:</span>
                            <span className="font-bold text-sm">PHP {formatNum(totalPaid)}</span>
                        </div>
                        <div className="flex-1 bg-brand-teal text-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <span className="font-bold text-xs mb-1 text-white/80">Balance:</span>
                            <span className="font-bold text-sm">PHP {formatNum(remaining)}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-brand-yellow w-full px-6 py-6 pb-8 shadow-inner">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-white">Upcoming Payments</h3>
                        <span className="text-white font-bold text-sm bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30 transition-colors">SEE ALL</span>
                    </div>
                    
                    <div className="flex flex-col gap-1 w-full">
                        {upcoming.map(sub => (
                            <SubscriptionChip key={sub.id} id={sub.id} name={sub.name} price={sub.price} dueDate={sub.dueDate} variant="white" />
                        ))}
                    </div>
                </div>

                <div className="w-full px-6 py-6 bg-white min-h-[300px]">
                    <h3 className="text-xl font-bold text-brand-yellow mb-4">Active Subscriptions</h3>
                    
                    <div className="flex flex-col gap-1 w-full">
                        {active.map(sub => (
                            <SubscriptionChip key={sub.id} id={sub.id} name={sub.name} price={sub.price} dueDate={sub.dueDate} cycle={`/${sub.cycle === "monthly" ? "month" : "yearly"}`} variant="teal" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}