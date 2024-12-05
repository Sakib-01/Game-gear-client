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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 my-10 rounded-3xl  ">
          {products.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-xl  h-[550px]"
            >
              <Zoom>
                <figure>
                  <img
                    className="h-72 w-10/12 mx-auto rounded-full p-2"
                    src={product.image}
                    alt="Shoes"
                  />
                </figure>
              </Zoom>
              <div className="card-body h-[200px]">
                <h2 className="card-title">
                  {product.itemName}
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-lg font-medium bg ${
                        product.stockStatus > 0
                          ? "text-green-600 bg-green-900 p-2 rounded-3xl"
                          : "text-red-600 bg-red-900 p-2 rounded-3xl"
                      }`}
                    >
                      {product.stockStatus > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </h2>
                <div className="text-xl font-bold">
                  {" "}
                  Price: $ {product.price}
                </div>
                <div className="card-actions justify-start gap-10">
                  <div className="text-xl font-bold">
                    {product.categoryName}{" "}
                  </div>
                  <div className="text-xl font-bold text-yellow-500">
                    {product.rating} ★
                  </div>
                </div>
                <Link to={`/equipmentdetails/${product._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default EquipmentCart;
