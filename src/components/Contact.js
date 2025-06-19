import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const servicesOptions = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Email Marketing",
    "Web Design and Development",
    "Software Development",
    "App Development",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setFormStatus("Sending...");

    try {
      // Replace 'your_unique_id' with the actual ID from your Formspree dashboard
      const response = await fetch("https://formspree.io/f/mqablobo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Your message has been sent successfully!");
        form.reset();
        setTimeout(() => setFormStatus(""), 5000); // Clear status after 5 seconds
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          setFormStatus(
            responseData.errors.map((error) => error.message).join(", ")
          );
        } else {
          setFormStatus("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      setFormStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 mb-6">
              Have a project in mind? We'd love to hear about it. Fill out the
              form, and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-indigo-400" />
                <a
                  href="mailto:contact@devagency.com"
                  className="text-gray-300 hover:text-white"
                >
                  contact@devagency.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-indigo-400" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all md:col-span-2"
                />
              </div>
              <div className="mb-6">
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {servicesOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              ></textarea>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-sm text-indigo-300">{formStatus}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
