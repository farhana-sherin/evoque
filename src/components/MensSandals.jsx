import React, { useState } from "react";
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
    { name: "Comfort Slide", img: menSandal1, price: 30 },
    { name: "Beach Flip-Flop", img: menSandal2, price: 25 },
    { name: "Casual Strap Sandal", img: menSandal3, price: 35 },
    { name: "Sporty Runner Sandal", img: menSandal4, price: 40 },
    { name: "Leather Slide", img: menSandal5, price: 50 },
    { name: "Office Sandal", img: menSandal6, price: 45 },
    { name: "Outdoor Trek Sandal", img: menSandal7, price: 55 },
    { name: "Everyday Comfort", img: menSandal8, price: 38 },
  ];

  const [sortOrder, setSortOrder] = useState("asc");

  // Sort sandals by price
  const sortedSandals = [...allSandals].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Men’s Sandals
        </h2>

        {/* Sort by Price aligned left */}
        <div className="flex justify-end mb-6">
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

        {/* Sandals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedSandals.map((sandal, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <img
                src={sandal.img}
                alt={sandal.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-900 font-semibold text-lg">{sandal.name}</h3>
                <p className="text-gray-900 font-bold mt-1">₹{sandal.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
