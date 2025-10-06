import React, { useState } from 'react'
import men1 from '../assets/images/product-1.jpg'
import men2 from '../assets/images/product-2.jpg'
import men3 from '../assets/images/product-3.jpg'
import men4 from '../assets/images/product-4.jpg'
import men5 from '../assets/images/product-5.jpg'
import men6 from '../assets/images/product-6.jpg'

export const LatestArrivals = () => {
  const latest = [
    { img: men1 },
    { img: men2 },
    { img: men3 },
    { img: men4 },
    { img: men5 },
    { img: men6 },
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-gray-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">New Arrivals</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest Arrivals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Check out the newest additions to our men's shoe collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latest.slice(0, visibleCount).map((item, index) => (
            <div key={index} className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={item.img}
                alt={`Latest Arrival ${index + 1}`}
                className="w-full h-80 object-cover rounded-3xl"
              />
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
