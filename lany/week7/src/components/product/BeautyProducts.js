import React from "react";
import { styled } from "styled-components";

const ImgWrap = styled.div`
  width: 249px;
  height: 320px;
  margin-right: 15px;
  margin-bottom: 200px;
`;

const Kart = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  top: 255px;
  right: 65px;
`;

const Deliver = styled.div`
  margin-top: 15px;
  color: rgb(176, 176, 176);
  font-size: 14px;
  font-weight: 500;
`;

const Product = styled.div`
  margin-top: 5px;
  font-size: 18px;
`;

const Review = styled.div`
  margin-top: 10px;
  display: flex;
`;

const ReviewNum = styled.span`
  font-size: 13px;
  color: rgb(176, 176, 176);
  font-weight: 500;
`;

export default function ProductDetail({ imgSrc, name, salePercent, salePrice, price, review }) {
  return (
    <>
      <ImgWrap>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <img src={imgSrc} alt="none" className="imgBox" />
          <Kart
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="none"
          />
          <div style={{ fontSize: "14px", backgroundColor: "rgb(184, 131, 243)", color: "white", fontWeight: "700", padding: "7px", position: "absolute" }}>
            30%쿠폰 +증정
          </div>
        </div>
        <Deliver>샛별배송</Deliver>
        <Product>{name}</Product>
        <div className="price">
          <span style={{ color: "orangered", fontWeight: "700" }}>{salePercent}</span>
          {salePrice}
        </div>
        <div className="regularPrice">{price}</div>
        {!!review ? (
          <Review>
            <img src="/images/typing.png" alt="none" className="reviewIcon" />
            <ReviewNum>{review}</ReviewNum>
          </Review>
        ) : (
          ""
        )}
      </ImgWrap>
      ;
    </>
  );
}
