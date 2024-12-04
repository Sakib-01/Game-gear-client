import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import EquipmentCart from "../EquipmentCart/EquipmentCart";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <EquipmentCart />
    </div>
  );
};

export default Home;
