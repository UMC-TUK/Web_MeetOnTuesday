import { act } from "react-dom/test-utils";

const TodoInitialState = {
  todoList: [] as any[],
};

export const TodoReducer = (state = TodoInitialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todoList: [...state.todoList, action.item],
      };
    case "DELETE_TODO":
      return {
        todoList: [
          ...state.todoList.filter((todo: any) => todo.id !== action.id),
        ],
      };
    case "COMPELTE_TODO":
      return {
        todoList: state.todoList.map((e) =>
          e.id === action.id ? { ...e, isComplete: !e.isComplete } : e
        ),
      };
    default:
      return state;
  }
};
