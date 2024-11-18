import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Badge } from "@/components/ui/badge";

const CardBoard = () => {
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {(provided, snapshot) => (
        <div
          className="CardTask"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="p-3">
            <h3 className="text-xl">My draggable</h3>
          <div className="flex flex-wrap py-3 gap-1">
            <Badge variant={"secondary"}>Label</Badge>
          </div>
            <p className="text-xs text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      )}
    </Draggable>
  );
};
export default CardBoard;
