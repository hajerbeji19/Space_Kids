import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './gamesSlice.js'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
})

export default store
