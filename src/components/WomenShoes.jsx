import React, { useState } from "react";
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
    { name: "Elegant Heels", img: womenShoe1, price: 75 },
    { name: "Casual Flats", img: womenShoe2, price: 40 },
    { name: "Classic Pumps", img: womenShoe3, price: 65 },
    { name: "Sporty Sneakers", img: womenShoe4, price: 55 },
    { name: "Trendy Sandals", img: womenShoe5, price: 45 },
    { name: "Designer Boots", img: womenShoe6, price: 90 },
    { name: "Slip-On Loafers", img: womenShoe7, price: 50 },
    { name: "Retro Wedges", img: womenShoe8, price: 60 },
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
          Women’s Shoes
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
