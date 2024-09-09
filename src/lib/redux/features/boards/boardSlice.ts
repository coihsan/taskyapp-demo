import { createSlice } from '@reduxjs/toolkit'
import {StateBoard} from '@/lib/types/db.types'

const initialState : StateBoard | null = null

export const boardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state = action.payload
      return state
    }
  }
})

export const { setBoards } = boardSlice.actions

export default boardSlice.reducer