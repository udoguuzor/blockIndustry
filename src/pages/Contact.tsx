import React from "react"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen w-full bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for your construction needs. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slideInLeft">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-400 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-400 transition-colors duration-200"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-400 transition-colors duration-200"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 hover:scale-105 transition-all duration-200 hover-glow"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="animate-slideInRight">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-orange-500 mr-3">📍</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-700">123 Construction St, Build City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange-500 mr-3">📞</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-700">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange-500 mr-3">✉️</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-700">info@constructionco.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-orange-500 mr-3">🕒</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact