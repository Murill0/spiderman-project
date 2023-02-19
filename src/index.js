import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/pages/About";
import App from "./App";
import Contact from "./components/pages/Contact";
import Job from "./components/pages/Job";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "job",
      element: <Job />
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);