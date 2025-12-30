import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link import hai
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logoImg from "../assets/pubnub_logo.png";

import ResourcesDropdown from "./ResourcesDropdown";
import PlatformDropdown from "./PlatformDropdown";
import SolutionsDropdown from "./SolutionsDropdown"; 
import DeveloperDropdown from "./DeveloperDropdown"; 

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // State for hover dropdowns
  const [showPlatform, setShowPlatform] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false); 
  const [showResources, setShowResources] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <img src={logoImg} alt="PubNub" className="h-8" />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          {/* 1. PLATFORM (HOVER) */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowPlatform(true)}
            onMouseLeave={() => setShowPlatform(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-600 py-4">
              Platform <FiChevronDown />
            </button>
            {showPlatform && <PlatformDropdown />}
          </div>

          {/* 2. SOLUTIONS (HOVER) */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-600 py-4">
              Solutions <FiChevronDown />
            </button>
            {showSolutions && <SolutionsDropdown />}
          </div>

          {/* Simple Link */}
          <Link to="/" className="hover:text-red-600 py-4">Pricing</Link>

          {/* 3. DEVELOPER (HOVER) */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowDeveloper(true)}
            onMouseLeave={() => setShowDeveloper(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-600 py-4">
              Developer <FiChevronDown />
            </button>
            {showDeveloper && <DeveloperDropdown />}
          </div>

          {/* 4. RESOURCES (HOVER) */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-600 py-4">
              Resources <FiChevronDown />
            </button>
            {showResources && <ResourcesDropdown />}
          </div>
        </div>

        {/* ================= DESKTOP RIGHT ================= */}
        <div className="hidden md:flex items-center gap-4">
          <FiSearch className="text-xl cursor-pointer hover:text-red-600" />
          
          {/* 👇 CHANGE 1: Contact Sales Button -> Link */}
          <Link 
            to="/contact-sales" 
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-bold transition-colors"
          >
            Contact Sales
          </Link>

          <Link to="/Login" className="font-bold text-gray-700 hover:text-black">Try for free</Link>
        </div>

        {/* ================= MOBILE ICONS ================= */}
        <div className="md:hidden flex items-center gap-4">
          <FiSearch className="text-xl" />
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t h-screen overflow-y-auto pb-20">
          
          <PlatformDropdown isMobile onClose={() => setMobileOpen(false)} />
          <SolutionsDropdown isMobile onClose={() => setMobileOpen(false)} />

          <Link className="block px-6 py-4 border-b border-gray-100 font-medium text-gray-800" to="/" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>

          <DeveloperDropdown isMobile onClose={() => setMobileOpen(false)} />
          <ResourcesDropdown isMobile onClose={() => setMobileOpen(false)} />

          {/* Mobile Actions */}
          <div className="p-6 flex flex-col gap-4 bg-gray-50">
            
            {/* 👇 CHANGE 2: Mobile Contact Sales Link */}
            <Link 
              to="/contact-sales" 
              onClick={() => setMobileOpen(false)}
              className="w-full bg-red-600 text-white py-3 rounded font-bold text-center"
            >
              Contact Sales
            </Link>

            <Link 
              to="/Login"
              onClick={() => setMobileOpen(false)}
              className="w-full border border-gray-300 bg-white py-3 rounded font-bold text-center"
            >
              Try for free
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;