import React from "react";

const DevelopmentProcess = () => {
  const processSteps = [
    {
      title: "Research",
      description:
        "Finding the optimal technologies and other development solutions suitable for your product.",
    },
    {
      title: "Back-end",
      description:
        "Creating the engine that runs your product using up-to-date, tailored solutions.",
    },
    {
      title: "Front-end",
      description:
        "Building pixel-perfect screens based on a design system with care of functionality and visual quality.",
    },
    {
      title: "QA & Testing",
      description:
        "Thorough on device and stress testing. Making the product lightweight and fast.",
    },
    {
      title: "Maintenance & Support",
      description:
        "After finalising your product, we provide necessary support and maintenance services.",
    },
  ];

  return (
    <section id="development-process" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our development process
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our process involves the essential steps, is easy to understand and
            is friendly to our customers. Each step can be individually skipped
            depending on your needs.
          </p>
        </div>

        <div className="relative">
          {/* The horizontal line for desktop */}
          <div
            className="hidden md:block absolute top-5 left-0 w-full h-px bg-yellow-600/30"
            aria-hidden="true"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-16 md:gap-y-0 md:gap-x-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Timeline Circle */}
                <div className="relative w-10 h-10 rounded-full bg-gray-800 border-2 border-yellow-600 flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
