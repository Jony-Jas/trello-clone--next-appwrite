import formatTodosForAI from "./formatTodosForAI";

export const fetchSuggestions = async (board: Board) => {
  const todos = formatTodosForAI(board);
  console.log("Formatted Todos", JSON.stringify({ todos }));

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};
