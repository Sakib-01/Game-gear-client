import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Providers/AuthProvider";
import { useTheme } from "../Providers/Theme";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, handleThemeSwitch } = useTheme();
  console.log(user);

  const links = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
        to="/allequipments"
      >
        All Sports Equipment
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
        to="/addequipment"
      >
        Add Equipment
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
        to="/myequipment"
      >
        My Equipment
      </NavLink>

      {user ? (
        ""
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
          to="/auth/signup"
        >
          Sign up
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar py-5">
      <div className="navbar w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Sports collection</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ">
                <img
                  alt="User Profile"
                  src={user?.photoURL}
                  className="w-full h-full object-cover "
                  // title={user.displayName}
                  data-tooltip-id="userTooltip"
                  data-tooltip-content={user?.displayName || "User"}
                />
                <ReactTooltip
                  id="userTooltip"
                  place="left"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "4px",
                    padding: "5px",
                  }}
                />
              </div>
              <button onClick={logout} className="btn btn-primary">
                logout
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <button className=" btn btn-primary ">login</button>
            </Link>
          )}

          <button
            type="button"
            onClick={handleThemeSwitch}
            className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
