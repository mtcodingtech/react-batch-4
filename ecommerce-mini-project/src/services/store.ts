import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from './todoApi'
import { api } from './api'

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware).concat(api.middleware),
})
