import React from 'react'
import menShoesImg from '../assets/images/men1.png'
import womenShoesImg from '../assets/images/hero8.jpg'


import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const Collection = () => {
  const navigate =useNavigate()
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Shoe Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium men’s and women’s shoes, with exclusive designs and sale offers.
          </p>
        </div>

        {/* Horizontal Layout - Men's and Women's Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Men's Collection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Men's Collection</h3>
            
            {/* Men's Shoes Large */}
            <div className="group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={menShoesImg}
                  alt="Men's Shoes"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                  
                  <h4 className="text-3xl font-bold text-white mb-2">Men's Shoes</h4>
                  <p className="text-gray-200 mb-4">Timeless sneakers & formal shoes</p>
                  <button onClick={()=> navigate("/MenShop")} className="flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                    Shop Now <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Men's Small Collections */}
          
          </div>

          {/* Women's Collection */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Women's Collection</h3>
            
            {/* Women's Shoes Large */}
            <div className="group cursor-pointer relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={womenShoesImg}
                  alt="Women's Shoes"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-8">
                  
                  <h4 className="text-3xl font-bold text-white mb-2">Women's Shoes</h4>
                  <p className="text-gray-200 mb-4">Elegant heels & casual comfort</p>
                  <button onClick={()=> navigate("/womenshop")} className="flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
                    Shop Now <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Women's Small Collections */}
            
          </div>
        </div>

      </div>
      
    </section>
  )
}
