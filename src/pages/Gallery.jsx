import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Student Visa Approval",
      category: "Education",
      image: "gallery1.jpg",
      description: "One of our students celebrating their visa approval for studies in Canada"
    },
    {
      id: 2,
      title: "Work Permit Success",
      category: "Education",
      image: "gallery2.jpg",
      description: "Client receiving their approved work permit for Australia"
    },
    {
      id: 3,
      title: "Family Reunification",
      category: "Education",
      image: "gallery3.jpg",
      description: "A family reunited after successful sponsorship application"
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      category: "Education",
      image: "score1.jpeg",
      description: "International students celebrating their graduation"
    },
    {
      id: 5,
      title: "Business Immigration",
      category: "Success Stories",
      image: "gallery4.jpg",
      description: "Entrepreneur client launching their business after successful immigration"
    },
    {
      id: 6,
      title: "PR Card Approval",
      category: "Success Stories",
      image: "gallery5.jpg",
      description: "Client receiving their Permanent Resident card"
    },
    {
      id: 7,
      title: "University Campus",
      category: "Success Stories",
      image: "gallery6.jpeg",
      description: "A prestigious university campus where our clients study"
    },
    {
      id: 8,
      title: "Client Consultation",
      category: "Success Stories",
      image: "gallery7.jpg",
      description: "Our consultants meeting with clients"
    },
    {
      id: 9,
      title: "Visa Stamping",
      category: "Success Stories",
      image: "gallery8.jpg",
      description: "Close-up of a visa stamp in a passport"
    },
    {
      id: 10,
      title: "Team Workshop",
      category: "Events",
      image: "event1.jpeg",
      description: "Our team during an immigration workshop"
    },
    {
      id: 11,
      title: "New Beginnings",
      category: "Success Stories",
      image: "study3.jpeg",
      description: "Client moving into their new home abroad"
    },
    {
      id: 12,
      title: "Document Preparation",
      category: "Success Stories",
      image: "study6.jpeg",
      description: "Preparing immigration documents for submission"
    }
  ];

  const categories = [...new Set(galleryItems.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredItems = activeCategory
    ? galleryItems.filter(item => item.category === activeCategory)
    : galleryItems;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-primary-800 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-primary-200 mb-8">
              A collection of success stories, events, and moments from our journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </motion.button>

            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden h-64 cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-primary-200 text-xs font-medium">{item.category}</span>
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="max-w-5xl max-h-[90vh]"
          >
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
