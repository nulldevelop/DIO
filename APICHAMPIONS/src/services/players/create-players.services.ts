import { successResponse } from "../../utils/http-helper.js";
import { createPlayer } from "../../repositories/players/player-repository.js";
import type { PlayerModel } from "../../models/player-model.js";

export type NewPlayerData = Omit<PlayerModel, "id">;

export const createPlayerService = async (playerData: NewPlayerData) => {
  const newPlayer = await createPlayer(playerData);
  return successResponse(newPlayer);
};
