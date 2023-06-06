import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 30px;
  padding-left: 50px;
  padding-bottom: 10px;
  padding-right: 50px;
  h1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .date{
      margin: 0;
      font-size: 36px;
      color: #ebf0e8;
    }
    .day {
      color: #FF9614;
      font-size: 28px;
      margin-top; 0;
    }
  }
  .tasks-left{
    color: #f2e982;
    font-size: 25px;
    margin-top: 20px;
    font-weight: bold;
  }
  hr{
    margin-top: 15px;
    border: 0;
    height: 2px;
    width: 100%;
    background: #d4d9ed;
  }
  
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <h1>
        <div className="date">{dateString}</div>
        <div className="day">{dayName}</div>
      </h1>
      <div className="tasks-left">남은 할 일 개수: {undoneTasks.length}개</div>
      <hr />
    </TodoHeadBlock>
  );
}

export default TodoHead;
