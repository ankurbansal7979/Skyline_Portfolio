import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

// Components
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-200 mb-8">
              Get in touch with our team to discuss your immigration and education needs
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                  <p className="text-slate-600 mb-8">
                    Have questions about our services or want to schedule a consultation? Reach out to us using the contact information below or fill out the form.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-800">Office Location</h4>
                      <p className="text-slate-600 mt-1">
                        Opp Sardar Ji Malai Chaap Wale, Near Kisan Chowk<br />
                        Huda Road, Sirsa-125055, Haryana<br/>
                        KARNAL | MISSISSUAGA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                        <Mail className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-800">Email Address</h4>
                      <p className="text-slate-600 mt-1">
                        <a href="mailto:theskyline0017@gmail.com" className="text-primary-700 hover:underline">
                          theskyline0017@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                        <Phone className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-800">Phone Number</h4>
                      <p className="text-slate-600 mt-1">
                        <a href="tel:+11234567890" className="text-primary-700 hover:underline">
                          +91 76650-00017<br/>
                          +91 73780-00017
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-800">Office Hours</h4>
                      <div className="text-slate-600 mt-1">
                        <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://twitter.com" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500" aria-label="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Location
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Visit us at our office in Toronto
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Replace with your actual map embed code */}
          <div className="w-full h-auto bg-slate-200 flex items-center justify-center py-10">
  <div className="text-center max-w-4xl">
    <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-3" />
    <p className="text-slate-700 mb-6">
      123 Immigration Street, Suite 101, Toronto, ON, Canada
    </p>
    
    {/* Map Embed */}
    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.29594155598!2d75.05422427453217!3d29.536874742442528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114dbbf2cf71ad%3A0xa26f4391c8add6b6!2sThe%20Skyline%20Immigration!5e0!3m2!1sen!2sin!4v1749206824482!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Find answers to common questions about our services
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What services does The Skyline provide?",
                  answer: "We offer a comprehensive range of immigration and education services, including study visas, work permits, permanent residency applications, family sponsorship, business immigration, and educational consulting."
                },
                {
                  question: "How can I schedule a consultation?",
                  answer: "You can schedule a consultation by filling out our contact form, calling our office, or sending us an email. We offer both in-person and virtual consultations to accommodate your needs."
                },
                {
                  question: "What documents do I need to bring for my first consultation?",
                  answer: "For your first consultation, we recommend bringing your passport, any previous visa rejections (if applicable), educational credentials, and work experience documentation. This helps us provide the most accurate assessment of your situation."
                },
                {
                  question: "What are your fees for immigration services?",
                  answer: "Our fees vary depending on the specific service and complexity of your case. We provide transparent pricing during your initial consultation so you understand all costs involved before proceeding."
                },
                {
                  question: "How long does the immigration process typically take?",
                  answer: "Processing times vary widely based on the type of application, country of destination, and individual circumstances. During your consultation, we'll provide an estimated timeline specific to your situation."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <details className="group">
                    <summary className="p-6 flex justify-between items-center cursor-pointer">
                      <h3 className="text-lg font-semibold text-slate-800">{faq.question}</h3>
                      <span className="text-primary-600 group-open:rotate-180 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;