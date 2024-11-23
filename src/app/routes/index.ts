import express from "express";
import { FormRoutes } from "../modules/form/form.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/get-form-data",
    route: FormRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
];

for (const route of moduleRoutes) {
  router.use(route.path, route.route);
}

export default router;
