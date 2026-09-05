import { type Request, type Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../../services/players/get-players.services.js';

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayersById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const httpResponse = await getPlayerByIdService(id)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
