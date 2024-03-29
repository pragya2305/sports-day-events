import React from "react";
import { URL } from "../../../enums";

const Dashboard = React.lazy(() => import("../../../screens/Dashboard"));

const routes = [
  {
    path: URL.DASHBOARD,
    element: <Dashboard />,
    exact: true,
  },
];

export default routes;
