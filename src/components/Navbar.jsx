import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolioData';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#0a1128] py-4'
          : isScrolled
            ? 'bg-[#05070f]/80 backdrop-blur-md py-4 border-b border-white/10'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        <div className="flex items-center">
          <a href="#home" className="text-white text-2xl font-black tracking-tight">
            {personal.firstName}<span className="text-blue-500">.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-sm font-medium relative group transition-colors duration-300"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full gradient-btn text-white font-semibold text-sm shadow-md"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[28rem] py-4 opacity-100 bg-[#0a1128] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-400 font-bold text-lg border-b border-white/10 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a
               href="#contact"
               onClick={() => setIsOpen(false)}
               className="inline-block px-6 py-3 rounded-full gradient-btn text-white font-black w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
