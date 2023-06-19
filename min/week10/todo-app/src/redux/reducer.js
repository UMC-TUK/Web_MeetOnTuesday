import { ADD, DELETE, TOGGLE } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      text: "프로젝트 생성하기",
      done: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링하기",
      done: true,
    },
    {
      id: 3,
      text: "Context 만들기",
      done: false,
    },
    {
      id: 4,
      text: "기능 구현하기",
      done: false,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      todos: [...state.todos, action.todo],
    };
  } else if (action.type === TOGGLE) {
    const updatedTodos = state.todos.map((todo) => {
      if (todo.id === action.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    return {
      ...state,
      todos: updatedTodos,
    };
  } else if (action.type === DELETE) {
    return {
      todos: [...state.todos.filter((todo) => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
