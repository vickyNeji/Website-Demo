import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('https://placehold.co/1920x1080/111827/FFFFFF?text=.')",
      }}
    >
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
          We Build{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Digital Experiences
          </span>{" "}
          That Drive Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          From stunning websites to powerful mobile apps, our team of experts
          brings your ideas to life with cutting-edge technology and
          pixel-perfect design.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
