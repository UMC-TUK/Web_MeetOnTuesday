const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// * 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        todo: action.payload,
      };
      return [...state, newTodo];
    default:
      return state;
  }
};

export default todos;
