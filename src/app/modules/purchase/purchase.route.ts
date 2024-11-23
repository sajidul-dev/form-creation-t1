import express from "express";
import { PurchaseController } from "./purchase.controller";

const router = express.Router();

router.post("/create-purchase", PurchaseController.createPurchase);

export const PurchaseRoutes = router;
