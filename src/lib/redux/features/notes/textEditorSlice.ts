import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: '',
  bold: false,
  italic: false,
  underline: false,
};

const textEditorSlice = createSlice({
  name: 'textEditor',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    toggleBold: (state) => {
      state.bold = !state.bold;
    },
    toggleItalic: (state) => {
      state.italic = !state.italic;
    },
    toggleUnderline: (state) => {
      state.underline = !state.underline;
    },
  },
});

export const { setContent, toggleBold, toggleItalic, toggleUnderline } = textEditorSlice.actions;
export default textEditorSlice.reducer;
