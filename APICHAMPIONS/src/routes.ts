import { Router } from 'express';
import * as PlayerController from './controllers/players/players-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

// Player routes
router.get('/players', PlayerController.getPlayers);
router.get('/players/:id', PlayerController.getPlayerById);
