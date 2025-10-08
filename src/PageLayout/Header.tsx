import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center">
       <div className="w-[90%] h-[70px] flex justify-between items-center bg-white">
         <div>Logo</div>
        <nav>
            <ul className="flex gap-10 m-2">
                <Link to="home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        <button>Call now</button>
        
       </div>
    </div>
  );
};

export default Header;
