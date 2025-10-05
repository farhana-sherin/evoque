import React, { useState } from "react";
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
    { name: "Elegant Strap Heel", img: womenSandal1, price: 45 },
    { name: "Casual Flat Sandal", img: womenSandal2, price: 35 },
    { name: "Chic Wedge", img: womenSandal3, price: 55 },
    { name: "Everyday Flip-Flop", img: womenSandal4, price: 25 },
    { name: "Designer Slide", img: womenSandal5, price: 60 },
    { name: "Trendy Block Heel", img: womenSandal6, price: 70 },
    { name: "Outdoor Comfort Sandal", img: womenSandal7, price: 50 },
    { name: "Classic Party Heel", img: womenSandal8, price: 65 },
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
          Women’s Sandals
        </h2>

        {/* Sort by Price aligned right */}
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
