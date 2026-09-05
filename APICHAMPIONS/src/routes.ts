import { Router } from 'express';
import { getPlayers, getPlayersById } from './controllers/players/players-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

router.get('/players', getPlayers);
router.get('/players/:id', getPlayersById);
