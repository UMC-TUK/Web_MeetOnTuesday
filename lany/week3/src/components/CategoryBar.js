import React from "react";
import CategoryList from "./CategoryList";

export default function CategoryBar() {
  const categories = [
    ["https://collection-image.kurly.com/site-category-groups/37/XEDwObHGlgg2ptryOfwf6D5BkPN6hnzBWjNixWWT.png", "스킨케어"],
    ["https://collection-image.kurly.com/site-category-groups/38/jFrQQQLnAfeerlLoxuotfd7iVwMplTbBkxvaT016.png", "메이크업"],
    ["https://collection-image.kurly.com/site-category-groups/39/1oZUXregXMMHPCuaTwBnSMKBIeCm8sar5jD059hg.png", "클렌징"],
    ["https://collection-image.kurly.com/site-category-groups/40/JcC8245LElcdUJpgdu3T9lJYwiddXEj3uIWfAVsK.png", "선케어"],
    ["https://collection-image.kurly.com/site-category-groups/41/shTEpfl3joB8QRikkWiPlJ9JD0f93t1FcqgYxly5.png", "헤어케어"],
    ["https://collection-image.kurly.com/site-category-groups/42/qShrl1L9RQRtqjO8maUcV6IzN9qPa5kh03lxo4H7.png", "바디케어"],
    ["https://collection-image.kurly.com/site-category-groups/43/Af3IfTlHNuzM7xxWx9LbFSdZOl5scCtYctGnGCGU.png", "구강·위생용품"],
    ["https://collection-image.kurly.com/site-category-groups/44/WF66c2ZhodM2dOgSY2JKqdcLDYpiso2OKEd8FzUT.png", "향수·디퓨저"],
    ["https://collection-image.kurly.com/site-category-groups/45/v8a0soawBJqLLsyvkR2rr3JT1MdRgCQDwpz62NdO.png", "유아동"],
  ];
  return (
    <>
      {/*  카테고리 줄  */}
      <div class="ctgLine">
        <div class="ctg">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
            alt="none"
            style={{ marginRight: "10px", width: "20px" }}
          />
          <span class="ctgList">카테고리</span>
          {/* 카테고리 호버시 뜨는 창  */}
          <div class="ctgContainer">
            <div class="ctgName">
              <img src="https://collection-image.kurly.com/site-category-groups/64/uLGEwpuF6ooQABMNjbdEyDZd6h2YTHdkCgU8yve3.png" alt="none" class="ctgImg" />
              4월 뷰티컬리페스타
              <span
                style={{
                  backgroundColor: "orangered",
                  color: "white",
                  borderRadius: "50px",
                  width: "7px",
                  padding: "3px 5px 2px 5px",
                  fontSize: "10px",
                  fontWeight: "800",
                  position: "relative",
                  bottom: "2px",
                  marginLeft: "5px",
                }}
              >
                N
              </span>
            </div>
            {categories.map((category, index) => {
              return <CategoryList imgSrc={category[0]} name={category[1]} key={`category${index}`} />;
            })}
          </div>
        </div>
        <a href="/" class="list">
          신상품
        </a>
        <a href="/" class="list">
          베스트
        </a>
        <a href="/" class="list">
          알뜰쇼핑
        </a>
        <a href="/" class="list">
          특가/혜택
        </a>

        <div
          style={{
            fontWeight: "500",
            marginLeft: "40px",
            marginRight: "100px",
            border: " 1px solid rgb(238, 238, 238)",
            borderRadius: "20px",
            padding: "7px 15px 7px 15px",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "rgb(86, 12, 123)" }}>샛별・택배</span>
          <span style={{ color: "rgb(102, 102, 102)" }}> 배송안내</span>
        </div>
      </div>
    </>
  );
}
