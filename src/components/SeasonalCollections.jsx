import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import menShoesImg from '../assets/images/collection-2.jpg';
import menSandalsImg from '../assets/images/sandal1.jpeg';
import womenShoesImg from '../assets/images/women1.jpeg';
import womenSandalsImg from '../assets/images/sandal2.jpg';
// import limitedImg from '../assets/images/collection-3.jpg';

export const SeasonalCollections = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const collections = [
    { title: 'Men Shoes', img: menShoesImg, link: '/menshoes' },
    { title: 'Men Sandals', img: menSandalsImg, link: '/mensandals' },
    { title: 'Women Shoes', img: womenShoesImg, link: '/womenshoes' },
    { title: 'Women Sandals', img: womenSandalsImg, link: '/womensandals' },
    // { title: 'Limited Edition', img: limitedImg, link: '/limitededition' },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(collections.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const currentItems = collections.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Trending Collections</h2>
      </div>

      {/* Grid of current page items */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <button
                onClick={() => navigate(item.link)}
                className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === page ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
