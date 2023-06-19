import React from "react";
import styled from "styled-components";

export default function FormHeader() {
  return (
    <FormHeaderWrap>
      <h1>연락처 정보</h1>
      <p>본인의 연락처 정보를 적어주세요!</p>
    </FormHeaderWrap>
  );
}

const FormHeaderWrap = styled.div`
  width: 800px;
  background-color: #fff;
  padding: 20px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;
  border-top: 10px solid rgb(84, 34, 168);
  box-sizing: border-box;
  > h1 {
    font-weight: 400;
    font-size: 40px;
    margin-top: 10px;
    margin-left: 10px;
  }
  > p {
    font-size: 20px;
    margin-left: 10px;
  }
`;
