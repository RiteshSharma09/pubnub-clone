import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link Import karein
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaVimeoV } from 'react-icons/fa'; // Icons (Optional, looks better)

export default function Footer() {
  return (
    <footer className="bg-[#061a44] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">

          <FooterCol title="PLATFORM" items={[
            "Overview", "Core Services", "Decision Intelligence", "Global Network", 
            "Integrations", "Generative AI", "AI MCP Server", "Security & Compliance", "Pricing"
          ]} />

          <FooterCol title="USE CASE" items={[
            "Chat", "Live Audience Engagement", "Multi-User Collaboration", "IoT Device Control", 
            "Real-Time Workflows", "Geolocation & Dispatch", "Edge Messaging", 
            "Event-Driven Architecture", "LiveOps", "Gamification", "Auto-Moderation"
          ]} />

          <FooterCol title="INDUSTRY" items={[
            "Sports, Media & Entertainment", "Digital Healthcare", "iGaming, Betting & Casino", 
            "Games", "Enterprise SaaS", "Transport, Delivery & Logistics", "eCommerce", 
            "Push Notifications", "Call Centers & Customer Care", "Social & Lifestyle", "FinTech"
          ]} />

          <FooterCol title="RESOURCES" items={[
            "Blog", "Customers", "Demos", "Tutorials", "eBook", "Glossary"
          ]} />

          {/* ABOUT SECTION - Manually creating to add Link specifically to Contact Us */}
          <div>
             <h4 className="font-semibold mb-4 tracking-wide">ABOUT</h4>
             <ul className="space-y-2 text-blue-100">
                <FooterLink text="Our Company" />
                <FooterLink text="Careers" />
                <FooterLink text="Support" />
                <FooterLink text="Partners" />
                <FooterLink text="Privacy Policy" />
                <FooterLink text="Terms & Conditions" />
                <FooterLink text="Bug Bounty Policy" />
                
                {/* 👇 CONTACT US LINKED HERE */}
                <li>
                    <Link to="/contact-us" className="hover:text-white cursor-pointer block">
                        Contact Us
                    </Link>
                </li>

                <FooterLink text="Trust Center" />
                <FooterLink text="Cookies Policy" />
                <FooterLink text="Cookies Settings" />
             </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-xs text-blue-200">

          <p className="max-w-2xl leading-relaxed">
            © 2010 – 2025 PubNub Inc. All rights reserved.
            PubNub and the PubNub logo are trademarks or registered trademarks of PubNub Inc. in the U.S. and other countries.
          </p>

          <div className="flex gap-4 text-white">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaVimeoV />} />
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

// Standard Column for plain text items
function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-4 tracking-wide">
        {title}
      </h4>
      <ul className="space-y-2 text-blue-100">
        {items.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Single Link Item Helper
function FooterLink({ text }) {
    return (
        <li className="hover:text-white cursor-pointer">
            {text}
        </li>
    );
}

// Social Icon Helper
function SocialIcon({ icon }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition">
      <span className="text-sm">{icon}</span>
    </div>
  );
}