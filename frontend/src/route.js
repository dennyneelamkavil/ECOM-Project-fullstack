import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import useAuthStore from "./store/authStore";

const PrivateRoute = ({children}) => {
  const {isAuth} = useAuthStore();
  return isAuth ? children : <Navigate to="/login" />
};

export const router = createBrowserRouter([
  {
    path: "/",
    element:<PrivateRoute><HomePage /></PrivateRoute>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/add-form",
    element: <PrivateRoute><FormPage /></PrivateRoute>,
  },
  {
    path: "/edit-form/:id",
    element: <PrivateRoute><FormPage /></PrivateRoute>,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
