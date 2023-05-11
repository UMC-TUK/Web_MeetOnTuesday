import TodoItem from "TodoItem";
import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector(
    (state: { Todo: { todoList: any[] } }) => state.Todo.todoList
  );
  console.log(todos);
  return (
    <>
      {todos &&
        todos.map((todo: any) => <TodoItem key={todo.id} todo={todo} />)}
    </>
  );
}

export default TodoList;
