import React from "react";
import { NavLink } from "react-router-dom";

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
