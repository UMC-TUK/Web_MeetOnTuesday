import React from "react";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Preview({ setEmail, setName }) {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <div style={{ display: "flex", alignItems: "center", width: "500px", justifyContent: "space-between" }}>
          <h1>week8 Mission</h1>
        </div>
        <GoogleLoginBtn setEmail={setEmail} setName={setName} />
      </GoogleOAuthProvider>
    </div>
  );
}
