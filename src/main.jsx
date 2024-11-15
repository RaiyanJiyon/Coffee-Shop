import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layout/MAin";
import Coffee from "./pages/Coffee";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CoffeeCards from "./components/CoffeeCards";
import CoffeeDetails from "./pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch("/coffee.json");
          if (!response.ok) {
            throw new Error("Failed to fetch coffee data");
          }
          return response.json();
        },
        children: [
          {
            path: "/coffeeCards",
            element: <CoffeeCards />,
          },
        ],
      },
      {
        path: "/coffee",
        element: <Coffee />,
        loader: () => fetch("/coffee.json")
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: () => fetch("/coffee.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
