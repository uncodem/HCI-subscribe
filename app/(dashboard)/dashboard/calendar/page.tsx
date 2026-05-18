"use client";
import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import SubscriptionChip from "@/app/components/SubscriptionChip";
import { dummySubs } from "@/app/lib/data";

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1));
    
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const cYear = currentDate.getFullYear();
    const cMonth = currentDate.getMonth();

    const daysInMonth = new Date(cYear, cMonth + 1, 0).getDate();
    const startOffs = new Date(cYear, cMonth, 1).getDay();

    const blanks = Array.from({length: startOffs}, (_, i) => i);
    const days = Array.from({length: daysInMonth}, (_, i) => i + 1);
    
    const trailOffs = 42 - (startOffs + daysInMonth);
    const trail = Array.from({length: trailOffs}, (_, i) => i);
    
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

    const isSubDue = (sub: any, day?: number) => {
        const [_, m, d] = sub.dueDate.split("-").map(Number);
        const isDueMonth = sub.cycle === "monthly" || m - 1 === cMonth;
        const isDueDay = day ? d === day : true;
        const isActive = !sub.status || sub.status === "Active";
        return isDueMonth && isDueDay && isActive;
    };

    const upcomingSubs = dummySubs.filter(sub => 
        selectedDay ? isSubDue(sub, selectedDay) : isSubDue(sub)
    );

    const nextMonth = () => {
        setCurrentDate(new Date(cYear, cMonth + 1, 1));
        setSelectedDay(null); 
    };
    const prevMonth = () => {
        setCurrentDate(new Date(cYear, cMonth - 1, 1));
        setSelectedDay(null);
    };

    return (
        <div className="flex flex-col h-full w-full bg-white pb-24">
            <div className="shrink-0">
                <TopBar title="Calendar" showBack={false} showFilter={true}/>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
                <div className="flex flex-col items-center px-6 py-4">
                    <h2 className="text-3xl font-bold text-brand-yellow mb-6">{currentMonth}</h2>

                    <div className="w-full">
                        <div className="grid grid-cols-7 mb-2 text-center font-bold text-gray-800">
                            {weekdays.map((day, i) => (<div key={`header-${i}`}>{day}</div>))}
                        </div>
                        
                        <div className="grid grid-cols-7 grid-rows-6 gap-1.5 p-1.5 bg-[#7AC5D8]/70 text-center font-semibold text-gray-600">
                            {blanks.map(b => (<div key={`blank-${b}`} className="bg-white h-10 shadow-sm"></div>))}
                            
                            {days.map(day => {
                                const hasSub = dummySubs.some(sub => isSubDue(sub, day));
                                const isSelected = selectedDay === day;

                                return (
                                    <div 
                                        key={`day-${day}`} 
                                        onClick={() => hasSub ? setSelectedDay(isSelected ? null : day) : null}
                                        className={`bg-white h-10 flex justify-center items-center shadow-sm ${hasSub ? "cursor-pointer" : ""}`}
                                    >
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors 
                                            ${hasSub && !isSelected ? "border-2 border-red-500 text-red-500 font-bold" : ""}
                                            ${isSelected ? "bg-red-500 text-white font-bold" : ""}
                                        `}>
                                            {day}
                                        </div>
                                    </div>
                                );
                            })}

                            {trail.map(t => (<div key={`trail-${t}`} className="bg-white h-10 shadow-sm"></div>))}
                        </div>
                    </div>
                </div>

                <div className="flex-grow shrink-0 flex flex-col bg-brand-yellow rounded-t-3xl mt-4 px-6 pt-6 w-full shadow-inner min-h-[300px]">
                    <div className="flex justify-between items-center text-white mb-6">
                        <button onClick={prevMonth} className="text-3xl font-bold hover:scale-125 transition-transform cursor-pointer">{"<"}</button>
                        <h3 className="text-3xl font-bold">{currentMonth}</h3>
                        <button onClick={nextMonth} className="text-3xl font-bold hover:scale-125 transition-transform cursor-pointer">{">"}</button>
                    </div>
                    
                    <h4 className="text-white text-center font-bold mb-4">
                        {selectedDay ? `Due on ${currentMonth} ${selectedDay}` : "Subscriptions Due"}
                    </h4>
                    
                    <div className="flex flex-col w-full gap-1">
                        {upcomingSubs.map(sub => (
                            <SubscriptionChip
                                key={sub.id} 
                                id={sub.id}
                                name={sub.name}
                                price={sub.price}
                                variant="teal"
                            />
                        ))}
                        {upcomingSubs.length === 0 && selectedDay && (
                            <div className="text-center text-white/80 font-semibold mt-4">No payments due today.</div>
                        )}
                        <div className="h-32 w-full shrink-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}