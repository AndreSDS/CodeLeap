import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SignUp, Home } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "/home", element: <Home /> },
]);

export const Router = () => <RouterProvider router={router} />;
