import express from "express";
// import validateRequest from "../../middleware/validateRequest";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);

export const UserRoutes = router;
