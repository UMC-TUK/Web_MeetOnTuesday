import React from "react";
import CategoryList from "./CategoryList";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const CtgLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

const CtgImg = styled.div`
  width: 25px;
  margin-right: 10px;
`;

const New = styled.span`
  background-color: orangered;
  color: white;
  border-radius: 50px;
  width: 7px;
  padding: 3px 5px 2px 5px;
  font-size: 10px;
  font-weight: 800;
  position: relative;
  bottom: 2px;
  margin-left: 5px;
`;

const Notice = styled.div`
  font-weight: 500;
  margin-left: 40px;
  margin-right: 100px;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 20px;
  padding: 7px 15px 7px 15px;
  font-size: 13px;
`;

export default function CategoryBar({ isMarket }) {
  const navigate = useNavigate();
  const marketCtg = [
    ["https://collection-image.kurly.com/site-category-groups/1/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png", "채소"],
    ["https://collection-image.kurly.com/site-category-groups/2/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png", "과일·견과·쌀"],
    ["https://collection-image.kurly.com/site-category-groups/3/fivaoZPBTeqaDswJUgr3k0xMV0von36Qb9qnn7ZZ.png", "수산·해산·건어물"],
    ["https://collection-image.kurly.com/site-category-groups/4/jj6zZg2sY94aytlc2k1udIAmWWvmUignR9VYaMcm.png", "정육·계란"],
    ["https://collection-image.kurly.com/site-category-groups/5/CkyoRnUe2q9ngIOLW3bJPRYBw9xq9BHZ3fNQIq1c.png", "국·반찬·메인요리"],
    ["https://collection-image.kurly.com/site-category-groups/6/kwat5Szmq0ONTpMd4hlbcGmCOBd3FsMPyTzWxKBb.png", "샐러드·간편식"],
    ["https://collection-image.kurly.com/site-category-groups/7/CL0LpJynh8Nh2Vqmnm62RVTPePWVU84VkWwQPjdO.png", "면·양념·오일"],
    ["https://collection-image.kurly.com/site-category-groups/9/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png", "간식·과자·떡"],
  ];
  const beautyCtg = [
    ["https://collection-image.kurly.com/site-category-groups/37/XEDwObHGlgg2ptryOfwf6D5BkPN6hnzBWjNixWWT.png", "스킨케어"],
    ["https://collection-image.kurly.com/site-category-groups/38/jFrQQQLnAfeerlLoxuotfd7iVwMplTbBkxvaT016.png", "메이크업"],
    ["https://collection-image.kurly.com/site-category-groups/39/1oZUXregXMMHPCuaTwBnSMKBIeCm8sar5jD059hg.png", "클렌징"],
    ["https://collection-image.kurly.com/site-category-groups/40/JcC8245LElcdUJpgdu3T9lJYwiddXEj3uIWfAVsK.png", "선케어"],
    ["https://collection-image.kurly.com/site-category-groups/41/shTEpfl3joB8QRikkWiPlJ9JD0f93t1FcqgYxly5.png", "헤어케어"],
    ["https://collection-image.kurly.com/site-category-groups/42/qShrl1L9RQRtqjO8maUcV6IzN9qPa5kh03lxo4H7.png", "바디케어"],
    ["https://collection-image.kurly.com/site-category-groups/43/Af3IfTlHNuzM7xxWx9LbFSdZOl5scCtYctGnGCGU.png", "구강·위생용품"],
    ["https://collection-image.kurly.com/site-category-groups/44/WF66c2ZhodM2dOgSY2JKqdcLDYpiso2OKEd8FzUT.png", "향수·디퓨저"],
    ["https://collection-image.kurly.com/site-category-groups/45/v8a0soawBJqLLsyvkR2rr3JT1MdRgCQDwpz62NdO.png", "유아동"],
    ["https://collection-image.kurly.com/site-category-groups/8/bKllScRqF9gQ5q58LcmBfOOhgBrCOdVypPiRvQkL.png", "생수·음료·우유·커피"],
  ];
  const bars = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
  const onClick = (e) => {
    let pageName = e.target.innerText;
    if (pageName === "신상품") {
      pageName = "newproducts";
    } else if (pageName === "베스트") {
      pageName = "best";
    } else if (pageName === "알뜰쇼핑") {
      pageName = "timesales";
    } else {
      pageName = "benefits";
    }
    navigate(isMarket ? `/${pageName}` : `/beauty/${pageName}`);
  };
  const categories = isMarket ? marketCtg : beautyCtg;
  return (
    <>
      {/*  카테고리 줄  */}
      <CtgLine>
        <div className="ctg">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
            alt="none"
            style={{ marginRight: "10px", width: "20px" }}
          />
          <span className="ctgList">카테고리</span>
          {/* 카테고리 호버시 뜨는 창  */}
          <div className="ctgContainer">
            <div className="ctgName">
              <CtgImg src="https://collection-image.kurly.com/site-category-groups/64/uLGEwpuF6ooQABMNjbdEyDZd6h2YTHdkCgU8yve3.png" alt="none" />
              4월 뷰티컬리페스타
              <New>N</New>
            </div>
            {categories.map((category, index) => {
              return <CategoryList imgSrc={category[0]} name={category[1]} key={`category${index}`} />;
            })}
          </div>
        </div>
        {bars.map((bar, index) => {
          return (
            <div onClick={(e) => onClick(e)} className="list" key={`bar${index}`}>
              {bar}
            </div>
          );
        })}
        <Notice>
          <span style={{ color: "rgb(86, 12, 123)" }}>샛별・택배</span>
          <span style={{ color: "rgb(102, 102, 102)" }}> 배송안내</span>
        </Notice>
      </CtgLine>
    </>
  );
}
