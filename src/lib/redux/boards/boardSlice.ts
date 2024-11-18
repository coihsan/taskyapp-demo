import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { BoardState, Board } from "@/lib/types/db.types";

const initialState: BoardState | null = null;

export const boardAdapter = createEntityAdapter<Board>({
  sortComparer: (a, b) => {
      const createdAtA = a.created_at || '';
      const createdAtB = b.created_at || '';
      return createdAtB.localeCompare(createdAtA);
  },
});

export const boardSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state = action.payload;
      return state;
    },
    addBoard: (state) => {
      // do something
    },
    removeBoard: (state) => {
      // do something
    },
    updateBoard: (state) => {
      // do somethin
    },
    addMedia: (state) => {
      // do something
    },
    removeMedia: (state) => {
      // do something
    },
  },
});

export const { setBoards } = boardSlice.actions;

export default boardSlice.reducer;
