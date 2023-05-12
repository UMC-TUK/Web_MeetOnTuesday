import React from "react";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import CategoryBar from "../components/category/CategoryBar";
import Banner from "../components/Banner";
import Products from "../components/product/Products";
import Bottom from "../components/Bottom";

export default function Beauty({ isMarket, setLocation }) {
  return (
    <>
      <TopBar />
      <SearchBar isMarket={isMarket} setLocation={setLocation} />
      <CategoryBar isMarket={isMarket} />
      <Banner isMarket={isMarket} />
      <Products isMarket={isMarket} />
      <Bottom />
    </>
  );
}
