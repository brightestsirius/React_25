// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://655655bc84b36e3a431f9829.mockapi.io/' }),
  tagTypes: ['Pokemons'],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (limit) => `pokemon?${(limit && limit!==`all`) ? `limit=${limit}` : ``}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Pokemons']
          : ['Pokemons'],
    }),
    addPokemon: builder.mutation({
      query: (body) => ({
        url: `pokemon`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Pokemons'],
    }),
    deletePokemon: builder.mutation({
      query: (id) => ({
        url: `pokemon/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Pokemons'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonsQuery, useAddPokemonMutation, useDeletePokemonMutation } = pokemonApi