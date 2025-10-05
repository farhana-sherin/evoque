import React, { useState } from "react";

// Sandals
import womenSandal1 from "../assets/images/ws1.jpeg";
import womenSandal2 from "../assets/images/ws10.jpeg";
import womenSandal3 from "../assets/images/ws3.jpeg";
import womenSandal4 from "../assets/images/ws4.jpeg";
import womenSandal5 from "../assets/images/ws5.jpeg";
import womenSandal6 from "../assets/images/ws6.jpeg";
import womenSandal7 from "../assets/images/ws7.webp";
import womenSandal8 from "../assets/images/ws8.jpeg";

// Sneakers / Casual
import womenShoe1 from "../assets/images/women1.jpeg";
import womenShoe2 from "../assets/images/women2.jpeg";
import womenShoe3 from "../assets/images/women3.webp";
import womenShoe4 from "../assets/images/women4.jpeg";
import womenShoe5 from "../assets/images/women5.jpeg";
import womenShoe6 from "../assets/images/women6.jpeg";
import womenShoe7 from "../assets/images/women7.jpeg";
import womenShoe8 from "../assets/images/women8.jpeg";

export const WomenShop = () => {
  const categories = ["All", "Sneakers", "Casual Wear", "Sandals"];
  const sortOptions = ["Latest", "Price: Low to High", "Price: High to Low"];

  const allProducts = [
    // Sneakers
    { id: 1, name: "Nike Court Vision", category: "Sneakers", price: 750, img: womenShoe1 },
    { id: 2, name: "Adidas Superstar", category: "Sneakers", price: 880, img: womenShoe2 },
    { id: 3, name: "Puma Carina", category: "Sneakers", price: 820, img: womenShoe3 },
    { id: 4, name: "Reebok Classic", category: "Sneakers", price: 760, img: womenShoe4 },

    // Casual Wear
    { id: 5, name: "Casual Loafers", category: "Casual Wear", price: 650, img: womenShoe5 },
    { id: 6, name: "Everyday Comfort", category: "Casual Wear", price: 700, img: womenShoe6 },
    { id: 7, name: "Street Style", category: "Casual Wear", price: 780, img: womenShoe7 },
    { id: 8, name: "Trendy Walk", category: "Casual Wear", price: 720, img: womenShoe8 },

    // Sandals
    { id: 9, name: "Summer Sandals", category: "Sandals", price: 500, img: womenSandal1 },
    { id: 10, name: "Beach Wear Sandals", category: "Sandals", price: 550, img: womenSandal2 },
    { id: 11, name: "Daily Comfort Sandals", category: "Sandals", price: 600, img: womenSandal3 },
    { id: 12, name: "Trendy Straps", category: "Sandals", price: 650, img: womenSandal4 },
    { id: 13, name: "Classic Sandals", category: "Sandals", price: 580, img: womenSandal5 },
    { id: 14, name: "Casual Flip Style", category: "Sandals", price: 620, img: womenSandal6 },
    { id: 15, name: "Leather Sandals", category: "Sandals", price: 700, img: womenSandal7 },
    { id: 16, name: "Minimalist Sandals", category: "Sandals", price: 720, img: womenSandal8 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredProducts = allProducts
    .filter((p) => (selectedCategory === "All" ? true : p.category === selectedCategory))
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return b.id - a.id; // Latest
    });

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Women's Collection</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          {/* Category */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition ${
                  selectedCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-800"
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 mt-20">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-gray-900 mb-4 block">₹{item.price}</span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
