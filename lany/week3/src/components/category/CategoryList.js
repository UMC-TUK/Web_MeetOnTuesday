import React from "react";

export default function CategoryList({ imgSrc, name }) {
  return (
    <div class="ctgName">
      <img src={imgSrc} alt="none" class="ctgImg" />
      {name}
    </div>
  );
}
