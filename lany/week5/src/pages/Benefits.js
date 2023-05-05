import React from "react";
import { useNavigate } from "react-router-dom";

export default function Benefits({ isMarket }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(isMarket ? "/" : "/beauty");
  };
  return (
    <>
      <h1>{isMarket ? "마켓컬리" : "뷰티컬리"} 특가/혜택 페이지입니다.</h1>
      <button onClick={onClick}>홈으로</button>
    </>
  );
}
