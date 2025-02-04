import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AddEqupment from "./components/AddEqupment/AddEqupment.jsx";
import AllEquipments from "./components/AllEquipments/AllEquipments.jsx";
import EquipmentDetails from "./components/EquipmentDetails/EquipmentDetails.jsx";
import Auth from "./components/AuthLayout/Auth.jsx";
import Signup from "./components/Signup/Signup.jsx";
import AuthProvider, {
  AuthContext,
} from "./components/Providers/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import MyEquipment from "./components/MyEquipments/MyEquipment.jsx";
import Update from "./components/Update/Update.jsx";
import { ThemeProvider } from "./components/Providers/Theme.jsx";
import Error from "./components/Error.jsx";
import Brands from "./components/Brands/Brands.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "brand",
        element: <Brands></Brands>,
      },
    ],
  },

  {
    path: "/addequipment",
    element: (
      <PrivateRoute>
        <AddEqupment></AddEqupment>
      </PrivateRoute>
    ),
  },
  {
    path: "/allequipments",
    element: <AllEquipments></AllEquipments>,
    // loader: () => fetch("https://assignment-10-server-theta-nine.vercel.app/sports"),
  },
  {
    path: "/equipmentdetails/:id",
    element: <EquipmentDetails></EquipmentDetails>,
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-theta-nine.vercel.app/sports/${params.id}`
      ),
  },
  {
    path: "/updateEquipment/:id",
    element: (
      <PrivateRoute>
        <Update></Update>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-theta-nine.vercel.app/sports/${params.id}`
      ),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },

  {
    path: "/myequipment",
    element: (
      <PrivateRoute>
        <MyEquipment></MyEquipment>
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
