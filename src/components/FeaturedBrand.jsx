import React from 'react';
import adidasImg from '../assets/images/sponsor-1.png';
import nikeImg from '../assets/images/sponsor-2.png';
import pumaImg from '../assets/images/sponsor-3.png';
import asicsImg from '../assets/images/sponsor-4.png';
import bataImg from '../assets/images/sponsor-5.png';

export const FeaturedBrands = () => {
  const brands = [
    { name: 'Adidas', img: adidasImg },
    { name: 'Nike', img: nikeImg },
    { name: 'Puma', img: pumaImg },
    { name: 'Bata', img: bataImg },
    { name: 'Asics', img: asicsImg },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Featured Brands
      </h2>

      <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-10 md:h-14 object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
