import React from "react";
import menImg from "../assets/images/product-1.jpg";  
import womenImg from "../assets/images/product-2.jpg"; 
import sneakerImg from "../assets/images/sandal2.jpg";  
import sandalImg from "../assets/images/sandal1.jpeg";    
 

import { Collection } from "./Collection";
import { SeasonalCollections } from "./SeasonalCollections";

export const Explore = () => {
  return (
    <div className="pt-20">
      
      {/* Collection Section */}
      <Collection/>

      {/* Trending Categories */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Trending Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[ 
            { img: menImg, title: "Men's Shoes" },
            { img: sandalImg, title: "Men's Sandals" },
            { img: womenImg, title: "Women's Shoes" },
            { img: sneakerImg, title: "Women's Sandals" }
          ].map((item, idx) => (
            <div key={idx} className="relative group rounded-xl overflow-hidden shadow-md">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Collections Section */}
      <SeasonalCollections/>

    </div>
  );
};
