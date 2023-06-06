import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const text = useSelector((state) => {
    const todo = state.todos.map((todo) => {
      if (todo.id === Number(id)) {
        return todo.text;
      }
    });
    return todo;
  });
  return <>{text}</>;
}
