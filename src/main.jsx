import { StrictMode } from "react";
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
import AuthProvider from "./components/Providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/addequipment",
    element: <AddEqupment></AddEqupment>,
  },
  {
    path: "/allequipments",
    element: <AllEquipments></AllEquipments>,
    loader: () => fetch("http://localhost:5000/sports"),
  },
  {
    path: "/equipmentdetails/:id",
    element: <EquipmentDetails></EquipmentDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/sports/${params.id}`),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
