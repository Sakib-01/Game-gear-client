import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import gameGear from "../../assets/logo.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
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
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Website Name */}
        <div className="flex flex-col items-center md:items-center">
          <img className="w-20" src={gameGear} alt="" />
          <h2 className="text-2xl font-bold text-white mb-2">Game Gear</h2>
          <p className="text-sm">
            Your go-to place for the best sports accessories.
          </p>
        </div>

        {/* Contact Info */}
        <div className=" flex justify-center items-center">
          <div className="flex flex-col ">
            <h2 className="text-start  text-2xl ">Links</h2>
            <ul>
              <li className=" hover:text-green-500">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-green-500">
                {" "}
                <Link to="/allequipments">All Sports Equipment</Link>
              </li>{" "}
              <li className=" hover:text-green-500">
                <Link to="/" onClick={(e) => handleLinkClick(e, "about-us")}>
                  About Us
                </Link>
              </li>
              <li className=" hover:text-green-500">
                <Link to="/" onClick={(e) => handleLinkClick(e, "brands")}>
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Contact Us
            </h3>
            <p>Email: gamegear@sports.com</p>
            <p>Phone: +880123456789</p>
            <p>Address: 123 Sports , Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; 2024 GameGearSports. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
