import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaPhone } from 'react-icons/fa'; // Mengimpor ikon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);  // Referensi untuk menu dropdown
  const hamburgerRef = useRef(null);  // Referensi untuk tombol hamburger

  // Toggle function for hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);  // Menutup menu jika klik di luar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-teal-400 hover:text-teal-300 transition duration-300">
            Pamungkas
          </Link>
        </div>

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-teal-400 hover:text-teal-300 focus:outline-none"
            ref={hamburgerRef}  // Menambahkan ref pada tombol hamburger
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Visible on larger screens) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/Home" className="hover:text-teal-300 transition duration-300">
              <FaHome className="w-6 h-6 inline-block" />
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-teal-300 transition duration-300">
              <FaUser className="w-6 h-6 inline-block" />
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-teal-300 transition duration-300">
              <FaProjectDiagram className="w-6 h-6 inline-block" />
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-teal-300 transition duration-300">
              <FaPhone className="w-6 h-6 inline-block" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu (Visible on small screens when hamburger is clicked) */}
      {isOpen && (
        <div
          ref={menuRef}  // Menambahkan ref pada dropdown menu
          className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4 text-center"
        >
          <ul>
            <li>
              <Link
                to="/Home"
                className="block hover:text-teal-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="w-6 h-6 inline-block" />
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block hover:text-teal-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="w-6 h-6 inline-block" />
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                className="block hover:text-teal-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaProjectDiagram className="w-6 h-6 inline-block" />
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block hover:text-teal-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaPhone className="w-6 h-6 inline-block" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
