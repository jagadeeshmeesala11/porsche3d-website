import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFeatureClick = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("explore-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Pass custom state to indicate scroll target
      navigate("/", { state: { scrollTo: "explore-section" } });
    }
  };

  return (
    <div className="header-container">
      <nav className="navbar_container_main">
        <div className="nav_head">
          <Link to="/" className="logo" style={{ textDecoration: "none", color: "white" }}>
            Porsche
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/models">Models</Link></li>
          <li><button onClick={handleFeatureClick} className="nav-button-link">Feature</button></li>
          <li><Link to="/ar-showroom">AR ShowCase</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
