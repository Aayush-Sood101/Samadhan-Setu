import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full bg-white shadow-md px-8 py-5 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''} z-50`}>
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#137dc5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span className="font-bold text-2xl text-[#112d4e]">SamadhanSetu</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-lg text-[#112d4e] font-medium hover:text-[#137dc5] transition-colors">Home</Link>
          <Link to="/about" className="text-lg text-[#112d4e] font-medium hover:text-[#137dc5] transition-colors">About</Link>
          <Link to="/contact" className="text-lg text-[#112d4e] font-medium hover:text-[#137dc5] transition-colors">Contact</Link>
          <Link to="/privacy" className="text-lg text-[#112d4e] font-medium hover:text-[#137dc5] transition-colors">Privacy Policy</Link>
          <Link to="/login" className="flex items-center bg-[#137dc5] hover:bg-[#0049B7] text-white font-medium text-lg py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
            Login
          </Link>
        </div>
      </nav>
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
