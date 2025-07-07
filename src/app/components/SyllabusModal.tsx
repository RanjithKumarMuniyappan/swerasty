
import React from 'react';
import { CloseIcon } from './Icons';

interface SyllabusModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">TNPSC Group 4 பாடத்திட்டம்</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                        aria-label="Close modal"
                    >
                        <CloseIcon />
                    </button>
                </header>
                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
                        <p className="text-gray-500 text-center">
                            பாடத்திட்டம் PDF இங்கே காண்பிக்கப்படும்.
                            <br />
                            <span className="text-sm">(Syllabus PDF would be displayed here)</span>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};
