import express from "express";
import { PurchaseController } from "./purchase.controller";

const router = express.Router();

router.post("/create-purchase", PurchaseController.createPurchase);
router.get("/get-purchases", PurchaseController.getAllPurchases);

export const PurchaseRoutes = router;
