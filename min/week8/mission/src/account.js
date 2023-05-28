import React, { useEffect, useState } from "react";
import "./App.css";

function Account() {
  const [user_id, setUserId] = useState();
  const [email, setEmail] = useState();
  // const getAccount = async () => {
  //   try {
  //     let data = await window.Kakao.API.request({
  //       url: "/v2/user/me",
  //     });
  //     console.log(data);
  //     setUserId(data.id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAccount();
  // }, []);
  return <div className="container">dd</div>;
}

export default Account;
