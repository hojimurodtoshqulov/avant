import { Route, Routes } from "react-router-dom";

export const routeGenerator = (routes) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
