import React from "react";

export default function MarketProducts({ imgSrc, name, content, salePercent, salePrice, price, review }) {
  return (
    <>
      <div className="imgWrap">
        <div style={{ display: "flex", overflow: "hidden" }}>
          <img src={imgSrc} alt="none" className="imgBox" />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="none"
            className="kart"
          />
        </div>
        <div className="deliver">샛별배송</div>
        <div className="product">{name}</div>
        <div className="content">{content}</div>
        <div className="price">
          <span style={{ color: "orangered", fontWeight: "700" }}>{salePercent}</span>
          {salePrice}
        </div>
        <span className={!!salePercent ? "regularPrice" : "price"}>{price} </span>
        {!!review ? (
          <div className="review">
            <img src="/images/typing.png" alt="none" className="reviewIcon" />
            <span className="reviewNum">{review}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
