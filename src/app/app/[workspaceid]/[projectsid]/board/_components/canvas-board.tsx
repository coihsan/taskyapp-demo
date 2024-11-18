"use client";

import { useModal } from "@/providers/modal-provider";
import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "next/navigation";
import ColumnBoard from "./column/column-board";
import CardBoard from "./board/card-board";
import CardDetails from "./board/card-details";

const CanvasBoard = () => {
  const [board, setBoard] = useState({ columns: {}, columnOrder: [] });

  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  const { setOpen } = useModal();
  const params = useParams<{projectsid: string}>()
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex items-start flex-nowrap gap-2">
          <ColumnBoard>
          <CardBoard />
          <CardBoard />
          </ColumnBoard>
        </div>
      </DragDropContext>
  );
};

export default CanvasBoard;
