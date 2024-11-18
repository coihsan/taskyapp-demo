import { configureStore, combineReducers } from '@reduxjs/toolkit'
import boardReducer from './boards/boardSlice'

const rootState = combineReducers({
    board: boardReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']