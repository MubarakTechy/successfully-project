
import React from 'react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8 px-6 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-[#CF1F1F]">MK PUNK</h1>
          <p className="text-sm text-gray-400">
            Specialized in EdTech School Management Systems
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-gray-300">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF1F1F]">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF1F1F]">
            <FaGithub size={22} />
          </a>
          <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF1F1F]">
            <FaGlobe size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}. Designed & Developed by <span className="text-[#CF1F1F]">Mk PUNK</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
