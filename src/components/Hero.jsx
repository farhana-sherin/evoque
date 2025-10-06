import React from 'react';
import heroImg from '../assets/images/hero.png'; // adjust path
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          
          {/* Left: Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm animate-fadeInUp">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-600">Premium Collection</span>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight 
               bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 
               bg-clip-text text-transparent drop-shadow-2xl tracking-tight animate-fadeInUp delay-200">
                Where Comfort Meets Timeless Style
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fadeInUp delay-300">
                Step into elegance with every pair from EVOQUE. Designed for comfort, built for style, crafted for the modern individual.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start animate-fadeInUp delay-400">
              <button
                onClick={() => navigate("/explore")}
                className="bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                Shop Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 animate-fadeInUp delay-500">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <img
              src={heroImg}
              alt="Premium EVOQUE Shoes"
              className="w-[60rem] object-contain animate-float"
            />
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
          .animate-fadeInUp.delay-600 { animation-delay: 0.6s; }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};
