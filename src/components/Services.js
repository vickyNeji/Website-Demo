import React from "react";
import { Code, AppWindow, Palette, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 mb-4 text-indigo-400" />,
      title: "Web Development",
      description:
        "Crafting responsive, high-performance websites with modern frameworks and clean code.",
    },
    {
      icon: <AppWindow className="w-12 h-12 mb-4 text-purple-400" />,
      title: "Mobile Development",
      description:
        "Building native and cross-platform mobile apps for iOS and Android that users love.",
    },
    {
      icon: <Palette className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Product Design",
      description:
        "Creating intuitive and beautiful UI/UX designs that solve real user problems.",
    },
    {
      icon: <Megaphone className="w-12 h-12 mb-4 text-pink-400" />,
      title: "Digital Marketing",
      description:
        "Boosting your online presence with data-driven SEO, SEM, and content strategies.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
