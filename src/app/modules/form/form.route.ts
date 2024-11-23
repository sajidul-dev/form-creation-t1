import express from "express";
import { FormController } from "./form.controller";

const router = express.Router();

router.post("/webhook", FormController.createForm);

export const FormRoutes = router;
