import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderOne from "../assets/slider_one.jpg";
import sliderTwo from "../assets/slider_two.jpg";
import sliderThree from "../assets/slider_three.jpg";
import sliderFour from "../assets/slider_four.jpg";

const Hero = () => {
  const slides = [
    {
      image: sliderOne,
      title: "Discover Possibilities",
      subtitle: "Innovative web & mobile solutions for your vision.",
    },
    {
      image: sliderTwo,
      title: "Connect Ideas",
      subtitle: "Bridge your goals with powerful technology.",
    },
    // {
    //   image: sliderThree,
    //   title: "Elevate Experiences",
    //   subtitle: "Deliver seamless digital journeys that matter.",
    // },
    {
      image: sliderThree,
      title: "Build the Future",
      subtitle: "We craft tomorrow’s software today.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      4000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slides.length]);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section
      id="home"
      className="h-screen w-full relative group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div
          className="w-full h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <div
                style={{ backgroundImage: `url(${slide.image})` }}
                className="w-full h-full bg-center bg-cover"
              ></div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center text-left text-white p-8 md:p-16 lg:p-24 z-10">
        <div className="max-w-xl">
          <h1
            className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {slides[currentIndex].title}
          </h1>
          <p
            className="mt-4 text-lg sm:text-xl md:text-2xl text-white-100"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {slides[currentIndex].subtitle}
          </p>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
        <ChevronLeft onClick={goToPrev} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20">
        <ChevronRight onClick={goToNext} size={30} />
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === slideIndex ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
