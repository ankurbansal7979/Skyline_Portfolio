import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <Globe className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">The Skyline</h3>
                <p className="text-xs text-primary-200">Education & Immigration</p>
              </div>
            </div>
            <p className="text-primary-100 text-sm mb-6">
              Professional immigration and education consulting services helping you achieve your dreams abroad.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-primary-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-primary-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-primary-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-primary-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-100 hover:text-white transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-800 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Study Visa</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Work Permit</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Permanent Residency</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Business Immigration</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Family Sponsorship</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-300 mt-0.5" />
                <span className="text-primary-100 text-sm">Opp Sardar Ji Malai Chaap Wale, Near Kisan Chowk, Huda Road, Sirsa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-300" />
                <span className="text-primary-100 text-sm">7665-000017 | 7378-000017</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-300" />
                <a href="mailto:theskyline0017@gmail.com" className="text-primary-100 text-sm hover:text-white">
                  theskyline0017@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-6 text-center text-primary-300 text-sm">
          <p>© {currentYear} The Skyline Education and Immigration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;