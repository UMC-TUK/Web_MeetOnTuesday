import React from "react";

export default function Main({ name, email }) {
  return (
    <>
      <h2>이름 : {name}</h2>
      <h2>이메일 : {email}</h2>
    </>
  );
}
