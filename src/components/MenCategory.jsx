import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import menShoesImg from "../assets/images/product-1.jpg";  
import menSandalsImg from "../assets/images/sandal1.jpeg";  

export const MenCategories = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const categories = [
    { name: "Men's Shoes", img: menShoesImg, path: "/menshoes" },
    { name: "Men's Sandals", img: menSandalsImg, path: "/mensandals" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Shop By Category
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => navigate(category.path)} // Navigate on click
              className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-6">
                <span className="text-white text-2xl font-bold drop-shadow-lg">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
