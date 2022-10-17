import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <NavLink
            to="./shop"
            className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          >
            Shop
          </NavLink>
          <NavLink
            to="./orders"
            className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          >
            Orders
          </NavLink>
          <NavLink
            to="./inventory"
            className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          >
            Manage Inventory
          </NavLink>
          <NavLink
            to="./about"
            className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
          >
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
