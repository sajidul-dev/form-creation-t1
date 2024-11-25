import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductController.createProduct);

router.get("/get-products", ProductController.getAllProducts);

export const ProductRoutes = router;
