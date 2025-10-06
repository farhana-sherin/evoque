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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/60 backdrop-blur-lg border border-gray-200 shadow-lg rounded-xl z-50 transition-all duration-500">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-20">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/images/logo.png"
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

        {/* Right: Contact (desktop only) */}
        <div className="flex-1 flex justify-end items-center">
          <Link
            to={contactItem.path}
            className="hidden md:block text-gray-700 text-lg font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition shadow-lg "
          >
            {contactItem.name}
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-xl p-6 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block font-semibold text-lg text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact highlighted in mobile */}
          <Link
            to={contactItem.path}
            className="block text-center font-semibold text-lg text-white bg-gradient-to-r from-gray-800 to-gray-600 px-4 py-3 rounded-lg hover:opacity-90 transition"
            onClick={() => setMobileOpen(false)}
          >
            {contactItem.name}
          </Link>
        </div>
      </div>
    </header>
  );
};
