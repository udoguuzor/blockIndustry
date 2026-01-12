
import React from "react"
// Background image imported
import Image from "../assets/backgroundImage.webp"
import Remi from "../assets/banner-img.jpeg"
import block1 from "../assets/block.png"
import block2 from "../assets/block4.jpg"





const Home: React.FC = () => {
  return (
    <div>
      <section id="home"
      className="min-h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      {/* overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-3xl text-left">
          <h2 className="text-sm md:text-base text-orange-300 font-semibold tracking-wider mb-3 animate-fadeInUp ani-delay-100">
            BUILDING DREAMS FOR A BETTER FUTURE
          </h2>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp ani-delay-200">
            Building Dreams With Precision and Strength
          </h1>

          <p className="text-white/90 text-base md:text-lg mb-6 animate-fadeInUp ani-delay-300">
            Our commitment to craftsmanship, safety, and timely delivery makes us the construction partner you can trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:scale-105 transition-transform duration-200 animate-fadeInUp ani-delay-400">
              Get Started
            </button>

            <button className="bg-white text-orange-600 px-6 py-3 rounded-md shadow hover:scale-105 transition-transform duration-200 animate-fadeInUp ani-delay-450">
              Our Services
            </button>
          </div>
        </div>
      </div>
      
    </section>

    {/* Portfolio Section */}
    <section className="w-full h-[400px] bg-cover bg-center flex items-center relative animate-slideInLeft" style={{ backgroundImage: `url(${Remi})` }}>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full flex">
        <div className="w-[50%] flex justify-center items-center flex-col px-6 animate-bounceIn">
          <h1 className="font-bold text-[35px] md:text-[45px] text-orange-400 leading-tight mb-4 hover:text-orange-300 transition-colors duration-300">
            Explore Our Construction Portfolio
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] font-medium text-white leading-relaxed hover:text-gray-200 transition-colors duration-300">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla turpis integer dui sed posuere sem. Id molestie mi arcu gravida lorem potenti.
          </p>
        </div>
        <div className="w-[50%] h-[400px] animate-slideInRight">
          {/* Image is now background, so this div can be empty or used for overlay effects */}
        </div>
      </div>
    </section>
    <div className="w-full h-[300px] bg-gradient-to-r from-gray-100 to-gray-200 flex animate-fadeInUp">
      <div className="w-[50%] h-[300px] bg-white hover-lift">
        <img className="w-[100%] h-[300px] object-cover hover-scale transition-transform duration-300" src={block1} alt="" />
      </div>
      <div className="w-[50%] h-[300px] hover-lift">
        <img className="w-[100%] h-[300px] object-cover hover-scale transition-transform duration-300" src={block2} alt="" />
      </div>
    </div>
    
    </div>
  )
}

export default Home