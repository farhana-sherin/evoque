import React from "react";
import womenSandal1 from "../assets/images/ws1.jpeg";
import womenSandal2 from "../assets/images/ws10.jpeg";
import womenSandal3 from "../assets/images/ws3.jpeg";
import womenSandal4 from "../assets/images/ws4.jpeg";
import womenSandal5 from "../assets/images/ws5.jpeg";
import womenSandal6 from "../assets/images/ws6.jpeg";
import womenSandal7 from "../assets/images/ws7.webp";
import womenSandal8 from "../assets/images/ws8.jpeg";

export const WomensSandals = () => {
  const allSandals = [
    womenSandal1,
    womenSandal2,
    womenSandal3,
    womenSandal4,
    womenSandal5,
    womenSandal6,
    womenSandal7,
    womenSandal8,
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSandals.map((imgSrc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Sandal ${idx + 1}`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
