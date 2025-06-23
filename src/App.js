import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import BlogPage from "./components/BlogPage";
import DevelopmentProcess from "./components/DevelopmentProcess";
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateTo = (page, sectionId) => {
    if (page === "home") {
      setCurrentPage("home");
      // Use a timeout to ensure the home page is rendered before scrolling
      setTimeout(() => {
        if (sectionId) {
          scrollToSection(sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans antialiased">
      {currentPage === "home" && (
        <Header scrolled={scrolled} navigateTo={navigateTo} />
      )}
      {currentPage === "home" ? (
        <main>
          <Hero scrollToSection={scrollToSection} />
          <Stats />
          <Projects />
          <Services />
          <AboutUs />
          <Testimonials />
          <Contact />
        </main>
      ) : (
        <BlogPage navigateTo={navigateTo} />
      )}
      <Footer scrollToSection={(id) => navigateTo("home", id)} />
    </div>
  );
}

export default App;
