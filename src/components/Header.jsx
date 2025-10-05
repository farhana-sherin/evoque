import React, { useState } from "react";
import { Link, Links } from "react-router-dom"; 
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/20 backdrop-blur-2xl border border-gray-200/30 shadow-xl rounded-xl z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Link to={'/'}>
        <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
          EVOQUE
        </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-gray-700 text-lg font-medium">
          {navItems.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.path}
              className="relative group transition-all duration-300 hover:text-gray-900"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-gray-800 to-gray-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-5 text-gray-700">
          {[Search, Heart, ShoppingCart, User].map((Icon, idx) => (
            <button
              key={idx}
              className="p-2 rounded-full hover:bg-white/25 hover:text-gray-900 hover:scale-110 transition-all duration-300"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-full hover:bg-white/25 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/20 backdrop-blur-2xl border-t border-gray-200/30 shadow-lg rounded-b-xl px-6 py-4 space-y-4 text-gray-700">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block font-medium text-lg hover:text-gray-900 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-5 mt-2">
            {[Search, Heart, ShoppingCart, User].map((Icon, idx) => (
              <button
                key={idx}
                className="p-2 rounded-full hover:bg-white/25 hover:text-gray-900 hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
