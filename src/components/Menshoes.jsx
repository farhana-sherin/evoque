import React from "react";
import menShoe1 from "../assets/images/product-1.jpg";
import menShoe2 from "../assets/images/product-2.jpg";
import menShoe3 from "../assets/images/product-3.jpg";
import menShoe4 from "../assets/images/product-4.jpg";
import menShoe5 from "../assets/images/product-5.jpg";
import menShoe6 from "../assets/images/product-6.jpg";
import menShoe7 from "../assets/images/product-7.jpg";
import menShoe8 from "../assets/images/product-8.jpg";

export const MensShoes = () => {
  const allShoes = [
    menShoe1,
    menShoe2,
    menShoe3,
    menShoe4,
    menShoe5,
    menShoe6,
    menShoe7,
    menShoe8,
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Men’s Shoes
        </h2>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allShoes.map((imgSrc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={`Men’s Shoe ${idx + 1}`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
