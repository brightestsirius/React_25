import React, { useContext } from "react";

import PostsContext from "../../contexts/PostsContext";

export default function PostList() {
  const { filteredPosts, deletePost } = useContext(PostsContext);

  const handleDelete = id => deletePost(id);

  return filteredPosts.length ? (
    <ul>
      {filteredPosts.map((item) => (
        <li key={item.id}>
          <p>Title: {item.title}</p>
          <p>User: {item.userName}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
