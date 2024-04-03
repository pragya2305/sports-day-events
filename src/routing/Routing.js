import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { URL } from "@constants";
import routes from "./routes";
import { Loader } from "@components";

const Routing = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((routeConfig) => (
          <Route {...routeConfig} key={routeConfig.path} />
        ))}
        <Route path='*' element={<Navigate to={URL.LOGIN} replace />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
