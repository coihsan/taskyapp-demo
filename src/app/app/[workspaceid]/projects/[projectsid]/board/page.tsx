"use client";
import { useModal } from "@/providers/modal-provider";
import React, { useCallback, useEffect, useState } from "react";
import PanelBar from '@/app/app/[workspaceid]/_components/panel-bar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

const Page = () => {
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  const { setOpen } = useModal();
  return (
    <ScrollArea className="relative pb-32 h-screen w-full p-4">
      <PanelBar />
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        Board Page
      </DragDropContext>
      <ScrollBar />
    </ScrollArea>
  );
};

export default Page;
