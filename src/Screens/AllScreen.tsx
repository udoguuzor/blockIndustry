import React from "react"
import { Route, Routes } from "react-router-dom"
import Pagelayout from "../pagelayout/pageLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Login from "../Auth/login"



const Allscreen:React.FC = () =>{
     
    return(
        <div>
           <Routes>
            <Route element={<Pagelayout/>}>
             <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
           
            </Routes> 
        </div>
    )
}



export default Allscreen