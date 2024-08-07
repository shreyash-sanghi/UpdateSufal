import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { DotSpinner } from '@uiball/loaders';

import loginimg from '../assets/login-img2.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Auth = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const signupParam = searchParams.get('mode') === 'signup';
    const loginParam = searchParams.get('mode') === 'login';
    const [signUpForm, setSignUpForm] = useState(signupParam);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Password: ""
    });

    const [loginData, setLoginData] = useState({
        Email: "",
        Password: ""
    });

    const changeData = (e) => {
        const { name, value } = e.target;
        setData((info) => ({
            ...info,
            [name]: value
        }));
    };

    const changeLoginData = (e) => {
        const { name, value } = e.target;
        setLoginData((info) => ({
            ...info,
            [name]: value
        }));
    };

    const saveData = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { Email, Password, Name } = data;
            const result = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/sign_up`, { Email, Password, Name });
            const token = result.data.token;
            const OwnerEmail = result.data.OwnerEmail;
            axios.defaults.headers.common["Authorization"] = token;
            localStorage.setItem("token", token);
            if(Email===OwnerEmail){
            
                navigate("/add_event");
            }
            else{
                navigate("/");
            }
        } catch (error) {
            setLoading(false);
            toast(error);
        }
    };

    const saveLoginData = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { Email, Password } = loginData;
            const result = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/sign_in`, { Email, Password });
            const OwnerEmail = result.data.OwnerEmail;
            const token = result.data.token;
            axios.defaults.headers.common["Authorization"] = token;
            localStorage.setItem('token', token);
            if(Email===OwnerEmail){
                navigate("/add_event");
            }
            else{
                navigate("/");
            }
        } catch (error) {
            toast(error.response.data.error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const mode = searchParams.get('mode');
        if (mode === 'signup') {
            setSignUpForm(true);
        } else if (mode === 'login') {
            setSignUpForm(false);
        }
    }, [searchParams]);

    const toggleForm = () => {
        setSignUpForm(!signUpForm);
    };

    return (
        <>
            <Header />
            
            <div className="w-full lg:h-[calc(100vh-80px)] z-50 mb-20 lg:mb-10 flex flex-col items-center justify-center transition-all selection:bg-[#0a755862] py-8 ">
                <div className="max-w-7xl w-full h-full grid grid-cols-1 lg:grid-cols-2">
                    <div className="hidden lg:flex h-full w-full p-2 mx-auto">
                       <img
                            className="mx-auto w-full  rounded-md object-cover"
                            src={loginimg}
                            alt=""
                           
                            draggable="false"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-full h-full flex items-center justify-center px-4 py-10 mt-10 sm:mt-5 lg:mt-0 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                                {signUpForm ? 'Sign up to create account' : 'Log in to your account'}
                            </h2>
                            <p className="mt-3 text-left text-base text-gray-600">
                                {signUpForm ? 'Already have an account? ' : 'Don’t have an account? '}
                                <span
                                    className="font-medium text-black transition-all duration-200 hover:underline cursor-pointer"
                                    onClick={toggleForm}
                                >
                                    {signUpForm ? 'Log in' : 'Sign up'}
                                </span>
                            </p>
                            {signUpForm ? (
                                <form className="mt-6" onSubmit={saveData}>
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">
                                                Full Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="Name"
                                                    onChange={changeData}
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    placeholder="Full Name"
                                                    id="name"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="Email"
                                                    onChange={changeData}
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="email"
                                                    placeholder="Email"
                                                    id="email"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    name="Password"
                                                    onChange={changeData}
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="password"
                                                    placeholder="Password"
                                                    id="password"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-[#0a7558] px-3.5 py-2.5 font-semibold leading-7 text-[#fbfcfc] hover:bg-[#0a7558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558]"
                                            >
                                                Create Account
                                                <BsArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <form className="mt-6" onSubmit={saveLoginData}>
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                                                Email address
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    name="Email"
                                                    onChange={changeLoginData}
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="email"
                                                    placeholder="Email"
                                                    id="email"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    name="Password"
                                                    onChange={changeLoginData}
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="password"
                                                    placeholder="Password"
                                                    id="password"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-[#0a7558] px-3.5 py-2.5 font-semibold leading-7 text-[#fbfcfc] hover:bg-[#0a7558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a7558]"
                                            >
                                                  {loading ? (
                     <DotSpinner size={40} speed={0.9} color="white" className="flex justify-center m-auto" />
                  ) : (
                     "Login"
                  )}
                                                <BsArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                            {/* <div className="mt-3 space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <FcGoogle size={24} />
                                    </span>
                                    {signUpForm ? 'Sign up with Google' : 'Log in with Google'}
                                </button>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <FaFacebookF size={20} color="#1877F2" />
                                    </span>
                                    {signUpForm ? 'Sign up with Facebook' : 'Log in with Facebook'}
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Auth;
