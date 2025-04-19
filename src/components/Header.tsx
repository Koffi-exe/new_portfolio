import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-900 dark:from-blue-800 dark:to-indigo-950 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/40 dark:to-blue-950/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block text-blue-300 mt-2">Adithya Sasi</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Full Stack Developer, UI/UX Designer, AWS Cloud practitioner & Generative AI Enthusiast
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Koffi-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-sasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:adithyaasasi@gmail.com"
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center text-white hover:text-blue-300 transition-colors"
          >
            <span className="mr-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
