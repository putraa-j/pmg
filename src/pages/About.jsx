import React from 'react';
import Navbar from '../components/Navbar';  // Pastikan Anda mengimpor Navbar
import Footer from '../components/Footer';  // Pastikan Anda mengimpor Footer

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 flex-grow">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left Section: Profile Picture and Introduction */}
          <div className="md:w-1/3">
            <img
              src="/assets/me.png"  // Path relatif ke folder public
              alt="Profile"
              className="rounded-full shadow-lg mb-6 md:mb-0 mx-auto w-48 h-48 object-cover"
            />
          </div>

          {/* Right Section: About Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-xl text-gray-300 mb-6">
              Hello, my name is M. Putra Pamungkas, and I am a passionate frontend developer who loves to create innovative and efficient solutions.
              I specialize in full-stack development, with a keen interest in building scalable and user-friendly applications.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
