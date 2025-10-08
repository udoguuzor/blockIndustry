import React from "react";
import { Route, Routes } from "react-router-dom";
import StaticLayout from "./staticLayout";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";

const AllScreen: React.FC = () => {
  return (
  <div>
    <Routes>
        <Route element={<StaticLayout/>}>
        <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        
    </Routes>
    
  </div>
  );
};

export default AllScreen;
