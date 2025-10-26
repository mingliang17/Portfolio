import React from 'react';
import { assetPath } from '../utils/assetPath.js';

const socialLinks = [
  { name: 'GitHub', icon: 'github.svg', href: 'https://github.com/yourusername' },
  { name: 'Twitter', icon: 'twitter.svg', href: 'https://twitter.com/yourusername' },
  { name: 'Instagram', icon: 'instagram.svg', href: 'https://instagram.com/yourusername' },
];

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-row justify-between items-center gap-5">
      {/* Terms & Privacy */}
      <div className="text-white-500 flex flex-wrap gap-2 text-sm">
        <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        <span>|</span>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
      </div>

      {/* Social Icons & Copyright */}
      <div className="flex flex-wrap items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-6 h-6"
          >
            <img
              src={assetPath(`/assets/${link.icon}`)}
              alt={link.name}
              className="w-full h-full object-contain"
            />
          </a>
        ))}

        <p className="text-white-500 text-sm mt-2 md:mt-0">
          © 2025 Ming Liang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
