import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const EquipmentDetails = () => {
  const product = useLoaderData();
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = product;

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={image}
              alt={itemName}
              className="max-w-full rounded-lg shadow-xl object-cover h-full"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 space-y-6 px-4 sm:px-8">
            <h1 className="text-5xl font-extrabold text-white">{itemName}</h1>
            <p className="text-lg text-white">{categoryName}</p>

            <div className="py-6">
              <h2 className="text-2xl font-semibold text-white">Description</h2>
              <p className="text-base text-white mt-2">{description}</p>
            </div>

            <div className="py-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-white">Price:</p>
                <p className="text-xl font-bold text-white">${price}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-white">Rating:</p>
                <p className="text-xl font-bold text-yellow-500">{rating} ★</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-white">Customization:</p>
                <p className="text-lg text-white">{customization}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-white">
                  Processing Time:
                </p>
                <p className="text-lg text-white">{processingTime} days</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-white">Stock Status:</p>
                <p
                  className={`text-lg font-bold ${
                    stockStatus > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stockStatus > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
