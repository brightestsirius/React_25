import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

export default function List() {
  const [list, setList] = useState([`cat`, ` dog`, `lion`, `tiger`]);
  const [removeItemInterval, setRemoveItemInterval] = useState();

  let border = `1px solid black`;

  if (list.length <= 2) {
    border = `10px solid crimson`;
  }

  useEffect(() => {
    const removeItemInterval = setInterval(() => {
      setList((prevState) => prevState.slice(0, -1));
      console.log(`in useEffect`, list);
    }, 1000);

    setRemoveItemInterval(removeItemInterval);

    return () => clearInterval(removeItemInterval);
  }, []);

  useEffect(() => {
    console.log(`in useEffect for List`, list);

    !list.length && clearInterval(removeItemInterval);
  }, [list]);

  return list.length ? (
    <ul style={{ border }}>
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem item={item} />
        </React.Fragment>
      ))}
    </ul>
  ) : null;
}
