import React from "react";
import { URL } from "@constants";
import Layout from "@layout";

const Login = React.lazy(() => import("@screens/Login"));
const Logout = React.lazy(() => import("@screens/Logout"));
const Dashboard = React.lazy(() => import("@screens/Dashboard"));

const routes = [
  {
    path: URL.LOGIN,
    exact: true,
    element: <Login />,
  },
  {
    path: URL.LOGOUT,
    element: <Logout />,
    exact: true,
  },
  {
    path: URL.DASHBOARD,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
    exact: true,
  },
];

export default routes;
