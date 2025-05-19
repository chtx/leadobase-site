import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import myLogo from '../assets/logo-tsp.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Industries', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  const handleGetStarted = () => {
    window.location.href = 'https://calendly.com/patrick-px/30min';
    setIsOpen(false); // Also close mobile menu if this is clicked from there
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center" onClick={(e) => {
                e.preventDefault();
                // Potentially scroll to top or handle as a home link
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <img
                  src={myLogo}
                  alt="Leadobase Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              {/* MODIFIED LINE BELOW */}
              <button
                onClick={handleGetStarted} // Changed this to use handleGetStarted
                className="bg-purple-600 text-white px-5 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile navigation button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 block px-3 py-2"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleGetStarted}
              className="bg-purple-600 text-white px-5 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors duration-200 w-full text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;