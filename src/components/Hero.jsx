import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-opacity-10 z-0">
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        <div className="absolute left-0 top-0 opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa28" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Journey to <span className="text-primary-200">Global Opportunities</span> Starts Here
              </h1>
              
              <p className="text-lg text-primary-100 max-w-lg">
                Professional immigration and education consulting services to help you achieve your dreams with confidence.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50">
                  Free Consultation
                </Link>
                <Link to="/services" className="btn border border-white text-white hover:bg-white/10">
                  Our Services
                </Link>
              </div>
              
              <div className="flex items-center mt-6 text-primary-200">
                <MapPin className="w-5 h-5 mr-2" />
                <p className="text-sm">Serving clients worldwide from our offices in India</p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/all.jpeg" 
                  alt="The Skyline team" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              {/* Floating badge elements */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-5 top-1/4 bg-white p-3 rounded-lg shadow-lg"
              >
                <img 
                  src="/score1.jpeg" 
                  alt="PTE Score" 
                  className="w-16 h-16 object-cover rounded"
                />
              </motion.div>
              
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-5 bottom-1/4 bg-white p-3 rounded-lg shadow-lg"
              >
                <img 
                  src="/score2.jpeg" 
                  alt="PTE Score" 
                  className="w-16 h-16 object-cover rounded"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;