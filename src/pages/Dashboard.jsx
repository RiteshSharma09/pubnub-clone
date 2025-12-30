import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth"; // 1. onAuthStateChanged import kiya
import { auth } from "../firebase"; 

import { 
  FiLayers, FiUsers, FiPlus, FiHome, FiBox, FiActivity, FiCpu, FiTerminal, 
  FiBarChart2, FiMonitor, FiBriefcase, FiSettings, FiHelpCircle, FiFileText, 
  FiUser, FiShield, FiCreditCard, FiLogOut, FiLink, FiCheckCircle, FiChevronDown, FiGrid 
} from 'react-icons/fi';
import { IoRocket, IoChatbubblesOutline, IoNotificationsOutline } from 'react-icons/io5'; 

const Dashboard = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null); // 2. User data store karne ke liye state
  const [loading, setLoading] = useState(true); // Loading state
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

  // --- AUTH CHECK EFFECT ---
  useEffect(() => {
    // Firebase listener jo check karega user logged in hai ya nahi
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Agar user logged in hai, to state set karo
        setUser(currentUser);
      } else {
        // Agar nahi hai, to Login page par bhejo
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  // --- LOGOUT FUNCTION ---
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show nothing or a loader while checking auth status
  if (loading) {
      return <div className="h-screen w-screen flex items-center justify-center bg-[#f8f9fa]">Loading...</div>;
  }

  // User details (Fallback agar name nahi hai to 'User' dikhayega)
  const displayName = user?.displayName || "User";
  const email = user?.email || "";

  return (
    <div className="flex h-screen w-screen bg-[#f8f9fa] font-sans text-gray-800 overflow-hidden">
      
      {/* --- LEFT SIDEBAR (FIXED) --- */}
      <aside className="w-64 bg-[#0d1c42] text-gray-400 flex flex-col justify-between flex-shrink-0 z-30">
        <div>
            {/* Sidebar Logo */}
            <div className="h-14 flex items-center px-5 border-b border-gray-800">
                <span className="text-white text-xl font-bold tracking-tight">pubnub</span>
            </div>

            {/* Sidebar Menu */}
            <div className="py-4 overflow-y-auto custom-scrollbar h-[calc(100vh-130px)]">
                <div className="px-3 space-y-1">
                    <NavItem icon={<FiHome size={18} />} text="Home" active />
                    <NavItem icon={<FiBox size={18} />} text="Apps & Keysets" count="Build" />
                    <NavItem icon={<FiCpu size={18} />} text="Functions" />
                    <NavItem icon={<FiActivity size={18} />} text="Events & Actions" />
                    <NavItem icon={<FiTerminal size={18} />} text="Debug Console" count="Manage" />
                </div>
                
                <div className="my-4 px-6">
                    <div className="h-px bg-gray-800"></div>
                </div>

                <div className="px-3 space-y-1">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                        <div className="animate-pulse h-2 w-2 rounded-full bg-blue-500"></div> Insights
                    </div>
                    <NavItem icon={<FiBarChart2 size={18} />} text="Usage & Monitoring" />
                    
                    <div className="mt-4 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        BizOps Workspace
                    </div>
                    <NavItem icon={<FiUsers size={18} />} text="User Management" />
                    <NavItem icon={<FiMonitor size={18} />} text="Channel Monitor" />
                </div>
            </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 bg-[#0a1633] space-y-3 border-t border-gray-800">
            <button className="w-full bg-[#CE2029] hover:bg-[#b01b23] text-white font-semibold py-2 rounded text-sm transition shadow-md">
                Upgrade
            </button>
            <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer px-2 transition">
                <IoChatbubblesOutline size={18} />
                <span>Chat with Support</span>
            </div>
        </div>
      </aside>


      {/* --- RIGHT SIDE CONTENT WRAPPER --- */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative">
        
        {/* 2. APP HEADER (Fixed Top) */}
        <header className="h-14 bg-white border-b border-gray-200 flex justify-between items-center px-6 flex-shrink-0 z-20 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            
            {/* Left: Apps Dropdown */}
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition text-gray-600">
                <span className="text-sm font-medium">Apps</span>
                <FiChevronDown size={14} />
            </div>
            
            {/* Right: Plan & Profile */}
            <div className="flex items-center gap-5">
                <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-semibold text-gray-700 hover:bg-gray-50 transition">
                    Free plan
                </button>
                
                <div className="flex items-center gap-4 text-gray-500">
                    <button className="hover:text-purple-600 transition"><FiGrid size={18} /></button>
                    <button className="hover:text-purple-600 transition"><FiHelpCircle size={18} /></button>
                    <button className="hover:text-purple-600 transition"><IoNotificationsOutline size={18} /></button>
                </div>

                <div className="h-6 w-px bg-gray-200"></div>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-3 hover:bg-gray-50 p-1 pr-2 rounded transition"
                    >
                         {/* DYNAMIC EMAIL HERE */}
                         <div className="text-sm font-medium text-gray-700">{email}</div>
                         <FiChevronDown size={14} className="text-gray-400" />
                    </button>

                    {isProfileOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                            <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                                {/* DYNAMIC NAME AND EMAIL HERE */}
                                <p className="text-sm font-bold text-gray-800">{displayName}</p>
                                <p className="text-xs text-gray-500 truncate">{email}</p>
                            </div>
                            <div className="py-1">
                                <MenuItem icon={<FiUser size={16} />} text="Profile settings" />
                                <MenuItem icon={<FiSettings size={16} />} text="Account settings" />
                                <div className="my-1 border-t border-gray-100"></div>
                                
                                <div onClick={handleLogout}>
                                    <MenuItem icon={<FiLogOut size={16} />} text="Log out" isDanger />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>

        {/* 3. MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto space-y-8">
                
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800">Home</h1>
                </div>

                {/* Banner */}
                <div className="bg-[#0d1c42] rounded-xl p-6 text-white shadow-lg relative overflow-hidden border border-gray-800">
                    <div className="flex justify-between items-start mb-6 relative z-10">
                        <div>
                            <h2 className="text-xl font-bold flex items-center gap-2 mb-1">
                                Start Building! <span className="text-2xl">🚀</span>
                            </h2>
                            <p className="text-gray-400 text-sm">Complete these quick, guided steps to unlock the full power of your PubNub account</p>
                        </div>
                        <div className="text-right">
                             <span className="bg-[#1f2e5a] text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-700 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-orange-400"></span> 3 tasks remaining
                             </span>
                        </div>
                    </div>

                    <div className="space-y-3 relative z-10">
                        <StepItem 
                            icon={<IoRocket size={20} />} 
                            iconBg="bg-[#fcecd6] text-orange-600"
                            title="Explore PubNub features" 
                            desc="Get ready to build with PubNub in 5 minutes"
                            btnText="Let's go"
                            isExternal
                        />
                        <StepItem 
                            icon={<FiLayers size={20} />} 
                            iconBg="bg-[#dbf0ff] text-blue-600"
                            title="Set up your first App and Keyset" 
                            desc="Start by creating an App to organize your project"
                            btnText="Let's go"
                            btnClass="bg-[#2e4584] text-white hover:bg-[#3d5aa8]"
                        />
                         <StepItem 
                            icon={<FiUsers size={20} />} 
                            iconBg="bg-[#ebdfff] text-purple-600"
                            title="Invite your team" 
                            desc="Bring your team on board to collaborate on your PubNub projects"
                            btnText="Invite member"
                            btnClass="bg-[#2e4584] text-white hover:bg-[#3d5aa8]"
                        />
                    </div>
                </div>

                {/* Create App Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
                     <div className="flex justify-center mb-6">
                         <div className="relative">
                            <FiFileText size={48} className="text-gray-300 stroke-[1]" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-gray-200 shadow-sm">
                                <FiPlus size={16} className="text-red-500" />
                            </div>
                         </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Create first app</h3>
                    <p className="text-gray-500 text-sm mt-1 mb-8">You don't have any apps on this account</p>
                    
                    <div className="flex justify-center gap-4">
                        <button className="px-5 py-2.5 border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center gap-2">
                            Explore demo <FiLink className="rotate-45" />
                        </button>
                        <button className="px-5 py-2.5 bg-[#CE2029] text-white rounded text-sm font-bold hover:bg-[#b01b23] transition flex items-center gap-2 shadow-sm">
                            <FiPlus size={18} /> Create app
                        </button>
                    </div>
                </div>

                {/* Bottom Widgets */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">
                    {/* Usage Chart */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800 text-sm">Recent Usage</h3>
                            <button className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1">
                                View Usage <span className="text-lg">›</span>
                            </button>
                        </div>
                        <div className="flex-1 min-h-[160px] border-l border-b border-gray-100 relative flex items-end px-4 pb-2">
                            <div className="absolute inset-0 flex flex-col justify-between py-2 px-4 pointer-events-none opacity-50">
                                <div className="border-t border-gray-100 w-full h-px border-dashed"></div>
                                <div className="border-t border-gray-100 w-full h-px border-dashed"></div>
                                <div className="border-t border-gray-100 w-full h-px border-dashed"></div>
                                <div className="border-t border-gray-100 w-full h-px border-dashed"></div>
                            </div>
                            <div className="w-full text-center text-gray-400 text-xs italic">
                                No data available yet
                            </div>
                        </div>
                    </div>

                    {/* Insights Grid */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                         <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-gray-800 text-sm">Insights</h3>
                            <button className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1">
                                View Insights <span className="text-lg">›</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <InsightCard label="Last 24h" value="N/A" />
                            <InsightCard label="Max Channels" value="N/A" />
                            <InsightCard label="Unique Users" value="N/A" />
                            <InsightCard label="Messages" value="N/A" />
                        </div>
                    </div>
                </div>

            </div>
        </main>
      </div>
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const NavItem = ({ icon, text, active, count }) => (
    <div className={`group flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm font-medium transition-colors ${active ? 'bg-[#182a52] text-white' : 'text-gray-400 hover:text-white hover:bg-[#182a52]'}`}>
        <div className="flex items-center gap-3">
            <span className={active ? 'text-white' : 'text-gray-400 group-hover:text-white'}>{icon}</span>
            <span>{text}</span>
        </div>
        {count && <span className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-700 px-1 rounded">{count}</span>}
    </div>
);

const StepItem = ({ icon, iconBg, title, desc, btnText, btnClass, isExternal }) => (
    <div className="bg-[#172b5e] p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center border border-gray-700/50 hover:border-gray-600 transition gap-4">
        <div className="flex items-center gap-4 text-left w-full">
            <div className={`p-2.5 rounded-full flex-shrink-0 ${iconBg}`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">{title}</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{desc}</p>
            </div>
        </div>
        <button className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide whitespace-nowrap flex items-center gap-2 ${btnClass || 'bg-[#fcecd6] text-orange-900 hover:bg-[#fff5e6]'}`}>
            {btnText} {isExternal && <FiLink size={12} />}
        </button>
    </div>
);

const MenuItem = ({ icon, text, isDanger }) => (
    <div className={`px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition ${isDanger ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'}`}>
        <span className="text-gray-400">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
    </div>
);

const InsightCard = ({ label, value }) => (
    <div className="bg-gray-50/50 p-3 rounded border border-gray-100">
        <div className="text-[10px] text-gray-500 mb-1 uppercase tracking-wide">{label}</div>
        <div className="text-lg font-bold text-gray-700">{value}</div>
    </div>
);

export default Dashboard;