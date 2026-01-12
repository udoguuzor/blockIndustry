import React from "react"

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our company, our mission, and the team behind our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, we have been dedicated to providing exceptional services in the construction industry.
              Our team of experienced professionals is committed to delivering high-quality results that exceed expectations.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in building not just structures, but lasting relationships with our clients.
              Our values of integrity, innovation, and excellence guide everything we do.
            </p>
            <p className="text-gray-700">
              From residential projects to large-scale commercial developments, we handle every job with precision and care.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover-lift animate-slideInRight">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer">
                <span className="text-orange-500 mr-2 hover:scale-110 transition-transform duration-200">✓</span>
                <span className="text-gray-700">Experienced and skilled team</span>
              </li>
              <li className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer">
                <span className="text-orange-500 mr-2 hover:scale-110 transition-transform duration-200">✓</span>
                <span className="text-gray-700">Quality materials and craftsmanship</span>
              </li>
              <li className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer">
                <span className="text-orange-500 mr-2 hover:scale-110 transition-transform duration-200">✓</span>
                <span className="text-gray-700">Timely project completion</span>
              </li>
              <li className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer">
                <span className="text-orange-500 mr-2 hover:scale-110 transition-transform duration-200">✓</span>
                <span className="text-gray-700">Competitive pricing</span>
              </li>
              <li className="flex items-start hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer">
                <span className="text-orange-500 mr-2 hover:scale-110 transition-transform duration-200">✓</span>
                <span className="text-gray-700">Excellent customer service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            To create exceptional spaces that inspire and endure. We strive to be the premier construction partner,
            combining traditional craftsmanship with modern innovation to bring our clients' visions to life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About