import { RouteProps as RouterProps } from "react-router-dom";
import Login from "../pages/login/login";

export type RouteProps = {
  key: number;
  isProtected?: boolean;
  isUnProtected?: boolean;
  redirectUrl?: string;
} & RouterProps;

export const BaseRoutes: RouteProps[] = [
  // {
  //   key: 1,
  //   path: "/",
  //   component: HomePage,
  //   exact: true,
  // },

  {
    key: 2,
    path: "/login",
    component: Login,
    isUnProtected: true,
    exact: true,
  },

  // {
  //   key: 3,
  //   path: "/register",
  //   component: SignUpPage,
  //   isUnProtected: true,
  //   exact: true,
  //   redirectUrl: "",
  // },
  // {
  //   key: 4,
  //   path: "/forgot-password",
  //   component: ForgotPasswordPage,
  //   isUnProtected: true,
  //   exact: true,
  // },
];
