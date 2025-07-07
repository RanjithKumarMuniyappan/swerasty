
import React from 'react';

interface PlaceholderPageProps {
    title: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600">இந்தப் பக்கத்திற்கான உள்ளடக்கம் விரைவில் சேர்க்கப்படும்.</p>
            <p className="text-gray-500 mt-2">(Content for this page will be added soon.)</p>
        </div>
    );
};
