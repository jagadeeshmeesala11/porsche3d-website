import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";

const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleFeatureClick = () => {
    if (isHome) {
      const el = document.getElementById("explore-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "explore-section" } });
    }
  };

  return (
    <div className={`header-container ${isHome ? "home-header" : "default-header"}`}>
      <nav className="navbar_container_main">
        <div className="nav_head">
          <Link to="/" className="logo">Porsche</Link>
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
