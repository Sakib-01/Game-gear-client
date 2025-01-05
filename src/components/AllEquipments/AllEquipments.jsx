import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";

const AllEquipments = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-theta-nine.vercel.app/allsports")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    document.title = "All Equipment | Game Gear ";
  }, []);

  const handleSort = () => {
    const sortProduct = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortProduct);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white text-black dark:bg-slate-900 dark:text-slate-300">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-end py-4">
            <button onClick={handleSort} className="btn btn-primary">
              Sort By Price
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="group relative bg-gray-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Image Section */}
                <figure className="h-80 w-full">
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt={product.itemName}
                  />
                </figure>

                {/* Pop-Up Text Section */}
                <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-4">
                  <h2 className="text-lg font-semibold">{product.itemName}</h2>
                  <p className="mt-1">${product.price} / Taka</p>
                  <p className=" flex items-center text-sm mt-1 text-yellow-500">
                    <FaStar />

                    {product.rating}
                  </p>
                  <p className="mt-2">
                    {product.stockStatus > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <Link to={`/equipmentdetails/${product._id}`}>
                    <button className="btn btn-primary mt-4">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllEquipments;
