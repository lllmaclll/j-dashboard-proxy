import { Elysia, t } from 'elysia';
import { getAQIOutdoor } from '../controllers/aqiOutdoor.controller';

export const aqiOutdoorRoute = new Elysia()
  .get('/api/aqi/outdoor',  getAQIOutdoor, {
    query: t.Object({
      stationID: t.Optional(t.String())
    })
  })
