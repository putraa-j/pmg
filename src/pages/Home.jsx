import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-grow bg-gray-900 text-white py-6 shadow-lg text-white py-12">
        <div className="text-center px-6 md:px-12 max-w-3xl w-full">
          {/* Teks dengan animasi berkedip */}
          <h1 className="text-6xl font-bold text-teal-400 mb-6 leading-tight animate-blink">
            Hi, Welcome
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            I am a Frontend Developer with a passion for creating innovative digital solutions. Dive into my website and feel free to connect!
          </p>

          <div className="space-x-6 flex justify-center">
            {/* Contact Me Button */}
            <a
              href="/Contact"
              className="px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-500 rounded-lg shadow-xl hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
