import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Users, 
  Building, 
  Award,
  FileText, 
  BookOpen, 
  Landmark, 
  School,
  Map,
  Send,
  CheckCircle
} from 'lucide-react';

// Components
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const immigrationServices = [
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
  
  const educationServices = [
    {
      title: "University Applications",
      description: "Comprehensive assistance with university applications, including document preparation and application strategy.",
      icon: School
    },
    {
      title: "Course Selection",
      description: "Expert guidance on selecting courses and programs that align with your career goals and immigration plans.",
      icon: BookOpen
    },
    {
      title: "Documentation Support",
      description: "Professional help with preparing and organizing all required documents for your educational journey.",
      icon: FileText
    },
    {
      title: "Scholarship Guidance",
      description: "Information and assistance with scholarship applications to help fund your education abroad.",
      icon: Landmark
    }
  ];
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-200 mb-8">Comprehensive immigration and education solutions tailored to your unique journey</p>
          </motion.div>
        </div>
      </section>
      
      {/* Immigration Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Immigration Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Expert guidance for all your immigration needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {immigrationServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              How we work with you to achieve your immigration goals
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 relative">
              {[
                {
                  title: "Initial Consultation",
                  description: "We begin with a detailed consultation to understand your goals, background, and specific needs.",
                  icon: Users
                },
                {
                  title: "Custom Strategy",
                  description: "Our experts develop a personalized strategy tailored to your unique situation and immigration objectives.",
                  icon: Map
                },
                {
                  title: "Documentation & Preparation",
                  description: "We guide you through gathering and preparing all necessary documentation for a strong application.",
                  icon: FileText
                },
                {
                  title: "Application Submission",
                  description: "Our team ensures your application is correctly submitted and follows up on its progress.",
                  icon: Send
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous support until your application is approved and beyond.",
                  icon: CheckCircle
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 mb-6 md:mb-0 md:p-8">
                    <div className={`bg-white p-6 rounded-xl shadow-md ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <h3 className="text-xl font-bold text-primary-800 mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full z-10">
                    {index + 1}
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Services */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Education Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Supporting your educational journey abroad
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Countries We Serve */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Countries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We provide expert guidance for immigration to these popular destinations
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { country: "Canada", flag: "🇨🇦", imageUrl: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "Australia", flag: "🇦🇺", imageUrl: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "United Kingdom", flag: "🇬🇧", imageUrl: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "United States", flag: "🇺🇸", imageUrl: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "New Zealand", flag: "🇳🇿", imageUrl: "https://images.pexels.com/photos/724963/pexels-photo-724963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "Germany", flag: "🇩🇪", imageUrl: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "Ireland", flag: "🇮🇪", imageUrl: "https://images.pexels.com/photos/831895/pexels-photo-831895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
              { country: "Singapore", flag: "🇸🇬", imageUrl: "mai.jpg" }
            ].map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-md bg-white"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={country.imageUrl} 
                    alt={country.country} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{country.flag}</span>
                        <h3 className="text-white font-medium">{country.country}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-lg mb-8 text-primary-200">
                Our team of experts is ready to help you navigate the complex world of immigration and education abroad.
              </p>
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;