import fastify from 'fastify';
import cors from '@fastify/cors';
import { driverRoutes } from './routes/driver.routes';
import { teamRoutes } from './routes/team.routes';

export const app = fastify({ logger: true, exposeHeadRoutes: false });

app.register(cors, { methods: ['GET'] });
app.register(teamRoutes);
app.register(driverRoutes);
