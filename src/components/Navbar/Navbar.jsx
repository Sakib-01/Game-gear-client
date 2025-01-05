import React, { useContext } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Providers/AuthProvider";
import { useTheme } from "../Providers/Theme";
import { Tooltip as ReactTooltip } from "react-tooltip";
import gameGear from "../../assets/logo.webp";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, handleThemeSwitch } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the target section
      scrollToSection(target);
    } else {
      // Navigate to the homepage and scroll to the target section
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(target), 100);
    }
  };

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
      <Link
        className="mr-2 hover:underline"
        to="/"
        onClick={(e) => handleLinkClick(e, "about-us")}
      >
        About Us
      </Link>
      <Link
        className="mr-2 hover:underline"
        to="/"
        onClick={(e) => handleLinkClick(e, "brands")}
      >
        Brands
      </Link>
      {user ? (
        <>
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
        </>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active mr-2" : "mr-2")}
          to="/auth/signup"
        >
          Sign Up
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar sticky top-0 py-5 bg-white dark:bg-slate-900 z-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open menu"
            >
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
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-12" src={gameGear} alt="Game Gear" />
          <span className="text-blue-500 font-bold ml-3 text-xl hidden md:block">
            Game Gear
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  alt="User Profile"
                  src={user?.photoURL}
                  className="w-full h-full object-cover"
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
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="bg-indigo-500 text-white p-2 rounded-md"
          >
            {theme === "dark" ? "🌙" : "🌞"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
