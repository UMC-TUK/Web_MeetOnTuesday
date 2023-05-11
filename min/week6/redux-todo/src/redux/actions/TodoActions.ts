let id = 1;
export const addTodoItem = (item: any) => ({
  type: "ADD_TODO",
  item: {
    id: id++,
    title: item.title,
    isComplete: item.isComplete,
  },
});

export const deleteTodoItem = (id: number) => ({
  type: "DELETE_TODO",
  id,
});

export const completeTodoItem = (id: number) => ({
  type: "COMPELTE_TODO",
  id,
});
