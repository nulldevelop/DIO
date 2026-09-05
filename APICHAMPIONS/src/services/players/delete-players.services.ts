import { deletePlayer } from "../../repositories/players/player-repository.js";
import { notFound, successResponse } from "../../utils/http-helper.js";

export const deletePlayerService = async (id: number) => {
  const deletedPlayer = await deletePlayer(id);

  if (!deletedPlayer) {
    return notFound();
  }

  return successResponse(deletedPlayer);
};
