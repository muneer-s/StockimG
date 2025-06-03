import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { verifyOtp } from '../../Api/api';
import { useAppDispatch } from '../../Redux/store';
import {  setUserCredential } from '../../Redux/AuthSlice';
import Header from '../../Components/Header/Header';



const OtpPage = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email'); // or userId if you pass that

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 1) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleVerify = async () => {
        const finalOtp = otp.join('');
        if (finalOtp.length !== 4) {
            toast.error('Please enter the full OTP');
            return;
        }

        try {
            const result: any = await verifyOtp({ otp: finalOtp, userId: email });
            console.log('otp result verify : ', result);

            if (result?.success) {
                dispatch(setUserCredential(result.data.userData));
                toast.success(result.message || 'OTP Verified Successfully!');
                navigate('/');
            } else {
                toast.error(result?.message || 'Invalid OTP');
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message || 'Failed to verify OTP');
        }


    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">OTP Verification</h2>
                    <p className="text-center text-gray-500 mb-6">Enter the 4-digit code sent to your email</p>

                    <div className="flex justify-between mb-6">
                        {otp.map((digit, idx) => (
                            <input
                                key={idx}
                                id={`otp-${idx}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, idx)}
                                className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleVerify}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                    >
                        Verify OTP
                    </button>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Didn't receive the code? <span className="text-blue-600 hover:underline cursor-pointer">Resend</span>
                    </p>
                </div>
            </div>
        </>

    );
};

export default OtpPage;
