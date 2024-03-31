import React, { Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { URL } from "@constants";
import routes from "./routes";
import Layout from "@layout";
import { Loader } from "@components";

const ProtectedRoute = () => {
  const location = useLocation();
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes location={location}>
          {routes.map((routeConfig) => (
            <Route {...routeConfig} key={routeConfig.path} />
          ))}
          <Route path='*' element={<Navigate to={URL.DASHBOARD} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default ProtectedRoute;
