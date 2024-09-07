"use client";

import { useModal } from "@/providers/modal-provider";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import BoardDetails from "./board-details";
import { useParams } from "next/navigation";

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
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  const { setOpen } = useModal();
  const params = useParams<{projectsid: string}>()
  return (
    <ScrollArea className="relative pb-32 h-screen w-full">
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <h1>Board Page ID : {params.projectsid}</h1>
      </DragDropContext>
      <ScrollBar />
    </ScrollArea>
  );
};

export default Page;
