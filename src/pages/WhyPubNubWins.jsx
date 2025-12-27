import React from "react";

const competitors = [
  { name: "Pusher", logo: "/logos/pusher.svg" },
  { name: "CometChat", logo: "/logos/cometchat.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Hive", logo: "/logos/hive.svg" },
  { name: "Socket.io", logo: "/logos/socketio.svg" },
  { name: "Sendbird", logo: "/logos/sendbird.svg" },
  { name: "Stream", logo: "/logos/stream.svg" },
  { name: "Ably", logo: "/logos/ably.svg" },
];

const WhyPubNubWins = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#f2f7ff] py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center gap-4 mb-6">
            <span className="bg-white rounded-xl shadow px-3 py-2 font-bold">pn</span>
            <span className="bg-white rounded-xl shadow px-3 py-2">⚡</span>
            <span className="bg-white rounded-xl shadow px-3 py-2">📊</span>
            <span className="bg-white rounded-xl shadow px-3 py-2">🔗</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Compare PubNub vs alternatives and competitors
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare top real-time communication platforms and see why PubNub
            leads in infrastructure scalability, network performance, and
            real-time data delivery trusted by developers worldwide.
          </p>
        </div>
      </section>

      {/* ================= COMPETITOR GRID ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {competitors.map((item) => (
              <div
                key={item.name}
                className="w-full h-28 bg-white border rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden">

            <div className="p-10 flex-1">
              <h2 className="text-2xl font-bold mb-3">
                Ready to get started?
              </h2>
              <a
                href="#"
                className="text-red-600 font-semibold hover:underline"
              >
                Contact Sales →
              </a>
            </div>

            <div className="md:w-1/3">
              <img
                src="/images/cta-office.jpg"
                alt="CTA"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyPubNubWins;
