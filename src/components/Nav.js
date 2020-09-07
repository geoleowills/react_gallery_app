import React from "react";
import { NavLink } from "react-router-dom";

// Creates the Nav element, uses NavLinks to show which one is currently active.
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/australia" activeClassName="active">
            Australia
          </NavLink>
        </li>
        <li>
          <NavLink to="/animals" activeClassName="active">
            Animals
          </NavLink>
        </li>
        <li>
          <NavLink to="/cars" activeClassName="active">
            Cars
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
