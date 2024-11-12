import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      message: 'Driven by passion for innovation and excellence.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      message: 'Committed to crafting seamless and efficient solutions.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s'
    },
    {
      name: 'Alice Johnson',
      role: 'UI/UX Designer',
      message: 'Inspired by the power of intuitive and user-centric design.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
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
          About IgaThrive
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.section variants={itemVariants} className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold mb-4 text-blue-950">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower individuals through comprehensive, accessible courses that
                enhance both professional and personal skills. We believe in fostering a culture of learning
                and growth, helping learners to thrive in a digital-first world.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-semibold mb-4 text-blue-950">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to become a leader in online education by delivering high-quality, user-friendly,
                and accessible resources that equip learners with relevant, in-demand skills for the future.
              </p>
            </div>
          </motion.section>
        </div>

        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-4xl font-semibold mb-12 text-center text-blue-950">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
                variants={itemVariants}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-center text-blue-800">{member.name}</h3>
                <p className="text-blue-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-700 mb-6 text-center italic">&quot;{member.message}&quot;</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-950 transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href={member.social.github} className="text-gray-600 hover:text-blue-950 transition-colors">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-600 hover:text-blue-950 transition-colors">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          variants={itemVariants}
          className="bg-blue-950 text-white p-12 rounded-md shadow-lg text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Join Our Journey</h2>
          <p className="text-lg mb-8">
            Be part of our mission to transform online education and empower learners worldwide.
          </p>
          <button className="bg-white text-blue-950 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
            Get Started Today
          </button>
        </motion.section>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default About;