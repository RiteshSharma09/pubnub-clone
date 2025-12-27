import React from 'react';

// You will need to import your actual images here. 
// For now, I'm using placeholders or assuming the path.
// import sportsImg from '../assets/sports.jpg';
// import healthImg from '../assets/health.jpg';
// import commerceImg from '../assets/commerce.jpg';
// import gamingImg from '../assets/gaming.jpg';
// import supportImg from '../assets/support.jpg';
// import logisticsImg from '../assets/logistics.jpg';

const FeatureCard = ({ image, category, title, description, linkText }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    {/* Image Area */}
    <div className="relative h-48 overflow-hidden">
      {/* Category Tag */}
      <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
        {category}
      </span>
      {/* Image with zoom effect on hover */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay gradient for text readability if needed, though design looks clean */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>

    {/* Content Area */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#020B2D] mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <a href="#" className="text-[#E93A47] text-sm font-semibold flex items-center gap-1 group/link mt-auto">
        {linkText} 
        <span className="transition-transform group-hover/link:translate-x-1">→</span>
      </a>
    </div>
  </div>
);

export default function Features() {
  const features = [
    {
      category: "Sports, Media, Entertainment",
      title: "Increase Fan Engagement",
      description: "through real-time fan interactions with chat, notifications, alerts, and more",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    },
    {
      category: "Digital Health",
      title: "Enhance patient care",
      description: "with user status, full-featured chat and push notifications, all with HIPAA compliance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    },
    {
      category: "Digital Commerce",
      title: "Elevate buyer experiences",
      description: "with instant user status, chat, and automated push notifications",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    },
    {
      category: "Gaming",
      title: "Improve retention and engagement",
      description: "through in-game updates, chat and all types of player interactions",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    },
    {
      category: "Contact & Control Centers",
      title: "Boost customer delight",
      description: "through real-time user collaboration and server notifications and events",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    },
    {
      category: "Transportation & Logistics",
      title: "Optimize driver logistics",
      description: "for trucking telemetry, driver communication, and process improvement",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000", // Placeholder
      linkText: "Read their story"
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020B2D] leading-tight">
            Powering global real-time interactive experiences in 40+ Industries
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
            />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">
            <button className="bg-[#E93A47] hover:bg-[#d62f3c] text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_4px_14px_0_rgba(233,58,71,0.39)]">
                Discover more
            </button>
        </div>

      </div>
    </section>
  );
}