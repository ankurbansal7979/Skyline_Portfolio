import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Globe, CheckCircle2, Users, Calendar, Award } from 'lucide-react';

// Components
import TeamMember from '../components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: "Happy Brar",
      role: "Founder & Immigration Consultant",
      bio: "With over 5 years of experience in immigration consulting, Happy has helped hundreds of clients achieve their dreams of studying and living abroad.",
      image: "/happy.png",
      contact: {
        email: "theskyline0017@gmail.com",
        phone: "+91 76650-00017",
        Instagram: "https://www.instagram.com/happybrar7?igsh=cWd0bnl5OWtwM3F6"
      }
    },
    {
      name: "Charanveer Singh Gill",
      role: "Co-Founder & Education Specialist",
      bio: "Charanveer specializes in educational consulting, helping students find the right institutions and programs that align with their career goals.",
      image: "/owner1.jpg",
      contact: {
        email: "theskyline0017@gmail.com",
        phone: "+91 73780-00017",
        Instagram: "https://www.instagram.com/charanveer_gill?igsh=NnRibzF1N2hkNGxo"
      }
    }
  ];
  
  const stats = [
    { value: "500+", label: "Successful Applications", icon: Trophy },
    { value: "10+", label: "Countries Served", icon: Globe },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
    { value: "6+", label: "Years of Experience", icon: Calendar }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-primary-200 mb-8">
              Learn about The Skyline Education and Immigration and the dedicated team behind our success
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
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
                src="/all.jpeg" 
                alt="The Skyline team" 
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
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Story</h2>
              
              <p className="text-slate-600 mb-4">
                The Skyline Education and Immigration was founded in 2023 by Happy Brar and Charanveer Singh Gill with a simple mission: to help people achieve their dreams of studying, working, and living abroad.
              </p>
              
              <p className="text-slate-600 mb-4">
                Having gone through the immigration process themselves, Happy and Charanveer understood the challenges and complexities involved. They combined their expertise in immigration law and international education to create a service that provides comprehensive support for clients.
              </p>
              
              <p className="text-slate-600 mb-6">
                Today, The Skyline has helped hundreds of clients from around the world successfully navigate their immigration journeys, with a focus on personalized service and attention to detail that sets us apart.
              </p>
              
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary-700" />
                <p className="font-semibold text-primary-700">Licensed and Certified Immigration Consultants</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section-padding bg-primary-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-700 mb-2">{stat.value}</h3>
                  <p className="text-slate-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The principles that guide everything we do
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                description: "We believe in honesty and transparency in all our dealings. We provide accurate information and set realistic expectations.",
                icon: CheckCircle2
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, ensuring that our clients receive the highest quality guidance and support.",
                icon: Award
              },
              {
                title: "Client-Centered",
                description: "Our clients' needs and goals are at the center of everything we do. We provide personalized service tailored to each individual.",
                icon: Users
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-700">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The professionals behind The Skyline's success
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                contact={member.contact}
                delay={index * 0.2}
              />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-lg mb-8 text-primary-200">
                Contact us today to discuss your immigration and education goals. Our team is ready to help you take the next step in your journey.
              </p>
              <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-primary-50">
                Contact Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;