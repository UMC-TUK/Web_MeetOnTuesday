import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 25px 50px;
  padding-bottom: 20px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
