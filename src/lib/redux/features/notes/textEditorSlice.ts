import { NoteItem } from '@/lib/types/db.types';
import { isDraftNote, isPrivateNote, isPublicNote } from '@/lib/utils/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  addNotes: false,
  selectedNotesIds: [],
  addCategoryToNote: false,
  notes: [],
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

  // addNotes,
 } = textEditorSlice.actions;

export default textEditorSlice.reducer;
