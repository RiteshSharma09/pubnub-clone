
import React from 'react';
export default function CtaSection() {
  return (
    <section className="bg-[#061a44] py-24">
      <div className="max-w-7xl mx-auto bg-white rounded-[48px] p-10">
        
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-[#eef5ff] rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              Start building
            </h2>

            <p className="text-gray-700 mb-6">
              Get started building real-time apps now!
            </p>

            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li>✔ Always free for up to 200 MAUs</li>
              <li>✔ No Credit Card Required</li>
              <li>✔ Every PubNub SDK available</li>
              <li>✔ Complete Feature Access to 100+ Integrations</li>
            </ul>

            <a
              href="#"
              className="text-red-600 font-medium inline-flex items-center gap-1"
            >
              Learn more →
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8">

            {/* TOP CARD */}
            <div className="bg-[#eef5ff] rounded-3xl p-10 flex gap-6 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  Talk to an expert
                </h2>

                <p className="text-gray-700 mb-6">
                  Let us share with you industry best practices and how we
                  can help you accelerate your real-time application and
                  growth.
                </p>

                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
                  Contact us
                </button>
              </div>

              <img
                src="/images/expert-headset.jpg"
                alt="Expert"
                className="w-44 h-44 object-cover rounded-2xl hidden md:block"
              />
            </div>

            {/* BOTTOM CARD */}
            <div className="bg-[#eef5ff] rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-4">
                See our pricing
              </h2>

              <p className="text-gray-700 mb-6 max-w-xl">
                Almost limitless pricing options from simple pay-as-you-go
                to custom models to best match your business needs and
                growth objectives.
              </p>

              <a
                href="#"
                className="text-red-600 font-medium inline-flex items-center gap-1"
              >
                Learn more →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
