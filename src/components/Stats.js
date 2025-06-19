import React from "react";
import { Briefcase, Award, PackageCheck, Heart } from "lucide-react";

const Stats = () => {
  const stats = [
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
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <p className="text-4xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-lg text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
