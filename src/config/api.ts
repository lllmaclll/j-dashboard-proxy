import { config } from 'dotenv';
config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const API_AQI_OUTDOOR = process.env.PUBLIC_API_AQI_OUTDOOR!;
export const API_AQI_INDOOR= process.env.PUBLIC_API_AQI_INDOOR!;
