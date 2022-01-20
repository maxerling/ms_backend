import { Request, Response, NextFunction } from "express";
export function errorHandling(
  error: Error,
  request: Request,
  resp: Response,
  next: NextFunction
) {
  resp.status(500).send(error.message);
}
