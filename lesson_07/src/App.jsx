import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import PostsRoute from "./routes/PostsRoute";
import PostRoute from "./routes/PostRoute";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from "./routes/UserRoute";
import UserCommentRoute from "./routes/UserCommentRoute";
import ErrorRoute from "./routes/ErrorRoute";

import Layout from './pages/Layout'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<HomeRoute />} />
            <Route path={"posts"} element={<PostsRoute />} />
            <Route path={"post"} element={<PostRoute />} />

            <Route path={"users"} element={<UsersRoute />} />
            <Route path={"users/:id"} element={<UserRoute />} />
            <Route path={"users/:id/:comment"} element={<UserCommentRoute />} />

            <Route path={"*"} element={<ErrorRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
