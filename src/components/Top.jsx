import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import top1Img from '../assets/images/collection-1.jpg'
import top2Img from '../assets/images/collection-2.jpg'
import top3Img from '../assets/images/collection-3.jpg'
import top4Img from '../assets/images/shoe.png'

export const Top = () => {
  const topPicks = [
    { img: top1Img },
    { img: top2Img },
    { img: top3Img },
    { img: top4Img },
    { img: top1Img },
    { img: top2Img },
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
            Discover our most popular and trending shoe collections.
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
                <img
                  src={item.img}
                  alt={`Top Pick ${index + 1}`}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
