import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const allowedWriteOrigin = "https://nulldev.com.br";
const corsMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"];

export function createApp() {
  const app = express();

  app.use((req, res, next) => {
    const requestedMethod = req.method === "OPTIONS"
      ? req.header("Access-Control-Request-Method") ?? "OPTIONS"
      : req.method;
    const isPublicRead = requestedMethod === "GET" || requestedMethod === "HEAD";

    cors({
      origin: isPublicRead ? "*" : allowedWriteOrigin,
      methods: corsMethods,
      allowedHeaders: ["Content-Type", "Authorization"],
    })(req, res, next);
  });

  app.use(express.json());
  app.use("/api", router);

  return app;
}
