import React from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";

import useUser from "../../hooks/useUser";

export default function User() {
  const { id} = useParams();

  const [searchParams] = useSearchParams();
  const color = searchParams.get(`color`);
  const fontSize = searchParams.get(`fontSize`);

  const { user, deleteUser } = useUser(id);

  const navigation = useNavigate();

  const handleDelete = async () => {
    await deleteUser();
    navigation(`/users`);
  };

  return Object.keys(user).length ? (
    <>
      <ul style={{ color, fontSize }}>
        {Object.keys(user).map((key, index) => (
          <li key={index}>
            {key}: {user[key]}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete user</button>
      <br />
      <Link to={"/users"}>Back to users</Link>
    </>
  ) : null;
}
