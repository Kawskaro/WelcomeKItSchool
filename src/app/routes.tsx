import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Documents } from "./pages/Documents";
import { Help } from "./pages/Help";
import { Home } from "./pages/Home";
import { SchoolInfo } from "./pages/SchoolInfo";
import { Steps } from "./pages/Steps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "pasos", Component: Steps },
      { path: "documentos", Component: Documents },
      { path: "escuela", Component: SchoolInfo },
      { path: "ayuda", Component: Help },
    ],
  },
]);
