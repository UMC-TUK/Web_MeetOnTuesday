import React from "react";
import BeautyProducts from "./BeautyProducts";
import MarketProducts from "./MarketProducts";
import { useDispatch, useSelector } from "react-redux";

export default function Products({ isMarket }) {
  const dispatch = useDispatch();
  const market = useSelector((state) => state.m_products);
  const beauty = useSelector((state) => state.b_products);
  const products = isMarket ? market : beauty;
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "90px" }}>
        <span style={{ fontSize: "30px", fontWeight: "500", marginBottom: "10px" }}>{isMarket ? "이 상품 어때요?" : "이주의 혜택✨ 〉"}</span>
        <span style={{ color: "rgb(176, 176, 176)", marginBottom: "25px" }}>{isMarket ? "" : "7일간 만날 수 있는 혜택 상품만 모아"}</span>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          {products.map((product, index) => {
            return isMarket ? (
              <MarketProducts
                imgSrc={product[0]}
                name={product[1]}
                content={product[2]}
                salePercent={product[3]}
                salePrice={product[4]}
                price={product[5]}
                review={product[6]}
                key={`marekt${index}`}
              />
            ) : (
              <BeautyProducts
                imgSrc={product[0]}
                name={product[1]}
                salePercent={product[2]}
                salePrice={product[3]}
                price={product[4]}
                review={product[5]}
                key={`beauty${index}`}
              />
            );
          })}
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgc3Ryb2tlPSIjRTNFM0UzIiBzdHJva2Utd2lkdGg9IjEuMiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEuNCIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTI4LjQ0NCAyMS4zMzMgMTEuMzc4IDExLjY5OC0xMS4zNzggMTEuMDU4Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
            alt="none"
            style={{ height: "60px", position: "relative", right: "50px", top: "124.5px" }}
          />
        </div>
      </div>
    </>
  );
}
