import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/actions";

const CircleButton = styled.button`
  background: #c45fdd;
  &:hover {
    background: #d396d3;
  }
  &:active {
    background: #d050d0;
  }
  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: block;
  align-item: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 45%;
  bottom: 0px;
  transform: translate(-20%, 35%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  jusitfy-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-20%, 35%) rotate(45deg);
    `}
`;

const InserFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  postion: absolute;
`;

const InsertForm = styled.form`
  background: #ffe6e6;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      text: value,
      done: false,
    };
    dispatch(add_todo(todo));
    setValue("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InserFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InserFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
