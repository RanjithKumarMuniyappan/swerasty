'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { BookIcon } from '../components/Icons';

import { signIn } from '@/services/loginApi';

const LoginClient = () => {
    const { login } = useAuth();
    const router = useRouter();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const onSubmit = async (values: typeof initialValues, { setSubmitting, setFieldError }: any) => {
        try {
            const { email, password } = values;

            console.log("Payload : ", values);

            const res:any = await signIn(values);

            console.log("Current ResA : ", res);
            const { user } = res?.data;


            console.log("Current ResB : ", user);
            

            // Fallback if user isn't returned
            const name = values.email.split('@')[0].replace(/[^a-zA-Z0-9]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const userData = user || { name, email: values.email };

            login(userData, { accessToken: res?.data?.token.accessToken, refreshToken:res?.data?.token.refreshToken });

            router.replace('/pages/dashboard');
        } catch (error: any) {
            setFieldError('email', 'Login failed'); // Example error
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
            <div className="absolute top-8 left-8 text-slate-800 flex items-center space-x-2">
                <BookIcon className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold">TNPSC Group 4 Prep</span>
            </div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-8">Sign in to continue your preparation</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ handleSubmit, isSubmitting, values }) => {
                        useEffect(() => {
                            console.log('Current Form:', values);
                        }, [values]);

                        return (
                            <form onSubmit={handleSubmit} noValidate>
                                {/* Email */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="email">
                                        {msg => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                {/* Password */}
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <ErrorMessage name="password">
                                        {msg => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                {/* Submit */}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                                    >
                                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                                    </button>
                                </div>
                            </form>
                        );
                    }}
                </Formik>

                <p className="text-center text-gray-500 text-sm mt-8">
                    Don't have an account?{' '}
                    <Link href="/signup" className="font-bold text-blue-600 hover:text-blue-800">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginClient;
