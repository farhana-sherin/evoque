import React, { useState } from "react";

// Shoes
import menShoe1 from "../assets/images/product-1.jpg";
import menShoe2 from "../assets/images/product-2.jpg";
import menShoe3 from "../assets/images/product-3.jpg";
import menShoe4 from "../assets/images/product-4.jpg";
import menShoe5 from "../assets/images/product-5.jpg";
import menShoe6 from "../assets/images/product-6.jpg";
import menShoe7 from "../assets/images/product-7.jpg";
import menShoe8 from "../assets/images/product-8.jpg";

// Sandals
import menSandal1 from "../assets/images/sandal1.jpeg";
import menSandal2 from "../assets/images/sandal9.jpeg";
import menSandal3 from "../assets/images/sandal3.jpeg";
import menSandal4 from "../assets/images/sandal4.jpeg";
import menSandal5 from "../assets/images/sandal5.jpeg";
import menSandal6 from "../assets/images/sandal6.jpeg";
import menSandal7 from "../assets/images/sandal7.jpeg";
import menSandal8 from "../assets/images/sandal8.avif";

const MenShop = () => {
  const categories = ["All", "Casual Shoes", "Formal Shoes", "Sandals"];
  const sortOptions = ["Latest", "Price: Low to High", "Price: High to Low"];

  const allProducts = [
    { id: 1, category: "Casual Shoes", img: menShoe1 },
    { id: 2, category: "Casual Shoes", img: menShoe3 },
    { id: 3, category: "Casual Shoes", img: menShoe7 },
    { id: 4, category: "Casual Shoes", img: menShoe8 },
    { id: 5, category: "Formal Shoes", img: menShoe2 },
    { id: 6, category: "Formal Shoes", img: menShoe4 },
    { id: 7, category: "Formal Shoes", img: menShoe5 },
    { id: 8, category: "Formal Shoes", img: menShoe6 },
    { id: 9, category: "Sandals", img: menSandal1 },
    { id: 10, category: "Sandals", img: menSandal2 },
    { id: 11, category: "Sandals", img: menSandal3 },
    { id: 12, category: "Sandals", img: menSandal4 },
    { id: 13, category: "Sandals", img: menSandal5 },
    { id: 14, category: "Sandals", img: menSandal6 },
    { id: 15, category: "Sandals", img: menSandal7 },
    { id: 16, category: "Sandals", img: menSandal8 },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredProducts = allProducts
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.id - b.id; // just maintain order
      if (sortBy === "Price: High to Low") return b.id - a.id;
      return b.id - a.id; // Latest
    });

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Men's Collection</h1>

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
                  <img
                    src={item.img}
                    alt={`Product ${item.id}`}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenShop;
