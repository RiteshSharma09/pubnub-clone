import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiChevronDown, FiChevronUp, FiMessageSquare, FiUsers, FiCpu, 
  FiMapPin, FiActivity, FiShare2, FiShield, FiZap
} from "react-icons/fi";
import { 
  BiRocket, BiJoystick, BiSupport, BiWorld, BiBuilding 
} from "react-icons/bi";
import { 
  BsController, BsCart3, BsTruck, BsHeartPulse, BsCoin 
} from "react-icons/bs";
import { MdOutlineLightbulb, MdOutlineSpeed } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";

// --- DATA CONFIGURATION ---
const solutionsData = {
  useCases: [
    { title: "Chat", desc: "Provide chat experiences your users need", icon: FiMessageSquare },
    { title: "Edge Messaging", desc: "Never worry about latency issues again", icon: FiShare2 },
    { title: "Live Audience Engagement", desc: "From live events to social workouts", icon: FiActivity },
    { title: "Event-Driven Architecture", desc: "Launch faster with Events, not endpoints", icon: BiRocket },
    { title: "Multi-User Collaboration", desc: "Bring the team together", icon: FiUsers },
    { title: "LiveOps", desc: "Real-time decisions, zero lag", icon: MdOutlineLightbulb },
    { title: "IoT Device Control", desc: "Build an IoT platform & manage devices", icon: FiCpu },
    { title: "Gamification", desc: "Drive engagement in real time", icon: IoGameControllerOutline },
    { title: "Real-Time Workflows", desc: "Stream Data. Orchestrate Actions", icon: FiZap },
    { title: "Auto-Moderation", desc: "AI-powered message filtering", icon: FiShield },
    { title: "Geolocation & Dispatch", desc: "Geolocation APIs to track your fleet's cars", icon: FiMapPin },
    { title: "App Optimization", desc: "Maximize Efficiency – Made Easy", icon: MdOutlineSpeed },
  ],
  industries: [
    { title: "Sports, Media & Entertainment", icon: BiJoystick },
    { title: "Digital Healthcare", icon: BsHeartPulse },
    { title: "iGaming, Betting & Casino", icon: BsCoin },
    { title: "Games", icon: IoGameControllerOutline },
    { title: "eCommerce", icon: BsCart3 },
    { title: "FinTech", icon: FiCpu },
    { title: "Transport, Delivery & Logistics", icon: BsTruck },
    { title: "Call Centers & Customer Care", icon: BiSupport },
    { title: "Social & Lifestyle", icon: FiUsers },
    { title: "Enterprise SaaS", icon: BiBuilding,  },
  ]
};

const SolutionsDropdown = ({ isMobile, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ================= MOBILE DESIGN (Accordion) =================
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
          Solutions
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>

        {/* Expanded Content - Gray Background */}
        {isOpen && (
          <div className="bg-gray-50 px-6 pb-6 pt-2">
            
            {/* SECTION 1: USE CASES */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
                By Use Case
              </h4>
              <div className="space-y-4">
                {solutionsData.useCases.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to="/" 
                    className="flex gap-3 items-start group"
                    onClick={onClose}
                  >
                    <item.icon className="text-gray-400 text-lg mt-0.5 group-hover:text-red-600" />
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-red-600">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500 leading-tight mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* SECTION 2: INDUSTRIES */}
            <div>
              <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4 border-t border-gray-200 pt-4">
                By Industry
              </h4>
              <div className="space-y-3">
                {solutionsData.industries.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to="/" 
                    className="flex gap-3 items-center group"
                    onClick={onClose}
                  >
                    <item.icon className="text-gray-400 text-lg group-hover:text-red-600" />
                    <span className="text-sm font-bold text-gray-900 group-hover:text-red-600">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    );
  }

  // ================= DESKTOP DESIGN (Mega Menu) =================
  // This layout matches the video: Large width, Grid for Use Cases, List for Industries
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-[1000px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-t border-gray-100 rounded-b-xl p-8 z-50 cursor-default">
      <div className="grid grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: BY USE CASE (Wider) */}
        <div className="col-span-8 border-r border-gray-100 pr-8">
          <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-6">
            By Use Case
          </h4>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            {solutionsData.useCases.map((item, idx) => (
              <Link key={idx} to="/" className="group flex gap-3 items-start">
                {/* Icon */}
                <div className="text-gray-400 text-xl mt-0.5 group-hover:text-red-600 transition-colors">
                  <item.icon />
                </div>
                {/* Text */}
                <div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: BY INDUSTRY (Narrower) */}
        <div className="col-span-4 pl-2">
          <h4 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-6">
            By Industry
          </h4>
          
          <div className="flex flex-col gap-3.5">
            {solutionsData.industries.map((item, idx) => (
              <Link key={idx} to="/" className="group flex gap-3 items-center">
                <div className="text-gray-400 text-lg group-hover:text-red-600 transition-colors">
                  <item.icon />
                </div>
                <div className="text-sm font-bold text-gray-700 group-hover:text-red-600 transition-colors">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SolutionsDropdown;