"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X, Home as HomeIcon, Info, Briefcase, DollarSign, HelpCircle } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: HomeIcon },
    { name: 'About Us', href: '#about', icon: Info },
    { name: 'Our Services', href: '#services', icon: Briefcase },
    { name: 'Pricing', href: '#pricing', icon: DollarSign },
    { name: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 font-figtree">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-full" style={{ borderRadius: '50% 50% 0 50%' }}></div>
            </div>
            <div>
              <div className="font-bold text-lg sm:text-xl text-gray-800">COMPANY</div>
              <div className="text-xs text-gray-600">business tagline</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
              Get A Quote
            </button>
          </div>

          <button
            className={`lg:hidden p-2 text-gray-700 hover:text-red-500 z-[60] ${isOpen ? 'hidden' : ''}`}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-b from-pink-50 to-pink-100 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          <div className="flex justify-end mb-8">
            <button
              className="p-2 text-red-500 hover:text-red-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <div className="w-7 h-7 border-2 border-white rounded-full" style={{ borderRadius: '50% 50% 0 50%' }}></div>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-800">COMPANY</div>
              <div className="text-xs text-gray-600">business tagline</div>
            </div>
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-4 text-gray-800 hover:text-red-500 font-semibold text-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={24} className="text-red-500" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <button 
            className="w-full py-4 bg-red-500 text-white rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg mb-6"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;