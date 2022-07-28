import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const service = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
  tagTypes: ['Posts'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (_builder) => ({}),
})
