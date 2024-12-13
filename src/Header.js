import React from "react";
import logo from './img/web logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-12">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation (optional, if needed later) */}
        {/* Uncomment this for a navbar */}
        {/* <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
