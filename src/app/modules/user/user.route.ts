import express from "express";
// import validateRequest from "../../middleware/validateRequest";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/get-users", UserController.getUsers);
export const UserRoutes = router;
