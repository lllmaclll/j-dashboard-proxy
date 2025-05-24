import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { logger } from '@bogeychan/elysia-logger';
import { aqiIndoorRoute } from './routes/aqiIndoor.route';
import { aqiOutdoorRoute } from './routes/aqiOutdoor.route';

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(
    logger({
      level: 'info',   // ตั้งระดับ log เป็น info (จะเก็บ info ขึ้นไป เช่น warn, error)
      autoLogging: true, // log อัตโนมัติเมื่อมี request และ response
    })
  )
  .use(aqiOutdoorRoute)
  .use(aqiIndoorRoute)
  .listen(3001);

console.log(`🦊 Elysia proxy server running at http://${app.server?.hostname}:${app.server?.port}`);
