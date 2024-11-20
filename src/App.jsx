import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Help from './pages/Help';
import Experience from './pages/Experience';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Students from './pages/Students';
import QandA from './pages/QandA';
import Logout from './pages/Logout';
import Mentor from './pages/Mentors';
import NewCourses from './pages/NewCourses';
import StudentDash from './pages/StudentDash';
import StudentChat from './pages/StudentChat';
import Progress from './pages/Progress';
import Relaxation from './pages/Relaxation';
import Completed from './pages/Completed';
import StudentSettings from './pages/StudentSettings';


const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/help" element={<Help />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/admin-iquiries" element={<QandA />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mentors" element={<Mentor/>} />
        <Route path="/new-courses" element={<NewCourses/>}/>
        <Route path="/student-dashboard" element={<StudentDash/>}/>
        <Route path="/student-chat" element={<StudentChat/>}/>
        <Route path="/progress-courses" element={<Progress/>}/>
        <Route path="/completed-courses" element={<Completed/>}/>
        <Route path="/gamming" element={<Relaxation/>}/>
        <Route path="/settings" element={<StudentSettings/>}/>
      </Routes>

    </div>
  </Router>
);

export default App;
