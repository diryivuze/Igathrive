import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Learn Professional IT Skills",
      description: "Transform your career with industry-relevant courses",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Expert-Led Training",
      description: "Learn from industry professionals with real-world experience",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials",
      image: "/api/placeholder/1200/600"
    }
  ];

  const courses = [
    {
      title: 'Computer Graphics',
      timeframe: '4 weeks',
      description: 'Master digital design principles and industry-standard software',
      skills: ['Adobe Creative Suite', '3D Modeling', 'Digital Design'],
      students: 234,
      rating: 4.8
    },
    {
      title: 'Internet Usage',
      timeframe: '3 weeks',
      description: 'Learn advanced internet navigation and online security practices',
      skills: ['Web Safety', 'Digital Literacy', 'Online Research'],
      students: 189,
      rating: 4.6
    },
    {
      title: 'Computer Components & Troubleshooting',
      timeframe: '5 weeks',
      description: 'Understand hardware components and solve common PC issues',
      skills: ['Hardware Repair', 'System Diagnostics', 'Maintenance'],
      students: 312,
      rating: 4.9
    },
    {
      title: 'MS Office & G Suite Usage',
      timeframe: '6 weeks',
      description: 'Master essential productivity tools for the modern workplace',
      skills: ['Document Processing', 'Data Analysis', 'Cloud Computing'],
      students: 456,
      rating: 4.7
    },
    {
      title: 'E-Banking',
      timeframe: '2 weeks',
      description: 'Navigate digital banking systems safely and efficiently',
      skills: ['Digital Transactions', 'Security Protocols', 'Mobile Banking'],
      students: 167,
      rating: 4.5
    },
    {
      title: 'Web Design & Development',
      timeframe: '8 weeks',
      description: 'Create modern, responsive websites from scratch',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      students: 523,
      rating: 4.9
    },
    {
      title: 'Professional Skills',
      timeframe: '4 weeks',
      description: 'Develop essential workplace and communication skills',
      skills: ['Communication', 'Leadership', 'Time Management'],
      students: 289,
      rating: 4.7
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    setIsVisible(true);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      {/* Hero Section with Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 
              ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold mb-4 text-center max-w-3xl transform transition-all duration-700 translate-y-0">
                {slide.title}
              </h1>
              <p className="text-xl mb-8 text-center max-w-2xl">
                {slide.description}
              </p>
              <Link
                to="/register"
                className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 
                  transform hover:scale-105 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Students', value: '2000+' },
              { label: 'Courses Offered', value: '7' },
              { label: 'Expert Instructors', value: '15+' },
              { label: 'Success Rate', value: '95%' }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
        <p className="text-gray-600 mb-8">Start your journey to professional excellence</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 
                hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.timeframe}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students} students enrolled
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-gray-700">Skills you'll gain:</p>
                  {course.skills.map((skill, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    to="/register"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                      transition-colors duration-300 text-center"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 
                      transition-colors duration-300 flex items-center gap-2 group"
                  >
                    Details
                    <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose IgaThrive?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of experience'
              },
              {
                title: 'Flexible Learning',
                description: 'Study at your own pace with lifetime access to course materials'
              },
              {
                title: 'Job-Ready Skills',
                description: 'Gain practical skills that employers are looking for'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;