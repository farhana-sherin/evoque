import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "About", path: "/about" },
  ];

  const contactItem = { name: "Contact", path: "/map" };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/30 backdrop-blur-lg border border-gray-200/30 shadow-xl rounded-xl z-50 transition-all duration-500">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="src/assets/images/logo.png"
              alt="EVOQUE Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="flex-1 hidden md:flex justify-center space-x-10 text-gray-700 text-lg font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="relative group transition-all duration-300 hover:text-gray-900"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-gray-800 to-gray-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Contact */}
        <div className="flex-1 flex justify-end items-center">
          <Link
            to={contactItem.path}
            className="text-gray-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            {contactItem.name}
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <button
              className="p-2 rounded-full hover:bg-white/25 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/30 backdrop-blur-lg border border-gray-200/30 shadow-xl rounded-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {[...navItems, contactItem].map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="block font-medium text-lg text-gray-700 px-4 py-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setMobileOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
