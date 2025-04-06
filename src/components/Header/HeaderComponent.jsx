import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Link } from "react-router-dom";
import "./header.css"; 




const HeaderComponent = () => {
  return (
    <nav className="navbar_container_main">
      <div className="nav_head">
        <Link to='/' className="logo" style={{ textDecoration: "none", color:'white'}}>Porsche</Link>
      </div>
   
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/models'>Models</Link></li>
        <li><a href="#">Featurs</a></li>
        <li><a href="#">AR ShowCase</a></li>
      </ul>
    </nav>
  );
};

export default HeaderComponent;
