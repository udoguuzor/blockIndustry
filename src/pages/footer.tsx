import React from "react"


const Footer: React.FC = ()=>{

    return(
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Identity */}
                    <div className="animate-slideInLeft">
                        <h3 className="text-lg font-bold mb-4 hover:text-orange-300 transition-colors duration-300">About Brumarch Laboratories Nig. Ltd.</h3>
                        <p className="text-gray-300">We specialize in high-strength, machine-vibrated blocks, committed to building foundations that last longer, as well as sells of quality tyres, cars, and spare parts .</p>
                    </div>
                    {/* Product Catalog */}
                    <div className="animate-bounceIn">
                        <h3 className="text-lg font-bold mb-4 hover:text-orange-300 transition-colors duration-300">Product Catalog</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>6-inch hollow blocks</li>
                            <li>9-inch load-bearing blocks</li>
                            <li>Interlocking paving stones</li>
                        </ul>
                    </div>
                    {/* Contractor Hub */}
                    <div className="animate-bounceIn ani-delay-100">
                        <h3 className="text-lg font-bold mb-4 hover:text-orange-300 transition-colors duration-300">Contractor Hub</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Request a Bulk Quote</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Delivery Zone Info</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Quality Testing Certifications</a></li>
                        </ul>
                    </div>
                    {/* Contact & Location */}
                    <div className="animate-slideInRight">
                        <h3 className="text-lg font-bold mb-4 hover:text-orange-300 transition-colors duration-300">Contact & Location</h3>
                        <p className="text-gray-300 mb-2">Physical Yard Address: No 63, Dele Awelewa street Bucknor Estate, Oke-Afa, Lagos State</p>
                        <a href="https://wa.me/1234567890" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors mb-2">Contact via WhatsApp</a>
                        <p className="text-gray-300">Business Hours: Mon-Sat</p>
                    </div>
                </div>
                {/* Why Choose Us */}
                <div className="mt-12 border-t border-gray-700 pt-8 animate-fadeInUp">
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z"/>
                            </svg>
                            <span className="text-gray-300">High Mix Ratio</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 4a1 1 0 000 2h1.09c.28 0 .55.07.79.2l6.1 3.22c.37.2.59.57.59.98v6.6a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                            </svg>
                            <span className="text-gray-300">Fast Site Delivery</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="text-gray-300">NSC Certified</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}



export default Footer