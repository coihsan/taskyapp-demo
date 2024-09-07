import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const CardBoard = () => {
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {(provided, snapshot) => (
        <div
          className="bg-card rounded-xl border borderStyle"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex flex-wrap gap-1 p-3">
            <Badge variant={"secondary"}>Label</Badge>
            <Badge variant={"secondary"}>Label</Badge>
          </div>
          <Separator orientation="horizontal" />
          <div className="p-3">
            <h3 className="text-xl py-3">My draggable</h3>
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
