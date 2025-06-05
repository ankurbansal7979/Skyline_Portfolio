import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ 
  name, 
  location, 
  testimonial, 
  image,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
    >
      <div className="p-6">
        <Quote className="w-10 h-10 text-primary-200 mb-4" />
        <p className="text-slate-600 mb-6 italic">{testimonial}</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
          <div>
            <p className="font-semibold text-slate-800">{name}</p>
            <p className="text-slate-500 text-sm">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;