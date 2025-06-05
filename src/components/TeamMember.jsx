import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  image, 
  contact,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-72 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-primary-200">{role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 mb-4">{bio}</p>
        
        <div className="pt-4 border-t border-slate-200">
          <div className="flex flex-wrap gap-3">
            {contact.email && (
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center text-sm text-slate-600 hover:text-primary-700"
              >
                <Mail className="w-4 h-4 mr-1" />
                Email
              </a>
            )}
            
            {contact.phone && (
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center text-sm text-slate-600 hover:text-primary-700"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </a>
            )}
            
            {contact.linkedin && (
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-slate-600 hover:text-primary-700"
              >
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;