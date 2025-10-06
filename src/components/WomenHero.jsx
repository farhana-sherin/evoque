import React from "react";
import womenHeroImg from "../assets/images/ddown8.jpg"; // replace with your women hero image
import { useNavigate } from "react-router-dom";

export const WomenHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={womenHeroImg}
          alt="Women Collection"
          className="w-full h-full object-cover brightness-90"
        />
        {/* White Transparent Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <div className="text-center px-6 sm:px-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 drop-shadow-md">
          Elegance in Every Step – Women’s Collection
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-xl mx-auto">
          Discover chic heels, casual sandals, and sneakers designed for comfort and style.
        </p>
        <button
          onClick={() => navigate("/Womenshop")}
          className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          Shop Women’s Shoes
        </button>
      </div>
    </section>
  );
};
