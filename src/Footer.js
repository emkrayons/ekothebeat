import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-18 ">
      <div className="container mx-auto text-center">
      <div className='mb-5 pt-20'>FOLLOW EKO THE BEAT ON</div>
        <div className="flex justify-center space-x-6 mb-4 ">
            
          {/* Social Media Links */}
          <a
            href="https://www.instagram.com/ekothebeat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/ekothebeat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://web.facebook.com/ekothebeat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@ekothebeat53"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@ekothebeat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition duration-300"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
        <p className="text-sm pb-20">
          © {new Date().getFullYear()} Bema Music. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
