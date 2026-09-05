import { type Request, type Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../../services/players/get-players.services.js';
import { createPlayerService, type NewPlayerData } from '../../services/players/create-players.services.js';
import { updatePlayerService } from '../../services/players/update-players.services.js';
import { deletePlayerService } from '../../services/players/delete-players.services.js';

const getPlayerId = (req: Request): number | undefined => {
  const id = Number(req.params.id);
  return Number.isInteger(id) && id > 0 ? id : undefined;
};

const hasPlayerData = (playerData: Partial<NewPlayerData>): playerData is NewPlayerData => (
  Boolean(
    playerData.name &&
    playerData.club &&
    playerData.nationality &&
    playerData.position &&
    playerData.statistics
  )
);

export const getPlayers = async (_req: Request, res: Response) => {
  const httpResponse = await getPlayerService()

  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getPlayerById = async (req: Request, res: Response) => {
  const id = getPlayerId(req);

  if (!id) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
  const playerData = req.body as Partial<NewPlayerData>;

  if (!hasPlayerData(playerData)) {
    return res.status(400).json({ error: 'Missing required player data' });
  }

  const httpResponse = await createPlayerService(playerData as NewPlayerData);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = getPlayerId(req);
  const playerData = req.body as Partial<NewPlayerData>;

  if (!id) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  if (!hasPlayerData(playerData)) {
    return res.status(400).json({ error: 'Missing required player data' });
  }

  const httpResponse = await updatePlayerService(id, playerData);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = getPlayerId(req);

  if (!id) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
