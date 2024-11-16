import express from "express";
import { FormController } from "./form.controller";

const router = express.Router();

router.post("/webhook", FormController.getFormInfo);

export const FormRoutes = router;
