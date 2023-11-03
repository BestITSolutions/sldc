import type { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";

export const routes: RouteObject[] = [
  {
    path: "home",
    element: <Dashboard />,
  },
];
