import React, { useState, useEffect } from "react";
import "./style.sass";

export default function FunctionalList({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [border, setBorder] = useState(``);
  const [removeItemInterval, setRemoveItemInterval] = useState(0);

  useEffect(() => {
    console.log(`in useEffect`);

    const removeItem = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setRemoveItemInterval(removeItem);

    return () => {
      console.log(`in componentWillUnmount for 1 useEffect`);
      clearInterval(removeItem);
    };
  }, []);

  useEffect(() => {
    console.log(list);
    !list.length && clearInterval(removeItemInterval);

    return () => {
      console.log(`in componentWillUnmount for 2 useEffect`);
    }
  }, [list]);

  useEffect(() => {
    if (list.length === Math.round(propsList.length / 2))
      setBorder(`5px solid black`);

    return () => console.log(`in componentWillUnmount for 3 useEffect`);
  }, [list]);

  const handleRemove = (e, index) => {
    e.stopPropagation();
    setList(list.filter((item, i) => index !== i));
  };

  const handleActivate = (index) => {
    setList(
      list.map((item, i) => {
        if (index === i) item.active = true;
        return item;
      })
    );
  };

  return list.length ? (
    <ul style={{ border }}>
      {list.map((item, index) => (
        <li
          className={item.active && `active`}
          key={index}
          onClick={() => handleActivate(index)}
        >
          {item.type} {item.icon}{" "}
          <button onClick={(e) => handleRemove(e, index)}>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
}
