import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import app from "./app";
import { corsHandler } from "./middlewares/cors";
import { errorHandling } from "./middlewares/errorHandling";

import rootRouter from "./router";
admin.initializeApp();
export const db = admin.firestore();

export const api = functions
  .region("europe-west1")
  .https.onRequest(app(corsHandler, rootRouter, errorHandling));
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
