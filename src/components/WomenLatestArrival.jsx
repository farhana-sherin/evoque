import React, { useState } from 'react'
import women1 from '../assets/images/women1.jpeg'
import women2 from '../assets/images/women2.jpeg'
import women3 from '../assets/images/women3.webp'
import women4 from '../assets/images/women4.jpeg'
import women5 from '../assets/images/women5.jpeg'
import women6 from '../assets/images/women6.jpeg'

export const WomenLatestArrivals = () => {
  const latest = [
    { img: women1, name: 'Elegant Heels', price: '₹1,200' },
    { img: women2, name: 'Casual Sneakers', price: '₹950' },
    { img: women3, name: 'Chic Sandals', price: '₹780' },
    { img: women4, name: 'Classic Flats', price: '₹650' },
    { img: women5, name: 'Stylish Boots', price: '₹1,400' },
    { img: women6, name: 'Designer Wedges', price: '₹1,100' },
  ]

  const [visibleCount, setVisibleCount] = useState(3)

  const handleViewMore = () => {
    setVisibleCount((prev) =>
      prev + 3 >= latest.length ? latest.length : prev + 3
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">New Arrivals</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Women’s Latest Arrivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the newest arrivals in our women’s collection – a blend of elegance,
            comfort, and trendsetting designs for every occasion.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latest.slice(0, visibleCount).map((item, index) => (
            <div key={index} className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover rounded-3xl"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <span className="text-2xl font-bold text-gray-900">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < latest.length && (
          <div className="flex justify-center">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
