import { FluentAdd24Filled } from "@/components/icons/add-24-filled";
import { MoreHorizontal } from "@/components/icons/more-horizontal";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  children?: React.ReactNode;
};

const ColumnBoard = ({ children }: Props) => {
  return (
    <Droppable droppableId="droppable-1">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="bg-muted dark:bg-black p-2 rounded-xl shadow-sm max-w-72 w-full flex flex-col gap-2"
          {...provided.droppableProps}
        >
          <div className="mb-1 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label />
              <input className="w-2 border-0 ring-0 focus:ring-0 cursor-pointer outline-none rounded-full" type="color" value={"#fff"} />
              <h1 className="text-base">Todo</h1>
              <Badge
                variant={"secondary"}
                className="text-xs p-1 rounded-[5px] bg-muted aspect-square"
              >
                10
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <FluentAdd24Filled />
              <MoreHorizontal />
            </div>
          </div>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default ColumnBoard;
