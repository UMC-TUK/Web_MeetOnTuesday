import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 700px;
  height: 800px;
  position: relative;
  background: #a69ddf;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
