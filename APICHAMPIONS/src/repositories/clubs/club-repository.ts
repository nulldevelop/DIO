import { dbClubs } from "../../data/club-db.js";
import type { ClubModel } from "../../models/club-model.js";

export const getAllClubs = async (): Promise<ClubModel[]> => {
  return dbClubs;
};
