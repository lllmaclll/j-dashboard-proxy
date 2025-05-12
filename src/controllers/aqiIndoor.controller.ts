import { fetchAQIIndoor } from "../services/aqiIndoor.service";

export const getAQIIndoor = async () => {
  try {
    const res = await fetchAQIIndoor();
    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Failed to fetch AQI Room data', error);
    return new Response("Failed to fetch AQI Room data", { status: 500 });
  }
};
