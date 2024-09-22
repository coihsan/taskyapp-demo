"use client";

import React, { useRef, useMemo } from "react";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toggle } from "@/components/ui/toggle";
import {
  TextBold24Regular,
  TextItalic24Regular,
  TextUnderlineCharacterU24Regular,
  TextAlignCenter24Regular,
  TextAlignJustify24Regular,
  AttachText24Regular,
  TextAlignLeft24Regular,
  TextAlignRight24Regular,
  TextBulletList24Regular,
  Eye24Regular,
  Save24Regular
} from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";

const NotesEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />
};
export default NotesEditor;
