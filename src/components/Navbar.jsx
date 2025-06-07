import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'text-primary-700 bg-primary-50'
        : 'text-slate-700 hover:text-primary-700 hover:bg-primary-50'
    }`;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src='public\logo 234.jpg' className="w-18 h-14 text-primary-700" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-700">The Skyline</span>
              <span className="text-s text-primary-600">Education & Immigration</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/services" className={linkClasses}>Services</NavLink>
            <NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
            <NavLink to="/about" className={linkClasses}>About Us</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex">
            <NavLink 
              to="/contact" 
              className="btn btn-primary rounded-full text-sm py-2 px-4 flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Free Consultation
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/services" className={linkClasses} onClick={() => setIsOpen(false)}>Services</NavLink>
              <NavLink to="/gallery" className={linkClasses} onClick={() => setIsOpen(false)}>Gallery</NavLink>
              <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink>
              <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>Contact</NavLink>
            </nav>
            <div className="mt-4">
              <NavLink 
                to="/contact" 
                className="btn btn-primary text-sm w-full"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </NavLink>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;