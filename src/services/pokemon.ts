import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReducerPaths } from '../core/enum/reducerPaths'

const pokeApi = process.env.REACT_APP_POKEMON_API_ENDPOINT

export const pokemonApi = createApi({
  reducerPath: ReducerPaths.POKEMON_REDUCER,
  baseQuery: fetchBaseQuery({ baseUrl: pokeApi }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemons: builder.query({
      query: () => `pokemon`,
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
})

export const {
  useGetPokemonByNameQuery,
  useGetPokemonsQuery,
  useGetPokemonByIdQuery,
} = pokemonApi
