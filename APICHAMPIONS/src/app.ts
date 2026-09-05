import express, { type Request, type Response } from "express";
import { getPlayers } from "./controllers/players-controller.js";
import { router } from "./routes/routes.js";


export function createApp() {
  const app = express();
  app.use(express.json())
  app.use('/api', router)

  return app;
}
