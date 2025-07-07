
import React from 'react';

import { MENU_ITEMS } from '../../../constants';
import SidebarLink from './SidebarLink';



interface SidebarProps {
    isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <aside
            className={`flex-shrink-0 bg-slate-800 text-slate-100 flex flex-col transition-all duration-300 ease-in-out ${
                isOpen ? 'w-64' : 'w-0 md:w-20'
            } overflow-x-hidden`}
        >
            <div className="flex items-center justify-center h-16 px-4 border-b border-slate-700 flex-shrink-0">
                <span className={`font-bold text-xl text-white whitespace-nowrap transition-opacity duration-300 ${!isOpen && 'opacity-0'}`}>
                    TNPSC Group 4
                </span>
            </div>
            <nav className="flex-1 mt-6 px-2 space-y-2">
                {MENU_ITEMS.map((item:any) => (
                    <SidebarLink key={item.id} item={item} isOpen={isOpen} />
                ))}
            </nav>
            <div className={`p-4 border-t border-slate-700 text-xs text-slate-400 whitespace-nowrap overflow-hidden ${!isOpen && 'hidden'}`}>
                <p>© 2024 தேர்வு প্রস্তুতি</p>
            </div>
        </aside>
    );
};
