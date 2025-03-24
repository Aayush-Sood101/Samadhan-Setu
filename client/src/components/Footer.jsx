import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#112d4e] text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Samadhan Setu</h3>
            <p className="text-gray-300">Making campus maintenance simple and efficient</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-[#00cfc8] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#00cfc8] transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-[#00cfc8] transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Samadhan Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;