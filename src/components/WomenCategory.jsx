import React from "react";
import { useNavigate } from "react-router-dom"; 
import womenShoesImg from "../assets/images/women2.jpeg";  
import womenSandalsImg from "../assets/images/sandal2.jpg";  

export const WomenCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Women's Shoes", img: womenShoesImg, path: "/womenshoes" },
    { name: "Women's Sandals", img: womenSandalsImg, path: "/womensandals" },
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
              onClick={() => navigate(category.path)}
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
