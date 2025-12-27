export default function Footer() {
  return (
    <footer className="bg-[#061a44] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm">

          <FooterCol title="PLATFORM" items={[
            "Overview",
            "Core Services",
            "Decision Intelligence",
            "Global Network",
            "Integrations",
            "Generative AI",
            "AI MCP Server",
            "Security & Compliance",
            "Pricing",
          ]} />

          <FooterCol title="USE CASE" items={[
            "Chat",
            "Live Audience Engagement",
            "Multi-User Collaboration",
            "IoT Device Control",
            "Real-Time Workflows",
            "Geolocation & Dispatch",
            "Edge Messaging",
            "Event-Driven Architecture",
            "LiveOps",
            "Gamification",
            "Auto-Moderation",
          ]} />

          <FooterCol title="INDUSTRY" items={[
            "Sports, Media & Entertainment",
            "Digital Healthcare",
            "iGaming, Betting & Casino",
            "Games",
            "Enterprise SaaS",
            "Transport, Delivery & Logistics",
            "eCommerce",
            "Push Notifications",
            "Call Centers & Customer Care",
            "Social & Lifestyle",
            "FinTech",
          ]} />

          <FooterCol title="RESOURCES" items={[
            "Blog",
            "Customers",
            "Demos",
            "Tutorials",
            "eBook",
            "Glossary",
          ]} />

          <FooterCol title="ABOUT" items={[
            "Our Company",
            "Careers",
            "Support",
            "Partners",
            "Privacy Policy",
            "Terms & Conditions",
            "Bug Bounty Policy",
            "Contact Us",
            "Trust Center",
            "Cookies Policy",
            "Cookies Settings",
          ]} />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-xs text-blue-200">

          <p className="max-w-2xl leading-relaxed">
            © 2010 – 2025 YourCompany Inc. All rights reserved.
            Product names and logos are trademarks of their respective owners.
          </p>

          <div className="flex gap-4 text-white">
            <Social icon="f" />
            <Social icon="x" />
            <Social icon="in" />
            <Social icon="yt" />
            <Social icon="v" />
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

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

function Social({ icon }) {
  return (
    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer">
      <span className="text-xs font-semibold">{icon}</span>
    </div>
  );
}
