import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-pubnubDarkBlue text-white text-[13px] font-medium py-2.5 px-6 flex justify-between items-center w-full">
      
      {/* Left Side: Tag & Text */}
      <div className="flex items-center gap-3 overflow-hidden">
        {/* Blue Tag */}
        <span className="bg-[#4d7eff] text-white text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
          NEW: PUBNUB MCP SERVER
        </span>
        
        {/* Text (Hidden on very small mobile screens to save space) */}
        <span className="truncate hidden sm:block text-gray-200">
          Creating Real-Time Apps with AI Agents is now Easier & more Reliable
        </span>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center gap-6 text-xs font-bold tracking-wide uppercase">
        <a href="#" className="hover:text-gray-300 transition">Support</a>
        <a href="#" className="hover:text-gray-300 transition">Login</a>
      </div>

    </div>
  );
};

export default TopBar;