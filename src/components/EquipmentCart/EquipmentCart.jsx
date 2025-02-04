import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const EquipmentCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-theta-nine.vercel.app/sports")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center  my-10 text-blue-500">
        Our{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-green-600">
          Equipment
        </span>
      </h1>

      <Fade cascade damping={0.1}>
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-5 my-10 rounded-3xl">
          {products.map((product) => (
            <div
              key={product._id}
              className="group card bg-gradient-to-br from-blue-500 to-green-400 text-white shadow-xl h-[400px] overflow-hidden relative"
            >
              <Zoom>
                <figure>
                  <img
                    className="h-52 w-10/12 mx-auto rounded-full p-2"
                    src={product.image}
                    alt={product.itemName}
                  />
                </figure>
              </Zoom>
              <div className="card-body h-[200px]">
                <h2 className="card-title">
                  {product.itemName}
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-lg font-medium ${
                        product.stockStatus > 0
                          ? "text-blue-300 bg-green-900 p-2 rounded-3xl"
                          : "text-red-600 bg-red-900 p-2 rounded-3xl"
                      }`}
                    >
                      {product.stockStatus > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </h2>
                <div className="text-xl font-bold">
                  Price: $ {product.price}
                </div>
                <div className="card-actions justify-start gap-10">
                  <div className="text-xl font-bold">
                    {product.categoryName}
                  </div>
                  <div className="text-xl font-bold text-yellow-300">
                    {product.rating} ★
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-100px] group-hover:bottom-5 left-0 w-full flex justify-center transition-all duration-300">
                <Link to={`/equipmentdetails/${product._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-10/12 mx-auto flex justify-start">
          <Link to="/allequipments">
            <button className=" btn btn-primary"> Show All</button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default EquipmentCart;
