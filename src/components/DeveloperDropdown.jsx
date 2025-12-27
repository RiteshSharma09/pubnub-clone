import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, FiChevronUp, FiHome, FiFileText, FiPlayCircle, FiMap, FiGlobe 
} from "react-icons/fi";
import { FaJava } from "react-icons/fa"; // NEW: Imported Java icon from FontAwesome
import { 
  SiJavascript, SiPython, SiSwift, SiAndroid, SiReact, 
  SiGo, SiRuby, SiPhp, SiFlutter, SiUnity, SiNodedotjs, 
  SiKotlin, SiApple, SiDotnet 
} from "react-icons/si"; // REMOVED: SiJava

// --- DATA CONFIGURATION ---
const developerData = {
  menuItems: [
    { title: "Developer Home", icon: FiHome },
    { title: "Documentation", icon: FiFileText },
    { title: "Tutorials", icon: FiPlayCircle },
    { title: "Tour", icon: FiMap },
    { title: "Network", icon: FiGlobe },
  ],
  sdks: [
    { icon: SiJavascript, color: "#F7DF1E" }, // JS - Yellow
    { icon: SiPython, color: "#3776AB" },     // Python - Blue
    { icon: FaJava, color: "#007396" },       // Java - Replaced SiJava with FaJava
    { icon: SiSwift, color: "#F05138" },      // Swift - Orange
    { icon: SiAndroid, color: "#3DDC84" },    // Android - Green
    { icon: SiReact, color: "#61DAFB" },      // React - Blue
    { icon: SiGo, color: "#00ADD8" },         // Go - Cyan
    { icon: SiRuby, color: "#CC342D" },       // Ruby - Red
    { icon: SiDotnet, color: "#512BD4" },     // .NET - Purple
    { icon: SiNodedotjs, color: "#339933" },  // Node - Green
    { icon: SiPhp, color: "#777BB4" },        // PHP - Purple
    { icon: SiFlutter, color: "#02569B" },    // Flutter - Blue
    { icon: SiUnity, color: "#000000" },      // Unity - Black
    { icon: SiKotlin, color: "#0095D5" },     // Kotlin - Purple
    { icon: SiApple, color: "#000000" },      // iOS - Black
  ]
};

const DeveloperDropdown = ({ isMobile, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ================= MOBILE DESIGN =================
  if (isMobile) {
    return (
      <div className="border-b border-gray-100 bg-white">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex justify-between items-center px-6 py-4 font-semibold transition-colors ${
            isOpen ? "text-red-600 bg-gray-50" : "text-gray-800"
          }`}
        >
          Developer
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {/* Expanded Content */}
        {isOpen && (
          <div className="bg-gray-50 px-6 pb-6 pt-2">
            
            {/* List Items */}
            <div className="space-y-4 mb-6">
              {developerData.menuItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  to="/" 
                  className="flex items-center gap-3 group"
                  onClick={onClose}
                >
                  <item.icon className="text-gray-500 text-lg group-hover:text-red-600" />
                  <span className="text-sm font-bold text-gray-800 group-hover:text-red-600">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* SDKs Grid (Mobile) */}
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                SDKs
              </h4>
              <div className="flex flex-wrap gap-3">
                {developerData.sdks.map((item, idx) => (
                  <div key={idx} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                     <item.icon style={{ color: item.color }} className="text-base" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    );
  }

  // ================= DESKTOP DESIGN =================
  return (
    <div className="absolute top-full left-[-100px] w-[600px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 rounded-b-xl p-8 z-50 cursor-default">
      <div className="grid grid-cols-5 gap-8">
        
        {/* LEFT COLUMN: MENU ITEMS (Span 2) */}
        <div className="col-span-2 border-r border-gray-100 pr-6">
          <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
            Developer Home
          </h4>
          <div className="space-y-4">
            {developerData.menuItems.map((item, idx) => (
              <Link key={idx} to="/" className="flex items-center gap-3 group">
                <item.icon className="text-gray-400 text-lg group-hover:text-red-600 transition-colors" />
                <span className="text-sm font-bold text-gray-700 group-hover:text-red-600 transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: SDKs GRID (Span 3) */}
        <div className="col-span-3 pl-2">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            SDKs
          </h4>
          <div className="grid grid-cols-5 gap-3">
            {developerData.sdks.map((item, idx) => (
              <Link 
                key={idx} 
                to="/" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all"
                title={item.icon.name}
              >
                <item.icon style={{ color: item.color }} className="text-xl" />
              </Link>
            ))}
            {/* "More" Circle */}
            <Link 
                to="/" 
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-colors"
            >
                +
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperDropdown;