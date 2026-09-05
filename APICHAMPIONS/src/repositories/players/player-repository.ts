import { dbPlayers } from "../../data/player-db.js";
import type { PlayerModel } from "../../models/player-model.js";

export const getAllPlayers = async (): Promise<PlayerModel[]> => {
  return dbPlayers;
}

export const getPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const player = dbPlayers.find(player => player.id === id);
  return player || undefined;
}

export const createPlayer = async (playerData: Omit<PlayerModel, "id">): Promise<PlayerModel> => {
  const newPlayer: PlayerModel = {
    ...playerData,
    id: dbPlayers.length + 1
  };
  dbPlayers.push(newPlayer);
  return newPlayer;
}

export const updatePlayer = async (
  id: number,
  playerData: Omit<PlayerModel, "id">
): Promise<PlayerModel | undefined> => {
  const playerIndex = dbPlayers.findIndex(player => player.id === id);

  if (playerIndex === -1) {
    return undefined;
  }

  const updatedPlayer: PlayerModel = { id, ...playerData };
  dbPlayers[playerIndex] = updatedPlayer;
  return updatedPlayer;
}

export const deletePlayer = async (id: number): Promise<PlayerModel | undefined> => {
  const playerIndex = dbPlayers.findIndex(player => player.id === id);

  if (playerIndex === -1) {
    return undefined;
  }

  const [deletedPlayer] = dbPlayers.splice(playerIndex, 1);
  return deletedPlayer;
}
