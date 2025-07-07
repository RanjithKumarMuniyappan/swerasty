'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { MenuIcon } from '../components/Icons';
import { MENU_ITEMS } from '../../../constants';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const location = usePathname();
    const currentItem = MENU_ITEMS.find(item => item.path === location);
    const title = currentItem ? currentItem.label : "TNPSC Group 4 தயாரிப்பு";
    

    return (
        <header className="flex-shrink-0 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 z-10">
            <div className="flex items-center">
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)} 
                    className="text-gray-500 mr-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
                >
                   <MenuIcon />
                </button>
                <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
            </div>
        </header>
    );
};