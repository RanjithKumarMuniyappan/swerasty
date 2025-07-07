'use client'
import React, { useState, useEffect } from 'react';
import { GroundingChunk } from '../../../../types';
import { LinkIcon, RefreshIcon } from '../../components/Icons';
import { Spinner } from '../../components/Spinner';

const Dashboard: React.FC = () => {
    const [news, setNews] = useState<string>('');
    const [sources, setSources] = useState<GroundingChunk[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    

    const getNews = async () => {
        setLoading(true);
        setError(null);
        try {
            
            setNews("Tnpsc group 4 latest news");
            setSources(sources);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">சமீபத்திய செய்திகள்</h2>
                <button 
                    onClick={getNews}
                    disabled={loading}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
                >
                    <RefreshIcon />
                    <span className="ml-2">புதுப்பிக்க</span>
                </button>
            </div>

            {loading && <div className="flex justify-center items-center h-64"><Spinner /></div>}
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">பிழை! </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

            {!loading && !error && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{news}</p>
                    {sources.length > 0 && (
                        <div className="mt-6 border-t pt-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">தகவல் ஆதாரங்கள்:</h3>
                            <ul className="space-y-2">
                                {sources.map((source, index) => (
                                    <li key={index} className="flex items-start">
                                        <LinkIcon className="flex-shrink-0 mt-1 mr-2 text-gray-500" />
                                        <a 
                                            href={source.web.uri} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-600 hover:underline break-all"
                                        >
                                            {source.web.title || source.web.uri}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default Dashboard;