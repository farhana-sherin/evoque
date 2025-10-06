import React from "react";
import womenShoe1 from "../assets/images/women1.jpeg";
import womenShoe2 from "../assets/images/women2.jpeg";
import womenShoe3 from "../assets/images/women3.webp";
import womenShoe4 from "../assets/images/women4.jpeg";
import womenShoe5 from "../assets/images/women5.jpeg";
import womenShoe6 from "../assets/images/women6.jpeg";
import womenShoe7 from "../assets/images/women7.jpeg";
import womenShoe8 from "../assets/images/women8.jpeg";

export const WomensShoes = () => {
  const allShoes = [
    womenShoe1,
    womenShoe2,
    womenShoe3,
    womenShoe4,
    womenShoe5,
    womenShoe6,
    womenShoe7,
    womenShoe8,
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Women’s Shoes
        </h2>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allShoes.map((imgSrc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Women’s Shoe ${idx + 1}`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
