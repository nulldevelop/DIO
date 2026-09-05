import { notFound, successResponse } from "../../utils/http-helper.js";

export const getPlayerService = async (): Promise<any> => {
  const data = [
    { id: '1', name: 'Player One', team: 'Team A' },
    { id: '2', name: 'Player Two', team: 'Team B' },
    { id: '3', name: 'Player Three', team: 'Team C' },
  ];

  if (data.length === 0) {
    return notFound();
  }

  return successResponse(data);
};
