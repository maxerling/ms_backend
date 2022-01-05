import { Request, Response, NextFunction } from "express";
import * as userService from "./user.service";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const uid = req.uid;
    const user = await userService.createUser(uid);
    res.send(user);
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id as string);
    res.send(user);
  } catch (error) {
    next(error);
  }
}

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await userService.getUsers();
    res.send(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newRoutine = req.body as User;
  try {
    const user = await userService.updateUser(newRoutine);
    res.send(user);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id as string);
    res.send(user);
  } catch (error) {
    next(error);
  }
}
