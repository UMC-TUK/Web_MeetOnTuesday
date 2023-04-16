import React from "react";

export default function TopBar() {
  return (
    // 회원가입, 로그인, 고객센터>
    <div style={{ fontSize: "12px", textAlign: "right", marginRight: "190px" }}>
      <span class="topBar" style={{ color: "rgb(95, 0, 128)" }}>
        회원가입
      </span>
      <span class="topBar" style={{ borderLeft: "1px solid rgb(217, 217, 217)", borderRight: "1px solid rgb(217, 217, 217)" }}>
        로그인
      </span>
      <span class="help">
        고객센터 ▾
        <div class="helpContainer">
          <div class="helpBox">
            <a href="/" class="helpList">
              공지사항
            </a>
            <a href="/" class="helpList">
              자주하는 질문
            </a>
            <a href="/" class="helpList">
              1:1 문의
            </a>
            <a href="/" class="helpList">
              대량주문 문의
            </a>
          </div>
        </div>
      </span>
    </div>
  );
}
