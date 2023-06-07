import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const user = localStorage.getItem("email").split("@")[0];

  const clickLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "200px", lineHeight: "2" }}>
        안녕하세요~ {user}님<br />
        메인 페이지입니다.
      </h1>
      <button
        className="button"
        style={{ width: "120px" }}
        onClick={clickLogout}
      >
        로그아웃
      </button>
    </div>
  );
}
