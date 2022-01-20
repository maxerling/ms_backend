import { Request, Response, NextFunction } from "express";
import { HttpsError } from "firebase-functions/v1/https";
import * as admin from "firebase-admin";

export async function requireUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      next(new HttpsError("permission-denied", "No token provided"));
    }
    const token = authorization!.split(" ")[1];
    const verifiedToken = await admin.auth().verifyIdToken(token, false);
    req.uid = verifiedToken.uid;
    next();
  } catch (error) {
    next(new HttpsError("permission-denied", "invalid token"));
  }
}
