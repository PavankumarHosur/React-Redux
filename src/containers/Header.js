import React from "react";
import "../CSS/Style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link className="link" to="/flights">
              Flight
            </Link>
          </li>
          <li>
            <Link className="link" to="/passengers">
              Passengers
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              LogOut{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
