import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import app from "./app";

admin.initializeApp();

export const api = functions.region("europe-west1").https.onRequest(app());
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
