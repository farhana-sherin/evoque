import React from 'react'
import heroUrl from "../assets/images/her6.jpg";

export const AboutUs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Evoque</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evoque is a premium footwear brand dedicated to delivering unmatched style, comfort, and quality. 
            Our curated collection combines timeless designs with modern trends, ensuring every step you take is confident and elegant.
          </p>
        </div>

        {/* Two-Column Info */}
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Philosophy</h3>
            <p className="text-gray-600 mb-6">
              At Evoque, we believe that shoes are more than just accessories—they are expressions of personality and style. 
              Every pair is crafted with attention to detail, using premium materials for durability and comfort.
            </p>
            <p className="text-gray-600">
              From classic sneakers to elegant heels, Evoque ensures that you always step out with confidence. 
              Sustainability, innovation, and aesthetics guide our design process, making every product a true reflection of quality.
            </p>
          </div>

          {/* Image Column */}
          <div className="relative">
            <img
              src={heroUrl}
              alt="Evoque Shoes"
              className="w-full rounded-3xl shadow-xl object-cover h-[500px] lg:h-[500px]"
            />
            
          </div>
        </div>
      </div>

    </section>
  )
}
