import { getAllPlayers, getPlayerById } from "../../repositories/players/player-repository.js";
import { notFound, successResponse } from "../../utils/http-helper.js";

export const getPlayerService = async (): Promise<any> => {
  const data = await getAllPlayers()

  if (data.length === 0) {
    return notFound();
  }

  return successResponse(data);
};

export const getPlayerByIdService = async (id: string): Promise<any> => {
  const player = await getPlayerById(id);

  if (!player) {
    return notFound();
  }

  return successResponse(player);
};
