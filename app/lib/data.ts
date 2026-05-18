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
    { id: "1", name: "Netflix Premium", price: "549.00", cycle: "monthly", dueDate: "2026-05-13", category: "Entertainment", paymentMethod: "Credit Card", status: "Active" },
    { id: "2", name: "Spotify Premium", price: "149.00", cycle: "monthly", dueDate: "2026-05-03", category: "Entertainment", paymentMethod: "GCash", status: "Active" },
    { id: "3", name: "Anytime Fitness", price: "2500.00", cycle: "monthly", dueDate: "2026-05-28", category: "Health", paymentMethod: "Bank Transfer", status: "Active" },
    { id: "4", name: "Adobe Creative Cloud", price: "3500.00", cycle: "yearly", dueDate: "2026-11-15", category: "Software", paymentMethod: "PayPal", status: "Active" },
    { id: "5", name: "Amazon Prime", price: "149.00", cycle: "monthly", dueDate: "2026-05-08", category: "Utilities", paymentMethod: "Credit Card", status: "Active" },
    { id: "6", name: "GitHub Copilot", price: "500.00", cycle: "monthly", dueDate: "2026-05-21", category: "Software", paymentMethod: "Credit Card", status: "Active" },
    { id: "7", name: "Disney+", price: "349.00", cycle: "monthly", dueDate: "2026-05-18", category: "Entertainment", paymentMethod: "GCash", status: "Paused" },
    { id: "8", name: "Nintendo Switch Online", price: "999.00", cycle: "yearly", dueDate: "2026-10-10", category: "Entertainment", paymentMethod: "Credit Card", status: "Active" },
    { id: "9", name: "Vercel Pro", price: "1000.00", cycle: "monthly", dueDate: "2026-05-02", category: "Software", paymentMethod: "Credit Card", status: "Active" },
    { id: "10", name: "Headspace", price: "350.00", cycle: "monthly", dueDate: "2026-05-12", category: "Health", paymentMethod: "Apple Pay", status: "Cancelled" },
    { id: "11", name: "NordVPN", price: "4500.00", cycle: "yearly", dueDate: "2027-01-20", category: "Utilities", paymentMethod: "Credit Card", status: "Active" },
    { id: "12", name: "ChatGPT Plus", price: "1100.00", cycle: "monthly", dueDate: "2026-05-25", category: "Software", paymentMethod: "Credit Card", status: "Active" }
];

export type Notification = {
    id: string;
    title: string;
    message: string;
    time: string;
};

export const dummyNotifs: Notification[] = [
    { id: "n1", title: "Payment due!", message: "Spotify Premium", time: "In 2 days..." },
    { id: "n2", title: "Payment due!", message: "Vercel Pro", time: "In 3 days..." },
    { id: "n3", title: "Payment processed", message: "Amazon Prime", time: "1 day ago..." },
    { id: "n4", title: "System Alert", message: "Added GCash as payment method", time: "1 week ago..." }
];