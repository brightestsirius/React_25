import React, { useState } from "react";
import { useGetPokemonsQuery, useAddPokemonMutation, useDeletePokemonMutation } from "./services/pokemon";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [newPokemon, setNewPokemon] = useState(``);
  
  const { data, error, isLoading } = useGetPokemonsQuery(selectedPokemon);
  const [addPokemon, resultAddPokemon] = useAddPokemonMutation();
  const [deletePokemon, resultDeletePokemon] = useDeletePokemonMutation();


  const handleSubmit = async e => {
    e.preventDefault();
    await addPokemon({name: newPokemon}).unwrap();
    setNewPokemon(``);
  }

  const handleDelete = async id => {
    await deletePokemon(id).unwrap();
  }

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <select onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value="all">All</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name} <button onClick={() => handleDelete(item.id)}>Delete</button></li>
            ))}
          </ul>
        </>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewPokemon(e.target.value)} value={newPokemon} />
        <button>Add Pokemon</button>
      </form>
    </div>
  );
}
