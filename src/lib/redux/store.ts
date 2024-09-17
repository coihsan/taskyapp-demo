import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './features/boards/boardSlice'
import featureReducer from './features/boards/featureSlice'
import textEditorReducer from './features/notes/textEditorSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      board: boardReducer,
      feature: featureReducer,
      textEditor: textEditorReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']