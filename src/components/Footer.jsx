import React from 'react'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Website Name */}
          <div className="text-lg font-bold">
            Evoque
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@evoque.com</span>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
