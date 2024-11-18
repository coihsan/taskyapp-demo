import { UserState } from '@/lib/types/db.types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserState ={
  loading: false,
  status: "pending",
  error: null,
  user: {
    id: "",
    name: "",
    email: "",
    emailVerified: null,
    image: "",
    username: "",
    bio: "",
    preferences: "",
    password: "",
  },
}

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