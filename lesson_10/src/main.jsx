import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute";
import CountryRoute from "./routes/CountryRoute";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style.sass";

import { store } from "./store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "countries",
        element: <CountriesRoute />,
      },
      {
        path: "countries/:id",
        element: <CountryRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
