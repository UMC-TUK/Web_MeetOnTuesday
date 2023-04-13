import React from "react";
import ProductDetail from "./ProductDetail";

export default function Products() {
  const products = [
    ["https://img-cf.kurly.com/shop/data/goods/1653955175878l0.jpg", "[조성아뷰티] 에이치 세럼 스틱 허니프로틴 10g", "60%", "9,900원", "25,000원", "후기 304"],
    ["https://img-cf.kurly.com/shop/data/goods/1655458440730l0.jpeg", "[비플레인] 녹두 약산성 클렌징 폼 80ml", "29%", "9,900원", "14,400원", "후기 999+"],
    [
      "https://product-image.kurly.com/product/image/26048a8b-c004-4eb0-bbdb-e39f33cefe0c.jpg",
      "[설화수] 자음 3종 세트",
      "5%",
      "191,900원",
      "202,000원",
      "후기 413",
    ],
    [
      "https://product-image.kurly.com/product/image/77e83f6c-ee90-44bf-a6da-8ae9adcc9e76.jpg",
      "[릴리바이레드] 무드 키보드 3종 (택 1)",
      "31%",
      "18,600원",
      "27,000원",
      "",
    ],
  ];
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "90px" }}>
        <span style={{ fontSize: "30px", fontWeight: "500", marginBottom: "10px" }}>이주의 혜택✨ 〉</span>
        <span style={{ color: "rgb(176, 176, 176)", marginBottom: "25px" }}>7일간 만날 수 있는 혜택 상품만 모아</span>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          {products.map((product, index) => {
            return (
              <ProductDetail
                imgSrc={product[0]}
                name={product[1]}
                salePercent={product[2]}
                salePrice={product[3]}
                price={product[4]}
                review={product[5]}
                key={`product${index}`}
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
