import React from "react";

import companyLogo from '../assets/white_logo.png';

const Footer = ({ scrollToSection }) => {
  return (
    <footer
      id="blog"
      className="bg-gray-800 border-t border-gray-700 pt-16 pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
           <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
 
  
  <img
      src={companyLogo}
    alt="Appnitive Technologies Logo"
      className="h-12 w-auto max-w-[100px] object-contain"
  />



 
</h3>
            <p className="text-gray-400">
              Appnitive Technologies is a growing software development and digital marketing agency dedicated to empowering businesses and end-users. We simplify complex processes with our innovative ideas, latest technologies — including cloud computing, AI/ML, modern web and mobile frameworks (React, Kotlin, Flutter), and advanced digital marketing tools — and a strong focus on quality and speed.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("portfolio");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Terms and Condition
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                 Project Cancellation
                </a>
              </li>
               <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="text-gray-400 hover:text-indigo-400"
                >
                 Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Featured Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Mobile Development
                </a>
              </li>
               <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                 Product Design
                </a>
              </li>
               <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Digital Marketing
                </a>
              </li>
               <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Other Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex space-x-4">
               <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                 Office Address
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                 F-13, Third Floor, Block F, Sector 58, Noida, Uttar Pradesh 201301
                </a>
              </li>
               <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                Email : technologiesappnitive@gmail.com
                </a>
              </li>
               <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Phone:+91 7906053913 , 8979454370
                </a>
              </li>
              
            </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/appnitivetechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.148-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577269206666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
        <div className="mt-8 font-bold pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; 2022–{new Date().getFullYear()} Appnitive Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
