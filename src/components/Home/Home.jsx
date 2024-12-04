import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import EquipmentCart from "../EquipmentCart/EquipmentCart";
import Category from "../Category/Category";
import Brands from "../Brands/Brands";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <Banner />
        <Category />
        <EquipmentCart />
        <Brands />
      </div>
    </div>
  );
};

export default Home;
