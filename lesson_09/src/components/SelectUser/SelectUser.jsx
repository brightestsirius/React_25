import React, { useContext } from "react";

import PostsContext from "../../contexts/PostsContext";

import { SELECTED_ALL } from "./../../constants/posts";

export default function SelectUser() {
  const { posts, selectedUser, setSelectedUser } = useContext(PostsContext);

  const handleSelect = (e) => setSelectedUser(e.target.value);

  return posts.length ? (
    <select defaultValue={selectedUser} onChange={handleSelect}>
      <option value={SELECTED_ALL}>{SELECTED_ALL}</option>
      {posts.map((item) => (
        <option key={item.id} value={item.userName}>
          {item.userName}
        </option>
      ))}
    </select>
  ) : null;
}
