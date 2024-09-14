import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './features/boards/boardSlice'
import featureReducer from './features/boards/featureSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      board: boardReducer,
      feature: featureReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']