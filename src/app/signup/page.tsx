'use client';
import React, { useEffect } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BookIcon } from '../components/Icons';

const RegisterPage: React.FC = () => {
    const router = useRouter();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const onSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            console.log("Submitted: ", values);
            // await API call
            router.push('/login');
        } catch (error: any) {
            console.error("Error:", error.message);
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
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
                <p className="text-center text-gray-500 mb-8">Start your TNPSC preparation journey today</p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => {

                        return (
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ values, handleSubmit }) => {
                                    useEffect(() => {
                                        console.log("CurrentForm : ", values);
                                    }, [values]);

                                    return (
                                        <form onSubmit={handleSubmit}>
                                            {/* Name Field */}
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 "
                                                />
                                                <ErrorMessage name="name">
                                                    {msg => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                                                </ErrorMessage>
                                            </div>

                                            {/* Email Field */}
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="you@example.com"
                                                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="email">
                                                    {msg => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                                                </ErrorMessage>
                                            </div>

                                            {/* Password Field */}
                                            <div className="mb-6">
                                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                                <Field
                                                    type="password"
                                                    name="password"
                                                    placeholder="••••••••"
                                                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <ErrorMessage name="password">
                                                    {msg => <div className="text-red-500 text-sm mt-1">{msg}</div>}
                                                </ErrorMessage>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="flex items-center justify-between">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        )
                    }}
                </Formik>

                <p className="text-center text-gray-500 text-sm mt-8">
                    Already have an account?{' '}
                    <Link href="/login" className="font-bold text-blue-600 hover:text-blue-800">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
