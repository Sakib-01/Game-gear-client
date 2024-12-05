import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const MyEquipment = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-10-server-theta-nine.vercel.app/mysports?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from the database
        fetch(
          `https://assignment-10-server-theta-nine.vercel.app/sports/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingProducts = products.filter(
                (prod) => prod._id !== id
              );
              setProducts(remainingProducts);
            }
          });
      }
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white dark:bg-slate-900">
        <div className="overflow-x-auto w-10/12 mx-auto min-h-screen">
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

                    <Link to={`/updateEquipment/${product._id}`}>
                      <button
                        //   onClick={() => handleDetails(product._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaEdit />
                      </button>
                    </Link>
                    <Link
                    //   to={`/deleteEquipment/${product._id}`}
                    >
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-ghost btn-lg"
                      >
                        <MdDeleteForever />
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
      <Footer />
    </div>
  );
};

export default MyEquipment;
