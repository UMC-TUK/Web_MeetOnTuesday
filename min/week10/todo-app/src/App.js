import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
