"use client";

import getUrl from "@/lib/getUrl";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  console.log("Fetched Image ",imageUrl);

  React.useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        
        const url = await getUrl(todo.image!);
        if (url) {
          setImageUrl(url.toString());
        }
      };

      fetchImage();
      
    }
  }, [todo]);

  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="bg-white rounded-md space-y-2 drop-shadow-md"
    >
      <div className="flex justify-between items-center px-5 py-2">
        <p>{todo.title}</p>
        <button className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-9 w-8" />
        </button>
      </div>

      {imageUrl && (
        <div className="h-full w-full rounded-b-md">
          <Image
            src={imageUrl}
            alt="Task Image"
            width={400}
            height={200}
            className="w-full object-contain rounded-b-md"
          />
        </div>
      )}
    </div>
  );
}

export default TodoCard;
