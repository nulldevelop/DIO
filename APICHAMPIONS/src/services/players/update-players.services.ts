import { updatePlayer } from "../../repositories/players/player-repository.js";
import type { NewPlayerData } from "./create-players.services.js";
import { notFound, successResponse } from "../../utils/http-helper.js";

export const updatePlayerService = async (id: number, playerData: NewPlayerData) => {
  const updatedPlayer = await updatePlayer(id, playerData);

  if (!updatedPlayer) {
    return notFound();
  }

  return successResponse(updatedPlayer);
};
