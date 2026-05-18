import Link from "next/link";
import { Bell } from "lucide-react";

interface SubscriptionChipProps {
    id?: string;
    name: string;
    price: string | number;
    cycle?: string;
    dueDate?: string;
    variant?: "teal" | "white" | "yellow";
}

export default function SubscriptionChip({ id, name, price, cycle, dueDate, variant = "teal" }: SubscriptionChipProps) {
    const colorStyles = {
        teal: "bg-brand-teal text-white",
        white: "bg-white text-gray-800 shadow-sm",
        yellow: "bg-brand-yellow text-white"
    };

    const formattedPrice = Number(price).toLocaleString('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });

    let formattedDate = null;
    if (dueDate) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const [_, m, d] = dueDate.split("-");
        formattedDate = `${months[parseInt(m) - 1]} ${parseInt(d)}`;
    }

    const content = (
        <div className={`flex flex-row items-center justify-between w-full px-4 py-3 rounded-full mb-3 hover:scale-[1.02] transition-transform ${colorStyles[variant]}`}>
            
            <div className="flex flex-row items-center gap-3">
                <Bell size={18} className={variant === "white" ? "text-brand-yellow" : "text-white"}/>
                
                <div className="flex flex-col">
                    <span className="font-bold truncate max-w-[120px] leading-tight">{name}</span>
                    {formattedDate && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider mt-[2px] ${variant === "white" ? "text-gray-400" : "text-white/70"}`}>
                            {formattedDate}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex flex-row items-center gap-1 text-sm font-bold">
                <span>PHP {formattedPrice}</span>
                {cycle && (
                    <span className={`text-xs font-normal ${variant === "white" ? "text-gray-500" : "text-white/80"}`}>{cycle}</span>
                )}
            </div>
            
        </div>
    );

    return id ? <Link href={`/dashboard/subscription/${id}`} className="block w-full">{content}</Link> : content;
}