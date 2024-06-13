import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/add-form",
    element: <FormPage />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
