import React, { useState } from 'react';
import { 
  FaUser, 
  FaLock, 
  FaHome, 
  FaEye, 
  FaEyeSlash, 
  FaGoogle
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Add your actual login logic here
    }, 1500);
  };

  return (  
    <div className="bg-gradient-to-b from-gray-400 to-gray-300 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-5xl mx-auto mt-5">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Welcome Section */}
            <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-950 to-blue-400 text-white p-12 flex-col justify-center items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
                <p className="text-xl mb-8">"Empowering you to thrive with the skills of tomorrow."</p>
                <div className="space-y-4">
                  <p className="text-lg">✓ Access to all courses</p>
                  <p className="text-lg">✓ Track your progress</p>
                  <p className="text-lg">✓ Connect with experts</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -bottom-32 -left-32 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Login to IgaThrive</h2>
                <p className="text-gray-600 mt-2">Please enter your credentials to continue</p>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Input */}
                <div className="relative">
                  <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username or Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 relative"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Login'
                  )}
                </button>

                {/* Social Login */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid ">
                  {[
                    { icon: <FaGoogle />, label: 'Google' },
                  ].map((social, index) => (
                    <button
                      key={index}
                      type="button"
                      className="flex justify-center items-center py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    > 
                      {social.icon }
                       <p> oogle</p>
                    </button>
                  ))}
                </div>
              </form>

              {/* Register Link */}
              <p className="mt-8 text-center text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;