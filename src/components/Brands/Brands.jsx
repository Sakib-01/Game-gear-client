import React from "react";
import Marquee from "react-fast-marquee";
import puma from "../../assets/Puma-Logo.jpg";
import addidas from "../../assets/Adidas-Logo.png";
import Nike from "../../assets/Nike-Logo.png";
import UnderArmour from "../../assets/Under-Armour-Logo.png";
import Kappa from "../../assets/Kappa-Logo.png";
import LouisVuitton from "../../assets/Louis-Vuitton-Logo.png";
import Supreme from "../../assets/Supreme-Logo.png";

const Brands = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold my-2 text-center">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Sister Concern
        </span>
      </h1>{" "}
      <div className="w-11/12 bg-slate-200 p-5 mx-auto rounded-3xl my-10 border-2 border-blue-500">
        <Marquee speed={50} pauseOnHover={true}>
          <img className="h-20 mx-4" src={puma} />
          <img className="h-20 mx-4" src={addidas} />
          <img className="h-20 mx-4" src={Nike} />
          <img className="h-20 mx-4" src={UnderArmour} />
          <img className="h-20 mx-4" src={Kappa} />
          <img className="h-20 mx-4" src={LouisVuitton} />
          <img className="h-20 mx-4" src={Supreme} />
        </Marquee>
      </div>
    </div>
  );
};

export default Brands;
