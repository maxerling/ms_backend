import express from "express";
import rootRouter from "./router";

function app(...middlewares: any[]) {
  const app = express();
  for (const middleware of middlewares) {
    app.use(middleware);
  }
  return app.use(rootRouter);
}

export default app;
