"use client";

import React, { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    console.log("Use effect");
    getBoard();
  },[getBoard]);

  return (
    <h1>Board</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>Hello</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
