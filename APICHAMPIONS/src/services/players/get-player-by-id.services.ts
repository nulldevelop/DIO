export const getPlayersById = async (id: string) => {
  const players = [
    { id: '1', name: 'Player One', team: 'Team A' },
    { id: '2', name: 'Player Two', team: 'Team B' },
    { id: '3', name: 'Player Three', team: 'Team C' },
  ];

  return players.find(player => player.id === id) || null;
}
