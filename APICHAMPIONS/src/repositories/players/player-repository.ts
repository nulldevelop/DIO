import type { PlayerModel } from "../../models/player-model.js";


export const dbPlayers: PlayerModel[] = [
  { id: '1', name: 'Player One', team: 'Team A' },
  { id: '2', name: 'Player Two', team: 'Team B' },
  { id: '3', name: 'Player Three', team: 'Team C' },
];


export const getAllPlayers = async (): Promise<PlayerModel[]> => {
  return dbPlayers;
}

export const getPlayerById = async (id: string): Promise<PlayerModel | null> => {
  const player = dbPlayers.find(player => player.id === id);
  return player || null;
}
