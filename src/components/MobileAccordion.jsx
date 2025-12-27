import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiAward, FiBook, FiPlay, FiUsers, FiFileText } from "react-icons/fi";

const MobileAccordion = () => {
  const [open, setOpen] = useState("Resources");

  const toggle = (item) =>
    setOpen(open === item ? "" : item);

  return (
    <div className="md:hidden bg-white border-t px-4 pb-24">

      {["Platform", "Solutions", "Pricing", "Developer", "Resources"].map(
        (item) => (
          <div key={item} className="border-b py-4">
            <button
              onClick={() => toggle(item)}
              className="w-full flex justify-between items-center text-lg font-semibold"
            >
              {item}
              {open === item ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {item === "Resources" && open === "Resources" && (
              <div className="mt-4 space-y-4 text-gray-700">
                <div className="flex gap-3 items-center"><FiAward /> Why PubNub Wins</div>
                <div className="flex gap-3 items-center"><FiBook /> Blog</div>
                <div className="flex gap-3 items-center"><FiPlay /> Demos</div>
                <div className="flex gap-3 items-center"><FiUsers /> Customers</div>
                <div className="flex gap-3 items-center"><FiFileText /> eBooks</div>
              </div>
            )}
          </div>
        )
      )}

      {/* FIXED CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t">
        <button className="w-full bg-red-600 text-white py-3 rounded font-bold">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default MobileAccordion;
