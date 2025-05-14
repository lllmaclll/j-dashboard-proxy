import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { aqiIndoorRoute } from './routes/aqiIndoor.route';
import { aqiOutdoorRoute } from './routes/aqiOutdoor.route';

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(aqiOutdoorRoute)
  .use(aqiIndoorRoute)
  .listen(3001);

console.log(`🦊 Elysia proxy server running at http://${app.server?.hostname}:${app.server?.port}`);
