'use client';
import Cookies from 'js-cookie';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User, tokens: { accessToken: string; refreshToken: string }) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Only access localStorage on the client side
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        try {
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch {
            console.error('Failed to parse user from localStorage');
        }
    }, []);

    const login = (userData: User, tokens: { accessToken: string; refreshToken: string }) => {
        console.log("RecievedUserData : ", userData);
        console.log("RecievedUserDataTokenA : ", tokens.accessToken);
        console.log("RecievedUserDataTokenB : ", tokens.refreshToken);

        

        Cookies.set('accessToken', tokens.accessToken, { secure: true });
        Cookies.set('refreshToken', tokens.refreshToken, { secure: true });

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const isAuthenticated = !!user;

    const value = { user, login, logout, isAuthenticated };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
