import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import CategoryBar from "./components/CategoryBar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Bottom from "./components/Bottom";

function App() {
  return (
    <>
      <TopBar />
      <SearchBar />
      <CategoryBar />
      <Banner />
      <Products />
      <Bottom />
    </>
  );
}

export default App;
