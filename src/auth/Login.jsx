import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, googleProvider } from "../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"; 
import { FcGoogle } from "react-icons/fc";
import { FaLock } from 'react-icons/fa';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logoImg from '../assets/pubnub_logo.png'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      // 👇 CHANGE 1: Login ke baad seedha Home par bhejein
      navigate('/Dashboard'); 

    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      
      // 👇 CHANGE 2: Google Login ke baad bhi Home par bhejein
      navigate('/Dashboard'); 

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-white">
      
      {/* Logo */}
      <div className="mb-8">
        <Link to="/">
          <img src={logoImg} alt="PubNub" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[480px] bg-white p-10 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100">
        
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl font-normal text-gray-700">Log in</h2>
          <div className="text-sm text-gray-500">
            No account? <Link to="/signup" className="text-[#CE2029] hover:underline">Sign up free</Link>
          </div>
        </div>

        {error && (
          <div className="mb-4 text-red-600 text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input 
              type="email" 
              required 
              className="w-full py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#CE2029] focus:outline-none transition-colors"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              required 
              className="w-full py-2 border-b border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#CE2029] focus:outline-none transition-colors pr-10"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-[#CE2029] text-sm hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#c0242b] text-white py-3 rounded text-sm font-bold tracking-wide hover:bg-[#a3161c] transition shadow-sm uppercase"
          >
            Log In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or login with</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleGoogleSignIn}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded hover:bg-gray-50 transition shadow-sm font-medium"
          >
            <FcGoogle size={22} />
            <span className="text-sm">Google</span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 py-2.5 rounded hover:bg-gray-50 transition shadow-sm font-medium">
            <FaLock size={16} className="text-gray-500" />
            <span className="text-sm">SSO</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;