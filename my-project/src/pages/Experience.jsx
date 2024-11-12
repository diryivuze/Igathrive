import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Software Developer',
      company: 'Tech Corp',
      course: 'Computer Graphics',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MZcHs2_LNv9vzMrDzCDn_APEpjZiHq0j2A&s',
      rating: 5,
      feedback: 'IgaThrive helped me acquire essential skills for my career. The Computer Graphics course was comprehensive and practical.',
      category: 'professional'
    },
    {
      name: 'Jane Smith',
      role: 'Digital Marketing Manager',
      company: 'Marketing Solutions',
      course: 'Professional Skills',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MZcHs2_LNv9vzMrDzCDn_APEpjZiHq0j2A&s',
      rating: 5,
      feedback: 'The Professional Skills course transformed my approach to team management. The platform is intuitive and the content is top-notch!',
      category: 'professional'
    },
    {
      name: 'Michael Johnson',
      role: 'Student',
      company: 'University of Technology',
      course: 'Web Design and Development',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MZcHs2_LNv9vzMrDzCDn_APEpjZiHq0j2A&s',
      rating: 4,
      feedback: 'As a student, the web development course gave me practical skills that I could immediately apply to real projects.',
      category: 'student'
    },
    {
      name: 'Sarah Williams',
      role: 'Bank Officer',
      company: 'Global Bank',
      course: 'E-Banking',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5MZcHs2_LNv9vzMrDzCDn_APEpjZiHq0j2A&s',
      rating: 5,
      feedback: 'The E-Banking course was exactly what I needed to understand modern banking systems. Excellent content and support!',
      category: 'professional'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const stats = [
    { label: 'Happy Students', value: '2,000+' },
    { label: 'Course Completion Rate', value: '94%' },
    { label: 'Average Rating', value: '4.8/5' },
    { label: 'Career Transitions', value: '500+' }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-gray-100 min-h-screen">
      <Navbar />
      
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold text-center text-blue-950 mt-20 mb-16"
          variants={itemVariants}
        >
          Success Stories
        </motion.h1>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl font-bold text-blue-950 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          variants={itemVariants}
        >
          {['all', 'professional', 'student'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category 
                  ? 'bg-blue-950 text-white' 
                  : 'bg-white text-blue-950 hover:bg-blue-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-3xl text-blue-950 opacity-20" />
              </div>
              
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.feedback}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-blue-950">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center bg-blue-950 text-white p-12 rounded-xl shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">Join thousands of successful learners and transform your career</p>
          <motion.button
            className="bg-white text-blue-950 px-8 py-3 rounded-full font-medium hover:bg-blue-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Experience;