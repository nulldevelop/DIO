import { type Request, type Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../../services/players/get-players.services.js';

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getPlayerById = async (req: Request, res: Response) => {
  const rawId = req.params.id;
  const id = typeof rawId === 'string' ? parseInt(rawId, 10) : NaN;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
