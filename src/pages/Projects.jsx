import React from 'react';
import Footer from '../components/Footer';  // Pastikan Anda sudah mengimpor komponen Footer
import Navbar from '../components/Navbar'; // Pastikan Anda sudah mengimpor komponen Navbar

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      link: 'https://one-step-store1.et.r.appspot.com/',
      imgSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      link: 'https://github.com',
      imgSrc: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      link: 'https://github.com',
      imgSrc: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-6 shadow-lg min-h-screen flex flex-col">
      {/* Navbar - Sticky */}
      <div className="sticky top-0 bg-gray-900 z-10">
        <Navbar />
      </div>

      <div className="container mx-auto px-6 py-12 flex-grow">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-gray-800"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-400 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
