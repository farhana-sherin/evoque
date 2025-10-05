import React, { useState } from 'react'
import men1 from '../assets/images/product-1.jpg'
import men2 from '../assets/images/product-2.jpg'
import men3 from '../assets/images/product-3.jpg'
import men4 from '../assets/images/product-4.jpg'
import men5 from '../assets/images/product-5.jpg'
import men6 from '../assets/images/product-6.jpg'
import men7 from '../assets/images/sandal1.jpeg'


export const MenShop = () => {
  const categories = ['All', 'Sneakers', 'Sports Shoes','Sandals']
  const sortOptions = ['Latest', 'Price: Low to High', 'Price: High to Low']

  const allProducts = [
    { id: 1, name: 'Nike Air Zoom', category: 'Sneakers', price: 820, img: men1 },
    { id: 2, name: 'Adidas Ultraboost', category: 'Sports Shoes', price: 950, img: men2 },
    { id: 3, name: 'Puma RS-X', category: 'Casual Wear', price: 700, img: men3 },
    { id: 4, name: 'Reebok Nano X', category: 'Sports Shoes', price: 780, img: men4 },
    { id: 5, name: 'Nike Air Max 270', category: 'Formal Shoes', price: 850, img: men5 },
    { id: 6, name: 'Adidas Solar Glide', category: 'Sneakers', price: 900, img: men6 },
    { id: 7, name: 'Sandals', category: 'Sandals', price: 1000, img: men7 },

  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Latest')

  const filteredProducts = allProducts
    .filter((p) => (selectedCategory === 'All' ? true : p.category === selectedCategory))
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price
      if (sortBy === 'Price: High to Low') return b.price - a.price
      return b.id - a.id // Latest
    })

  return (
    <div className="bg-gray-50 min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Men's Collection</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          {/* Category */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-800"
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 mt-20">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-gray-900 mb-4 block">₹{item.price}</span>
                    <button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
