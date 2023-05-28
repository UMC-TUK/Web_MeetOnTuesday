import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoCallback from "./KakaoCallback";
import Account from "./account";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/kakaoLogin" element={<KakaoCallback />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
