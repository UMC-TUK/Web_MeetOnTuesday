import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { completeTodoItem, deleteTodoItem } from "redux/actions/TodoActions";
function TodoItem({ todo }: any) {
  const dispatch = useDispatch();
  const { id, title, isComplete } = todo;

  const handleClick = () => {
    dispatch(deleteTodoItem(id));
  };

  const handleComplete = () => {
    console.log(isComplete);
    dispatch(completeTodoItem(id));
  };
  return (
    <>
      <div className="list-wrapper">
        <li className="list">
          <div style={isComplete ? { textDecoration: "line-through" } : {}}>
            {title}
          </div>
        </li>
        <button onClick={handleClick}>삭제하기</button>
        <button
          onClick={handleComplete}
          style={
            isComplete ? { color: "#ffa94d", border: "2px solid #ffa94d" } : {}
          }
        >
          {isComplete ? "취소" : "완료"}
        </button>
      </div>
    </>
  );
}

export default TodoItem;
