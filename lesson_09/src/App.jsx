import React from "react";

import SelectUser from "./components/SelectUser/SelectUser";
import PostList from "./components/Post/PostList";

import PostsContext from "./contexts/PostsContext";

import usePosts from './hooks/usePosts'

export default function App() {
  const posts = usePosts();

  return (
    <PostsContext.Provider value={{ ...posts }}>
      <SelectUser />
      <PostList />
    </PostsContext.Provider>
  );
}