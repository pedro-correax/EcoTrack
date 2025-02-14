import { RouteObject } from "react-router-dom";
import Login from "../pages/Login/index";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import UserProfile from "../pages/Profile";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Tipes from "../pages/Tipes";
import Dashboard from "../pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tipes",
    element: (
      <ProtectedRoute>
        <Tipes />
      </ProtectedRoute>
    ),
  },
  {
    path: "/logout",
    element: (
      <ProtectedRoute>
        <Logout />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <ProtectedRoute>
        <NotFound />
      </ProtectedRoute>
    ),
  },
];
