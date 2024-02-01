import React from "react";

import usePosts from "./../../hooks/usePosts";
import useUsers from "./../../hooks/useUsers";

export default function PostsList() {
  const { filteredPosts, deletePost } = usePosts();
  const { setDefaultSelectedUser } = useUsers();

  const handleDeletePost = (id) => {
    deletePost(id);
    setDefaultSelectedUser();
  };

  return filteredPosts.length ? (
    <ul>
      {filteredPosts.map((item) => (
        <li key={item.id}>
          <p>Title {item.title}</p>
          <p>User {item.userName}</p>
          <button onClick={() => handleDeletePost(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
