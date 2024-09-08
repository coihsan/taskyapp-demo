"use client";

import { useModal } from "@/providers/modal-provider";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { DragDropContext, DropResult, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "next/navigation";
import ColumnBoard from "./column-board";
import CardBoard from "./card-board";
import CardDetails from "./card-details";

const CanvasBoard = () => {
  const [board, setBoard] = useState({ columns: {}, columnOrder: [] });
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
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex items-start flex-nowrap gap-2">
          <ColumnBoard>
            <CardDetails />
            <CardDetails />
          </ColumnBoard>
          <ColumnBoard>
            <CardDetails />
            <CardDetails />
          </ColumnBoard>
        </div>
      </DragDropContext>
  );
};

export default CanvasBoard;
