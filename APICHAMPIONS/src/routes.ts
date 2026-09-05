import { Router } from 'express';
import * as PlayerController from './controllers/players/players-controller.js';
import * as ClubController from './controllers/clubs/clubs-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

// Player routes
router.get('/players', PlayerController.getPlayers);
router.post('/players', PlayerController.createPlayer);
router.put('/players/:id', PlayerController.updatePlayer);
router.delete('/players/:id', PlayerController.deletePlayer);
router.get('/players/:id', PlayerController.getPlayerById);

// Club routes
router.get('/clubs', ClubController.getClubs);
