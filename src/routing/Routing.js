import React from "react";
import { AUTH_STATUS } from "@constants";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthSlice } from "../redux/slice";

const Routing = () => {
  const { userAuthStatus } = useAuthSlice();
  switch (userAuthStatus) {
    case AUTH_STATUS.AUTHORIZED: {
      return <ProtectedRoute />;
    }
    case AUTH_STATUS.UNAUTHORIZED: {
      return <PublicRoute />;
    }
    default:
      return null;
  }
};

export default Routing;
