import express from "express";
import { FormController } from "./form.controller";

const router = express.Router();

router.get("/webhook", FormController.getFormInfo);

export const FormRoutes = router;
