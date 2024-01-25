import React, { useContext, useEffect } from "react";

import { useParams, useNavigate, useSearchParams } from "react-router-dom";

import AppContext from "../../context/app";

export default function User() {
  const { id } = useParams();
  const { user, getUser, deleteUser } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const color = searchParams.get(`color`) ? searchParams.get(`color`) : `black`;

  const navigation = useNavigate();

  useEffect(() => {
    getUser(id);
  }, []);

  const handleDelete = async () => {
    await deleteUser(id);
    navigation(`/`);
  };

  return Object.keys(user).length ? (
    <>
      <ul style={{color}}>
        <li>{user.name}</li>
      </ul>
      <button onClick={handleDelete}>Delete User</button>
    </>
  ) : null;
}
