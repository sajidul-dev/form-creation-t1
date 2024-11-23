import express from "express";
import { FormRoutes } from "../modules/form/form.route";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { PurchaseRoutes } from "../modules/purchase/purchase.route";

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
  {
    path: "/purchase",
    route: PurchaseRoutes,
  },
];

for (const route of moduleRoutes) {
  router.use(route.path, route.route);
}

export default router;
