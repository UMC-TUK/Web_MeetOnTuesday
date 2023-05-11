import "./App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./redux/actions/TodoActions";
import TodoList from "TodoList";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  console.log(text);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const item = {
      title: text,
      isComplete: false,
    };

    dispatch(addTodoItem(item));
    setText("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "purple", marginBottom: "3rem" }}>
        Redux 사용하여 Todo 구현해보기
      </h1>
      <label htmlFor="addTodoItem">
        <input
          style={{ width: "20rem", height: "3rem", textAlign: "center" }}
          type="text"
          id="addTodoItem"
          placeholder="할일을 입력해주세요."
          onChange={handleChange}
          value={text}
          onKeyDown={handleKeyPress}
        />
        <button
          style={{
            width: "5rem",
            height: "2rem",
            marginLeft: "2rem",
            backgroundColor: "transparent",
            border: "2px solid gray",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          추가하기
        </button>
      </label>
      <hr />
      <ul>
        <TodoList />
      </ul>
    </div>
  );
}

export default App;
