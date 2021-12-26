import express = require("firebase-functions/node_modules/@types/express");
import rootRouter from "./router";
function app(...middlewares: any[]) {
  const app = express();
  for (const middleware of middlewares) {
    app.use(middlewares);
  }
  return app.use(rootRouter)
}

export default app;
