import React from 'react'
import { Link } from 'react-router-dom';

const Footer = ({setactive}) => {
  const FooterLink = ({ to, label }) => (
    <Link to={to} className="hover:text-white transition duration-200">
      {label}
    </Link>
  );

  return (
    <footer className="w-full bg-black text-white py-8 px-5 md:px-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h1 className="text-2xl font-bold tracking-wide">Impact Hub</h1>
          <p className="text-gray-400 text-sm mt-2">Connecting you to meaningful actions and opportunities.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-5 md:space-x-8 text-gray-300 text-sm">
          <FooterLink to="/" label="Home" />
          <FooterLink to="/content-library" label="Content Library" />
          <FooterLink to="/find-passion" label="Find Passion" />
          <FooterLink to="/action-hub" label="Action Hub" />
          <FooterLink to="/interactive-map" label="Interactive Map" />
          <FooterLink to="/chat" label="Community Chat" />
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs mt-5 md:mt-0 text-center">
          © {new Date().getFullYear()} Impact Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
