import { type Request, type Response } from "express";
import { getClubsService } from "../../services/clubs/get-clubs.services.js";

export const getClubs = async (_req: Request, res: Response) => {
  const httpResponse = await getClubsService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
