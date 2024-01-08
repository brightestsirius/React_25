import React, { useState, useEffect } from "react";
import './style.sass'

export default function FunctionalList({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [counter, setCounter] = useState(0);
  const [removeInterval, setRemoveInterval] = useState();

    useEffect(
    () => {
        console.log(`in useEffect componentDidMount`);

        const removeIntervalLocal = setInterval(() => {
            console.log(`in interval`);
            setList(prevState => prevState.slice(0, -1));
        }, 1000);

        setRemoveInterval(removeIntervalLocal);

        return () => {
            console.log(`in componentWillUnmount`);
            clearInterval(removeIntervalLocal);
        }
    }, [])

    useEffect(
        () => {
            console.log(`in useEffect componentDidUpdate Counter`, counter);

            return () => {
                console.log(`in componentWillUnmount Counter`);
            }
        },
        [counter]
    )

    useEffect(() => {
        console.log(`in useEffect componentDidUpdate List`, list);

        if(!list.length){
            clearInterval(removeInterval);
        }

        return () => {
            console.log(`in componentWillUnmount List`);
        }
    }, [list])
 
  const handleRemoveItem = (e, index) => {
    e.stopPropagation();
    setList(list.filter((item, i) => i!==index));
  }

  const handleActivateItem = (index) => setList(list.map((item, i) => {
    if(index === i) item.active = !item.active;
    return item;
  }))

  const incrementCounter = () => setCounter(counter+1);

  return list.length ? (
    <>
        <ul>
        {list.map((item, index) => (
            <li key={index} onClick={() => handleActivateItem(index) } className={item.active ? `item--active` : null}>
            {item.type} {item.icon} <button onClick={(e) => handleRemoveItem(e, index)}>Remove</button>
            </li>
        ))}
        </ul>
        <button onClick={incrementCounter}>Counter value: {counter}</button>
    </>
  ) : null;
}
