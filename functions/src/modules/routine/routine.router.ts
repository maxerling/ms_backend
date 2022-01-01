import { Router } from "express";
import * as routineController from "./routine.controller";
const routineRouter = Router();

routineRouter.get("/", routineController.getRoutines);
routineRouter.get("/:id", routineController.getRoutine);
routineRouter.post("/", routineController.createRoutine);
routineRouter.put("/", routineController.updateRoutine);
routineRouter.delete("/:id", routineController.deleteRoutine);

export default routineRouter;
