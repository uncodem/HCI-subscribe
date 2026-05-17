export type Subscription = {
    id: string;
    name: string;
    price: string;
    cycle: "monthly" | "yearly";
    dueDate: string; 
    category?: string;
    paymentMethod?: string;
    reminders?: { months: string, weeks: string, days: string };
    notes?: string;
    status?: "Active" | "Paused" | "Cancelled";
};

export let dummySubs: Subscription[] = [
    { id: "1", name: "Netflix", price: "450.00", cycle: "monthly", dueDate: "2026-05-13" },
    { id: "2", name: "Spotify", price: "149.00", cycle: "monthly", dueDate: "2026-05-01" },
    { id: "3", name: "Gym", price: "1000.00", cycle: "monthly", dueDate: "2026-05-28" },
    { id: "4", name: "Adobe CC", price: "2500.00", cycle: "yearly", dueDate: "2026-11-13" },
    { id: "5", name: "Amazon Prime", price: "149.00", cycle: "monthly", dueDate: "2026-05-05" },
    { id: "6", name: "GitHub Copilot", price: "500.00", cycle: "monthly", dueDate: "2026-05-20" },
    { id: "7", name: "ChatGPT Plus", price: "1000.00", cycle: "monthly", dueDate: "2026-05-15" },
    { id: "8", name: "Disney+", price: "349.00", cycle: "monthly", dueDate: "2026-05-08" },
    { id: "9", name: "Nintendo Switch", price: "999.00", cycle: "yearly", dueDate: "2026-10-10" },
    { id: "10", name: "Vercel Pro", price: "1000.00", cycle: "monthly", dueDate: "2026-05-02" },
];

export type Notification = {
    id: string;
    title: string;
    message: string;
    time: string;
};

export const dummyNotifs: Notification[] = [
    { id: "n1", title: "Payment due!", message: "Subscription X", time: "In 3 days..." },
    { id: "n2", title: "Payment due!", message: "Subscription Y", time: "In 2 days..." },
    { id: "n3", title: "Payment due!", message: "Subscription Z", time: "1 day ago..." },
    { id: "n4", title: "System Alert", message: "New features added", time: "1 week ago..." }
];
