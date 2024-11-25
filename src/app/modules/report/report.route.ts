import express from "express";
import { ReportController } from "./report.controller";

const router = express.Router();

router.post("/insert-data", ReportController.insertData);

export const ReportRoutes = router;
