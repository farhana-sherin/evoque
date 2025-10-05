import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import top1Img from '../assets/images/collection-1.jpg'
import top2Img from '../assets/images/collection-2.jpg'
import top3Img from '../assets/images/collection-3.jpg'
import top4Img from '../assets/images/shoe.png'

export const Top = () => {
  const topPicks = [
    { img: top1Img, name: 'Nike Air Max 720', price: '₹780' },
    { img: top2Img, name: 'Adidas Ultraboost 22', price: '₹950' },
    { img: top3Img, name: 'Puma RS-X Reinvention', price: '₹650' },
    { img: top4Img, name: 'Reebok Nano X', price: '₹750' },
    { img: top1Img, name: 'Nike Air Max 270', price: '₹820' },
    { img: top2Img, name: 'Adidas Solar Glide', price: '₹900' },
  ]

  const [page, setPage] = useState(0)
  const cardsPerPage = 3
  const totalPages = Math.ceil(topPicks.length / cardsPerPage)

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages)
  }

  const startIndex = page * cardsPerPage
  const visibleCards = topPicks.slice(startIndex, startIndex + cardsPerPage)

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-gray-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Featured Products</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">Top Picks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and trending shoe collections, handpicked for their exceptional quality and style.
          </p>
        </div>

        {/* Pagination Arrows */}
        <div className="flex justify-end mb-6 gap-3">
          <button
            onClick={handlePrev}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-white rounded-full shadow hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCards.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{item.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                    
                  </div>
                  <button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
