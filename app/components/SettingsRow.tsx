import {ReactNode} from "react";

interface SettingsRowProps {
    title: string;
    icon: ReactNode;
    onClick?: () => void;
}

export default function SettingsRow({title, icon, onClick}: SettingsRowProps) {
    return (
        <button 
            onClick={onClick}
            className="flex flex-row items-center w-full px-5 py-3 rounded-full mb-3 bg-gray-100 text-brand-dark hover:bg-gray-200 transition-colors shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 mr-4">
                    {icon}
                </div>
                <span className="font-bold text-lg">{title}</span>
        </button>
    );
}
