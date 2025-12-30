import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; // 1. Outlet import karein
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import FeaturesGrid from './components/FeaturesGrid';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhyPubNubWins from './pages/WhyPubNubWins';
import './index.css';
import PlatformMenu from './components/PlatformMenu';
import Login from './auth/Login'; 
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import ContactSales from './pages/ContactSales';
import ContactUs from './pages/ContactUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <FeaturesGrid />
      <CtaSection />
    </>
  );
};

// 2. Ek Layout Component banayein jo sirf Website pages par Header/Footer dikhayega
const WebsiteLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet /> {/* Yahan child routes (Home, WhyPubNubWins) render honge */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Routes>
        
        {/* --- GROUP A: Website Pages (With TopBar, Navbar & Footer) --- */}
        <Route element={<WebsiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/why-pubnub-wins" element={<WhyPubNubWins />} />
            <Route path="/platform-overview" element={<PlatformMenu />} />
        </Route>

        {/* --- GROUP B: App/Auth Pages (FULL SCREEN - No Navbar/Footer) --- */}
        {/* In pages par TopBar aur Navbar nahi dikhega */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/Dashboard" element={<Dashboard />} />
          
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;