// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { CheckCircle, Tool, User, Star, Clock } from 'lucide-react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const courseData = {
//   'computer-graphics': {
//     title: 'Computer Graphics',
//     duration: '4 weeks',
//     facilitator: 'Jane Doe',
//     description: 'Master digital design principles and industry-standard software.',
//     outcomes: [
//       'Adobe Creative Suite mastery',
//       '3D modeling fundamentals',
//       'Digital design skills'
//     ],
//     tools: ['Adobe Illustrator', 'Photoshop', 'Blender'],
//     image: 'https://example.com/computer-graphics.jpg'
//   },
//   'computer-components-troubleshooting': {
//     title: 'Computer Components & Troubleshooting',
//     duration: '5 weeks',
//     facilitator: 'John Smith',
//     description: 'Understand hardware components and solve common PC issues.',
//     outcomes: [
//       'Hardware repair skills',
//       'System diagnostics',
//       'Regular maintenance techniques'
//     ],
//     tools: ['Screwdrivers', 'Diagnostic software', 'Multimeter'],
//     image: 'https://example.com/computer-components.jpg'
//   },
//   // Additional course data...
// };

// const CourseDetails = () => {
//   const { courseId } = useParams();
//   const course = courseData[courseId];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="order-2 md:order-1"
//           >
//             <img src={course.image} alt={course.title} className="rounded-xl shadow-lg object-cover" />
//           </motion.div>

//           {/* Course Info Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="order-1 md:order-2 space-y-6"
//           >
//             <h1 className="text-4xl font-bold text-gray-900">{course.title}</h1>
//             <div className="flex items-center space-x-4">
//               <Clock className="w-5 h-5 text-blue-600" />
//               <span className="text-gray-700 font-medium">{course.duration}</span>
//               <User className="w-5 h-5 text-blue-600" />
//               <span className="text-gray-700 font-medium">{course.facilitator}</span>
//             </div>
//             <p className="text-gray-700 leading-relaxed">{course.description}</p>

//             {/* Outcomes */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">What You Will Gain</h2>
//               <ul className="mt-3 space-y-2">
//                 {course.outcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-center text-gray-600">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                     {outcome}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Tools */}
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800">Tools You Will Need</h2>
//               <ul className="mt-3 space-y-2">
//                 {course.tools.map((tool, index) => (
//                   <li key={index} className="flex items-center text-gray-600">
//                     <Tool className="w-5 h-5 text-blue-500 mr-2" />
//                     {tool}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Call to Action */}
//             <Link
//               to="/register"
//               className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full 
//                 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 gap-2 group"
//             >
//               Enroll Now
//               <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
//                 <Star className="w-5 h-5 text-white" />
//               </motion.div>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CourseDetails;
