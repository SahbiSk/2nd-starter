import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ReducerPaths } from '../core/enum/reducerPaths'

const bbApi = process.env.REACT_APP_BB_API_ENDPOINT

export const breakingBadApi = createApi({
  reducerPath: ReducerPaths.BREAKING_BAD_REDUCER,
  baseQuery: fetchBaseQuery({ baseUrl: bbApi }),
  endpoints: (builder) => ({
    getCharacterById: builder.query({
      query: (id) => `characters/${id}`,
    }),
    getCharacters: builder.query({
      query: () => `characters`,
    }),
  }),
})

export const { useGetCharacterByIdQuery, useGetCharactersQuery } =
  breakingBadApi
