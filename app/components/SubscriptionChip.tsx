import Link from "next/link";
import { Bell } from "lucide-react";

interface SubscriptionChipProps {
    id?: string; // Added optional ID
    name: string;
    price: string;
    cycle?: string;
    variant?: "teal" | "white" | "yellow";
}

export default function SubscriptionChip({ id, name, price, cycle, variant = "teal" }: SubscriptionChipProps) {
    const colorStyles = {
        teal: "bg-brand-teal text-white",
        white: "bg-white text-gray-800 shadow-sm",
        yellow: "bg-brand-yellow text-white"
    };

    const content = (
        <div className={`flex flex-row items-center justify-between w-full px-4 py-3 rounded-full mb-3 hover:scale-[1.02] transition-transform ${colorStyles[variant]}`}>
            <div className="flex flex-row items-center gap-3">
                <Bell size={18} className={variant === "white" ? "text-brand-yellow" : "text-white"}/>
                <span className="font-bold truncate max-w-[120px]">{name}</span>
            </div>
            <div className="flex flex-row items-center gap-1 text-sm font-bold">
                <span>PHP {price}</span>
                {cycle && (
                    <span className={`text-xs font-normal ${variant === "white" ? "text-gray-500" : "text-white/80"}`}>{cycle}</span>
                )}
            </div>
        </div>
    );

    return id ? <Link href={`/dashboard/subscription/${id}`} className="block w-full">{content}</Link> : content;
}