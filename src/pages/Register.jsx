import React, { useState } from 'react';
import {
  FaUser,  FaEnvelope,  FaLock,  FaHome,  FaEye,  FaEyeSlash,  FaPhoneAlt, FaCalendarDay} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: '+250',  // Default value
    phoneNumber: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return; // Prevent form submission
    }
    console.log('Form submitted:', formData);
  };
  

  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-800 hover:text-blue-600"
        >
          <FaHome className="text-2xl" />
          <span className="hidden sm:inline">Home</span>
        </button>
      </div>
      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mt-5"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-2/4 p-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-blue-950 mb-2">Create Account</h2>
              <p className="text-gray-600">Join IgaThrive and start your learning journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Full Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Email Address"
                  required
                />
              </div>
{/* Country Code and Phone Number Section */}
<div className="relative flex items-center space-x-2 w-full">
  {/* Country Code Selector */}
  <div className="relative w-1/3">
    <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-300">
     
      {/* Country Code Select */}
      <select
        name="countryCode"
        value={formData.countryCode || '+250'}
        onChange={handleChange}
        className="w-full pl-2 pr-4 py-3 appearance-none text-center text-gray-400 focus:outline-none rounded-r-lg"
        required
      >
        <option value="+250">+250 (RW)</option>
        <option value="+1">+1 (USA)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+91">+91 (India)</option>
        {/* Add more country codes as needed */}
      </select>
    </div>
  </div>

  {/* Phone Number Input */}
  <div className="relative w-2/3">
    <input
      type="text"
      name="phoneNumber"
      value={formData.phoneNumber || ''}
      onChange={handleChange}
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
      placeholder="780 162 164"
      required
    />
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FaPhoneAlt className="text-gray-400" />
    </div>
  </div>
</div>

     {/* Birthday date Input */}
     <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center  pointer-events-none">
                  <FaCalendarDay className="text-gray-400" />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-gray-400 duration-300"
                  placeholder="birthday date"
                  required
                />
</div>
              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Create Account
              </motion.button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?{' '}
                              <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  Login here
                </button>
        
            </p>
          </div>
          

          {/* Welcome Section */}
          <div className="hidden md:block w-3/5 bg-gradient-to-br from-blue-950 to-blue-500 text-white p-12">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Welcome to IgaThrive!</h2>
              <p className="text-lg mb-8">
                Unlock your potential with our comprehensive courses and expert guidance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Access to premium courses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Professional certification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Expert instructors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Lifetime access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;