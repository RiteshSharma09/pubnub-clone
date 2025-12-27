export default function FeaturesGrid() {
  return (
    <section className="bg-gradient-to-b from-[#020b2d] to-[#030f3f] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">

          {card(
            "/images/in-app-messaging.png",
            "In-App Messaging",
            "In-app messaging combines Pub/Sub with persistence, file sharing, functions, and push integrations."
          )}

          {card(
            "/images/presence.png",
            "Presence",
            "Real-time awareness to instantly monitor and manage user activity and engagement."
          )}

          {card(
            "/images/pubnub-chat.png",
            "PubNub Chat",
            "Chat development simplified with SDKs, UI templates, and moderation tools."
          )}

          {card(
            "/images/analytics.png",
            "Live Analytics and Decisioning",
            "Track behavior and automate decisions with real-time analytics and alerts."
          )}

          {card(
            "/images/data-sync.png",
            "Live Data Sync",
            "Synchronize state in real time across users and devices with sub-second latency."
          )}

          {card(
            "/images/notifications.png",
            "Mobile Push Notifications",
            "Deliver immediate updates using APNS and FCM integrations."
          )}

        </div>

        {/* Numbers Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-3xl font-semibold">
            PubNub <br /> by the Numbers
          </h2>

          <div className="space-y-6">
            {stat("#1", "World’s largest event-driven network")}
            {stat("<30ms", "Global average latency")}
            {stat("2K+", "Billion devices & APIs monthly")}
            {stat("99.999%", "Enterprise-grade uptime SLA")}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function card(img, title, desc) {
  return (
    <div className="bg-[#081a4b] border border-blue-500/30 rounded-2xl p-6 hover:scale-[1.02] transition">
      <img
        src={img}
        alt={title}
        className="rounded-xl mb-6 border border-white/10"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-blue-100 text-sm leading-relaxed">{desc}</p>
      <span className="inline-block mt-4 text-sm text-blue-300">
        Learn more →
      </span>
    </div>
  );
}

function stat(value, label) {
  return (
    <div className="border border-blue-500/30 rounded-xl px-6 py-4">
      <div className="text-2xl font-semibold text-blue-400">{value}</div>
      <p className="text-sm text-blue-100">{label}</p>
    </div>
  );
}
