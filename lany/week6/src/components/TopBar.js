import React from "react";

export default function TopBar() {
  return (
    // 회원가입, 로그인, 고객센터>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          fontSize: "12px",
          display: "flex",
          padding: "8px 100px 0px 100px",
          width: "1050px",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <span className="topBar" style={{ color: "rgb(95, 0, 128)" }}>
          회원가입
        </span>
        <span className="topBar" style={{ borderLeft: "1px solid rgb(217, 217, 217)", borderRight: "1px solid rgb(217, 217, 217)" }}>
          로그인
        </span>
        <span className="help">
          고객센터 ▼
          <div className="helpContainer">
            <div className="helpBox">
              <a href="/" className="helpList">
                공지사항
              </a>
              <a href="/" className="helpList">
                자주하는 질문
              </a>
              <a href="/" className="helpList">
                1:1 문의
              </a>
              <a href="/" className="helpList">
                대량주문 문의
              </a>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
