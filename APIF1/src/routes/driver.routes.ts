import { FastifyInstance } from 'fastify';
import { drivers } from '../data/drivers';

export async function driverRoutes(app: FastifyInstance) {
  app.get('/drivers', async (_req, res) => {
    res.type('application/json').code(200);
    return { drivers };
  });

  app.get('/drivers/:id', async (req, res) => {
    const { id } = req.params as { id: string };
    const driver = drivers.find((item) => item.id === parseInt(id));

    if (!driver) {
      res.type('application/json').code(404);
      return { error: 'Driver not found' };
    }

    res.type('application/json').code(200);
    return { driver };
  });
}
