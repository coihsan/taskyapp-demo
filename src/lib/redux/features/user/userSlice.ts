import { StateUser } from '@/lib/types/db.types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: StateUser | null = null

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
      return state
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer