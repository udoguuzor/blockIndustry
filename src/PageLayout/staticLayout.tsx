import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StaticLayout: React.FC = () => {
  return (
   <div>
    <Header/>
    <Outlet/>
   </div>
  );
};

export default StaticLayout;
