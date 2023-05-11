import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./reducers/TodoReducer";

const store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});

export default store;
