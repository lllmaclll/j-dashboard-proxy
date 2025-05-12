import axios from 'axios';
import { API_AQI_INDOOR } from '../config/api';

export const fetchAQIIndoor = async () => {
  return axios.get(API_AQI_INDOOR);
};
