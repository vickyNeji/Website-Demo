import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Award, PackageCheck, Heart } from "lucide-react";

// StatCounter component without animated value
const StatCounter = ({ stat }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
    >

      <h3
        className="text-3xl font-bold text-white mb-4"
        
      ></h3>

     
      {/* Image */}
      {stat.image && (
        <img
          src={stat.image}
          alt={stat.label}
          className="w-13 h-12 object-contain rounded-full mx-auto mb-4"
        />
      )}
      
       {stat.title && (
        <h3 className="text-3xl font-bold text-white mb-4">{stat.title}</h3>
      )}


      {/* Icon */}
      {stat.icon && (
        <div className="flex justify-center mb-4">{stat.icon}</div>
      )}

      {/* Label */}
      <p className="h-35 text-gray-400 font-bold text-sm mb-10 px-6">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    {
      title: "WordPress",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      label: "We designed high-performance custom websites that are appealing, attractive and put forth the message just as the way you want it.",
    },
    {
     title: "PHP frameworks",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      label:
        "Using PHP frameworks like Laravel and CodeIgniter, we efficiently build dynamic websites. Laravel offers elegant syntax and powerful tools, while CodeIgniter ensures lightweight, fast development.",
    },
    {
      title: "Shopify",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      label: "We craft your dream e-commerce platform on Shopify with seamless navigation, engaging design, and customized experiences for ultimate E-commerce growth.",
    },
    {
      title: "PWA",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      label: "We create Progressive Web Apps using modern web capabilities to deliver an app-like user experience in browser.",
    },
    {
      title: "HTML5 + CSS3 + JS",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      label: "We use HTML5, CSS3 and JS for pixel-perfect and search engine friendly projects.",
    },
     {
      title: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      label: "We use React.js to build design system based, dynamic and modern front-end web apps.",
    },
     {
      title: "Node",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      label: "Lightweight and efficient Javascript backends for data intensive, real-time, flexible apps.",
    },
     {
      title: "React Native",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      label: "React Native allows us to build and deploy multiplatform, native apps for Android and iOS.",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Technologies we work with
          </h2>
          <h3 className="text-base md:text-base font-medium text-white">
  We build the back-end and front-end solutions using high and
  <br />
  up-to-date technologies, that are reliable, and scalable.
</h3>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
          {statsData.map((stat, index) => (
            <StatCounter key={index} stat={stat} />
          ))}
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
            Our development process
          </h2>
           <h3 className="text-base md:text-base font-medium text-white text-center mb-20">
  Our process involves the essential steps, is easy to understand and<br />
is friendly to our customers. Each step can be individually skipped depending on your needs.
  
  
</h3>
      </div>
    </section>
  );
};

export default Stats;
