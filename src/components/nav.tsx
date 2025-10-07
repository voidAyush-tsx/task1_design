"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X, Home as HomeIcon, Info, HandHeart, Tag, MessageCircleQuestionMark  } from 'lucide-react';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: HomeIcon },
    { name: 'About Us', href: '#about', icon: Info },
    { name: 'Our Services', href: '#services', icon: HandHeart },
    { name: 'Pricing', href: '#pricing', icon: Tag },
    { name: 'FAQ', href: '#faq', icon: MessageCircleQuestionMark },
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
          <Image src="/logo.png" alt="Company logo" width={200} height={58} className="w-48 object-cover" priority />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#282828] text-[18px] hover:text-red-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="hidden lg:flex items-center px-5 py-2 bg-red-500 text-white text-xl rounded-full font-semibold hover:bg-red-600 transition-colors">
            Get A Quote
          </button>

          <button
            className={`lg:hidden p-2 text-black cursor-pointer hover:text-red-500 z-[60] ${isOpen ? 'hidden' : ''}`}
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
          className="lg:hidden fixed inset-0 bg- bg-opacity-50 z-40 cursor-pointer transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-b from-pink-50 to-pink-100 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          <div className="flex justify-between items-center mb-12">

            <Image src="/logo.png" alt="Company logo" width={200} height={58} className="w-36 object-cover" priority />
            <button
              className="p-2 cursor-pointer text-red-500 hover:text-red-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>


          <div className="flex flex-col gap-8 flex-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-4 text-[#282828] text-[18px] hover:text-red-500 font-semibold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={24} className="text-black group-hover:text-red-500" />
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