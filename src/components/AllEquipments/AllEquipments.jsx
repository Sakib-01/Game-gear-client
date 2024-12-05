import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipments = () => {
  const products = useLoaderData();

  const handleDetails = (id) => {
    console.log(id);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white dark:bg-slate-900">
        <div className="overflow-x-auto w-10/12 mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product._id}>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.itemName}</div>
                        <div className="text-sm opacity-50">
                          {product.categoryName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.description}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Rating: {product.rating}
                    </span>
                  </td>
                  <td>{product.price}</td>
                  <th>
                    <Link to={`/equipmentdetails/${product._id}`}>
                      <button
                        //   onClick={() => handleDetails(product._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        details
                      </button>
                    </Link>
                  </th>
                </tr>
              </tbody>
            ))}

            {/* foot */}
            {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEquipments;
