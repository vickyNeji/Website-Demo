import React from "react";

import companyLogo from '../assets/white_logo.png';


const Header = ({ scrolled, navigateTo }) => {
  const navLinks = [
    { id: "portfolio", name: "Portfolio", page: "home" },
    { id: "services", name: "Services", page: "home" },
    { id: "about", name: "About Us", page: "home" },
    // { id: "blog", name: "Blog", page: "blog" },
    { id: "contact", name: "Contact Us", page: "home" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
         <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    navigateTo('home');
  }}
  className="flex items-center space-x-2 cursor-pointer"
>
  {/* Existing icon */}
  

  {/* ✅ Added image logo */}
  <img
  src={companyLogo}
    alt="Appnitive Technologies Logo"
      className="h-12 w-auto max-w-[100px] object-contain"
  />

  {/* Text */}
  {/* <span className="text-white font-bold">Appnitive Technologies</span> */}
</a>

        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(link.page, link.id);
              }}
              className="text-white-300 hover:text-white transition duration-300 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
