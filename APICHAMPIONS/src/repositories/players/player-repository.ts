import { dbPlayers } from "../../data/player-db.js";
import type { PlayerModel } from "../../models/player-model.js";

export const getAllPlayers = async (): Promise<PlayerModel[]> => {
  return dbPlayers;
}

export const getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const player = dbPlayers.find(player => player.id === id);
  return player || undefined;
}
