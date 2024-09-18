import { NoteItem } from '@/lib/types/db.types';
import { isDraftNote, isPrivateNote, isPublicNote } from '@/lib/utils/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  bold: false,
  italic: false,
  underline: false,
  alignCenter: false,
  justify: false,
  alignLeft: false,
  alignRight: false,
  fontSize: 16,
  fontFamily: 'Arial',
  searchValue: '',
  selectedNotesIds: [],
  activeCategoryId: '',
  notes: [],
  color: '',
  content: ''
};

const textEditorSlice = createSlice({
  name: 'textEditor',
  initialState,
  reducers: {
    // addNotes: (
    //   state, { payload } : PayloadAction<NoteItem>) => {
    //     const draftNote = state.notes.find((note) => isDraftNote(note))
    //     const publicNote = state.notes.find((note) => isPublicNote(note))
    //     const privateNote = state.notes.find((note) => isPrivateNote(note))

    //     if (!draftNote) {
    //       state.notes.push(payload)
    //     }
    //   },
    setContent: (state, action: PayloadAction<string>) => {
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
    toggleAlignCenter: (state) => {
      state.alignCenter = !state.alignCenter;
    },
    toggleJustify: (state) => {
      state.justify = !state.justify;
    },
    toggleAlignLeft: (state) => {
      state.alignLeft = !state.alignLeft;
    },
    toggleAlignRight: (state) => {
      state.alignRight = !state.alignRight;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    // addCategoryToNote: (
    //   state,
    //   { payload }: PayloadAction<{ categoryId: string; noteId: string }>
    // ) => {
    //   state.notes = state.selectedNotesIds.includes(payload.noteId)
    //     ?
    //       state.notes.map((note) =>
    //         state.selectedNotesIds.includes(note.id)
    //           ? { ...note, category: payload.categoryId }
    //           : note
    //       )
    //     : // Single
    //       state.notes.map((note) =>
    //         note.id === payload.noteId ? { ...note, category: payload.categoryId } : note
    //       )
    // },
  },
});

export const { 
  setContent, 
  toggleBold, 
  toggleItalic, 
  toggleUnderline,
  toggleAlignCenter,
  toggleJustify,
  toggleAlignLeft,
  toggleAlignRight,
  setFontSize,
  setFontFamily,
  // addNotes,
 } = textEditorSlice.actions;

export default textEditorSlice.reducer;
