import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const REST_API_KEY = `${process.env.REACT_APP_KAKAO_API}`;
  const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div className="container">
      <div className="wrapper">
        <h2>로그인</h2>
        <div id="auth">
          <input type="text" name="email" placeholder="email" required />
          <input
            type="password"
            name="passwd"
            placeholder="password"
            required
          />
          <input type="submit" value="로그인" />
        </div>
        <div className="social">
          <Link to={KAKAO_AUTH_URL}>
            <img src="images/kakao.png" alt="kakao" />
          </Link>
          <img src="images/facebook.png" alt="facebook" />
          <img src="images/google.png" alt="google" />
        </div>
      </div>
    </div>
  );
}
export default Login;
