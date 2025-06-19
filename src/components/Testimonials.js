import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      company: "QuantumLeap CEO",
      review:
        "DevAgency transformed our vision into a stunning reality. Their attention to detail and technical expertise are second to none.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael B.",
      company: "Nova Wallet Founder",
      review:
        "The mobile app they delivered exceeded all our expectations. It's fast, beautiful, and our users absolutely love it.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Jessica C.",
      company: "Stellar Inc. Manager",
      review:
        "From start to finish, the process was seamless. Their team is professional, responsive, and incredibly talented. I highly recommend them.",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "David R.",
      company: "ConnectSphere Lead",
      review:
        "Working with DevAgency was a game-changer for us. Their strategic insights helped us refine our product and go-to-market strategy.",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Emily K.",
      company: "Horizon Travel PM",
      review:
        "An incredible team that delivers on time and on budget. Their communication is crystal clear and they are always ready to go the extra mile.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleDesktop = 3;
  const maxIndexDesktop = testimonials.length - numVisibleDesktop;

  const maxIndexMobile = testimonials.length - 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (window.innerWidth >= 768) {
      if (currentIndex < maxIndexDesktop) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (currentIndex < maxIndexMobile) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        {/* Desktop Carousel */}
        <div className="relative hidden md:flex items-center justify-center">
          <button
            onClick={handlePrev}
            className={`absolute -left-4 lg:-left-10 z-10 bg-gray-700 hover:bg-indigo-500 p-3 rounded-full transition-colors duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex"
              style={{
                width: `${100 * (testimonials.length / numVisibleDesktop)}%`,
                transform: `translateX(-${
                  currentIndex * (100 / testimonials.length)
                }%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{ width: `${100 / testimonials.length}%` }}
                  className="flex-shrink-0 px-4"
                >
                  <div className="bg-gray-900 h-full p-10 rounded-lg shadow-lg text-center flex flex-col justify-center">
                    <p className="text-lg italic text-gray-300 mb-6 flex-grow">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-indigo-400"
                      />
                      <div>
                        <p className="font-bold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`absolute -right-4 lg:-right-10 z-10 bg-gray-700 hover:bg-indigo-500 p-3 rounded-full transition-colors duration-300 ${
              currentIndex === maxIndexDesktop
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Carousel */}
        <div className="relative md:hidden flex items-center justify-center">
          <button
            onClick={handlePrev}
            className={`absolute -left-2 z-10 bg-gray-700 hover:bg-indigo-500 p-2 rounded-full transition-colors duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-gray-900 h-full p-8 rounded-lg shadow-lg text-center flex flex-col justify-center">
                    <p className="text-base italic text-gray-300 mb-4 flex-grow">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 border-2 border-indigo-400"
                      />
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className={`absolute -right-2 z-10 bg-gray-700 hover:bg-indigo-500 p-2 rounded-full transition-colors duration-300 ${
              currentIndex === maxIndexMobile
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
