import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider } from '../firebase'; 
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Create User
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Add Name to Profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      // 👇 CHANGE 1: Signup success hone par Dashboard par bhejein
      navigate('/Dashboard'); 

    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      
      // 👇 CHANGE 2: Google Signup hone par bhi Dashboard par bhejein
      navigate('/Dashboard'); 

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f8] py-10">
      
      {/* Card Container */}
      <div className="bg-white w-full max-w-[500px] p-8 rounded-lg shadow-sm border border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-normal text-gray-800">Register for free</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">or</span>
            <Link to="/login" className="px-4 py-1.5 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition">
              Log in
            </Link>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* First Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-1.5">First name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-1.5">Last name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 text-sm mb-1.5">Email <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 text-sm mb-1.5">Password <span className="text-red-500">*</span></label>
            <input 
              type="password" 
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="mt-4 w-full bg-[#f4cccc] text-white font-bold py-3 rounded uppercase tracking-wide hover:bg-[#e06666] transition disabled:opacity-70"
            style={{ backgroundColor: '#CE2029' }} // Fixed: PubNub Red Color
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

        </form>

        {/* Divider */}
        <div className="mt-6 mb-4">
          <p className="text-gray-500 text-sm">or register with</p>
        </div>

        {/* Google Button */}
        <button 
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded hover:bg-gray-50 transition shadow-sm font-medium"
        >
          <FcGoogle size={22} />
          <span>Google</span>
        </button>

        {/* Footer Terms */}
        <p className="mt-6 text-xs text-gray-500 text-center leading-relaxed">
          By clicking on REGISTER, or the Google button, you are agreeing to our Terms of Service and Privacy Policy.
        </p>

      </div>
    </div>
  );
};

export default Signup;