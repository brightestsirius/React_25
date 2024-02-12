import React, { useState } from "react";
import { useGetPokemonsQuery, useAddPokemonMutation, useDeletePokemonMutation } from "../../store/pokemon/service";
import { IPokemon } from './../../types/user';

export default function Pokemon() {
  const [count, setCount] = useState(``);
  const [newPokemon, setNewPokemon] = useState(``);

  const { data, error, isLoading } = useGetPokemonsQuery(count);
  const [addPokemon, resultAddPokemon] = useAddPokemonMutation();
  const [deletePokemon, resultDeletePokemon] = useDeletePokemonMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPokemonObj: IPokemon = { name: newPokemon };
    await addPokemon(newPokemonObj).unwrap();
    setNewPokemon(``);
  }

  const handleDelete = async (id) => {
    await deletePokemon(id);
  }

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setNewPokemon(e.target.value)} value={newPokemon} />
            <button>Add Pokemon</button>
          </form>

          <select onChange={e => setCount(e.target.value)}>
            <option value="all">all</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>

          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name} <button onClick={() => handleDelete(item.id)}>Delete</button></li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}
