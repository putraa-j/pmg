import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';  // Mengimpor ikon Instagram

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 shadow-lg">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Pamungkasss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/m-putra-pamungkas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/ppmungkss/"  // Ganti URL ke Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition duration-300"
          >
            <FaInstagram className="w-6 h-6" />  {/* Ganti ikon Twitter dengan Instagram */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
