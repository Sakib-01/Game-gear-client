import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Game Gear ";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          title: "Success!",
          text: " successfully Login",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state || "/");
      })
      .catch((error) =>
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        })
      );
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
        fetch("https://assignment-10-server-theta-nine.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId || data.exists) {
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-100 to-white">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-5">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-600 font-medium">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              //   ref={emailRef}
              className="input input-bordered w-full rounded-md px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-blue-600 font-medium">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="input input-bordered w-full rounded-md px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-[52px] right-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <label className="label mt-2">
              <span className="label-text-alt link link-hover text-blue-500">
                Forgot password?
              </span>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
              Login
            </button>
          </div>
        </form>
        <div className="divider my-4">OR</div>
        <div className="form-control mt-4">
          <button
            onClick={handleGoogleSignin}
            className="btn w-full rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold py-2"
          >
            Sign in with Google
          </button>
        </div>
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-600 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
