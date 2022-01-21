import { Router } from "express";
import { requireUser } from "../../middlewares/requireUser";
import * as userController from "./user.controller";
const userRouter = Router();

userRouter.get("/", requireUser, userController.getUsers);
userRouter.get("/:id", requireUser, userController.getUser);
userRouter.post("/", requireUser, userController.createUser);
userRouter.put("/:id", requireUser, userController.updateUser);
userRouter.delete("/:id", requireUser, userController.deleteUser);

export default userRouter;
