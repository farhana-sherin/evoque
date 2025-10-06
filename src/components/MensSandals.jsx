import React from "react";
import menSandal1 from "../assets/images/sandal1.jpeg";
import menSandal2 from "../assets/images/sandal9.jpeg";
import menSandal3 from "../assets/images/sandal3.jpeg";
import menSandal4 from "../assets/images/sandal4.jpeg";
import menSandal5 from "../assets/images/sandal5.jpeg";
import menSandal6 from "../assets/images/sandal6.jpeg";
import menSandal7 from "../assets/images/sandal7.jpeg";
import menSandal8 from "../assets/images/sandal8.avif";

export const MensSandals = () => {
  const allSandals = [
    menSandal1,
    menSandal2,
    menSandal3,
    menSandal4,
    menSandal5,
    menSandal6,
    menSandal7,
    menSandal8,
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Men’s Sandals
        </h2>

        {/* Sandals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSandals.map((imgSrc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Men’s Sandal ${idx + 1}`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
