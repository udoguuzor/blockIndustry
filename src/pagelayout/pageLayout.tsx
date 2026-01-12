import React from "react"
import Header from "../static/header"
import { Outlet } from "react-router-dom"


const Pagelayout:React.FC = () =>{
     
    return(
        <div>
          <Header/> 
          <Outlet/>
           
        </div>
    )
}



export default Pagelayout