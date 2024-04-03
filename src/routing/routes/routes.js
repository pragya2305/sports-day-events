import React from "react";
import { URL } from "@constants";
import ProtectedRoute from "../ProtectedRoute";

const Login = React.lazy(() => import("@screens/Login"));
const Dashboard = React.lazy(() => import("@screens/Dashboard"));

const routes = [
  {
    path: URL.LOGIN,
    exact: true,
    element: <Login />,
  },
  {
    path: URL.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    exact: true,
  },
];

export default routes;
