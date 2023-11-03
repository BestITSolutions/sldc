import type { RouteObject } from "react-router-dom";
import { NewGroupCreate } from "../pages/NewGroup";

export const routes: RouteObject[] = [
  {
    path: "create-group",
    children: [{ index: true, element: <NewGroupCreate /> }],
  },
];
