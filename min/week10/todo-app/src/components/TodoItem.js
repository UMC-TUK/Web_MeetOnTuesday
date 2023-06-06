import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { complete_todo, delete_todo } from "../redux/actions";
import { Link } from "react-router-dom";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #6a2d8b;
      color: #6a2d8b;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #fdf5e6;
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      font-weight: bold;
      color: #495057;
    `}
`;
function TodoItem({ id, done, text }) {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(complete_todo(id));
  const onRemove = () => dispatch(delete_todo(id));
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Link to={`/detail/${id}`}>
        <Text done={done}>{text}</Text>
      </Link>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
