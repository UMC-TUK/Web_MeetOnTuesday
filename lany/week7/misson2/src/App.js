import React, { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";
import Root from "./pages/Root";
import Best from "./pages/Best";
import NewProducts from "./pages/NewProducts";
import TimeSales from "./pages/TimeSales";
import Benefits from "./pages/Benefits";

function App() {
  const [isMarket, setIsMarket] = useState(true);

  useEffect(() => {
    console.log("Mounting");
  }, []);

  const setLocation = (loc) => {
    setIsMarket(loc);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ path: "", element: <Market isMarket={isMarket} setLocation={setLocation} /> }],
    },
    {
      path: "/beauty",
      element: <Root />,
      children: [{ path: "", element: <Beauty isMarket={isMarket} setLocation={setLocation} /> }],
    },
    {
      path: isMarket ? "/" : "/beauty",
      element: <Root />,
      children: [
        { path: "best", element: <Best isMarket={isMarket} /> },
        { path: "newproducts", element: <NewProducts isMarket={isMarket} /> },
        { path: "timesales", element: <TimeSales isMarket={isMarket} /> },
        { path: "benefits", element: <Benefits isMarket={isMarket} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
