import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              Adithya Sasi
            </a>
          </div>

          <div className="hidden md:flex space-x-8 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-4 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    : 'text-gray-100 hover:text-white'
                }`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;