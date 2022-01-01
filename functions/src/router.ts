import { Router } from "express";
import routineRouter from "./modules/routine/routine.router";
import userRouter from "./modules/user/user.router";
const rootRouter = Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/routines", routineRouter);
export default rootRouter;
