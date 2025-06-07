import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Globe, Users, Building, Award, Map, ArrowRight, CheckCircle2 } from 'lucide-react';

// Components
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home= () => {
  const services = [
    { 
      title: "Study Visas", 
      description: "Expert guidance for students seeking education opportunities abroad. We help with university selection, application process, and visa requirements.",
      icon: GraduationCap
    },
    { 
      title: "Work Permits", 
      description: "Navigate the complexities of international work permits. We assist with documentation, employer requirements, and application procedures.",
      icon: Briefcase
    },
    { 
      title: "Permanent Residency", 
      description: "Comprehensive support for permanent residency applications, ensuring you meet all criteria and submit a strong application.",
      icon: Globe
    },
    { 
      title: "Family Sponsorship", 
      description: "Reunite with your family through our expert family sponsorship services, handling all paperwork and requirements.",
      icon: Users
    },
    { 
      title: "Business Immigration", 
      description: "Specialized services for entrepreneurs and investors looking to establish or expand businesses internationally.",
      icon: Building
    },
    { 
      title: "Express Entry", 
      description: "Strategic guidance to maximize your chances through express entry programs with step-by-step assistance.",
      icon: Award
    }
  ];
  
  const testimonials = [
    {
      name: "Yuvraj Sandhu",
      location: "Study Visa to Canada",
      testimonial: "The team at Skyline Education helped me secure my student visa to Canada. Their guidance throughout the process was invaluable, and I'm now studying at my dream university!",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sarah Chen",
      location: "Work Permit to Australia",
      testimonial: "I was struggling with my work permit application until I found Skyline. Their expertise made the process smooth, and I received my approval much faster than expected.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Mohammed Al-Farsi",
      location: "PR for Family",
      testimonial: "Happy and Charanveer guided us through our family's permanent residency process. Their attention to detail and personalized support made all the difference.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Immigration Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Professional guidance for all your immigration and education needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center btn btn-outline">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Immigration specialists meeting with clients" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose The Skyline?</h2>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">Expert Consultants</h3>
                    <p className="text-slate-600">Our team is led by Happy Brar and Charanveer Singh Gill, with years of experience in immigration consulting.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">Personalized Approach</h3>
                    <p className="text-slate-600">We develop custom strategies based on your unique situation and goals.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">Transparent Process</h3>
                    <p className="text-slate-600">Clear communication and honest advice throughout your application journey.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800">Success-Oriented</h3>
                    <p className="text-slate-600">Our high success rate speaks for itself - we're committed to helping you achieve your goals.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-primary">
                  Learn About Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Countries Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-white"
            >
              Global Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-primary-200"
            >
              We provide immigration and education services for these popular destinations
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {[
              { country: "Canada", flag: "🇨🇦" },
              { country: "Australia", flag: "🇦🇺" },
              { country: "United Kingdom", flag: "🇬🇧" },
              { country: "United States", flag: "🇺🇸" },
              { country: "New Zealand", flag: "🇳🇿" },
              { country: "Germany", flag: "🇩🇪" },
              { country: "Ireland", flag: "🇮🇪" },
              { country: "Singapore", flag: "🇸🇬" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-700/50 p-6 rounded-lg hover:bg-primary-600/50 transition-colors"
              >
                <div className="text-4xl mb-2">{item.flag}</div>
                <h3 className="font-medium">{item.country}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hear what our clients have to say about their experience with us
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg mb-8 text-primary-100"
            >
              Contact us today for a free consultation and take the first step towards your new future abroad.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50">
                Schedule Consultation
              </Link>
              
              <Link to="/services" className="btn border border-white text-white hover:bg-white/10">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;