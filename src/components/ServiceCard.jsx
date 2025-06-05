import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card p-6 hover:translate-y-[-5px] bg-white"
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary-100 p-3 rounded-lg text-primary-700">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <a href="#" className="text-primary-700 font-medium inline-flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;