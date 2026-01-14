import React from "react"

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen w-full bg-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of construction services to meet all your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Residential Construction</h3>
            <p className="text-gray-700">
              From custom homes to renovations, we build dream homes with attention to detail and quality.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn ani-delay-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Commercial Construction</h3>
            <p className="text-gray-700">
              We handle office buildings, retail spaces, and industrial facilities with expertise and efficiency.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn ani-delay-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Renovation & Remodeling</h3>
            <p className="text-gray-700">
              Transform your existing space with our renovation services, tailored to your vision and budget.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn ani-delay-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Sales Of Cars,Spares Parts, and batteries</h3>
            <p className="text-gray-700">
              Our experienced marketting department managers ensure your cars, spare parts, and batteries are sold at competitive prices.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn ani-delay-400">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-orange-500 transition-colors duration-300">Consulting</h3>
            <p className="text-gray-700">
              Get expert advice on construction planning, design, and feasibility studies.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover-lift animate-bounceIn ani-delay-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Maintenance</h3>
            <p className="text-gray-700">
              Keep your property in top condition with our ongoing maintenance and repair services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services