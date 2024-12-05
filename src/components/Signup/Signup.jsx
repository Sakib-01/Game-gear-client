import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userdata = { name, photo, email, password };
    console.log(userdata);

    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      password.length < 6
    ) {
      Swal.fire({
        title: "Error",
        text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    createUser(name, photo, email, password)
      .then((result) => {
        console.log("User created at Firebase", result.user);
        setUser(result.user);

        const newUser = { name, photo, email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Account created successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              navigate("/"); // Redirect to home or another page
            }
          });
      })
      .catch((error) => {
        console.log("Error:", error.message);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const handleGoogleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
        };

        // Save user information in MongoDB
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("User saved in MongoDB");
              Swal.fire({
                title: "Success!",
                text: "Signed in with Google successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              setUser(user);
              navigate("/");
            }
          })
          .catch((error) => {
            console.log("Error saving user to MongoDB:", error);
          });
      })
      .catch((error) => {
        console.log("Error:", error.message);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-100 to-white"
    >
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-indigo-800 mb-6">
          Create Account
        </h2>
        <form className="space-y-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              name="name"
              className="input input-bordered w-full bg-gray-50 text-gray-800 rounded-md p-3 border border-gray-300 focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full bg-gray-50 text-gray-800 rounded-md p-3 border border-gray-300 focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="input input-bordered w-full bg-gray-50 text-gray-800 rounded-md p-3 border border-gray-300 focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered w-full bg-gray-50 text-gray-800 rounded-md p-3 pr-10 border border-gray-300 focus:border-indigo-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-3 right-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 space-y-4">
            <button
              type="submit"
              className="btn bg-indigo-600 w-full text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Register
            </button>
            <button
              onClick={handleGoogleSignin}
              type="button"
              className="btn bg-white text-gray-800 w-full flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/auth" className="text-indigo-600 font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
