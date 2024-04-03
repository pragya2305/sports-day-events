import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_STATUS, URL } from "@constants";
import Layout from "@layout";
import { useAuthSlice } from "@redux/slice";

const ProtectedRoute = ({ children }) => {
  const { userAuthStatus } = useAuthSlice();
  const navigate = useNavigate();

  useEffect(() => {
    if (userAuthStatus !== AUTH_STATUS.AUTHORIZED) {
      navigate(URL.LOGIN, { replace: true });
    }
  }, [navigate, userAuthStatus]);

  return <Layout>{children}</Layout>;
};

export default ProtectedRoute;
