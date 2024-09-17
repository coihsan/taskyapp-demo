"use client";

import React, { FormEvent, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setContent,
  toggleBold,
  toggleItalic,
  toggleUnderline,
} from "@/lib/redux/features/notes/textEditorSlice";
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
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const { content, bold, italic, underline } = useSelector(
    (state: any) => state.textEditor
  );

  const handleInput = (event: FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    dispatch(setContent(target.innerHTML));
  };

  const handleBold = () => {
    dispatch(toggleBold());
  };

  const handleItalic = () => {
    dispatch(toggleItalic());
  };

  const handleUnderline = () => {
    dispatch(toggleUnderline());
  };

  return (
    <div className="">
      <div className="justify-between items-center flex">
        <div className="space-x-2">
        <Toggle onClick={handleBold} aria-label="Toggle bold">
          <TextBold24Regular className="h-4 w-4" />
        </Toggle>
        <Toggle onClick={handleItalic} aria-label="Toggle bold">
          <TextItalic24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="underline"
          aria-label="Toggle underline"
        >
          <TextUnderlineCharacterU24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="align-center"
          aria-label="Toggle underline"
        >
          <TextAlignCenter24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="justify"
          aria-label="Toggle underline"
        >
          <TextAlignJustify24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="align-left"
          aria-label="Toggle underline"
        >
          <TextAlignLeft24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="align-right"
          aria-label="Toggle underline"
        >
          <TextAlignRight24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="bulletList"
          aria-label="Toggle underline"
        >
          <TextBulletList24Regular className="size-4" />
        </Toggle>
        <Toggle
          onClick={handleUnderline}
          value="attachment"
          aria-label="Toggle underline"
        >
          <AttachText24Regular className="size-4" />
        </Toggle>
        </div>
        <div className="space-x-2">
          <Button size={'icon'} variant={'secondary'}>
            <Eye24Regular className="size-5" />
          </Button>
          <Button size={'icon'} variant={'default'}>
            <Save24Regular className="size-5" />
          </Button>
        </div>
      </div>
      <div
        ref={divRef}
        contentEditable
        className="w-full h-screen focus-none ring-none border-none outline-none"
        onInput={handleInput}
      />
      <div>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
export default NotesEditor;
