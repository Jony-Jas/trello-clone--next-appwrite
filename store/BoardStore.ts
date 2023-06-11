import { databases } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  searchString: "",
  setSearchString: (searchString: string) => {
    set({ searchString });
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();

    set({ board });
  },
  setBoard: (board: Board) => {
    set({ board });
  },
  updateTodoInDB: async (todo: Todo, columnId: TypedColumn) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
}));
