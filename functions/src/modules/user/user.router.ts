import { Router } from "express";
import * as userController from "./user.controller";
const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
