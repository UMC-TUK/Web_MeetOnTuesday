import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preview from "./Preview";
import Root from "./Root";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Preview setEmail={setEmail} setName={setName} /> },
        { path: "main", element: <Main name={name} email={email} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
