import React, { useState, useEffect, useContext } from "react";

import service from "../services/todos";

import ListContext from "../context/ListContext";

export default function useList() {
  const { setList: liftingList } = useContext(ListContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setList(response.splice(0, 10));
    })();
  }, []);

  const itemDelete = async (id) => {
    await service.delete(id);
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  useEffect(() => {
    liftingList(list);
  }, [list]);

  return [list, itemDelete];
}
