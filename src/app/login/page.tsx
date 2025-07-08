'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter, useSearchParams } from 'next/navigation'
import { BookIcon } from '../components/Icons'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    
    const { login } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get('from') || '/';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }
        // In a real app, you'd validate credentials against a server.
        // Here, we'll just log in any user for demonstration.
        console.log('Logging in with:', { email, password });
        setError('');

        const name = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        login({ email, name });
        router.replace(from);
    };

    return (
        <>
            <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
                <div className="absolute top-8 left-8 text-slate-800 flex items-center space-x-2">
                    <BookIcon className="w-8 h-8 text-blue-600" />
                    <span className="text-2xl font-bold">TNPSC Group 4 Prep</span>
                </div>
                <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-center text-gray-500 mb-8">Sign in to continue your preparation</p>
                    {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">{error}</p>}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="••••••••••"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-sm mt-8">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-bold text-blue-600 hover:text-blue-800">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;