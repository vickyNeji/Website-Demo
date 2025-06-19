/* --- src/components/BlogPage.js --- */
import React from "react";

const BlogPage = ({ navigateTo }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of AI in Modern Web Development",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      snippet:
        "Artificial Intelligence is no longer a futuristic concept but a present-day reality transforming the web development landscape. From automated coding to intelligent chatbots, AI is enhancing efficiency and user experiences...",
      author: "Jane Doe",
      date: "June 18, 2025",
    },
    {
      id: 2,
      title: "Cross-Platform vs. Native: Choosing the Right App Strategy",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      snippet:
        "The debate between cross-platform and native app development continues. While native apps offer peak performance, cross-platform frameworks like React Native and Flutter promise cost-efficiency and faster time-to-market...",
      author: "John Smith",
      date: "June 15, 2025",
    },
    {
      id: 3,
      title: "Mastering State Management in Large-Scale React Applications",
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      snippet:
        "As React applications grow, managing state becomes increasingly complex. This article explores advanced state management strategies beyond useState and useContext, diving into libraries like Redux Toolkit and Zustand...",
      author: "Alex Johnson",
      date: "June 10, 2025",
    },
    {
      id: 4,
      title: "The Importance of UX/UI in Driving Customer Engagement",
      image:
        "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      snippet:
        "A beautiful interface is just the beginning. True customer engagement stems from a seamless and intuitive user experience (UX). We explore the key principles of effective UX/UI design and their impact on business success...",
      author: "Emily White",
      date: "June 5, 2025",
    },
  ];

  return (
    <div className="pt-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Tech & Innovation <span className="text-indigo-400">Blog</span>
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Insights from our team on the latest in web, mobile, and product
          development.
        </p>

        <div className="space-y-16 max-w-3xl mx-auto">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                className="h-40 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-8">
                <h2 className="block text-2xl leading-tight font-bold text-white hover:underline cursor-pointer">
                  {post.title}
                </h2>
                <div className="mt-2 uppercase tracking-wide text-sm text-indigo-400 font-semibold">
                  {post.author} • {post.date}
                </div>
                <p className="mt-4 text-gray-400">{post.snippet}</p>
                <div className="mt-6">
                  <button className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
