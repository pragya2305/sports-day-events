import React, { Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { URL } from "../../enums";
import routes from "./routes";
import Loader from "../../components/Loader";

const PublicRoute = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        {routes.map((routeConfig) => (
          <Route {...routeConfig} key={routeConfig.path} />
        ))}
        <Route path='*' element={<Navigate to={URL.LOGIN} replace />} />
      </Routes>
    </Suspense>
  );
};

export default PublicRoute;
