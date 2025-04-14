import { Route, Routes } from "react-router";
import { routes } from "./routes.const";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) =>
        route.isPrivate ? (
          <Route element={<PrivateRoute />}>
            <Route key={route.path} path={route.path} element={route.element} />
          </Route>
        ) : (
          <Route key={route.path} path={route.path} element={route.element} />
        )
      )}
    </Routes>
  );
}

export default AppRoutes;
