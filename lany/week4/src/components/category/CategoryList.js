import React from "react";

export default function CategoryList({ imgSrc, name }) {
  return (
    <div className="ctgName">
      <img src={imgSrc} alt="none" className="ctgImg" />
      {name}
    </div>
  );
}
