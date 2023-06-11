const formatTodosForAI = (board: Board) => {
  const todos = Array.from(board.columns.entries());

  const flatArray = todos.reduce((acc, [key, value]) => {
    acc[key] = value.todos;
    return acc;
  }, {} as { [key in TypedColumn]: Todo[] });

  //reduce to key: value(length)
  const flatArrayCounted = Object.entries(flatArray).reduce(
    (map, [key, value]) => {
      map[key as TypedColumn] = value.length;
      return map;
    },
    {} as { [key in TypedColumn]: number }
  );

  return flatArrayCounted;
};

export default formatTodosForAI;
