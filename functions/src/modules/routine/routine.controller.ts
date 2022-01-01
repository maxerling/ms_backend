import { Request, Response, NextFunction } from "express";
import * as routineService from "./routine.service";
export async function getRoutines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const routines = await routineService.getRoutines();
    res.send(routines);
  } catch (err) {
    next(err);
  }
}

export async function getRoutine(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const routine = await routineService.getRoutine(id as string);
    res.send(routine);
  } catch (err) {
    next(err);
  }
}

export function createRoutine(req: Request, res: Response, next: NextFunction) {
  try {
    const routine = req.body as Routine;
    routineService.createRoutine(routine);
  } catch (err) {
    next(err);
  }
}

export async function deleteRoutine(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const routines = await routineService.deleteRoutine(id as string);
    res.send(routines);
  } catch (err) {
    next(err);
  }
}
export async function updateRoutine(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const updatedRoutine = req.body;
    const routines = await routineService.updateRoutine(updatedRoutine);
    res.send(routines);
  } catch (err) {
    next(err);
  }
}
