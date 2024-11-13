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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch("/public/coffee.json");
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
        loader: () => fetch("/public/coffee.json")
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
