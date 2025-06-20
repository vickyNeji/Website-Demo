import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Award, PackageCheck, Heart } from "lucide-react";

// Custom hook for the count-up animation
const useCountUp = (end, duration, start) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60; // Animate at 60 frames per second
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    // Only start the animation if the start prop is true
    if (!start) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      // Use a simple ease-out progress calculation
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      const currentCount = Math.round(end * progress);

      if (currentCount >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(counter);
  }, [start, end, duration, frameRate, totalFrames]);

  return count;
};

// A self-contained counter component for each stat item
const StatCounter = ({ stat }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  // Extract the number from the string (e.g., "350+" becomes 350)
  const endValue = parseInt(stat.value.replace(/\D/g, ""), 10);
  const count = useCountUp(endValue, 1000, startAnimation); // 2-second duration

  useEffect(() => {
    // Set up the Intersection Observer to watch for the component entering the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(ref.current); // Stop observing once it's visible to animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex justify-center mb-4">{stat.icon}</div>
      <p className="text-4xl font-extrabold text-white mb-2">
        {count}
        {stat.value.includes("+") ? "+" : ""}
      </p>
      <p className="text-lg text-gray-400">{stat.label}</p>
    </div>
  );
};

// The main Stats component
const Stats = () => {
  const statsData = [
    {
      icon: <PackageCheck className="w-10 h-10 text-indigo-400" />,
      value: "350+",
      label: "Projects Delivered",
    },
    {
      icon: <Award className="w-10 h-10 text-purple-400" />,
      value: "5+",
      label: "Years of Experience",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-400" />,
      value: "50+",
      label: "Tech Professionals",
    },
    {
      icon: <Heart className="w-10 h-10 text-pink-400" />,
      value: "500+",
      label: "Happy Clients",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Years of Experience that Helps
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Accelerate Your Business
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <StatCounter key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
