import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QuantumLeap AI",
      category: "Web App",
      image:
        "https://images.pexels.com/photos/6771426/pexels-photo-6771426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "An advanced data analytics platform that uses machine learning to provide actionable business insights. Features real-time data visualization and predictive modeling.",
      techStack: ["React", "Node.js", "Python", "D3.js", "AWS"],
    },
    {
      id: 2,
      title: "Nova Wallet",
      category: "Mobile App",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A secure and user-friendly crypto wallet for managing digital assets on the go. Integrated with multiple blockchains and DeFi protocols.",
      techStack: ["React Native", "Firebase", "Solidity", "GraphQL"],
    },
    {
      id: 3,
      title: "Stellar E-commerce",
      category: "Website",
      image:
        "https://images.pexels.com/photos/6331230/pexels-photo-6331230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A scalable e-commerce solution with a custom CMS, personalized recommendations, and a seamless checkout experience, boosting conversion rates by 30%.",
      techStack: ["Vue.js", "Shopify API", "Node.js", "PostgreSQL"],
    },
    {
      id: 4,
      title: "ConnectSphere",
      category: "Mobile App",
      image:
        "https://images.pexels.com/photos/4549409/pexels-photo-4549409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A social networking app designed to connect professionals based on skills and interests. Features include event management, mentorship matching, and group discussions.",
      techStack: ["Flutter", "Firebase", "Google Cloud", "Algolia"],
    },
    {
      id: 5,
      title: "DataViz Pro",
      category: "Web App",
      image:
        "https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "An interactive data visualization tool that allows users to create stunning charts and dashboards from complex datasets with a simple drag-and-drop interface.",
      techStack: ["Svelte", "TypeScript", "MongoDB", "Chart.js"],
    },
    {
      id: 6,
      title: "Horizon Travel",
      category: "Website",
      image:
        "https://images.pexels.com/photos/5794250/pexels-photo-5794250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "A travel booking website featuring immersive destination guides, an intuitive booking engine, and personalized itinerary planning for global travelers.",
      techStack: ["Gatsby", "Contentful", "GraphQL", "Netlify"],
    },
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
