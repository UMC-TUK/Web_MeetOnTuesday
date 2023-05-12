import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  padding: 8px 100px 0px 100px;
  width: 1050px;
  justify-content: flex-end;
  align-items: center;
`;

const TBar = styled.span`
  padding-right: 10px;
  padding-left: 10px;
`;

const HelpList = styled.a`
  margin: 4px;
  font-size: 13px;
  text-decoration: none;
  color: black;
`;

const HelpContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const HelpBox = styled.div`
  border: 1px solid lightgrey;
  width: 95px;
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px;
  background-color: white;
`;

export default function TopBar() {
  return (
    // 회원가입, 로그인, 고객센터>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <TBar style={{ color: "rgb(95, 0, 128)" }}>회원가입</TBar>
        <TBar style={{ borderLeft: "1px solid rgb(217, 217, 217)", borderRight: "1px solid rgb(217, 217, 217)" }}>로그인</TBar>
        <TBar className="help">
          고객센터 ▼
          <HelpContainer className="helpContainer">
            <HelpBox className="helpBox">
              <HelpList className="helpList">공지사항</HelpList>
              <HelpList className="helpList">자주하는 질문</HelpList>
              <HelpList className="helpList">1:1 문의</HelpList>
              <HelpList className="helpList">대량주문 문의</HelpList>
            </HelpBox>
          </HelpContainer>
        </TBar>
      </Container>
    </div>
  );
}
