import RootLayout from "./root-layout.tsx";
import ErrorPage from "../features/error-page/error-page.tsx";
import { routes as newGroupRoute } from "./new-group.tsx";
import { routes as indexRoute } from "./index-route.tsx";
import { Navigate, RouteObject } from "react-router-dom";

export const RootRoute: RouteObject = {
  path: "/",
  element: <RootLayout />,
  children: [
    ...newGroupRoute,
    ...indexRoute,
    { index: true, element: <Navigate replace to="/create-group" /> },
  ],
  errorElement: <ErrorPage />,
};
