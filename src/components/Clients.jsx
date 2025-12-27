import React from 'react';

// Reusable component for the value prop columns
const ValueCard = ({ title, description, linkText, hasBorder }) => (
  <div className={`flex flex-col h-full ${hasBorder ? 'md:border-r border-gray-200 md:pr-8' : 'md:pl-8'}`}>
    <h3 className="text-[#020B2D] font-bold text-lg mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    <a 
      href="#" 
      className="text-blue-600 text-sm font-semibold flex items-center gap-1 group w-max mt-auto hover:text-blue-700"
    >
      {linkText} 
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  </div>
);

// Simple SVG placeholders for logos to match the professional look
// In a real project, import actual SVGs
const LogoText = ({ children, className = "" }) => (
  <span className={`text-2xl font-bold text-gray-900 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer ${className}`}>
    {children}
  </span>
);

export default function Clients() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* === PART 1: LOGOS ROW === */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8 mb-20">
            {/* Replacing image tags with styled text to mimic the screenshot logos */}
            <div className="flex items-center gap-1">
              <span className="font-bold text-2xl text-red-600">yelp</span>
              <span className="text-red-600 text-3xl leading-none">*</span>
            </div>
            
            <LogoText className="tracking-widest text-xl">BEAMABLE</LogoText>
            <LogoText className="tracking-tighter font-extrabold">SERVICEMAX</LogoText>
            <LogoText className="font-black tracking-widest">DAZN</LogoText>
            
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all cursor-pointer">
               <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
               <span className="font-bold text-xl text-orange-500">SWIGGY</span>
            </div>

            <div className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all cursor-pointer">
              <span className="font-bold text-2xl text-red-600">Adobe</span>
            </div>
        </div>

        {/* === PART 2: VALUE PROPOSITION CONTAINER === */}
        {/* Based on the 'Unleash creativity' box in the screenshot */}
        <div className="border border-blue-100 rounded-2xl p-8 md:p-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="grid md:grid-cols-3 gap-8 md:gap-0">
            
            {/* Column 1 */}
            <ValueCard 
              title="Unleash creativity"
              description="Focus on value creation leveraging real-time APIs, SDKs and software to accelerate development and management while retaining control and flexibility."
              linkText="Read the Docs"
              hasBorder={true}
            />

            {/* Column 2 */}
            <div className="flex flex-col h-full md:px-8 md:border-r border-gray-200">
                <h3 className="text-[#020B2D] font-bold text-lg mb-3">Scale infinitely</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Scalable infrastructure that provides flexible options to reach millions of concurrent users and devices safely, securely, and with no additional fees.
                </p>
                <a href="#" className="text-blue-600 text-sm font-semibold flex items-center gap-1 group w-max mt-auto hover:text-blue-700">
                  Explore the platform <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>

            {/* Column 3 */}
            <ValueCard 
              title="Surpass your KPIs"
              description="Increase engagement and retention with real-time data analysis and automated decisioning for continuous optimization."
              linkText="Discover Illuminate"
              hasBorder={false}
            />
            
          </div>
        </div>

      </div>
    </section>
  );
}