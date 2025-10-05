import React, { useState } from "react";
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
    { name: "Classic Sneaker", img: menShoe1, price: 50 },
    { name: "Formal Leather Shoe", img: menShoe2, price: 80 },
    { name: "Casual Canvas Shoe", img: menShoe3, price: 40 },
    { name: "Sporty Runner", img: menShoe4, price: 60 },
    { name: "Retro Sneaker", img: menShoe5, price: 70 },
    { name: "Office Oxford", img: menShoe6, price: 90 },
    { name: "Comfort Slip-On", img: menShoe7, price: 55 },
    { name: "Trail Runner", img: menShoe8, price: 65 },
  ];

  const [sortOrder, setSortOrder] = useState("asc");

  // Sort shoes by price
  const sortedShoes = [...allShoes].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Men’s Shoes
        </h2>

        {/* Sort by Price aligned left */}
        <div className="flex justify-start mb-6">
          <label className="mr-3 font-semibold">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-3 py-2 shadow-sm hover:shadow-md transition"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedShoes.map((shoe, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={shoe.img}
                alt={shoe.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-900 font-semibold text-lg">{shoe.name}</h3>
                <p className="text-gray-900 font-bold mt-1">₹{shoe.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
