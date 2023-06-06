import React, { useState } from "react";
import styled from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { RiCalendarTodoFill } from "react-icons/ri";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvier } from "./TodoContext";

const Header = styled.div`
  width: 100%;
  display: flex;
  margin-right: 0;
`;

const MainTime = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  color: #aa54ae;
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  font-style: italic;
  margin-right: 20px;
`;

const MainTitle = styled.h1`
  color: #6850ba;
  text-align: center;
  margin-top: 10px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  height: 5rem;
  align-items: center;
  > p {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function Main() {
  const [time, setTime] = useState("00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    setTime(`${hours}:${minutes} ${ampm}`);
  };
  const startTime = () => {
    setInterval(currentTimer, 1000);
  };

  startTime();
  return (
    <TodoProvier>
      <Header>
        <MainTime>{time}</MainTime>
      </Header>

      <MainTitle>
        <RiCalendarTodoFill />
        <p>오늘의 할일</p>
        <RiCalendarTodoFill />
      </MainTitle>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvier>
  );
}

export default Main;
