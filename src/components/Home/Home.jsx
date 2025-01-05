import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import EquipmentCart from "../EquipmentCart/EquipmentCart";
import Category from "../Category/Category";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Game Gear ";
  }, []);
  return (
    <div>
      <Navbar />

      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <Banner />
        <Category />
        <EquipmentCart />
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="brands">
          <Brands />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
