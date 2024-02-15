import React from 'react'
import { useGetPokemonsQuery } from './../../store/pokemons/service'

export default function PokemonsList() {
  const { data, error, isLoading } = useGetPokemonsQuery();

  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <>Loading...</>
  ) : data ? (
    <ul>
      {data.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  ) : null
}