import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import logoImg from '../assets/pubnub_logo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Check your email.');
    } catch (err) {
      setError("Failed to send reset email. Please check the email address.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-[#ffffff]">
      
      {/* 1. Logo */}
      <div className="mb-8">
        <Link to="/">
          <img src={logoImg} alt="PubNub" className="h-8 w-auto" />
        </Link>
      </div>

      {/* 2. Main Card */}
      <div className="w-full max-w-[480px] bg-white p-10 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 text-center">
        
        {/* Title */}
        <h2 className="text-2xl font-normal text-gray-700 mb-2">Forgot password</h2>
        
        {/* Back to Login Link */}
        <div className="mb-8">
          <Link to="/login" className="text-[#CE2029] hover:underline text-sm font-medium">
            Log in
          </Link>
        </div>

        {/* Description Text */}
        <p className="text-gray-600 text-[15px] leading-relaxed mb-8 text-left">
          Enter the email address associated with your account and we will send you a link to reset your password.
        </p>

        {/* Success/Error Messages */}
        {message && <div className="mb-4 text-green-600 text-sm bg-green-50 p-2 rounded border border-green-200">{message}</div>}
        {error && <div className="mb-4 text-red-600 text-sm bg-red-50 p-2 rounded border border-red-200">{error}</div>}

        {/* Form */}
        <form onSubmit={handleResetPassword} className="space-y-8">
          
          {/* Email Input (Bottom Border Style) */}
          <div className="relative text-left">
            <input 
              type="email" 
              required 
              className="w-full py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#CE2029] focus:outline-none transition-colors"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Reset Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#c0242b] text-white py-3 rounded text-sm font-bold tracking-wide hover:bg-[#a3161c] transition shadow-sm uppercase disabled:opacity-70"
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </button>

        </form>

      </div>
    </div>
  );
};

export default ForgotPassword;