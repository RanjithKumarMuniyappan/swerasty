
import React from 'react';
import { SyllabusIcon } from './Icons';

interface FloatingActionButtonProps {
    onClick: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="பாடத்திட்டத்தைக் காட்டு"
        >
            <SyllabusIcon />
        </button>
    );
};
