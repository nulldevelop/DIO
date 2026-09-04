import { FastifyInstance } from 'fastify';
import { teams } from '../data/teams';

export async function teamRoutes(app: FastifyInstance) {
  app.get('/teams', async (_req, res) => {
    res.type('application/json').code(200);
    return { teams };
  });

  app.get('/teams/:id', async (req, res) => {
    const { id } = req.params as { id: string };
    const team = teams.find((item) => item.id === parseInt(id));

    if (!team) {
      res.type('application/json').code(404);
      return { error: 'Team not found' };
    }

    res.type('application/json').code(200);
    return { team };
  });
}
