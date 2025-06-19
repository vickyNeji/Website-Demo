import React from "react";
import { Code } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer
      id="blog"
      className="bg-gray-800 border-t border-gray-700 pt-16 pb-8"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Code className="w-6 h-6 text-indigo-400" />
              <span>DevAgency</span>
            </h3>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
                  Home
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
                  Portfolio
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
                  Services
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
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.43 13,11.11V10.13H10.13V18.5H13V13.57C13,12.24 14.09,11.15 15.43,11.15C16.77,11.15 17.87,12.24 17.87,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,6 7.81,5.25 6.88,5.25C5.94,5.25 5.19,6 5.19,6.88C5.19,7.81 5.94,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2.04C6.5,2.04 2,6.53 2,12C2,17.47 6.5,21.96 12,21.96C17.5,21.96 22,17.47 22,12C22,6.53 17.5,2.04 12,2.04M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6.88C9.17,6.88 6.88,9.17 6.88,12C6.88,14.83 9.17,17.12 12,17.12C14.83,17.12 17.12,14.83 17.12,12C17.12,9.17 14.83,6.88 12,6.88M12,15.38C10.14,15.38 8.62,13.86 8.62,12C8.62,10.14 10.14,8.62 12,8.62C13.86,8.62 15.38,10.14 15.38,12C15.38,13.86 13.86,15.38 12,15.38M16.5,7.75A1.25,1.25 0 0,1 15.25,9A1.25,1.25 0 0,1 14,7.75A1.25,1.25 0 0,1 15.25,6.5A1.25,1.25 0 0,1 16.5,7.75Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} DevAgency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
