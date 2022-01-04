import { Router } from "express";
import { requireUser } from "../../middlewares/requireUser";
import * as routineController from "./routine.controller";
const routineRouter = Router();

routineRouter.get("/", requireUser, routineController.getRoutines);
routineRouter.get("/:id", requireUser, routineController.getRoutine);
routineRouter.post("/", requireUser, routineController.createRoutine);
routineRouter.put("/", requireUser, routineController.updateRoutine);
routineRouter.delete("/:id", requireUser, routineController.deleteRoutine);

export default routineRouter;
