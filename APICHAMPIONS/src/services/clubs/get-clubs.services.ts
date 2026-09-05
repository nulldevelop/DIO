import { getAllClubs } from "../../repositories/clubs/club-repository.js";
import { notFound, successResponse } from "../../utils/http-helper.js";

export const getClubsService = async () => {
  const clubs = await getAllClubs();

  if (clubs.length === 0) {
    return notFound();
  }

  return successResponse(clubs);
};
