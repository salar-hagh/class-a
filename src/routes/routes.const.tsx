import { lazy } from "react";
// import Store from "../pages/store/Store";
const Store = lazy(() => import("../pages/store/Store"));
const Product = lazy(() => import("../pages/product/Product"));
const Login = lazy(() => import("../pages/login/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Cart = lazy(() => import("../pages/cart/Cart"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/store",
    element: <Store />,
    isPrivate: false,
  },
  {
    path: "/cart",
    element: <Cart />,
    isPrivate: false,
  },
  {
    path: "/product/:id",
    element: <Product />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    isPrivate: true,
  },
];
