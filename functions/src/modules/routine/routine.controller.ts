import { Request, Response, NextFunction } from "express";
import * as routineService from "./routine.service";
export async function getRoutines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resp = await routineService.getRoutines();
    res.status(200).send(resp);
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
    const resp = await routineService.getRoutine(id as string);
    res.status(200).send(resp);
  } catch (err) {
    next(err);
  }
}

export async function createRoutine(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const routine = req.body as Routine;

    await routineService.createRoutine(routine);
    res.status(200).send();
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
