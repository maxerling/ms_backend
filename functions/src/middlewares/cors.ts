import { Request, Response, NextFunction } from "express";
import { HttpsError } from "firebase-functions/v1/https";

export async function corsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization,Access-Control-Allow-Origin"
    );

    next();
  } catch (error) {
    next(new HttpsError("permission-denied", "cors error"));
  }
}
