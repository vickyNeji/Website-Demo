import React from "react";
import { Code, AppWindow, Palette, Megaphone } from "lucide-react";

const Services = () => {
  const services = [

    {

      title: "Web<br />Development",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      description:
        "The outputs of our web development service & agile web development process together transcend every aspect of quality required to deliver high-performing websites.",
    },
    {

      title: "Mobile<br />Development",
      image: "https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg",
      description:
        "We offer a full cycle of application design, integration, and management services. Whether it is a consumer-oriented app or a transformative enterprise-class solution.",
    },
    {

      title: "Product<br />Design",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      description:
        "We focus on the appearance, usability, and accessibility of your product which is more important than ever, especially in an increasingly competitive market.",
    },
    {

      title: "Digital<br />Marketing",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description:
        "We developed an approach that addresses your top leadership concerns, delivering measurable business results, leading to ROI justification.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We offer cutting-edge solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
  className="bg-gray-900 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 flex flex-col justify-between h-full"
            >

              {/* Service Image */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              {/* Icon */}
              {service.icon}
              {/* Title and Description */}
              <h3
                className="text-3xl font-bold text-white mb-4"
                dangerouslySetInnerHTML={{ __html: service.title }}
              ></h3>
              <p className="h-20 text-gray-400 font-bold text-sm mb-10 px-6">{service.description}</p>
              <div className="flex justify-center">

                <button
                  type="submit"
                  className="border-2 border-blue-900  text-white font-bold py-3 px-8 mb-10 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  Know More
                </button>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
