import { type Request, type Response } from 'express';
import { getPlayerService } from '../../services/players/get-players.services.js';

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
