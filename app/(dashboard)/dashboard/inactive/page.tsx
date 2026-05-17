"use client";
import TopBar from "@/app/components/TopBar";
import SubscriptionChip from "@/app/components/SubscriptionChip";
import { dummySubs } from "@/app/lib/data";

export default function InactiveSubscriptions() {
    const inactiveSubs = dummySubs.filter(sub => sub.status === "Paused" || sub.status === "Cancelled");

    return (
        <div className="flex flex-col h-full w-full bg-brand-gray/10 pb-24">
            <div className="shrink-0 bg-white">
                <TopBar title="Past Subscriptions" showBack={true} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-6 py-6 w-full">
                {inactiveSubs.length === 0 ? (
                    <div className="flex items-center justify-center h-40 text-gray-400 font-bold">
                        No inactive subscriptions
                    </div>
                ) : (
                    <div className="flex flex-col gap-1 w-full">
                        {inactiveSubs.map(sub => (
                            <SubscriptionChip 
                                key={sub.id} 
                                id={sub.id}
                                name={sub.name} 
                                price={sub.price} 
                                cycle={sub.status} 
                                variant="white" 
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}