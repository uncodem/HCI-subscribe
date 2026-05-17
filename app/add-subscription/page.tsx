"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/TopBar";
import { dummySubs } from "@/app/lib/data";

const FormInput = ({ label, type = "text", placeholder, value, onChange }: any) => (
    <div className="flex flex-col gap-1 w-full mb-4">
        <label className="font-bold text-white text-lg">{label}:</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            className="border-none rounded-full px-4 py-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white font-medium shadow-sm" 
        />
    </div>
);

const FormSelect = ({ label, value, onChange, options, defaultText }: any) => (
    <div className="flex flex-col gap-1 w-full mb-4">
        <label className="font-bold text-white text-lg">{label}:</label>
        <select 
            value={value} 
            onChange={onChange}
            className="border-none rounded-full px-4 py-3 w-full text-brand-teal focus:outline-none focus:ring-2 focus:ring-white bg-white font-bold shadow-sm appearance-none"
        >
            <option value="" disabled>▼ {defaultText}</option>
            {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);

export default function AddSubscription() {
    const router = useRouter();
    
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    
    const [remindMonths, setRemindMonths] = useState("");
    const [remindWeeks, setRemindWeeks] = useState("");
    const [remindDays, setRemindDays] = useState("");
    
    const [notes, setNotes] = useState("");

    const handleSave = () => {
        if (!name || !price || !dueDate) return; 
        
        dummySubs.push({
            id: Math.random().toString(36).substring(7),
            name,
            price: parseFloat(price).toFixed(2),
            cycle: "monthly", 
            dueDate,
            category,
            paymentMethod,
            reminders: { months: remindMonths, weeks: remindWeeks, days: remindDays },
            notes
        });

        router.push('/dashboard');
    };

    return (
        <div className="flex flex-col h-[100dvh] w-full bg-white max-w-md mx-auto shadow-xl relative">
            <div className="shrink-0">
                <TopBar title="Add Subscription" showBack={true} showFilter={false} />
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 pb-32">
                <div className="bg-brand-yellow p-5 rounded-[2rem] shadow-sm">
                    
                    <FormInput label="Name" placeholder="Enter the subscription's name here..." value={name} onChange={(e: any) => setName(e.target.value)} />
                    
                    <FormSelect label="Category" defaultText="Select Category" value={category} onChange={(e: any) => setCategory(e.target.value)} options={["Entertainment", "Utilities", "Software", "Health"]} />
                    
                    <FormInput label="Amount" type="number" placeholder="Enter the price here..." value={price} onChange={(e: any) => setPrice(e.target.value)} />
                    
                    <FormInput label="Renewal Date" type="date" value={dueDate} onChange={(e: any) => setDueDate(e.target.value)} />

                    <FormSelect label="Payment Method" defaultText="Select Payment Method" value={paymentMethod} onChange={(e: any) => setPaymentMethod(e.target.value)} options={["Credit Card", "GCash", "PayPal", "Bank Transfer"]} />

                    {/* Remind Me Section */}
                    <div className="flex flex-col gap-2 w-full mb-4">
                        <label className="font-bold text-white text-lg">Remind me:</label>
                        <div className="bg-white rounded-2xl px-4 py-3 flex flex-wrap items-center gap-2 text-brand-teal font-bold text-sm shadow-sm">
                            <span>▼</span>
                            <input type="number" className="w-8 border-b-2 border-brand-teal text-center focus:outline-none" value={remindMonths} onChange={(e) => setRemindMonths(e.target.value)} />
                            <span>Months ▼</span>
                            
                            <input type="number" className="w-8 border-b-2 border-brand-teal text-center focus:outline-none" value={remindWeeks} onChange={(e) => setRemindWeeks(e.target.value)} />
                            <span>Weeks ▼</span>
                            
                            <input type="number" className="w-8 border-b-2 border-brand-teal text-center focus:outline-none" value={remindDays} onChange={(e) => setRemindDays(e.target.value)} />
                            <span>Days</span>
                            
                            <span className="w-full text-xs opacity-70 mt-1">before</span>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="flex flex-col gap-1 w-full mb-4">
                        <label className="font-bold text-white text-lg">Notes:</label>
                        <textarea 
                            rows={3}
                            placeholder="Enter your notes here..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="border-none rounded-2xl px-4 py-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-white bg-white font-medium shadow-sm resize-none"
                        />
                    </div>

                </div>
            </div>

            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent">
                <button 
                    onClick={handleSave}
                    className="w-full bg-white border-2 border-brand-dark text-brand-dark font-bold text-xl py-4 rounded-3xl shadow-lg hover:bg-gray-50 transition-colors"
                >
                    Save
                </button>
            </div>
        </div>
    );
}