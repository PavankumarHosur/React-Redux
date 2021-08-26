import React from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/flights">Flight</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
