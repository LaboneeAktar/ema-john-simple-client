import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

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
          {user?.uid ? (
            <button onClick={logOut} className="btn-logout">
              Log Out
            </button>
          ) : (
            <>
              <NavLink
                to="./login"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Login
              </NavLink>
              <NavLink
                to="./signup"
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
