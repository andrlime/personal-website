import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./app.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Error404 from "./pages/Error404.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import RootPage from "./pages/RootPage.tsx";
import PhotosPage from "./pages/PhotosPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "photos", element: <PhotosPage /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
