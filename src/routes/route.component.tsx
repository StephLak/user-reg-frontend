import { RouteProps as RouterProps } from "react-router-dom";
import ForgotPassword from "../pages/forgot-password/forgot-password";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home.component";

export type RouteProps = {
  key: number;
  isProtected?: boolean;
  isUnProtected?: boolean;
  redirectUrl?: string;
} & RouterProps;

export const BaseRoutes: RouteProps[] = [
  {
    key: 1,
    path: "/",
    component: Home,
    isProtected: false,
    exact: true,
  },
  {
    key: 2,
    path: "/login",
    component: Login,
    isUnProtected: true,
    exact: true,
  },

  {
    key: 3,
    path: "/register",
    component: Register,
    isUnProtected: true,
    exact: true,
    redirectUrl: "",
  },

  {
    key: 4,
    path: "/forgot-password",
    component: ForgotPassword,
    isUnProtected: true,
    exact: true,
  },
];
