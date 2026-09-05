import { Router } from 'express';
import { getPlayers } from '../controllers/players-controller.js';

export const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

router.get('/players', getPlayers);
