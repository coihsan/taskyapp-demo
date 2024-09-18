import { NoteItem } from "../types/db.types"

export const isDraftNote = (note: NoteItem) => {
    return !note.scratchpad && note.text === ''
  }
export const isPrivateNote = (note: NoteItem) => {
    return !note.scratchpad && note.text === ''
  }
export const isPublicNote = (note: NoteItem) => {
    return !note.scratchpad && note.text === ''
  }