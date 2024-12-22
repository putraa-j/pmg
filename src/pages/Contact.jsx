import React, { useState } from 'react';
import Navbar from '../components/Navbar';  // Pastikan Anda mengimpor Navbar
import Footer from '../components/Footer';  // Pastikan Anda mengimpor Footer

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi pengiriman form
    console.log('Form Submitted', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-900 text-white py-6 shadow-lg min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 bg-gray-900 z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 flex-grow">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">Contact Me</h2>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">Thank you for reaching out!</h3>
              <p className="text-lg text-gray-300">
                I will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
