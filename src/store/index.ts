import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { breakingBadApi, pokemonApi } from '../services'

const middlewares = [pokemonApi.middleware, breakingBadApi.middleware]

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [breakingBadApi.reducerPath]: breakingBadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
})

export type AppState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
