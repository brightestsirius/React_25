import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import "./main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import CountriesRoute from "./routes/CountriesRoute";
import CountryRoute from "./routes/CountryRoute";

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

import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
