import axios from 'axios';
import { API_AQI_OUTDOOR } from '../config/api';

export const fetchAQIOutdoorAll = async () => {
  return axios.get(API_AQI_OUTDOOR); // axios จะ return data อยู่ใน res.data
};

export const fetchAQIOutdoorByStation = async (stationID: string) => {
  return axios.get(`${API_AQI_OUTDOOR}?stationID=${stationID}`);
};
