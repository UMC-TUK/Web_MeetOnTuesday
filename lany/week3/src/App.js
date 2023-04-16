import React, { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";
import Root from "./pages/Root";

function App() {
  const [isMarket, setIsMarket] = useState(true);
  const setLocation = (loc) => {
    setIsMarket(loc);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Market isMarket={isMarket} setLocation={setLocation} /> },
        { path: "/beauty", element: <Beauty isMarket={isMarket} setLocation={setLocation} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
