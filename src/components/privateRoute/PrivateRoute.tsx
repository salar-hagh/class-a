import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Navigate, Outlet } from "react-router";

function PrivateRoute() {
  const { isLogin } = useContext(AppContext);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
