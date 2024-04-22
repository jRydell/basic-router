import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { ProfilesPage } from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfilesPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/profiles",
        element: <ProfilesPage />,
      },
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
