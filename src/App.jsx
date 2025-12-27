import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Clients from './components/Clients';   // <--- New
import Features from './components/Features'; // <--- New
import FeaturesGrid from './components/FeaturesGrid'; // <--- New
import CtaSection from './components/CtaSection'; // <--- New
import Footer from './components/Footer'; // 
import WhyPubNubWins from './pages/WhyPubNubWins';
import './index.css';
import PlatformMenu from './components/PlatformMenu';
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

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/why-pubnub-wins" element={<WhyPubNubWins />} />
          <Route path="/platform-overview" element={<PlatformMenu />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;