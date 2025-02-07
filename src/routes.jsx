import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Contact } from "./pages/Contact";
import Project from "./pages/Project";

import Admin from "./pages/Admin";
import Login from "./pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/loginmathias",
        element: <Login />,
      },

    ],
  }
]);

export default router