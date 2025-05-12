import { Elysia } from 'elysia';
import { getAQIIndoor } from '../controllers/aqiIndoor.controller';

export const aqiIndoorRoute = new Elysia()
  .get('/api/aqi/indoor', getAQIIndoor);
