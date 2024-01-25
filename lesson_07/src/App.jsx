import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import HomeRoute from "./routes/HomeRoute";
import PostsRoutes from "./routes/PostsRoutes";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from "./routes/UserRoute";

import AppContext from "./context/app";

import useUsers from "./hooks/useUsers";
import useUser from "./hooks/useUser";

export default function App() {
  const users = useUsers();
  const user = useUser();

  return (
    <AppContext.Provider value={{ ...users, ...user }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomeRoute />} />
            <Route path={"posts"} element={<PostsRoutes />} />
            <Route path={"users"} element={<UsersRoute />} />
            <Route path={"users/:id"} element={<UserRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
