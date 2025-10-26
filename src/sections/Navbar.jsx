import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ mobile = false, onClick = () => {} }) => (
  <ul className={mobile ? "flex flex-col space-y-4" : "flex space-x-8"}>
    {navLinks.map((item) => (
      <li key={item.id}>
        <a 
          href={item.href} 
          className="text-neutral-400 hover:text-white transition-colors"
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Effect for body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 2. Effect for escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    
    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Adrian
          </a>
          <a className="text-anythingiwant-400">Test</a>

          {/* Desktop Navigation - always hidden on mobile */}
          <nav className="hidden md:block" >
            <NavItems />
          </nav>

          {/* Mobile menu button - always hidden on desktop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 z-60 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <img 
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} 
              alt="Menu" 
              className="w-6 h-6" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - only shows on mobile when toggled */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-16">
          <div className="p-6">
            <NavItems mobile onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;  