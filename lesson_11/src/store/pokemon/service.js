import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://655655bc84b36e3a431f9829.mockapi.io/",
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (count = ``) =>
        `pokemon${count && count !== `all` ? `?limit=${count}` : ``}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Pokemon", id })), "Pokemon"]
          : ["Pokemon"],
    }),
    addPokemon: builder.mutation({
      query: (payload) => ({
        url: `pokemon`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Pokemon"],
    }),
    deletePokemon: builder.mutation({
      query: (id) => ({
        url: `pokemon/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Pokemon"],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useAddPokemonMutation,
  useDeletePokemonMutation,
} = pokemonApi;
