import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";
import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Update = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const navigate = useNavigate();
  console.log(product);

  console.log(user);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const itemName = e.target.itemName.value;
    const categoryName = e.target.categoryName.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;
    const newEquipment = {
      name,
      email,
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    console.log(newEquipment);

    fetch(`http://localhost:5000/sports/${product._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Equipment updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();

          if (window.history.length > 1) {
            navigate(-1); // Go back if history exists
          } else {
            navigate("/"); // Fallback to homepage or a safe route
          }
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-slate-900">
        <div className="flex flex-col items-center py-10 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            Update Equipment
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-3xl bg-base-100 shadow-xl rounded-lg p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-bordered w-full"
                  placeholder="Enter name"
                  defaultValue={user?.displayName}
                  // readOnly
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="Enter email"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>

              {/* Image URL */}
              <div className="form-control">
                <img className="h-[330px]" src={product?.image} alt="" />
                <label htmlFor="image" className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="input input-bordered w-full"
                  placeholder="Enter image URL"
                  defaultValue={product?.image}
                  required
                />
              </div>

              {/* Item Name */}
              <div className="form-control">
                <label htmlFor="itemName" className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  className="input input-bordered w-full"
                  defaultValue={product?.itemName}
                  placeholder="Enter item name"
                  required
                />

                <label htmlFor="categoryName" className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  className="input input-bordered w-full"
                  defaultValue={product?.categoryName}
                  placeholder="Enter category name"
                  required
                />

                <label htmlFor="description" className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  defaultValue={product?.description}
                  placeholder="Enter a description"
                  required
                ></textarea>

                <label htmlFor="price" className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="input input-bordered w-full"
                  defaultValue={product?.price}
                  placeholder="Enter price"
                  required
                />
              </div>

              {/* Rating */}
              <div className="form-control">
                <label htmlFor="rating" className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  step="0.1"
                  min="1"
                  max="5"
                  className="input input-bordered w-full"
                  defaultValue={product?.rating}
                  placeholder="Enter rating (1-5)"
                  required
                />
              </div>

              {/* Customization */}
              <div className="form-control">
                <label htmlFor="customization" className="label">
                  <span className="label-text">Customization</span>
                </label>
                <input
                  type="text"
                  name="customization"
                  id="customization"
                  className="input input-bordered w-full"
                  defaultValue={product?.customization}
                  placeholder="Enter customization details"
                  required
                />
              </div>

              {/* Processing Time */}
              <div className="form-control">
                <label htmlFor="processingTime" className="label">
                  <span className="label-text">Processing Time (days)</span>
                </label>
                <input
                  type="number"
                  name="processingTime"
                  id="processingTime"
                  className="input input-bordered w-full"
                  defaultValue={product?.processingTime}
                  placeholder="Enter processing time"
                  required
                />
              </div>

              {/* Stock Status */}
              <div className="form-control">
                <label htmlFor="stockStatus" className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <input
                  type="number"
                  name="stockStatus"
                  id="stockStatus"
                  className="input input-bordered w-full"
                  defaultValue={product?.stockStatus}
                  placeholder="Enter available quantity"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-6">
              Update Equipment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
