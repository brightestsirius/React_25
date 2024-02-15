import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from './types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://655655bc84b36e3a431f9829.mockapi.io/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      query: () => `pokemon`,
    }),
  }),
})

export const { useGetPokemonsQuery } = pokemonApi