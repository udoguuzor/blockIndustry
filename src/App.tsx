import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Footer from "./pages/footer"
import Logo from "./assets/updated.jpg"

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        <img  className="h-[50px] w-auto object-contain" src={Logo} alt="" />
          <ul className="flex gap-8 text-sm font-medium">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-150"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-150"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-150"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-150"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App