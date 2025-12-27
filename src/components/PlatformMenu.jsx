import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayers, FiGlobe, FiCpu, FiPieChart, FiServer, FiArrowRight, FiInfo } from 'react-icons/fi';
import { BiExtension } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';

const PlatformMenu = () => {
  const menuItems = [
    { 
      title: "Core Services", 
      desc: "Real-time communication with low-latency", 
      icon: <FiLayers className="text-xl" /> 
    },
    { 
      title: "Integrations", 
      desc: "Integrate best-in-class third-party services", 
      icon: <BiExtension className="text-xl" /> 
    },
    { 
      title: "Global Network", 
      desc: "Secure, Scalable Infrastructure", 
      icon: <FiGlobe className="text-xl" /> 
    },
    { 
      title: "Generative AI", 
      desc: "Build AI-native, real-time apps", 
      icon: <BsStars className="text-xl" /> 
    },
    { 
      title: "Decision Intelligence", 
      desc: "Power Decisions with Real-Time Intelligence", 
      icon: <FiCpu className="text-xl" /> 
    },
    { 
      title: "MCP Server", 
      desc: "Unlock real-time code with your AI", 
      icon: <FiServer className="text-xl" /> 
    },
    { 
      title: "Illuminate", 
      desc: "Turn Live User Data into Real-Time Results", 
      icon: <HiOutlineLightBulb className="text-xl" /> 
    },
    { 
      title: "Insights", 
      desc: "Visibility into Real-Time App's Performance", 
      icon: <FiPieChart className="text-xl" /> 
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40 py-8 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8">
        
        {/* --- Left Side: Dark Card --- */}
        <div className="md:w-1/4">
          <div className="bg-[#1e2330] text-white rounded-lg p-6 h-full flex flex-col justify-between">
            <div>
              <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <FiInfo className="text-xl" />
              </div>
              <h3 className="text-lg font-bold mb-2">Platform Overview</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your platform for interactive experiences
              </p>
            </div>
            
            <Link to="#" className="text-blue-400 text-sm font-bold flex items-center gap-2 mt-6 hover:text-blue-300 transition">
              Explore our platform <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* --- Right Side: Grid Items --- */}
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {menuItems.map((item, index) => (
            <Link to="#" key={index} className="flex items-start gap-4 group p-2 rounded-lg hover:bg-gray-50 transition">
              <div className="mt-1 text-gray-500 group-hover:text-blue-600 transition">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition text-[15px]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PlatformMenu;