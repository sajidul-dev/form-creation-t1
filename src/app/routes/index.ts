import express from "express";
import { FormRoutes } from "../modules/form/form.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/get-form-data",
    route: FormRoutes,
  },
];

for (const route of moduleRoutes) {
  router.use(route.path, route.route);
}

export default router;
