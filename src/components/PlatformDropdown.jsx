import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiInfo,
  FiLayers,
  FiGlobe,
  FiCpu,
  FiZap,
  FiBarChart2,
  FiSettings,
  FiStar,
  FiChevronDown,
} from "react-icons/fi";

const items = [
  {
    title: "Platform Overview",
    desc: "Your platform for interactive experiences",
    icon: <FiInfo />,
    path: "/platform-overview",
    badge: "NEW",
  },
  {
    title: "Core Services",
    desc: "Real-time communication with low-latency",
    icon: <FiLayers />,
    path: "/core-services",
  },
  {
    title: "Global Network",
    desc: "Secure, scalable infrastructure",
    icon: <FiGlobe />,
    path: "/global-network",
  },
  {
    title: "Decision Intelligence",
    desc: "Power decisions with real-time intelligence",
    icon: <FiCpu />,
    path: "/decision-intelligence",
  },
  {
    title: "Illuminate",
    desc: "Turn live user data into results",
    icon: <FiZap />,
    path: "/illuminate",
  },
  {
    title: "Insights",
    desc: "Visibility into real-time performance",
    icon: <FiBarChart2 />,
    path: "/insights",
  },
  {
    title: "Integrations",
    desc: "Best-in-class third-party services",
    icon: <FiSettings />,
    path: "/integrations",
  },
  {
    title: "Generative AI",
    desc: "Build AI-native real-time apps",
    icon: <FiStar />,
    path: "/generative-ai",
  },
  {
    title: "MCP Server",
    desc: "Unlock real-time code with AI",
    icon: <FiCpu />,
    path: "/mcp-server",
  },
];

const PlatformDropdown = ({ isMobile = false, onClose }) => {
  const [open, setOpen] = useState(false);

  /* ================= MOBILE ================= */
  if (isMobile) {
    return (
      <div className="border-b">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-6 py-4 font-semibold"
        >
          Platform
          <FiChevronDown
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="px-6 pb-4 space-y-4">
            {items.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={onClose}
                className="flex gap-3"
              >
                <div className="text-lg text-gray-500">{item.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{item.title}</p>
                    {item.badge && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <div className="absolute left-0 top-12 w-[900px] bg-white rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-6 z-50">

      {/* LEFT CARD */}
      <div className="bg-gradient-to-br from-black to-gray-800 rounded-xl p-6 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">
            Platform Overview
          </h3>
          <p className="text-sm text-gray-300">
            Your platform for interactive experiences
          </p>
        </div>
        <NavLink
          to="/platform-overview"
          className="mt-6 text-sm font-semibold"
        >
          Explore our platform →
        </NavLink>
      </div>

      {/* RIGHT LINKS */}
      <div className="col-span-2 grid grid-cols-2 gap-4">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className="flex gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-xl text-gray-500">{item.icon}</div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-xs bg-red-100 text-red-600 px-2 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PlatformDropdown;
