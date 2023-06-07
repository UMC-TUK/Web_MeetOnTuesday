import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setPasswd(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/main");
    }
  });

  const onClickBtn = () => {
    fetch("/dummy/dummy.json")
      .then((response) => response.json())
      .then((result) => {
        if (result[0].email === email && result[0].password === passwd) {
          localStorage.setItem("access_token", result[0].access_token);
          localStorage.setItem("email", result[0].email);
          window.location.replace("/main");
        } else {
          alert("회원정보가 존재하지 않습니다.");
        }
      });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h2>로그인</h2>
        <div id="auth">
          <input
            type="text"
            name="email"
            placeholder="email"
            maxLength="20"
            value={email}
            onChange={handleInputEmail}
            required
          />
          <input
            type="password"
            name="passwd"
            placeholder="password"
            maxLength="20"
            value={passwd}
            onChange={handleInputPw}
            required
          />
          <button className="button" onClick={onClickBtn}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
