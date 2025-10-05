import React from "react";
import bannerImg from "../assets/images/model3.jpg"; // replace with your banner image
import { useNavigate } from "react-router-dom";

export const CallToAction = () => {
    const navigate=useNavigate()
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Explore Collection Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Full Collection
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Discover premium footwear for every style & season
        </p>
        <button onClick={()=> navigate("/explore")} className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};
