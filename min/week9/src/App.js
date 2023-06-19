import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";

function App() {
  const access = localStorage.getItem("access_token");
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/main"
        element={<PrivateRoute authenticated={access} component={<Main />} />}
      />
    </Routes>
  );
}

export default App;
