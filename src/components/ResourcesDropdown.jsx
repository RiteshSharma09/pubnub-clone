import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, FiChevronUp, FiFileText, FiPlayCircle, 
  FiUsers, FiBook, FiInfo, FiStar 
} from "react-icons/fi";
import { BiTrophy } from "react-icons/bi";

// --- DATA CONFIGURATION ---
const resourcesData = [
  { title: "Why PubNub Wins", icon: BiTrophy },
  { title: "Blog", icon: FiFileText },
  { title: "Demos", icon: FiPlayCircle },
  { title: "Customers", icon: FiUsers },
  { title: "eBooks", icon: FiBook },
  { title: "Careers", icon: FiStar },
  { title: "About Us", icon: FiInfo },
];

const ResourcesDropdown = ({ isMobile, onClose }) => {
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
          Resources
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {/* Expanded Content */}
        {isOpen && (
          <div className="bg-gray-50 px-6 pb-4 pt-2">
            <div className="space-y-4">
              {resourcesData.map((item, idx) => (
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
          </div>
        )}
      </div>
    );
  }

  // ================= DESKTOP DESIGN =================
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[260px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 rounded-b-xl p-6 z-50 cursor-default">
      <div className="flex flex-col space-y-4">
        {resourcesData.map((item, idx) => (
          <Link 
            key={idx} 
            to="/" 
            className="flex items-center gap-3 group"
          >
            {/* Icon */}
            <item.icon className="text-gray-400 text-lg group-hover:text-red-600 transition-colors" />
            
            {/* Title */}
            <span className="text-sm font-bold text-gray-700 group-hover:text-red-600 transition-colors">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDropdown;