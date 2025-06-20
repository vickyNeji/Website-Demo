import React from "react";
import ShopEaseImage from "../assets/ShopEase.png";
import skillLink from "../assets/skill-link.png";
import tastyBytes from "../assets/tasty-bytes.png";
import learnX from "../assets/learnx.png";
import dreamHomes from "../assets/dreamhomes.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ShopEase",
      category: "Web App/Mobile",
      image: ShopEaseImage,
      description:
        "ShopEase is a modern e-commerce platform that brings users a curated online shopping experience. It focuses on fashion, accessories, electronics, and lifestyle goods with a personalized feed and engaging design.",
      techStack: ["React", "Node.js", "Python", "D3.js", "AWS"],
    },
    {
      id: 2,
      title: "SkillLink",
      category: "Web App/Mobile App",
      image: skillLink,
      description:
        "SkillLink is a sleek platform designed to connect skilled freelancers with businesses or individuals looking to hire. It streamlines the entire hiring journey—from job posting to communication and delivery.",
      techStack: ["React Native", "Firebase", "Solidity", "GraphQL"],
    },
    {
      id: 3,
      title: "Tasty Bites",
      category: "Wep App / Mobile App",
      image: tastyBytes,
      description:
        "TastyBites is a food ordering and dining management app designed specifically for restaurants. It allows customers to browse the digital menu, customize their orders, and book tables—all in one place. The app emphasizes user experience with high-quality food images, real-time availability, and seamless ordering.",
      techStack: ["Vue.js", "Shopify API", "Node.js", "PostgreSQL"],
    },
    {
      id: 4,
      title: "LearnX",
      category: "Web App /Mobile App",
      image: learnX,
      description:
        "LearnX is a modern e-learning platform designed to make online education accessible, engaging, and effective. It offers a rich catalog of curated video courses across various subjects, from academic content to skill-based learning. Each course includes structured modules, video lectures, downloadable resources, and interactive quizzes.",
      techStack: ["Flutter", "Firebase", "Google Cloud", "Algolia"],
    },
    // {
    //   id: 5,
    //   title: "Dream Homes",
    //   category: "Web App / Mobile App",
    //   image: dreamHomes,
    //   description:
    //     "DreamHomes is a real estate platform built to simplify the process of buying, renting, or selling properties. The site allows users to explore property listings with immersive visuals, powerful filters, and detailed descriptions.",
    //   techStack: ["Svelte", "TypeScript", "MongoDB", "Chart.js"],
    // },

    // {
    //   id: 6,
    //   title: "Horizon Travel",
    //   category: "Website",
    //   image:
    //     "https://images.pexels.com/photos/5794250/pexels-photo-5794250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   description:
    //     "A travel booking website featuring immersive destination guides, an intuitive booking engine, and personalized itinerary planning for global travelers.",
    //   techStack: ["Gatsby", "Contentful", "GraphQL", "Netlify"],
    // },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Our Featured Work
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16"
            >
              <div
                className={`text-left ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <p className="text-indigo-400 font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`relative h-[500px] md:h-[600px] min-h-full rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/10 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent ${
                    index % 2 === 0
                      ? "md:bg-gradient-to-r"
                      : "md:bg-gradient-to-l"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
