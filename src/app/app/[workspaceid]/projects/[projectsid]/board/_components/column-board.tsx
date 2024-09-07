import React from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  children: React.ReactNode;
};

const ColumnBoard = ({ children }: Props) => {
  return (
    <Droppable droppableId="droppable-1">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="bg-muted dark:bg-black p-2 rounded-lg shadow-sm max-w-72 w-full flex flex-col gap-2"
          {...provided.droppableProps}
        >
            <div className="mb-1 p-2 flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <h1>BACKLOG</h1>
                    <div className="text-xs p-1 rounded-[5px] bg-muted aspect-square">10</div>
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
