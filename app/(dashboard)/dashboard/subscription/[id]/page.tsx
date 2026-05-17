"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import TopBar from "@/app/components/TopBar";
import { dummySubs } from "@/app/lib/data";

const InfoBox = ({ label, value, textColor = "text-gray-500" }: any) => (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-3xl p-3 w-full">
        <span className="font-bold text-brand-yellow text-sm mb-1 text-center leading-tight">{label}</span>
        <span className={`font-semibold text-sm ${textColor}`}>{value || "N/A"}</span>
    </div>
);

type StatusType = "Active" | "Paused" | "Cancelled";

export default function SubscriptionDetails() {
    const { id } = useParams();
    const subscription = dummySubs.find(sub => sub.id === id);

    // Initialize state with the sub's current status, or default to Active
    const [status, setStatus] = useState<StatusType>(
        (subscription?.status as StatusType) || "Active"
    );

    if (!subscription) return <div className="p-8 text-center mt-20">Subscription not found</div>;

    const cycleStatus = () => {
        const statuses: StatusType[] = ["Active", "Paused", "Cancelled"];
        const nextIdx = (statuses.indexOf(status) + 1) % statuses.length;
        const nextStatus = statuses[nextIdx];
        
        setStatus(nextStatus);
        subscription.status = nextStatus; // Mutate the global dummy data
    };

    // Style map for the interactive pill
    const statusColors = {
        Active: "text-brand-teal border-brand-teal/30 bg-brand-teal/10",
        Paused: "text-brand-yellow border-brand-yellow/30 bg-brand-yellow/10",
        Cancelled: "text-red-500 border-red-500/30 bg-red-500/10"
    };

    return (
        <div className="flex flex-col h-full w-full bg-brand-gray/10 pb-24">
            <div className="shrink-0 bg-white">
                <TopBar title="Subscription Details" showBack={true} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col items-center px-6 py-6 w-full">
                <h1 className="text-3xl font-bold text-brand-yellow mb-6">[{subscription.name}]</h1>

                {/* Interactive Status Pill */}
                <div className="w-full flex flex-col items-center mb-6">
                    <span className="font-bold text-gray-400 text-sm mb-2">Status:</span>
                    <button 
                        onClick={cycleStatus}
                        className={`px-12 py-2 rounded-full shadow-sm font-bold border-2 transition-colors duration-300 ${statusColors[status]}`}
                    >
                        {status}
                    </button>
                </div>

                <div className="w-full bg-white rounded-full py-4 flex flex-col items-center justify-center shadow-sm mb-6 border border-gray-100">
                    <span className="font-bold text-brand-yellow mb-1">Amount and Billing Cycle</span>
                    <span className="font-semibold text-gray-500">PHP {subscription.price} / {subscription.cycle === "monthly" ? "Monthly" : "Yearly"}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <InfoBox label="Next Due" value={subscription.dueDate} />
                    <InfoBox label="Payment Method" value={subscription.paymentMethod || "GCash"} />
                    <InfoBox label="Category" value={subscription.category || "Entertainment"} />
                    <InfoBox label="Actions" value="Paid" />
                </div>

                <div className="w-full flex flex-col items-center">
                    <span className="font-bold text-brand-yellow mb-2">Payment History</span>
                    <div className="w-full h-32 bg-white rounded-3xl shadow-sm border border-gray-100"></div>
                </div>
            </div>
        </div>
    );
}