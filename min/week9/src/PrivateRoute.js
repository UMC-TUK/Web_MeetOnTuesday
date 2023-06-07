import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ authenticated, component: Component }) {
  return authenticated ? (
    Component
  ) : (
    <Navigate to="/" {...alert("로그인 후 이용해주세요")} />
  );
}
