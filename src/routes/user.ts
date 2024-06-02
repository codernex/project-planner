import { Router } from "express";
import { userController } from "../controller";

export const userRoutes = Router();

userRoutes.get("/", userController.getUsers);