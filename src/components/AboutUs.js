import React from "react";
import { Lightbulb, Users, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="w-8 h-8 mr-4 text-indigo-400" />,
      title: "Innovative Solutions",
      description:
        "We leverage the latest technologies to deliver forward-thinking products.",
    },
    {
      icon: <Users className="w-8 h-8 mr-4 text-indigo-400" />,
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you at every step.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 mr-4 text-indigo-400" />,
      title: "Results-Driven",
      description:
        "We focus on creating solutions that deliver measurable outcomes and ROI.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-400 mb-6">
              Pioneering Digital Innovation, Together
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Appnitive Technologies is more than just a development agency; we
              are your strategic partners in navigating the digital landscape.
              Our team of passionate designers, developers, and strategists is
              dedicated to transforming your ideas into impactful digital
              realities. We believe in collaboration, transparency, and a
              relentless pursuit of excellence. Our mission is to empower
              businesses like yours with cutting-edge technology and creative
              solutions that foster growth and create lasting value.
            </p>
            <div className="space-y-6">
              {coreValues.map((value) => (
                <div key={value.title} className="flex items-start">
                  {value.icon}
                  <div>
                    <h4 className="font-bold text-lg text-white">
                      {value.title}
                    </h4>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] md:h-[600px] min-h-full rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent md:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
