import liveImg from "../assets/hero-live.png";
import chatImg from "../assets/hero-chat.png";
import emojiImg from "../assets/hero-emojis.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020B2D] via-[#031A4A] to-[#020B2D]">
      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            The market leading platform <br />
            for real-time interactive apps
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            <span className="font-semibold text-white">
              The PubNub promise: real-time innovation
            </span>
            <br />
            Efficiently and effectively build, manage, and monetize engaging
            apps that captivate and delight users.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-[#005BFF] hover:bg-blue-600 transition text-white px-6 py-3 rounded-md font-medium shadow-lg">
              Start Building
            </button>

            <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
              Contact sales
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative hidden lg:block h-[520px]">

          {/* BACK CHAT CARD */}
          <img
            src={chatImg}
            alt="Realtime chat"
            className="absolute top-0 right-16 w-[360px]
              rounded-xl shadow-2xl border border-white/10
              opacity-90"
          />

          {/* FRONT LIVE VIDEO CARD */}
          <img
            src={liveImg}
            alt="Live stream"
            className="absolute top-32 right-0 w-[320px]
              rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]
              border border-white/10 z-20"
          />

          {/* EMOJI FLOATING STACK */}
          <div className="absolute right-[-60px] top-40 flex flex-col gap-6 z-30">
            <img src={emojiImg} alt="emoji" className="w-16" />
            <img src={emojiImg} alt="emoji" className="w-12 opacity-90" />
            <img src={emojiImg} alt="emoji" className="w-10 opacity-80" />
          </div>
        </div>
      </div>
    </section>
    
  );
}
